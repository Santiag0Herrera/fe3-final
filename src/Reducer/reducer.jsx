export const reducer = (state, action) => {
  switch (action.type) {
    case "THEME":
      return { ...state, theme: !state.theme };
    case "ADD_FAVLIST":
      return { ...state, favList: [...state.favList, action.payload] };
    case "REMOVE_FAVLIST":
      return { ...state, favList: state.favList.filter((item)=>item.id!==action.payload.id) };
    case "HOMELIST":
      return { ...state, homeList: action.payload };
    case "DETAIL":
      return { ...state, detaiList: action.payload };
    default:
      return state;
  }
};
