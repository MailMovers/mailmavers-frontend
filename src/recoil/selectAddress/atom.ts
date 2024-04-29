import { atom } from 'recoil';

export const selectedSenderAddressDataState = atom({
  key: 'selectedSenderAddressData',
  default: {
    senderAddress: '',
    senderAddressDetail: '',
    senderName: '',
    senderPhone: '',
    senderZonecode: '',
  },
});

export const selectedReceiverAddressDataState = atom({
  key: 'selectedReceiverAddressData',
  default: {
    receiverAddress: '',
    receiverAddressDetail: '',
    receiverName: '',
    receiverPhone: '',
    receiverZonecode: '',
  },
});

export const selectedStampDataState = atom<{ id: number | null }>({
  key: 'selectedStamp',
  default: {
    id: null,
  },
});
