export const mockPaymentData = {
    senderInfo: {
        name: '라현동',
        phone: '010-4905-6827',
        address: '경기도 광주시 초월읍 도곡안길 30-8',
    },
    paymentInfo: {
        padPrice: "1500",
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
    addressList: [
        {
            id: 1,
            name: '김동연',
            phone: '010-4905-6827',
            address: '경기도 광주시 초월읍 도곡안길 30-8',
            detail: '201호',
            request: '문 앞',
        },
        {
            id: 2,
            name: '김씨',
            phone: '010-4905-6927',
            address: '경기도 파주시 문산읍 문산리 128-4 아구탕아구찜전문',
            detail: '201호',
            request: '직접 받고 부재 시 문 앞',
        },
    ],
};
