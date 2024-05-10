/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const fontSize = ['기본'];
export const QuillToolbar = () => (
  <div id='toolbar' css={Style}>
    <span className='ql-formats'>
      <select className='ql-font' defaultValue='arial'>
        <option value='노토산스'>노토산스</option>
        <option value='개구체'>개구체</option>
      </select>
      {/* <select className="ql-size" defaultValue="medium">
        {fontSize.map((val) => (
          <option value={val} selected={val === '기본'}>
            {val.replace(/[^0-9]/g, '')}
          </option>
        ))}
      </select> */}
      {/* <select className="ql-header">
        <option value="1">Header 1</option>
        <option value="2">Header 2</option>
        <option value="3">Header 3</option>
        <option value="4">Header 4</option>
        <option value="5">Header 5</option>
        <option value="6">Header 6</option>
      </select> */}
    </span>
    <span className='ql-formats'>
      <button className='ql-bold' />
      <button className='ql-italic' />
      <button className='ql-underline' />
      <button className='ql-strike' />
      {/* <button className="ql-blockquote" /> */}
    </span>
    {/* <span className="ql-formats">
      <select className="ql-color" />
      <select className="ql-background" />
    </span> */}
    {/* <span className="ql-formats">
      <button className="ql-image" />
      <button className="ql-video" />
    </span> */}
    <span className='ql-formats'>
      <button className='ql-clean' />
    </span>
  </div>
);
export default QuillToolbar;

const Style = css`
  width: 34.488rem;
  margin: 0 auto;
  position: relative;
  z-index: 1000;

  @media all and (max-width: 767px) {
    width: calc(100vw - 3em);
  }
`;
