import { createContext, useContext, useEffect } from "react";
import { useReducer } from "react";
import { reducer } from "../../Reducer/reducer";
import axios from "axios";

const ContextGlobal = createContext();

const initialState = {
  theme: JSON.parse(localStorage.getItem("theme")),
  favList: JSON.parse(localStorage.getItem("favList")) || [],
  homeList: [],
  detaiList: [],
};

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    axios(url).then((res) => dispatch({ type: "HOMELIST", payload: res.data }));
  }, []);

useEffect(() => {
  localStorage.setItem('favList', JSON.stringify(state.favList))
}, [state.favList])

useEffect(() => {
  localStorage.setItem('theme', JSON.stringify(state.theme))
}, [state.theme])

  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;
export const useContextGlobal = () => useContext(ContextGlobal);
