import { css } from '@emotion/react';
import { memo, useEffect, useMemo, useState } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import Toolbar from './EditorToolBar';

import { Common } from 'styles/common';
import { PadData } from '@/type/letterData';
import useSWR from 'swr';
import { getPadData } from '@/api/letter';
import { useRouter } from 'next/router';
import { letterWritingPadIdState } from '@/recoil/letter/atom';
import { useRecoilValue } from 'recoil';

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
    const router = useRouter();
    const writingPadId = router.query.writingPadId as string;

    // const mounted = useRef(false);
    const letterWritingPadId = useRecoilValue(letterWritingPadIdState);
    const [_, setContentLength] = useState(0);

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
    Font.whitelist = ['노토산스', '개구체'];
    Quill.register(Font, true);

    // 에디터 화면에 편지지 띄우기
    const { data: PadData } = useSWR<PadData[]>(
      `product/writing/${writingPadId}`,
      getPadData,
      {
        fallbackData: [],
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
      }
    );

    const letterImg = PadData?.[0].pad_img_url;
    const style = css`
      position: absolute;
      top: 0;
      left: 0;
      height: 49.606rem;
      width: 34.488rem;
      margin: 0 auto;
      z-index: 999;

      > div > div {
        padding: 3.438rem 2.188rem;
        line-height: 2.4;
      }
    `;

    const PadImg = css`
      height: 49.606rem;
      width: 34.488rem;
      margin: 0 auto;
      posistion: absolute;
      top: 0;
      background: url('${letterImg}');
      background-size: cover;
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
        <div css={EditorContainer}>
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
          <div css={ImgContainer}>
            <div css={PadImg} />
            <div css={PadBackImg} />
          </div>
        </div>
      </div>
    );
  }
);

export default QuillEditor;

const QuillWrap = css`
  position: relative;
  width: 34.488rem;
  z-index: 999;

  @media all and (max-width: 767px) {
    width: calc(100vw - 3em);
  }
`;

const EditorContainer = css`
  position: relative;
  width: 34.488rem;
  height: 49.606rem;
`;

const ImgContainer = css`
  position: relative;
  width: 34.488rem;
  height: 49.606rem;
`;

const PadBackImg = css`
  background: url(/images/pad_back_image.png);
  background-size: cover;
  width: 34.488rem;
  height: 49.606rem;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
`;
