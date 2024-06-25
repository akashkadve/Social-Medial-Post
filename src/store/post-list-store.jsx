import { createContext, useReducer } from "react";

export const PostList = createContext();

const reducer = (state, action) => {
  let currentState = state;
  if (action.type === "DELETE_POST") {
    currentState = state.filter((post) => post.id !== action.payload.postId);
  } else if (action.type === "ADD_POST") {
    currentState = [action.payload, ...state];
  }
  return currentState;
};

const PostListProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    console.log(`${userId},${postTitle},${postBody},${reactions},${tags}`);
    dispatch({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: tags,
      },
    });
  };
  const deletePost = (postId) => {
    dispatch({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };
  return (
    <PostList.Provider value={{ state, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const initialState = [
  {
    id: "1",
    title: "Going to Mumbai",
    body: "Hi Friends, I am going to Mumbai for vacations, Hope to enjoy a lot. Peace out.",
    reactions: 2,
    userId: "user-9",
    tags: ["vacation", "Mumbai", "enjoying"],
  },
  {
    id: "2",
    title: "Pass ho bhai",
    body: "4 saal ki mast k baad bhi ho gaye hain pass. Hard to believe",
    reactions: 15,
    userId: "user-12",
    tags: ["Graduating", "Unbelievable"],
  },
];

export default PostListProvider;
