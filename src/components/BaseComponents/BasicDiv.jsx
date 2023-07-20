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
  background-color: ${(props) => props.backgroundcolor};
  font-size: ${(props) => props.fontsize};
  font-weight: ${(props) => props.fontWeight};
  text-align: ${(props) => props.textalign};
  box-shadow: ${(props) => props.boxshadow};
  box-sizing: ${(props) => props.boxsizing};
  position: ${(props) => props.position};

  @media (min-width: 1024px) and (max-width: 1440px) {
    display: ${(props) => props.notebookdisplay};
    flex-direction: ${(props) => props.notebookflexdirection};
    justify-content: ${(props) => props.notebookjustifycontent};
    align-items: ${(props) => props.notebookalignitems};
    margin: ${(props) => props.notebookmargin};
    padding: ${(props) => props.notebookpadding};
    width: ${(props) => props.notebookwidth};
    height: ${(props) => props.notebookheight};
    border: ${(props) => props.notebookborder};
    border-radius: ${(props) => props.notebookborderradius};
    color: ${(props) => props.notebookColor};
    background-color: ${(props) => props.notebookbackgroundcolor};
    font-size: ${(props) => props.notebookfontsize};
    font-weight: ${(props) => props.notebookfontWeight};
    text-align: ${(props) => props.notebooktextalign};
    box-shadow: ${(props) => props.notebookboxshadow};
    box-sizing: ${(props) => props.boxsizing};
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
    backgroundcolor,
    fontsize,
    fontWeight,
    textalign,
    boxshadow,
    boxsizing,
    position,
    notebookdisplay,
    notebookflexdirection,
    notebookjustifycontent,
    notebookalignitems,
    notebookmargin,
    notebookpadding,
    notebookwidth,
    notebookheight,
    notebookborder,
    notebookborderradius,
    notebookColor,
    notebookbackgroundcolor,
    notebookfontsize,
    notebookfontWeight,
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
      backgroundcolor={backgroundcolor}
      fontsize={fontsize}
      fontWeight={fontWeight}
      textalign={textalign}
      boxshadow={boxshadow}
      boxsizing={boxsizing}
      position={position}
      notebookdisplay={notebookdisplay}
      notebookflexdirection={notebookflexdirection}
      notebookjustifycontent={notebookjustifycontent}
      notebookalignitems={notebookalignitems}
      notebookmargin={notebookmargin}
      notebookpadding={notebookpadding}
      notebookwidth={notebookwidth}
      notebookheight={notebookheight}
      notebookborder={notebookborder}
      notebookborderradius={notebookborderradius}
      notebookColor={notebookColor}
      notebookbackgroundcolor={notebookbackgroundcolor}
      notebookfontsize={notebookfontsize}
      notebookfontWeight={notebookfontWeight}
      notebooktextalign={notebooktextalign}
      notebookboxshadow={notebookboxshadow}
      {...rest}
    >
      {children}
    </DivContainer>
  );
};

export default BasicDiv;
