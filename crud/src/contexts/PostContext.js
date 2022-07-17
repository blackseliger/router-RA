import { createContext } from "react";

const PostContext = createContext({
    posts: null,
    post: null,
})

export default PostContext;