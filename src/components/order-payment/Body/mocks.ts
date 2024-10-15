export const mockPaymentData = {
    senderInfo: {
        name: '라현동',
        phone: '010-4905-6827',
        address: '경기도 광주시 초월읍 도곡안길 30-8',
    },
    deliveryInfo: {
        name: '이아무개',
        phone: '010-4905-0000',
        address: '서울특별시 아무개 아무동',
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
            name: '김동동',
            phone: '010-8888-8827',
            address: '경기도 광주시 대곡리 2길 38',
            detail: '201호',
            request: '문 앞',
        },
        {
            id: 2,
            name: '김씨',
            phone: '010-8888-6977',
            address: '경기도 파주시 문산읍 문산리 128-4 아구탕아구찜전문',
            detail: '201호',
            request: '직접 받고 부재 시 문 앞',
        },
    ],
    deliveryAddressList: [
        {
            
                id: 1,
                name: '김김김',
                phone: '010-4905-6827',
                address: '서울시 아무구 아무동 33-8',
                detail: '201호',
            },
            {
                id: 1,
                name: '연연연',
                phone: '010-4905-6827',
                address: '경기도 읍읍읍 길길길길 30-8',
                detail: '201호',
            },
    ]
};
