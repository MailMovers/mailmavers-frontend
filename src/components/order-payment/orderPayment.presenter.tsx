import React, { useState, useMemo } from 'react';
import { OrderPaymentProps } from './types';
import { Container, Button, Input, Section, SubSection, Title, Label, Value, Checkbox, Select, Error, SendAddressForm, AddressButton } from './styles';
import { mockPaymentData } from './mocks';
import AddressModalContainer from './addressFormModal/container';
import AddressListContainer from './addressFormModal/list/container';

const OrderPaymentPresenter: React.FC<OrderPaymentProps> = ({ /* props */ }) => {
    const { paymentInfo, senderInfo } = mockPaymentData;
    const [selectedStampPrice, setSelectedStampPrice] = useState<number>(0);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [isListModalOpen, setIsListModalOpen] = useState<boolean>(false);
    const [address, setAddress] = useState<string>(senderInfo.address || '');
    const [addressDetail, setAddressDetail] = useState<string>('');
    const [selectedRequest, setSelectedRequest] = useState<string>('');

    const handleStampChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        const price = parseInt(value.match(/\d+/)?.[0] || '0', 10);
        setSelectedStampPrice(price);
    };

    const handleSaveAddress = (fullAddress: string, detail: string) => {
        setAddress(fullAddress);
        setAddressDetail(detail);
        setIsModalOpen(false);
    };

    const handleSelectAddress = (fullAddress: string, request: string) => {
        setAddress(fullAddress);
        setSelectedRequest(request);
        setIsListModalOpen(false);
    };

    const totalAmount = useMemo(() => {
        if (!paymentInfo) {
            return 0;
        }

        // 기본 가격
        const padPrice = typeof paymentInfo.padPrice === 'string' ? parseInt(paymentInfo.padPrice, 10) : 0;

        // 편지지 추가 가격 계산
        const addPadPrice = paymentInfo.addPadCount ? paymentInfo.addPadCount.price * paymentInfo.addPadCount.quantity : 0;

        // 사진 추가 가격 계산
        const addPhotoPrice = paymentInfo.addPhotoCount ? paymentInfo.addPhotoCount.price * paymentInfo.addPhotoCount.quantity : 0;

        // 선택한 우표 가격
        const stampPrice = typeof selectedStampPrice === 'number' ? selectedStampPrice : 0;

        // 총합 계산
        return padPrice + addPadPrice + addPhotoPrice + stampPrice;
    }, [paymentInfo, selectedStampPrice]);

    return (
        <Container>
            {/* 구매자 정보 */}
            <Section>
                <Title>
                    보낸 사람
                    <AddressButton>기본주소</AddressButton>
                    <AddressButton onClick={() => setIsListModalOpen(true)}>주소변경</AddressButton>
                </Title>
                <SubSection>
                    <Label>이름</Label>
                    <Value>{senderInfo.name}</Value>
                </SubSection>
                <SubSection>
                    <Label>휴대전화</Label>
                    <Value>{senderInfo.phone}</Value>
                </SubSection>
                <SendAddressForm>
                    <Label>주소</Label>
                    {address ? (
                        <Value>{`${address} ${addressDetail}`.trim()}</Value>
                    ) : (
                        <Input
                            placeholder="주소를 입력하세요"
                            onClick={() => setIsModalOpen(true)}
                        />
                    )}
                </SendAddressForm>
                <SubSection>
                    <Label>배송 요청 사항</Label>
                    <Select
                        value={selectedRequest}
                        onChange={(e) => setSelectedRequest(e.target.value)}
                    >
                        <option value="">요청사항을 선택해주세요</option>
                        <option value="부재시 반송">부재시 반송부탁드립니다.</option>
                        <option value="반송안함">부재시 반송받지않겠습니다.</option>
                        <option value="배송전 연락">배송전 연락바랍니다.</option>
                        <option value="문앞">문 앞에 놓아 주세요.</option>
                        <option value="경비실">경비실에 맡겨 주세요.</option>
                    </Select>
                </SubSection>
            </Section>

            {/* 주소 입력 모달 */}
            <AddressModalContainer
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSave={(fullAddress, detail) => handleSaveAddress(fullAddress, detail)}
            />

            {/* 주소 리스트 모달 */}
            <AddressListContainer
                isOpen={isListModalOpen}
                onClose={() => setIsListModalOpen(false)}
                onSelect={(fullAddress, request) => handleSelectAddress(fullAddress, request)}
            />

            {/* 받는사람 정보 */}
            <Section>
                <Title>받는사람정보</Title>
                <SubSection>
                    <Label>이름</Label>
                    <Input placeholder="받는사람 이름을 입력하세요" />
                </SubSection>
                <SubSection>
                    <Label>휴대전화</Label>
                    <Input placeholder="휴대전화 번호를 입력하세요" />
                </SubSection>
                <SubSection>
                    <Label>주소</Label>
                    <Input placeholder="주소를 입력하세요" />
                </SubSection>
                <SubSection>
                    <Label>배송 요청 사항</Label>
                    <Input placeholder="상세주소를 입력하세요" />
                </SubSection>
            </Section>

            {/* 배송 정보 */}
            <Section>
                <Title>
                    우표 선택{' '}
                    <span style={{ color: 'red', fontSize: '14px', marginLeft: '50px' }}>
                        (익일특급, 등기선택시 연락처 필수입력 없을시 "반송"됩니다.)
                    </span>
                </Title>
                <SubSection>
                    <Label>우표 옵션</Label>
                    <Select onChange={handleStampChange}>
                        <option id="1">우표를 선택해주세요</option>
                        <option>익일특급 (4000원) 1일후 도착 배송알림 가능</option>
                        <option>일반등기 (3000원) 2~3일후 도착 배송알림 가능</option>
                        <option>일반우표 (1000원) 2~3일후 도착 배송알림 불가능</option>
                    </Select>
                </SubSection>
            </Section>

            {/* 결제 정보 */}
            <Section>
                <Title>결제정보</Title>
                <SubSection>
                    <Label>상품명</Label>
                    <Value>{paymentInfo.productName}</Value>
                </SubSection>
                <SubSection>
                    <Label>내용확인</Label>
                    <Value>{paymentInfo.productDetails}</Value>
                </SubSection>
                <SubSection>
                    <Label>기본 가격</Label>
                    <Value>{`${parseInt(paymentInfo.padPrice, 10).toLocaleString()}원`}</Value>
                </SubSection>
                <SubSection>
                    <Label>{paymentInfo.addPadCount.itemName}</Label>
                    <Value>{`${(paymentInfo.addPadCount.price * paymentInfo.addPadCount.quantity).toLocaleString()}원`}</Value>
                    <span>기본편지 3장 이후 최대 2장추가 가능 1장 300원 +</span>
                </SubSection>
                <SubSection>
                    <Label>{paymentInfo.addPhotoCount.itemName}</Label>
                    <Value>{`${(paymentInfo.addPhotoCount.price * paymentInfo.addPhotoCount.quantity).toLocaleString()}원`}</Value>
                    <span>사진추가 최대 10장 1장 500원 +</span>
                </SubSection>
                <SubSection>
                    <Label>우표</Label>
                    <Value>{`${selectedStampPrice.toLocaleString()}원`}</Value>
                    {selectedStampPrice === 0 && (
                        <Error style={{ color: 'red', marginTop: '5px' }}>우표는 필수선택입니다.</Error>
                    )}
                </SubSection>
                <SubSection>
                    <Label>총 상품가격</Label>
                    <Value>{`${totalAmount.toLocaleString()}원`}</Value>
                </SubSection>
                <SubSection>
                    <Label>결제방법</Label>
                    <Select>
                        <option>토스결제</option>
                        <option>카카오페이 (준비중)</option>
                    </Select>
                </SubSection>
            </Section>

            {/* 현금영수증 */}
            <Section>
                <Title>현금영수증</Title>
                <SubSection>
                    <Checkbox type="checkbox" />
                    <Label>현금영수증 신청</Label>
                </SubSection>
            </Section>

            {/* 결제 버튼 */}
            <Button>결제하기</Button>
        </Container>
    );
};

export default OrderPaymentPresenter;
