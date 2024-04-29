export const isSelectPage = (pathname: string) => /\/letter\/select\/\d+$/.test(pathname);
export const isEditPage = (pathname: string) => /\/letter\/edit\/\d+\/\d+(\/\d+)?$/.test(pathname);
export const isPhotoSelectPage = (pathname: string) => /\/letter\/photo-select\/\d+$/.test(pathname);
export const isSendPage = (pathname: string) => /\/letter\/send\/\d+$/.test(pathname);
export const isConfirmPage = (pathname: string) => /\/letter\/confirm\/\d+$/.test(pathname);
export const isPaymentPage = (pathname: string) => pathname === '/letter/payment';
