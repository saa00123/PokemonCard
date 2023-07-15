import React from "react";
import styled from "styled-components";

const DivContainer = styled.div`
  display: ${(props) => props.display};
  flex-direction: ${(props) => props.flexDirection};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
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
  text-align: ${(props) => props.textAlign};
  box-shadow: ${(props) => props.boxShadow};

  @media (min-width: 1024px) and (max-width: 1440px) {
    display: ${(props) => props.notebookDisplay};
    flex-direction: ${(props) => props.notebookFlexDirection};
    justify-content: ${(props) => props.notebookJustifyContent};
    align-items: ${(props) => props.notebookAlignItems};
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
    text-align: ${(props) => props.notebookTextAlign};
    box-shadow: ${(props) => props.notebookBoxShadow};
  }
`;

const BasicDiv = (props) => {
  const {
    display,
    flexDirection,
    justifyContent,
    alignItems,
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
    textAlign,
    boxShadow,
    notebookDisplay,
    notebookFlexDirection,
    notebookJustifyContent,
    notebookAlignItems,
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
    notebookTextAlign,
    notebookBoxShadow,
    children,
    ...rest
  } = props;

  return (
    <DivContainer
      display={display}
      flexDirection={flexDirection}
      justifyContent={justifyContent}
      alignItems={alignItems}
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
      textAlign={textAlign}
      boxShadow={boxShadow}
      notebookDisplay={notebookDisplay}
      notebookFlexDirection={notebookFlexDirection}
      notebookJustifyContent={notebookJustifyContent}
      notebookAlignItems={notebookAlignItems}
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
      notebookTextAlign={notebookTextAlign}
      notebookBoxShadow={notebookBoxShadow}
      {...rest}
    >
      {children}
    </DivContainer>
  );
};

export default BasicDiv;
