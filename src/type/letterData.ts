import { MouseEventHandler } from 'react';

export type PadData = {
  pad_img_url: string;
};

export type LetterContent = {
  pageNum: number;
  content: string;
};

export type TempLetterData = {
  find(arg0: (content: any) => boolean): unknown;
  letterId: number;
  writingPadId: number;
  contents: LetterContent[];
  productPic: string;
};

export type Photos = {
  photoUrl: string;
};

export type AddressData = {
  stampId: number | null;
  letterId: number;
  deliveryPostCode: string;
  deliveryAddress: string;
  deliveryAddressDetail: string;
  deliveryPhone: string;
  deliveryName: string;
  sendPostCode: string;
  sendAddress: string;
  sendAddressDetail: string;
  sendPhone: string;
  sendName: string;
};

export type ConfirmLetterData = {
  letterId: number;
  writingPadId: number;
  writingPadImgUrl: string;
  contents: LetterContent[];
  photoCount: number;
  photos: Photos[];
  stampId: number;
  point: number;
  deliveryPostCode: string;
  deliveryAddress: string;
  deliveryAddressDetail: string;
  deliveryPhone: string;
  deliveryName: string;
  sendPostCode: string;
  sendAddress: string;
  sendAddressDetail: string;
  sendPhone: string;
  sendName: string;
  totalCost: number;
};

export type PhotoData = {
  letterId: number | string;
  insertNames: string[];
};

export type AlertModal = {
  clickModal: any;
  submitPayment: MouseEventHandler<HTMLButtonElement> | undefined;
};

export type ClearedPointData = {
  usePoint: number;
  letterId: string | null;
  orderId: string | null;
};
