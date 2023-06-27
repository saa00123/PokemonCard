import React from "react";

const Button = ({ children, width, height, border, borderRadius, fontSize, backgroundColor, color, ...rest }) => (
  <Button
    style={{
      width,
      height,
      border,
      borderRadius,
      fontSize,
      backgroundColor,
      color,
    }}
    {...rest}
  >
    {children}
  </Button>
);

export default Button;
