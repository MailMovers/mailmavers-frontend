export type TReceiveInfo = {
  id: number;
  userId: string;
  deliveryAddress: string;
  deliveryAddressDetail: string;
  deliveryPhone: string;
  deliveryName: string;
  deliveryPostCode: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
};

export type TSendInfo = {
  id: number;
  userId: string;
  sendAddress: string;
  sendAddressDetail: string;
  sendPhone: string;
  sendName: string;
  sendPostCode: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
};

export type NurserySchools = {
  id: string;
  name: string;
  deliveryAddress: string;
  deliveryAddressDetail: string;
  postCode?: string;
};

type OmittedSendInfo = Omit<TSendInfo, 'deleted_at'>;
type OmittedReceiveInfo = Omit<TReceiveInfo, 'deleted_at'>;
export type Address = OmittedSendInfo & OmittedReceiveInfo;
