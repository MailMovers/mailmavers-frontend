import * as S from './Inquiry.styles';

import { CommentOutlined } from '@ant-design/icons';
import { Pagination } from 'antd';

import InquireDetailPopup from '@/components/mypage/InquireDetailPopup';
import InquirePopup from '@/components/mypage/InquirePopup';
import { IInquiryProps } from './Inquiry.types';
import { TCsInfo } from '@/type/mypage';
import { useEffect, useState } from 'react';

export default function InquiryPageUI(props: IInquiryProps): JSX.Element {
    return (
        <S.Wrap>
          <S.Header>
          <S.Title>안녕하세요! {props.userInfo?.name} 님,</S.Title>
          <S.SubTitle>이곳은 <S.TitleContent>내 1:1문의</S.TitleContent> 입니다.</S.SubTitle>
          </S.Header>
          <S.Body>
            <S.InfoContaier>
              <S.InfoWrap>
                <S.TitleWrap>
                  <span className='status-span'>상태</span>
                  <span className='category-span' >카테고리</span>
                  <span className='title-span'>제목</span>
                  <span className='date-span'>날짜</span>
                </S.TitleWrap>

                <S.CardContainer>
                  {props.data ?
                    props.data.map((csInfo: TCsInfo) =>(
                        <S.CardWrap
                          key={csInfo.id}
                          onClick={() => props.setSelectCs(csInfo)}
                        >
                          <S.CsDataContainer className='status'>
                          <S.CsStatus status={csInfo.hasAnswer}>
                            {csInfo.hasAnswer ? '답변 완료' : '미답변'}
                          </S.CsStatus>
                          </S.CsDataContainer>
                          <S.CsDataContainer className='category'>
                          <S.CsCategory>기타 문의</S.CsCategory>
                          </S.CsDataContainer>
                          <S.CsDataContainer className='title'>
                          <S.CsTitle> {csInfo.title} </S.CsTitle>                      
                          </S.CsDataContainer>
                          <S.CsDataContainer className='date'>
                          <S.CsDate>
                          {new Date(csInfo.createdAt).toLocaleDateString()}
                          </S.CsDate>
                          </S.CsDataContainer>
                        </S.CardWrap>
                    )
                    ) : (
                      <S.EmptyMessage>작성하신 문의가 없습니다.</S.EmptyMessage>
                    )}
                </S.CardContainer>
              </S.InfoWrap>
            </S.InfoContaier>

            {/* <Pagination
              total={props.data ? Number(props.data || 0) : 0}
              current={Number(props.page)}
              pageSize={10}
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