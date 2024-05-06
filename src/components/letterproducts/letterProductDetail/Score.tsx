'use client';
/** @jsxImportSource @emotion/react */

export type ScoreProps = {
  src: string;
};

const Score = ({ src }: ScoreProps) => {
  return (
    <>
      {[...Array(5)].map((_, index) => (
        <span key={index}>
          <img src={src} alt={`별점 ${index + 1}`} />
        </span>
      ))}
    </>
  );
};

export default Score;
