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

const DetailContainer = styled.div`
  position: relative;
  height: 8rem;
  /* border: 1px solid yellowgreen; */
  @media (min-width: 1024px) and (max-width: 1440px) {
    width: fit-content;
    height: 6rem;
  }
`;

const PreviewHeader = styled.div`
  width: 18.75rem;
  height: fit-content;
  max-height: 3.5rem;
  font-size: 1.25rem;
  text-align: left;
  word-wrap: break-word;
  /* border: 1px solid grey; */

  @media (min-width: 1024px) and (max-width: 1440px) {
    width: 12.5rem;
    height: fit-content;
    max-height: 2.876rem;
    font-size: 0.875rem;
    font-weight: normal;
  }
`;

const DeadLine = styled.div`
  margin-top: 0.5rem;
  color: ${Color({ color: "Gray2" })};
  font-size: 0.875rem;
  @media (min-width: 1024px) and (max-width: 1440px) {
    margin-top: 0.2rem;
    font-size: 0.7rem;
  }
`;

const PreviewDetailContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  width: fit-content;
  height: 2.188rem;
  align-items: flex-end;
  /* border: 1px solid black; */

  @media (min-width: 1024px) and (max-width: 1440px) {
    /* width: fit-content;
    height: fit-content; */
  }
`;

const DetailHeader = styled.div`
  width: 4.063rem;
  height: 1.2rem;
  font-size: 0.875rem;
  text-align: left;

  /* border: 1px solid red; */

  @media (min-width: 1024px) and (max-width: 1440px) {
    width: 2.75rem;
    height: 0.938rem;
    /* right: 2.75rem; */
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
  /* border: 1px solid blue; */

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
  /* border: 1px solid green; */

  @media (min-width: 1024px) and (max-width: 1440px) {
    font-size: 0.75rem;
  }
`;

const SmallCardPreview = () => (
  <PreviewContainer>
    <PreviewImage />
    <DetailContainer>
      <PreviewHeader>완전기이이dㄹㄴㄹㅇㅁㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹ이이이인 제목</PreviewHeader>
      <DeadLine>종료일 2023.07.23</DeadLine>
      <PreviewDetailContainer float="right">
        <DetailHeader>현재가</DetailHeader>
        <DetailAuction
          width="fit-content"
          notebookwidth="fit-content"
          fontsize="2rem"
          notebookfontsize="1.25rem"
          alignitems="end"
        >
          13,000<PriceUnit>원</PriceUnit>
        </DetailAuction>
      </PreviewDetailContainer>
    </DetailContainer>
  </PreviewContainer>
);

export default SmallCardPreview;
