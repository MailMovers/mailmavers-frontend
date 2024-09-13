// 'use client';
// /** @jsxImportSource @emotion/react */


// import * as S from '@/components/views/letterproducts/LetterProductDetail.styles';

// export type ProductDescripProps = {
//   writingPadDetail: ;
// };

// const ProductDescrip = ({ writingPadDetail }: ProductDescripProps) => {
//   const { common, extra, envelope, info, picture } = writingPadDetail;
//   return (
//     <>
//       <table css={S.Table}>
//         <thead css={S.Hidden}>
//           <tr>
//             <th>구성</th>
//             <th>설명</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td css={[S.TableName, S.TdBottom]}>기본구성</td>
//             <td css={S.TableContent}>{common}</td>
//           </tr>
//           <tr>
//             <td css={S.TableName}>추가구성</td>
//             <td css={S.TableContent}>{extra}</td>
//           </tr>
//         </tbody>
//       </table>
//       <table>
//         <thead css={S.Hidden}>
//           <tr>
//             <th>특징</th>
//             <th>설명</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td css={[S.TableName, S.TdBottom]}>봉투</td>
//             <td css={S.TableContent}>{envelope}</td>
//           </tr>
//           <tr>
//             <td css={[S.TableName, S.TdBottom]}>편지지</td>
//             <td css={S.TableContent}>{info}</td>
//           </tr>
//           <tr>
//             <td css={S.TableName}>사진</td>
//             <td css={S.TableContent}>{picture}</td>
//           </tr>
//         </tbody>
//       </table>
//     </>
//   );
// };

// export default ProductDescrip;
