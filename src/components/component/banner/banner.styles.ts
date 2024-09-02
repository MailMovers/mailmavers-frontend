import styled from "@emotion/styled";

export const Container = styled.div`
  width: 1200px;
  height: 500px;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url('/images/main.banner.txt');
  background-size: cover;
  background-position: center;


  @media (max-width: 768px) {
    width: 100%;
    padding: 20px;
  }

`;  

export const BannerWrapper = styled.div`
  width: 100%;
  height: 100%;
  @media (max-width: 768px) {
    width: 100%;
    padding: 20px;
  background-size: cover;
  background-position: center;
  
  }
`;

