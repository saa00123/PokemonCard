const Color = ({ color }) => {
  const colors = {
    Default: "#FFFFFF",
    Red: "#BE0020",
    Gray1: "#969696",
    Gray2: "#595959",
    Gray3: "#D9D9D9",
    Gray4: "#b8b8b8",
    Black: "#000000",
  };

  const colorValue = colors[color] || colors.Default;

  return colorValue;
};

export default Color;

// 아래는 props시 사용법 예시

// color: <Color color="Default" />

// export default App;
