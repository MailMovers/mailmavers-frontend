import { useRecoilValue } from 'recoil';
import { Spin } from 'antd';
import styled from '@emotion/styled';

type TProps = {
  spinning: boolean;
  tip?: string;
};
const Loading = ({ spinning, tip }: TProps) => {
  if (spinning) {
    return (
      <Wrap>
        <Spin size="large" tip="로딩 중입니다..." spinning={spinning} />
      </Wrap>
    );
  }
};

export default Loading;

const Wrap = styled.div`
  position: fixed;

  width: 100%;
  height: 100%;

  top: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 9999;

  background: rgba(0, 0, 0, 0.8);
`;
