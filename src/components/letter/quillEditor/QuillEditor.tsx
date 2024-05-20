import { css } from '@emotion/react';
import { memo, useEffect, useMemo, useState } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import Toolbar from './EditorToolBar';

import { PadData } from '@/type/letterData';
import useSWR from 'swr';
import { getPadData } from '@/api/letter';
import { useRouter } from 'next/router';

type QuillEditorProps = {
  quillRef: React.MutableRefObject<ReactQuill | null>;
  htmlContent: string;
  setHtmlContent: (content: string) => void;
  setActualLength: (length: number) => void;
  addLetterPage: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  updateContentsState: (content: string) => void;
};

const QuillEditor = memo(
  ({
    quillRef,
    htmlContent,
    setHtmlContent,
    setActualLength,
    addLetterPage,
    updateContentsState,
  }: QuillEditorProps) => {
    const router = useRouter();
    const pageNum = parseInt(localStorage.getItem('pageNum') || '1');

    // const mounted = useRef(false);
    const letterWritingPadId = localStorage.getItem('product');
    const [_, setContentLength] = useState(0);
    const [isPageMoving, setIsPageMoving] = useState(false);

    // 에디터 화면에 편지지 띄우기
    const { data: PadData } = useSWR<PadData[]>(
      `product/writing/${letterWritingPadId}`,
      getPadData
    );

    const letterImg = PadData?.[0].pad_img_url;

    const handleChange = () => {
      if (isPageMoving) return;

      if (!quillRef.current) return;

      const quill = quillRef.current.getEditor();

      const currentContent = quill.getText();
      setHtmlContent(currentContent);

      const editorElement = quill.root;
      const lineHeightPx = parseFloat(
        window.getComputedStyle(editorElement).lineHeight
      );
      const textHeight = editorElement.scrollHeight;
      const lines = Math.ceil(textHeight / lineHeightPx) - 3;

      const editorText = quill.getText();

      const lastAllowedIndex = editorText.lastIndexOf(
        '\n',
        editorText.length - 1
      );
      if (pageNum === 5 && lines > 18) {
        if (
          window.confirm('더 이상 입력할 수 없습니다. 마지막 페이지입니다.')
        ) {
          quill.deleteText(lastAllowedIndex - 1, quill.getLength());
        }
      } else if (pageNum !== 5 && lines > 18) {
        setIsPageMoving(true);
        setTimeout(() => {
          if (
            window.confirm('18줄을 초과했습니다. 다음 페이지로 이동합니다.')
          ) {
            quill.deleteText(lastAllowedIndex + 1, quill.getLength());
            setTimeout(function () {
              addLetterPage();
            }, 1000);
            setIsPageMoving(false);
          } else {
            setIsPageMoving(false);
          }
        }, 100);
      }
    };

    useEffect(() => {
      if (quillRef.current) {
        const quill = quillRef.current.getEditor();
        quill.on('text-change', handleChange);

        return () => {
          if (quillRef.current) {
            const quill = quillRef.current.getEditor();
            quill.off('text-change', handleChange);
          }
        };
      }
    }, [
      quillRef,
      pageNum,
      setHtmlContent,
      updateContentsState,
      addLetterPage,
      isPageMoving,
    ]);

    useEffect(() => {
      function handleResize() {
        const editorElement = document.querySelector(
          '.ql-editor'
        ) as HTMLElement;
        if (!editorElement) return; // Add null check

        const editorWidth = editorElement.clientWidth;
        const baseFontSize = 16; // Base font size for full-width
        const baseLineHeight = 2.4; // Base line height for full-width
        const scaleFactor = 34.488; // Base width in rems from your CSS
        const newFontSize = editorWidth / scaleFactor;

        // Check if the viewport width is less than or equal to 767px (mobile)
        if (window.innerWidth <= 344) {
          const minLineHeight = 2.8;
          const maxLineHeight = 4.0;
          const calculatedLineHeight =
            baseLineHeight * (newFontSize / baseFontSize);
          const newLineHeight = Math.min(
            Math.max(calculatedLineHeight, minLineHeight),
            maxLineHeight
          );
          editorElement.style.lineHeight = `${newLineHeight}`;
        } else if (window.innerWidth <= 767) {
          // Additional condition for smaller mobile devices
          const minLineHeight = 2.72;
          const maxLineHeight = 4.0;
          const calculatedLineHeight =
            baseLineHeight * (newFontSize / baseFontSize);
          const newLineHeight = Math.min(
            Math.max(calculatedLineHeight, minLineHeight),
            maxLineHeight
          );
          editorElement.style.lineHeight = `${newLineHeight}`;
        } else {
          // Set default line-height for web environment
          editorElement.style.lineHeight = '2.4';
        }

        editorElement.style.fontSize = `${newFontSize}px`;

        const basePadding = 3.438; // 기본 패딩 (rem)
        const newPadding = basePadding * (newFontSize / baseFontSize);
        editorElement.style.padding = `${newPadding}rem ${newPadding / 2}rem`;
      }

      window.addEventListener('resize', handleResize);
      handleResize(); // Set initial size on load

      return () => window.removeEventListener('resize', handleResize);
    }, []);

    // 폰트 사이즈
    const Size = Quill.import('formats/size');
    Size.whitelist = ['16px', '18px', '24px', ''];
    Quill.register(Size, true);

    // 폰트를 whitelist에 추가하고 Quill에 등록
    const Font = Quill.import('formats/font');
    Font.whitelist = ['노토산스', '개구체'];
    Quill.register(Font, true);

    const style = css`
      position: absolute;
      top: 0;
      left: 0;
      margin: 0 auto;
      z-index: 3;
      overflow: hidden;

      > div {
        border: none !important;
      }

      > div > div {
        padding: 3.4392rem 1.8196rem !important;
        line-height: 2.4;
      }
    `;

    const PadImg = css`
      height: 49.606rem;
      width: 34.488rem;
      margin: 0 auto;
      position: absolute;
      top: 0;
      background: url('${letterImg}');
      background-size: 100% 100%;

      @media all and (max-width: 767px) {
        width: calc(100vw - 3rem);
        height: calc(100vw * (49.606 / 34.488));
      }
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
  z-index: 4;
  font-size: 16px; /* 기본 폰트 크기 */
  line-height: 2.4; /* 기본 줄 간격 */

  @media all and (max-width: 767px) {
    width: calc(100vw - 3rem);
    font-size: calc(1rem + 0.1vw); /* 뷰포트 너비에 따라 폰트 크기 조절 */
    line-height: calc(
      2.4 * (1rem + 0.5vw) / 16px
    ); /* 폰트 크기에 비례하여 줄 간격 조절 */
  }
`;

const EditorContainer = css`
  position: relative;
  width: 34.488rem;
  height: 49.606rem;

  @media all and (max-width: 767px) {
    width: calc(100vw - 3rem);
    height: calc(100vw * (49.606 / 34.488));
  }
`;

const ImgContainer = css`
  position: relative;
  width: 34.488rem;
  height: 49.606rem;

  @media all and (max-width: 767px) {
    width: calc(100vw - 3rem);
    height: calc(100vw * (49.606 / 34.488));
  }
`;

const PadBackImg = css`
  background: url(/images/pad_back_image.png);
  background-size: 100% 100%;
  width: 34.488rem;
  height: 49.606rem;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;

  @media all and (max-width: 767px) {
    width: calc(100vw - 3rem);
    height: calc(100vw * (49.606 / 34.488));
  }
`;
