import { useSearchParams } from 'next/navigation';
import { Container, ErrorReason, NextButton, Wrap } from './Fail.styles';
import { useRouter } from 'next/navigation';

const Fail = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const message = searchParams.get('message');

  const goToMainpage = () => {
    router.push('/');
  };

  return (
    <div css={Wrap}>
      <div css={Container}>
        <h1>결제 실패</h1>
        <p>CS센터로 문의주시기 바랍니다.</p>
        <p css={ErrorReason}>실패사유: {message}</p>
        <button css={NextButton} onClick={goToMainpage}>
          메인페이지로 이동
        </button>
      </div>
    </div>
  );
};

export default Fail;
