import React, {useReducer} from "react";
import fetch from "../api/jsonServer";

export const blogContext = React.createContext();

const myReducer = (state, action) => {
  switch (action.type) {
    case "GET_BlogPosts":
      // console.log("state ", action.payload);
      return [
        ...action.payload,
        // {
        //   id: Math.random(), // not really unique but it's just an example
        //   title: action.article.title,
        //   body: action.article.body
        // }
      ];
    case "Update_BlogPosts":
      // console.log("state ", action.payload);
      return state.map((blogPost) => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });
    default:
      return state;
  }
};
const ContextProvider = ({children}) => {
  const [blogPosts, dispatch] = useReducer(myReducer, []);

  const getPost = async () => {
    // const fetchData = async () => {
    fetch("/blogposts")
      .then((response) => {
        // console.log(response.data);
        dispatch({type: "GET_BlogPosts", payload: response.data});
      })
      .catch((err) => console.log("error is ", err));
  };
  // fetchData();

  const updateBlogPost = async (id, title, content, callback) => {
    await fetch.put(`/blogposts/${id}`, {title, content});
    dispatch({type: "Update_BlogPosts", payload: {id, title, content}});
    callback();
  };

  return (
    <blogContext.Provider value={{blogPosts, getPost, updateBlogPost}}>
      {children}
    </blogContext.Provider>
  );
};

export default ContextProvider;
