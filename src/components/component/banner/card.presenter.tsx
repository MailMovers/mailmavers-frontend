import styled from '@emotion/styled';
import { Card } from './banner.types';
import * as S from './card.styles';


const cards: Card[] = [
    {
     step: 'STEP 1',
      title: '편지지선택-편지작성',
      content: '편지지를 선택하고 편지를 작성하세요.',
      icon: '/icon/edit.png',
    },
    {
      step: 'STEP 2',
      title: '사진선택 - 우표선택',
      content: '사진을 선택하고 우표를 선택하세요.',
      icon: '/icon/photo.png',
    },
    {
      step: 'STEP 3',
      title: '주소지찾기-주소등록',
      content: '주소를 찾고 주소를 등록하세요.',
      icon: '/icon/search.svg',
    },
    {
      step: 'STEP 4',
      title: '오후 4시까지 당일접수',
      content: '당일 오후4시전 결재완료 편지외엔 다음날 접수됩니다.',
      icon: '/icon/send.png',
    },
  ];


export default function CardUI(): JSX.Element {
  return (
    <S.ContainerWrapper>

      <S.CardWrapper>
        {cards.map((card, index) => (
          <S.Card key={index}> 
              <S.CardStep>{card.step}</S.CardStep>
              <S.FlexWrapper>
            <S.CardIcon src={card.icon} alt={`${card.title} icon`} />
            <S.FlexContentWrapper>
            <S.CardTitle>{card.title}</S.CardTitle>
            <S.CardContent>{card.content}</S.CardContent>
            </S.FlexContentWrapper>
              </S.FlexWrapper>
          </S.Card>
        ))}
      </S.CardWrapper>

    </S.ContainerWrapper>
  );
}