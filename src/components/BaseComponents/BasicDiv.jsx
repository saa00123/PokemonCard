import React from "react";
import styled from "styled-components";

const DivContainer = styled.div`
  display: ${(props) => props.display};
  flex-direction: ${(props) => props.direction};
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.items};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};
  color: ${(props) => props.color};
  background: ${(props) => props.background};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  text-align: ${(props) => props.text};
  box-shadow: ${(props) => props.shadow};

  @media (min-width: 1024px,max-width: 1440px) {
    display: ${(props) => props.notebookDisplay};
    flex-direction: ${(props) => props.notebookDirection};
    justify-content: ${(props) => props.notebookJustify};
    align-items: ${(props) => props.notebookItems};
    margin: ${(props) => props.notebookMargin};
    padding: ${(props) => props.notebookPadding};
    width: ${(props) => props.notebookWidth};
    height: ${(props) => props.notebookHeight};
    border: ${(props) => props.notebookBorder};
    border-radius: ${(props) => props.notebookBorderRadius};
    color: ${(props) => props.notebookColor};
    background: ${(props) => props.notebookBackground};
    font-size: ${(props) => props.notebookFontSize};
    font-weight: ${(props) => props.notebookFontWeight};
    text-align: ${(props) => props.notebookText};
    box-shadow: ${(props) => props.notebookShadow};
  }
`;

const BasicDiv = (props) => {
  const {
    display,
    direction,
    justify,
    items,
    margin,
    padding,
    width,
    height,
    border,
    borderRadius,
    color,
    background,
    fontSize,
    fontWeight,
    text,
    shadow,
    notebookDisplay,
    notebookDirection,
    notebookJustify,
    notebookItems,
    notebookMargin,
    notebookPadding,
    notebookWidth,
    notebookHeight,
    notebookBorder,
    notebookBorderRadius,
    notebookColor,
    notebookBackground,
    notebookFontSize,
    notebookFontWeight,
    notebookText,
    notebookShadow,
    children,
  } = props;

  return (
    <DivContainer
      display={display}
      direction={direction}
      justify={justify}
      items={items}
      margin={margin}
      padding={padding}
      width={width}
      height={height}
      border={border}
      borderRadius={borderRadius}
      color={color}
      background={background}
      fontSize={fontSize}
      fontWeight={fontWeight}
      text={text}
      shadow={shadow}
      notebookDisplay={notebookDisplay}
      notebookDirection={notebookDirection}
      notebookJustify={notebookJustify}
      notebookItems={notebookItems}
      notebookMargin={notebookMargin}
      notebookPadding={notebookPadding}
      notebookWidth={notebookWidth}
      notebookHeight={notebookHeight}
      notebookBorder={notebookBorder}
      notebookBorderRadius={notebookBorderRadius}
      notebookColor={notebookColor}
      notebookBackground={notebookBackground}
      notebookFontSize={notebookFontSize}
      notebookFontWeight={notebookFontWeight}
      notebookText={notebookText}
      notebookShadow={notebookShadow}
    >
      {children}
    </DivContainer>
  );
};

export default BasicDiv;
