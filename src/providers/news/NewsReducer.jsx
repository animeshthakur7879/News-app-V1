const NewsReducer = (state, action) => {
  switch (action.type) {
    case "GET_NEWS":
      return {
        ...state,
        newsData: action.payload,
      };

    default:
      return state;
  }
};

export default NewsReducer;
