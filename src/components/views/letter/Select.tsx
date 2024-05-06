/** @jsxImportSource @emotion/react */

import { useRouter } from 'next/navigation';
import LetterHeader from '@/components/letter/LetterHeader';
import useSWR from 'swr';
import { PadData } from '@/type/letterData';
import { getPadData } from '@/api/letter';
import { Container, Wrap, letter, selectedLetter } from './Select.styles';
import LetterBottom from '@/components/letter/LetterBottom';
import { letterWritingPadIdState } from '@/recoil/letter/atom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useEffect } from 'react';
import { tokenAtom } from '@/recoil/auth/atom';

const Select = ({ params }: { params: { writingPadId: string } }) => {
  const router = useRouter();
  const [_, setLetterWritingId] = useRecoilState(letterWritingPadIdState);
  const token = useRecoilValue(tokenAtom);
  const writingPadId = parseInt(params.writingPadId);

  const { data: letterData } = useSWR<PadData[]>(
    `product/writing/${writingPadId}`,
    getPadData,
    {
      fallbackData: [],
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  useEffect(() => {
    if (!token) {
      router.push('/login');
    }
  }, []);

  useEffect(() => {
    setLetterWritingId(writingPadId);
  }, [writingPadId]);

  const onClickHandler = () => {
    router.push(`/letter/edit/${writingPadId}/1`);
  };

  return (
    <>
      <LetterHeader />
      <div css={Wrap}>
        <div css={Container}>
          <div css={selectedLetter}>
            {letterData &&
              letterData.map((pad) => (
                <img
                  css={letter}
                  src={pad.pad_img_url}
                  alt='편지지 이미지'
                  onClick={() => onClickHandler()}
                />
              ))}
          </div>
        </div>
      </div>
      <LetterBottom goToWrite={onClickHandler} />
    </>
  );
};

export default Select;
