import { Link } from "react-router-dom";
import s from "./Post.module.css";

export type PostType = {
    userId : number;
    id: number;
    title: string;
    body: string;
};

type PostProps = {
    post:PostType;
}

const Post: React.FC<PostProps> = ({post}) => {
  return (
    <>
      <div className={s.post} key={post.id}>
        <h2>{post.id}. {post.title.charAt(0).toUpperCase() + post.title.slice(1)}</h2>
        <p>{post.body.charAt(0).toUpperCase() + post.body.slice(1, 100) + "..."}</p>
        <Link to={`/posts/${post.id}`} className={s.view_button}>Просмотр</Link>
      </div>
    </>
  );
};


export default Post;