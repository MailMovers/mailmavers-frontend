import { TCsListResult } from "@/api/mypage";
import { TUserInfo } from "@/type/auth";
import { TCsInfo } from "@/type/mypage";

export interface IInquiryProps {
    userInfo: TUserInfo | null;
    data: TCsListResult | undefined;
    page: string;
    setPage: (page: string) => void;
    openInquire: boolean;
    setOpenInquire: (openInquire: boolean) => void;
    selectCs: TCsInfo | null;
    setSelectCs: (selectCs: TCsInfo | null) => void;
    refetch: () => void;
}
