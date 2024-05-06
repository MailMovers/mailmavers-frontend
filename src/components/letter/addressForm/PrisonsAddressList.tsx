import { css } from '@emotion/react';
import useSWR from 'swr';
import { useRecoilState, useRecoilValue } from 'recoil';
import { selectedReceiverAddressDataState, selectedSenderAddressDataState } from '@/recoil/selectAddress/atom';
import { tokenAtom } from '@/recoil/auth/atom';
import { getAddress, getAddressNurserySchools, getAddressPrisons } from '@/api/letter';
import { Address, NurserySchools } from '@/type/address';
import { Common } from 'styles/common';

const PrisonsAddressList = (props: { clickModal: any }) => {
  const { clickModal } = props;

  const token = useRecoilValue(tokenAtom);

  const url = `${process.env.NEXT_PUBLIC_API_HOST}letter/prisons`;

  if (!token || !token.accessToken) {
    alert('다시 로그인 해주세요.');
    return;
  }
  const { data } = useSWR<NurserySchools[]>(url, getAddressPrisons);

  const [selectedReceiverData, setSelectedReceiverData] = useRecoilState(selectedReceiverAddressDataState);

  const handleSelect = (list: NurserySchools) => {
    setSelectedReceiverData({
      receiverZonecode: list.postCode || '',
      receiverAddress: list.deliveryAddress || '',
      receiverAddressDetail: list.name || '',
      receiverName: '',
      receiverPhone: list.deliveryAddressDetail,
    });
  };

  return (
    <div css={ModalWrapper} onClick={clickModal}>
      <div css={Modal}>
        <div css={Contents}>
          <p css={Desc}>보낼 주소를 선택해 주세요.</p>
          <div>
            {data?.map((list: NurserySchools) => (
              <div key={list.id} css={AddressListStyle} onClick={() => handleSelect(list)}>
                <p css={AddressArea}>
                  <p>
                    {list.name} <span css={Phone}>{list.deliveryAddressDetail}</span>
                  </p>
                  {list.postCode} {list.deliveryAddress}{' '}
                </p>
              </div>
            ))}
          </div>
        </div>
        <button type="button" css={CloseBtn} onClick={clickModal}>
          창닫기
        </button>
      </div>
    </div>
  );
};

export default PrisonsAddressList;

const ModalWrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  padding: 0 20px;
  z-index: 999;
`;

const Modal = css`
  width: 500px;
  display: flex;
  flex-direction: column;
`;

const Contents = css`
  width: 100%;
  height: 400px;
  border-radius: 5px;
  overflow-y: auto;
  background-color: ${Common.colors.white};
  padding: 20px;
  font-size: ${Common.fontSize.fs14};

  &::-webkit-scrollbar {
    display: none;
  }

  scrollbar-width: none;

  @media all and (max-width: 480px) {
    width: calc(100vw - 40px);
    margin: 0 auto;
  }
`;

const Desc = css`
  color: ${Common.colors.theme};
  margin-bottom: 20px;
  font-weight: 600;
`;

const AddressListStyle = css`
  padding: 15px 10px;
  background-color: ${Common.colors.gray04};
  border-radius: 5px;
  margin: 10px 0;
  color: ${Common.colors.gray};
  cursor: pointer;
  &:hover {
    background-color: ${Common.colors.yellowgreen};
    border: none;
  }
`;

const AddressArea = css`
  margin-bottom: 5px;
`;

const Phone = css`
  margin-left: 10px;
`;

const CloseBtn = css`
  width: 100%;
  height: 50px;
  font-size: ${Common.fontSize.fs14};
  background-color: ${Common.colors.gray01};
  border: none;
  color: ${Common.colors.white};
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;

  @media all and (max-width: 480px) {
    width: calc(100vw - 40px);
    margin: 10px auto 0;
  }
`;
