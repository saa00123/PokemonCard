import React from "react";
import styled from "styled-components";
import Color from "../BaseComponents/Color";

const PreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 21.875rem;
  height: 37.5rem;
  margin: 0 0 -1px -1px;
  border: solid 1px ${Color({ color: "Gray4" })};
  background-color: ${Color({ color: "Default" })};

  @media (min-width: 1024px) and (max-width: 1440px) {
    width: 14.563rem;
    height: 25.438rem;
  }
`;

const PreviewImage = styled.div`
  width: 18.75rem;
  height: 25rem;
  margin: 0 0 1.188rem;
  border: solid 1px ${Color({ color: "Gray4" })};
  background-color: ${Color({ color: "Default" })};

  @media (min-width: 1024px) and (max-width: 1440px) {
    width: 12.5rem;
    height: 16.668rem;
    margin-bottom: 0.7rem;
  }
`;

const PreviewHeader = styled.div`
  width: 18.75rem;
  height: 3.5rem;
  font-size: 1.25rem;
  text-align: left;
  word-wrap: break-word;

  @media (min-width: 1024px) and (max-width: 1440px) {
    width: 12.5rem;
    height: 2.876rem;
    font-size: 0.875rem;
    font-weight: normal;
  }
`;

const PreviewAuctionContainer = styled.div`
  display: flex;
  width: 18.75rem;
  height: 3.438rem;
  margin-top: 1.063rem;

  @media (min-width: 1024px) and (max-width: 1440px) {
    width: 12.5rem;
    height: 2.626rem;
    margin-top: 0.5rem;
  }
`;

const PreviewDetailContainer = styled.div`
  width: 9.375rem;
  height: 3.438rem;
  height: 3.438rem;

  @media (min-width: 1024px) and (max-width: 1440px) {
    width: fit-content;
    height: fit-content;
  }
`;

const DetailHeader = styled.div`
  width: 4.063rem;
  height: 1.25rem;
  font-size: 0.875rem;
  text-align: left;

  @media (min-width: 1024px) and (max-width: 1440px) {
    width: 2.75rem;
    height: 0.938rem;
    font-size: 0.625rem;
  }
`;

const DetailAuction = styled.div`
  display: flex;
  width: ${(props) => props.width};
  height: 2.188rem;
  font-size: ${(props) => props.fontsize};
  font-weight: bold;
  text-align: left;
  align-items: ${(props) => props.alignitems};

  @media (min-width: 1024px) and (max-width: 1440px) {
    width: ${(props) => props.notebookwidth};
    height: 1.5rem;
    font-size: ${(props) => props.notebookfontsize};
  }
`;

const PriceUnit = styled.div`
  display: flex;
  align-items: end;
  font-size: 1rem;
  margin-left: 0.3rem;
  @media (min-width: 1024px) and (max-width: 1440px) {
    font-size: 0.75rem;
  }
`;

const SmallCardPreview = () => (
  <PreviewContainer>
    <PreviewImage />
    <PreviewHeader>완전기이이이이이이이이이이이이이인 제목</PreviewHeader>
    <PreviewAuctionContainer>
      <PreviewDetailContainer>
        <DetailHeader>남은 시간</DetailHeader>
        <DetailAuction width="7.5rem" notebookwidth="6rem" fontsize="1.5rem" notebookfontsize="1rem" alignitems="end">
          99:99:99
        </DetailAuction>
      </PreviewDetailContainer>
      <PreviewDetailContainer>
        <DetailHeader>현재가</DetailHeader>
        <DetailAuction
          width="8.813rem"
          notebookwidth="6.5rem"
          fontsize="2rem"
          notebookfontsize="1.25rem"
          alignitems="end"
        >
          13,000<PriceUnit>원</PriceUnit>
        </DetailAuction>
      </PreviewDetailContainer>
    </PreviewAuctionContainer>
  </PreviewContainer>
);

export default SmallCardPreview;
