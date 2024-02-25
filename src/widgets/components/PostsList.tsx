import React from "react";
import Post, { PostType } from "../../shared/module/components/Post"
import { useGetPostsQuery } from "../api/postsApi";
import s from "./PostsList.module.css"

const PostsList: React.FC = () => {
  const { data: posts = [], isLoading } = useGetPostsQuery();
  if (isLoading) {
    return <div className={s.loading}>Loading...Please wait...</div>;
  }
  return (
    <div className={s.posts_list}>
      {posts.map((post: PostType) => (
        <Post post={post} key={post.id}></Post>
      ))}
    </div>
  );
};

export default PostsList;