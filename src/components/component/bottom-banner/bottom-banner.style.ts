import styled from "@emotion/styled";

export const Container = styled.div`
  width: 1200px;
  height: 230px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  background-image: url('/images/bottom.SVG.png');
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  margin-bottom: 100px;

  @media (max-width: 768px) {
    width: 100%;
    height: 170px;
    margin-bottom: 0px;
  }
`