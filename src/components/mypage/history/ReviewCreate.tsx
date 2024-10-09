'use client';

import { useState } from 'react';
import useSWRMutation from 'swr/mutation';

import { Body, Header, Wrap, ScoreWrap, ScoreContent, ScoreImage, Bottom, ButtonContainer } from './ReviewCraete.style';
import { TPostReviewParam, postReview } from '@/api/mypage';
import { TMyLetter } from '@/type/mypage';

type TProps = {
  letter: TMyLetter;
  close: () => void;
  callback: () => void;
};
const ReviewCreate = ({ letter, close, callback }: TProps) => {
  const [score, setScore] = useState<number>(0);
  const [content, setContent] = useState('');

  const onClickScore = (scoreData: number) => setScore(scoreData);

  const { trigger } = useSWRMutation('/product/productId', postReview, {
    onSuccess: (res) => {
      callback();
    },
    onError: (e) => {
      alert('리뷰 작성에 실패했습니다. 다시 시도해주세요.')
    },
  });

  const onSubmit = () => {
    if (!content) {
      alert('내용을 작성해주세요.');
      return;
    }
    if (!score) {
      alert('점수를 선택해주세요.');
      return;
    }

    const param: TPostReviewParam = {
      productId: letter.writingPadId,
      letterId: letter.letterId,
      score,
      content,
    };
    trigger(param);
  };

  return (
    <Wrap>
      <Header>
        <span>후기 작성</span>
      </Header>

      <Body>
        <textarea placeholder="후기를 작성해주세요." value={content} onChange={(e) => setContent(e.target.value)} />
        <ScoreWrap>
          <span>점수 :</span>

          <ScoreContent>
            {[...Array(5)].map((_, index) => (
              <span className="icon" key={index}>
                <ScoreImage
                  onClick={() => onClickScore(index + 1)}
                  src={index + 1 <= score ? '/icon/star_filled.svg' : '/icon/star.svg'}
                  alt={`별점 ${index + 1}`}
                  width={10}
                  height={10}
                />
              </span>
            ))}
          </ScoreContent>
        </ScoreWrap>
      </Body>

      <Bottom>
        <ButtonContainer>
          <button className="cancel" onClick={close}>
            취소
          </button>
          <button className="submit" onClick={onSubmit}>
            확인
          </button>
        </ButtonContainer>
      </Bottom>
    </Wrap>
  );
};

export default ReviewCreate;
