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
  min-width: ${(props) => props.minwidth};
  border: ${(props) => props.border};
  border-bottom: ${(props) => props.borderbottom};
  border-radius: ${(props) => props.borderradius};
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundcolor};
  font-size: ${(props) => props.fontsize};
  font-weight: ${(props) => props.fontWeight};
  text-align: ${(props) => props.textalign};
  box-shadow: ${(props) => props.boxshadow};
  box-sizing: ${(props) => props.boxsizing};
  vertical-align: ${(props) => props.verticalalign};
  grid-template-rows: ${(props) => props.gridTemplateRows};
  grid-template-columns: ${(props) => props.gridtemplatecolumns};
  position: ${(props) => props.position};
  overflow-x: ${(props) => props.overflowx};
  overflow-y: ${(props) => props.overflowy};

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
    box-sizing: ${(props) => props.notebookboxsizing};
    position: ${(props) => props.notebookposition};
    overflow-x: ${(props) => props.notebookoverflowx};
    overflow-y: ${(props) => props.notebookoverflowy};
    vertical-align: ${(props) => props.notebookverticalalign};
    grid-template-rows: ${(props) => props.notebookGridTemplateRows};
    grid-template-columns: ${(props) => props.notebookGridTemplateColumns};
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
    minwidth,
    border,
    borderbottom,
    borderradius,
    color,
    backgroundcolor,
    fontsize,
    fontWeight,
    textalign,
    boxshadow,
    boxsizing,
    verticalalign,
    gridTemplateRows,
    gridTemplateColumns,
    position,
    overflowx,
    overflowy,
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
    notebookboxsizing,
    notebookposition,
    notebookoverflowx,
    notebookoverflowy,
    notebookverticalalign,
    notebookGridTemplateRow,
    notebookGridTemplateColumns,
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
      minwidth={minwidth}
      border={border}
      borderbottom={borderbottom}
      borderradius={borderradius}
      color={color}
      backgroundcolor={backgroundcolor}
      fontsize={fontsize}
      fontWeight={fontWeight}
      textalign={textalign}
      boxshadow={boxshadow}
      boxsizing={boxsizing}
      verticalalign={verticalalign}
      gridTemplateRows={gridTemplateRows}
      gridTemplateColumns={gridTemplateColumns}
      position={position}
      overflowx={overflowx}
      overflowy={overflowy}
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
      notebookverticalalign={notebookverticalalign}
      notebookGridTemplateRow={notebookGridTemplateRow}
      notebookGridTemplateColumns={notebookGridTemplateColumns}
      notebookboxsizing={notebookboxsizing}
      notebookposition={notebookposition}
      notebookoverflowx={notebookoverflowx}
      notebookoverflowy={notebookoverflowy}
      {...rest}
    >
      {children}
    </DivContainer>
  );
};

export default BasicDiv;
