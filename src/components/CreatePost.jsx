import { useContext } from "react";
import { useRef } from "react";
import { PostList } from "../store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostList);

  const userIdElements = useRef();
  const postTitleElements = useRef();
  const postBodyElements = useRef();
  const reactionsElements = useRef();
  const tagsElements = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElements.current.value;
    const postTitle = postTitleElements.current.value;
    const postBody = postBodyElements.current.value;
    const reactions = reactionsElements.current.value;
    const tags = tagsElements.current.value.split(" ");

    userIdElements.current.value = "";
    postTitleElements.current.value = "";
    postBodyElements.current.value = "";
    reactionsElements.current.value = "";
    tagsElements.current.value = "";

    addPost(userId, postTitle, postBody, reactions, tags);
  };

  return (
    <>
      <form className="create-post" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            Enter your User Id here
          </label>
          <input
            type="text"
            ref={userIdElements}
            className="form-control"
            id="userId"
            placeholder="Your user Id"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post Title
          </label>
          <input
            type="text"
            ref={postTitleElements}
            className="form-control"
            id="title"
            placeholder="How are you feeling today..."
          />
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Post Content
          </label>
          <textarea
            type="text"
            ref={postBodyElements}
            rows="4"
            className="form-control"
            id="body"
            placeholder="Tell us more about it"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="reactions" className="form-label">
            Number of reactions
          </label>
          <input
            type="text"
            ref={reactionsElements}
            className="form-control"
            id="reactions"
            placeholder="How many people reacted to this post"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Enter your hashtag here
          </label>
          <input
            type="text"
            ref={tagsElements}
            className="form-control"
            id="tags"
            placeholder="Enter tags using space"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
    </>
  );
};

export default CreatePost;
