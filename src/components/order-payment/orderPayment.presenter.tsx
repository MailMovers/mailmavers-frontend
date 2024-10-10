import React from 'react';
import { OrderPaymentProps } from './types';
import { Container, Button, Input, Section, SubSection, Title, Label, Value, Checkbox, Select } from './styles';

const OrderPaymentPresenter: React.FC<OrderPaymentProps> = ({ /* props */ }) => {
  return (
    <Container>
      {/* 구매자 정보 */}
      <Section>
        <Title>보낸 사람</Title>
        <SubSection>
          <Label>이름</Label>
          <Value>라현동</Value>
        </SubSection>
        <SubSection>
          <Label>이메일</Label>
          <Value>raheodhs12@gmail.com</Value>
        </SubSection>
        <SubSection>
          <Label>휴대전화</Label>
          <Value>010-4905-6827</Value>
        </SubSection>
      </Section>

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
          <Label>상세주소</Label>
          <Input placeholder="주소를 입력하세요" />
        </SubSection>
      </Section>

      {/* 배송 정보 */}
      <Section>
        <Title>배송 정보 <span style={{color: 'red', fontSize: '14px', marginLeft: '50px'}}>(익일특급, 등기선택시 연락처 필수입력)</span></Title>
        <SubSection>
          <Label>배송 옵션</Label>
          <Select>
            <option>익일특급 (4000원)</option>
            <option>등기 (3000원)</option>
            <option>일반우표 (1000원)</option>
          </Select>
        </SubSection>
        <SubSection>
        <Label>상품</Label>
        <Value>기본편지지</Value>
        </SubSection>
        <SubSection>
          <Label>배송시 요청사항</Label>
          <Input placeholder="요청사항을 입력하세요" />
        </SubSection>
      </Section>

      {/* 결제 정보 */}
      <Section>
        <Title>결제정보</Title>
        <SubSection>
          <Label>상품명</Label>
          <Value>일반편지지</Value>
        </SubSection>
        <SubSection>
          <Label>내용확인</Label>
          <Value>어쩌구 저쩌구 쏼라쏠라....</Value>
        </SubSection>
        <SubSection>
          <Label>편지지 추가</Label>
          <Value>300원 X 2</Value>
          <span>기본편지 3장 이후 최대 2장추가 가능 1장 300 +</span>
        </SubSection>
        <SubSection>
          <Label>사진 추가</Label>
          <Value>500원 X 3</Value>
          <span>사진추가 최대 10장 1장 500원 +</span>
        </SubSection>
        <SubSection>
          <Label>총 상품가격</Label>
          <Value>4,650원</Value>
        </SubSection>
        <SubSection>
          <Label>즉시할인</Label>
          <Value>-240원</Value>
        </SubSection>
        <SubSection>
          <Label>할인쿠폰</Label>
          <Value>0원</Value>
        </SubSection>
        <SubSection>
          <Label>적립금 사용</Label>
          <Value>0원</Value>
        </SubSection>
        <SubSection>
          <Label>총 결제금액</Label>
          <Value>4,410원</Value>
        </SubSection>
        <SubSection>
          <Label>결제방법</Label>
          <Select>
            <option>카카오페이</option>
            <option>신용/체크카드</option>
            <option>계좌이체</option>
            <option>무통장입금(가상계좌)</option>
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