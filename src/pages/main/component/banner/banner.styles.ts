import styled from "@emotion/styled";

export const Container = styled.div`
  width: 1200px;
  height: 460px;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;  

export const BannerWrapper = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-image: url(${'/images/main_img.png'});
`;


