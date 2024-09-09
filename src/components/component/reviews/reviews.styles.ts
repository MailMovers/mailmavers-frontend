import styled from "@emotion/styled";
import { Common } from '../../../styles/common';





export const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    margin-top: 70px;
    margin-bottom: 100px;
    text-align: center;
    display: flex;
    flex-direction: row;

    @media (max-width: 768px){
        width: 100%;
        max-width: 768px;
        margin-top: 60px;
        height: 100%;
        flex-direction: column;
    }
`;

export const ReviewContainer = styled.div`
    width: 50%;
    height: 100%;
    @media (max-width: 768px){
        width: 100%;
    }

`

export const TitleWrapper = styled.div`
    width: 100%;
    display: flex;
    margin-bottom: 10px;
    flex-direction: row;
    @media (max-width: 768px){
        width: 100%;
    }

`

export const SubTitle = styled.h4`
    font-size: 20px;
    font-weight: 600;
    color: pink;
    padding-top: 6px;
    padding-left: 3px;
    @media (max-width: 768px){
        padding-top: 6px;
        padding-left: 3px;
        font-size: 12px;
    }
`

export const Title = styled.h2`
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 10px;
    color: ${Common.colors.gray};
    display: flex;


    @media (max-width: 768px){
        padding-left: 10px;
        margin-bottom: 0px;
        font-size: 18px;
    }
`;

export const ReviewList = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 768px){
        width: 100%;
    }
`;

export const ReviewCard = styled.div`
    width: 100%;
    height: 100%;
    padding: 20px;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    text-align: left;
    display: flex;

    @media (max-width: 768px){
        padding: 10px;
        height: 100%;
        width: 100%;
    }
`;

export const ImageWrapper = styled.div`
    width: 250px;
    height: 200px;
    overflow: hidden;
    @media (max-width: 768px){
        width: 100%;
        height: 180px;
    }
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    @media (max-width: 768px){
        width: 100%;
    }
`;

export const TextWrapper = styled.div`
        padding: 20px;

    @media (max-width: 768px){
        width: 100%;
        font-size: 12px;
        padding: 30px;

    }
`;

export const ProductName = styled.h3`
    font-size: 16px;
    margin: 0 0 8px 0;
    color: #333;
`;

export const UserInfo = styled.div`
    font-size: 14px;
    color: #999;
    margin-bottom: 8px;
`;

export const Description = styled.p`
    font-size: 14px;
    color: #666;
    margin: 0;
    padding-bottom: 10px;

    @media (max-width: 768px){
        width: 100%;
        text-align: start;
    }
`;