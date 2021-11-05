import React, { useReducer } from "react";
import fetch from "../api/jsonServer";

export const blogContext = React.createContext();

const myReducer = (state, action) => {
  switch (action.type) {
    case "GET_BlogPosts":
      console.log("state ", action.payload);
      return [
        ...action.payload,
        // {
        //   id: Math.random(), // not really unique but it's just an example
        //   title: action.article.title,
        //   body: action.article.body
        // }
      ];
    default:
      return state;
  }
};
const ContextProvider = ({ children }) => {
  const [blogPosts, dispatch] = useReducer(myReducer, []);

  const getPost = () => {
    const fetchData = async () => {
      fetch("/blogposts").then(response => {
        console.log(response.data);
        dispatch({ type: "GET_BlogPosts", payload: response.data });
      });
    };
    fetchData();
  };
  return (
    <blogContext.Provider value={{ blogPosts, getPost }}>
      {children}
    </blogContext.Provider>
  );
};

export default ContextProvider;
