import { css } from '@emotion/react';
import { memo, useEffect, useMemo, useRef, useState } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import Toolbar from './EditorToolBar';

import { addComma } from '@/common/util';
import { Common } from 'styles/common';
import { PadData } from '@/type/letterData';
import useSWR from 'swr';
import { useRecoilState, useRecoilValue } from 'recoil';
import { letterWritingPadIdState, textLengthState } from '@/recoil/letter/atom';
import { getPadData } from '@/api/letter';

type QuillEditorProps = {
  quillRef: React.MutableRefObject<ReactQuill | null>;
  htmlContent: string;
  setHtmlContent: (content: string) => void;
  setActualLength: (length: number) => void;
};

const QuillEditor = memo(
  ({
    quillRef,
    htmlContent,
    setHtmlContent,
    setActualLength,
  }: QuillEditorProps) => {
    const mounted = useRef(false);
    const letterWritingPadId = useRecoilValue(letterWritingPadIdState);
    const [contentLength, setContentLength] = useState(0);

    useEffect(() => {
      if (quillRef.current && htmlContent) {
        const quill = quillRef.current.getEditor();
        const currentContent = quill.root.innerHTML;

        quill.on('text-change', () => {
          const maxLength = 1000;
          const text = quill.getText();
          let actualLength = text.endsWith('\n')
            ? text.length - 1
            : text.length;
          setActualLength(actualLength);
          setContentLength(actualLength);

          if (actualLength > maxLength) {
            quill.deleteText(maxLength, quill.getLength());
            quill.setSelection(maxLength, 0);
          }
        });

        if (currentContent !== htmlContent) {
          const range = quill.getSelection();
          const delta = quill.clipboard.convert(htmlContent);
          quill.setContents(delta);

          if (range) {
            // 커서 위치 복원
            quill.setSelection(range.index, range.length, 'silent');
          }
        }
      }
    }, [htmlContent, setActualLength]);

    // 폰트 사이즈
    const Size = Quill.import('formats/size');
    Size.whitelist = ['16px', '18px', '24px', ''];
    Quill.register(Size, true);

    // 폰트를 whitelist에 추가하고 Quill에 등록
    const Font = Quill.import('formats/font');
    Font.whitelist = [
      '노토산스',
      '개구체',
      '나눔펜',
      'Roboto',
      'Raleway',
      'Montserrat',
      'Lato',
    ];
    Quill.register(Font, true);

    // 에디터 화면에 편지지 띄우기
    const { data: PadData } = useSWR<PadData[]>(
      `product/writing/${letterWritingPadId}`,
      getPadData,
      {
        fallbackData: [],
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
      }
    );
    const letterImg = PadData?.[0].pad_img_url;

    const style = css`
      height: 570px;
      margin: 0 auto;
      background: url('${letterImg}');
      background-size: 697px 570px;
    `;

    const modules = useMemo(
      () => ({
        toolbar: {
          container: '#toolbar',
          handlers: {},
          history: {
            delay: 500,
            maxStack: 100,
            userOnly: true,
          },
        },
      }),
      []
    );

    const formats = [
      'header',
      'size',
      'font',
      'bold',
      'italic',
      'underline',
      'strike',
      'blockquote',
      'background',
      'code',
      'script',
      'list',
      'bullet',
      'indent',
    ];

    return (
      <div css={QuillWrap}>
        <Toolbar />
        <ReactQuill
          ref={(element) => {
            quillRef.current = element;
          }}
          defaultValue={htmlContent}
          onChange={setHtmlContent}
          modules={modules}
          formats={formats}
          theme='snow'
          css={style}
        />
        <p css={Length}>{addComma(contentLength)} / 1,000</p>
      </div>
    );
  }
);

export default QuillEditor;

const QuillWrap = css`
  position: relative;
  width: 694px;

  @media all and (max-width: 767px) {
    width: calc(100vw - 3em);
  }
`;

const Length = css`
  position: absolute;
  bottom: 20px;
  right: 20px;
  color: ${Common.colors.gray01};
`;
