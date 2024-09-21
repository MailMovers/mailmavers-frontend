import * as S from './Inquiry.styles';

import { CommentOutlined } from '@ant-design/icons';
import { Pagination } from 'antd';

import InquireDetailPopup from '@/components/mypage/InquireDetailPopup';
import InquirePopup from '@/components/mypage/InquirePopup';
import { IInquiryProps } from './Inquiry.types';
import { TCsInfo } from '@/type/mypage';

export default function InquiryPageUI(props: IInquiryProps): JSX.Element {
    return (
        <S.Wrap>
          <S.Header>
          <S.Title>안녕하세요! {props.userEditInfo?.name} 테스트 님,</S.Title>
          <S.SubTitle>이곳은 <S.TitleContent>내 1:1문의</S.TitleContent> 입니다.</S.SubTitle>
          </S.Header>
          <S.Body>
            <S.InfoContaier>
              <S.InfoWrap>
                <S.TitleWrap>
                  <span>제목</span>
                  <span>날짜</span>
                </S.TitleWrap>

                <S.CardContainer>
                  {props.data ?
                    props.data.csList.map((csInfo: TCsInfo) => {
                      return (
                        <S.CardWrap


                          key={csInfo.id}
                          onClick={() => props.setSelectCs(csInfo)}
                        >
                          <div className='text_container'>
                            <div className='text_wrap'>
                              <span>{csInfo.title}</span>
                            </div>
                          </div>

                          <div className='created_at'>
                            <span>
                              {' '}
                              {csInfo.createdAt &&
                                new Date(csInfo.createdAt).toLocaleString()}
                            </span>

                          </div>
                        </S.CardWrap>
                      );
                    })
                    : <S.EmptyMessage>작성하신 문의가 없습니다.</S.EmptyMessage>}
                </S.CardContainer>
              </S.InfoWrap>
            </S.InfoContaier>

            {/* <Pagination
              total={props.data ? Number(props.data.total || 0) : 0}
              current={Number(props.page)}
              onChange={(value) => props.setPage(String(value))}
            /> */}
          </S.Body>

          {!props.openInquire && !props.selectCs && (
            <S.InquireBtn onClick={() => props.setOpenInquire(true)}>
              <CommentOutlined />
            </S.InquireBtn>
          )}

          {props.openInquire && (
            <InquirePopup
              close={() => props.setOpenInquire(false)}
              callback={() => props.refetch()}
            />
          )}

          {props.selectCs && (
            <InquireDetailPopup
              csInfo={props.selectCs}
              close={() => props.setSelectCs(null)}
            />
          )}
        </S.Wrap>
    )
}