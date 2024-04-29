/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

type Props = {
  text: string;
  onClick: () => void;
  red?: boolean;
  disabled?: boolean;
};

export default function Button({
  text,
  onClick,
  red,
  disabled = false,
}: Props) {
  return (
    <div css={emailDuplicationCheck}>
      <button onClick={() => onClick()} disabled={disabled}>
        {text}
      </button>
    </div>
  );
}
export const emailDuplicationCheck = css`
  margin-bottom: 30px;
  padding-top: 2px;
  button {
    margin-top: 10px;
    width: 100%;
    height: 50px;
    padding: 0px;
    background: rgb(247, 248, 250);
    color: rgb(194, 200, 204);
    border: 1px solid transparent;
    border-color: rgb(218, 220, 224);
    border-radius: 4px;
    cursor: pointer;
  }
`;
