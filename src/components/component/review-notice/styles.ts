import styled from "@emotion/styled";

export const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    margin-top: 70px;
    margin-bottom: 70px;
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media (max-width: 768px){
        width: 100%;
        max-width: 768px;
        margin-top: 60px;
        height: 100%;
        flex-direction: column;
    }
`;
