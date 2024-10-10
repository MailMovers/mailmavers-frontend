export const mockPaymentData = {
    senderInfo: {
        name: "라현동",
        phone: "010-4905-6827",
    },
    paymentInfo: {
        padPrice: "1500", // string 형태를 숫자로 변환해야 함
        productName: "일반편지지",
        productDetails: "일단은 아무내용..........",
        addPadCount: {
            itemName: "편지지 추가",
            price: 300,
            quantity: 2,
        },
        addPhotoCount: {
            itemName: "사진 추가",
            price: 500,
            quantity: 3,
        },
    },
};
