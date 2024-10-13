export const emailRegex = /^[a-zA-Z0-9!@#%^&*-_+=]+@[a-zA-Z0-9.-]+$/;

export const passwordRegex =
  /^(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-={}|;':",.<>/?~`])[A-Za-z\d!@#$%^&*()_+\-={}|;':",.<>/?~`]{8,}$/;

export const nameRegex = /^[a-zA-Z가-힣]{2,}$/;
export const numberRegex = /^01[01]\d{3,4}\d{4}$/;
export const numberRegexWithHyphen = /^01[01]-\d{3,4}-\d{4}$/;

// 천원단위 콤마 추가
export const addComma = (price: number) => {
  let returnString = price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return returnString;
};
