export const initialState = {
  isHovered: false,
};

export const setIsHovered = (isHovered) => ({
  type: "SET_IS_HOVERED",
  payload: isHovered,
});

export const reducer = (action, state = initialState) => {
  switch (action.type) {
    case "SET_IS_HOVERED":
      return {
        ...state,
        isHovered: action.payload,
      };
    default:
      return state;
  }
};
