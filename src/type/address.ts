export type TReceiveInfo = {
  id: string;
  delivery_address_detail: string;
  delivery_address: string;
  delivery_phone: string;
  delivery_name: string;
  deleted_at: null | string;
  post_code?: string;
};

export type TSendInfo = {
  id: string;
  send_address_detail: string; // '222-2';
  send_address: string; //  '서울특별시 강남구 청담동';
  send_phone: string; //  '010-0000-0000';
  send_name: string; //  '김동언';
  deleted_at: null | string;
  post_code?: string;
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
