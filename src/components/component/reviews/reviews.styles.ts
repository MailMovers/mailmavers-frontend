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
    }
`;

export const ReviewContainer = styled.div`
    width: 50%;

`

export const Title = styled.h2`
    font-size: 24px;
    margin-bottom: 10px;
    font-weight: 600;
    color: ${Common.colors.gray01};
    display: flex;
    padding: 10px;

    @media (max-width: 768px){
        padding: 10px;
        margin-bottom: 10px;
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
    width: 550px;
    height: 450px;
    padding: 20px;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    text-align: left;
    @media (max-width: 768px){
        padding: 10px;
        height: 400px;
    }
`;

export const ImageWrapper = styled.div`
    width: 100%;
    height: 250px;
    overflow: hidden;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const TextWrapper = styled.div`
    padding: 16px;
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
`;

