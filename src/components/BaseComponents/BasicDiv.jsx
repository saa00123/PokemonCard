import React from "react";
import styled from "styled-components";

const DivContainer = styled.div`
  display: ${(props) => props.display};
  flex-direction: ${(props) => props.flexdirection};
  justify-content: ${(props) => props.justifycontent};
  align-items: ${(props) => props.alignitems};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderradius};
  color: ${(props) => props.color};
  background: ${(props) => props.background};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  text-align: ${(props) => props.textalign};
  box-shadow: ${(props) => props.boxshadow};

  @media (min-width: 1024px) and (max-width: 1440px) {
    display: ${(props) => props.notebookDisplay};
    flex-direction: ${(props) => props.notebookflexdirection};
    justify-content: ${(props) => props.notebookjustifycontent};
    align-items: ${(props) => props.notebookalignitems};
    margin: ${(props) => props.notebookMargin};
    padding: ${(props) => props.notebookPadding};
    width: ${(props) => props.notebookWidth};
    height: ${(props) => props.notebookHeight};
    border: ${(props) => props.notebookBorder};
    border-radius: ${(props) => props.notebookborderradius};
    color: ${(props) => props.notebookColor};
    background: ${(props) => props.notebookBackground};
    font-size: ${(props) => props.notebookFontSize};
    font-weight: ${(props) => props.notebookFontWeight};
    text-align: ${(props) => props.notebooktextalign};
    box-shadow: ${(props) => props.notebookboxshadow};
  }
`;

const BasicDiv = (props) => {
  const {
    display,
    flexdirection,
    justifycontent,
    alignitems,
    margin,
    padding,
    width,
    height,
    border,
    borderradius,
    color,
    background,
    fontSize,
    fontWeight,
    textalign,
    boxshadow,
    notebookDisplay,
    notebookflexdirection,
    notebookjustifycontent,
    notebookalignitems,
    notebookMargin,
    notebookPadding,
    notebookWidth,
    notebookHeight,
    notebookBorder,
    notebookborderradius,
    notebookColor,
    notebookBackground,
    notebookFontSize,
    notebookFontWeight,
    notebooktextalign,
    notebookboxshadow,
    children,
    ...rest
  } = props;

  return (
    <DivContainer
      display={display}
      flexdirection={flexdirection}
      justifycontent={justifycontent}
      alignitems={alignitems}
      margin={margin}
      padding={padding}
      width={width}
      height={height}
      border={border}
      borderradius={borderradius}
      color={color}
      background={background}
      fontSize={fontSize}
      fontWeight={fontWeight}
      textalign={textalign}
      boxshadow={boxshadow}
      notebookDisplay={notebookDisplay}
      notebookflexdirection={notebookflexdirection}
      notebookjustifycontent={notebookjustifycontent}
      notebookalignitems={notebookalignitems}
      notebookMargin={notebookMargin}
      notebookPadding={notebookPadding}
      notebookWidth={notebookWidth}
      notebookHeight={notebookHeight}
      notebookBorder={notebookBorder}
      notebookborderradius={notebookborderradius}
      notebookColor={notebookColor}
      notebookBackground={notebookBackground}
      notebookFontSize={notebookFontSize}
      notebookFontWeight={notebookFontWeight}
      notebooktextalign={notebooktextalign}
      notebookboxshadow={notebookboxshadow}
      {...rest}
    >
      {children}
    </DivContainer>
  );
};

export default BasicDiv;
