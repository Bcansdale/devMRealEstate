const formReducer = (state, action) => {
  switch (action.type) {
    case "handleInput":
      return {
        ...state,
        [action.field]: action.payload,
      };
    case "loadInputs":
      return {
        ...state,
        ...Object.keys(action.payload).reduce((acc, key) => {
          acc[key] = action.payload[key] === null ? "" : action.payload[key];
          return acc;
        }, {}),
      };
    case "clearInputs":
      return {
        ...state,
        ...Object.keys(action.payload).reduce((acc, key) => {
          acc[key] = "";
          return acc;
        }, {}),
      };
    default:
      throw new Error("Unknown action");
  }
};

export default formReducer;
