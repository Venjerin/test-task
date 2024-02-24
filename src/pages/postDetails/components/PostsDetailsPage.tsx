import { Link, useNavigate, useParams } from "react-router-dom";
import { useGetPostByIdQuery } from "../../../widgets/api/postsApi";
import { PostType } from "../../../shared/module/components/Post";
import s from "./PostsDetailsPage.module.css";

const PostDetailsPage = () => {
  const navigate = useNavigate();
  const { postId } = useParams<{ postId: string }>();

  const { data, isLoading } = useGetPostByIdQuery(Number(postId));
    const post: PostType = data;

  if (isLoading) {
    return <div className={s.loading}>Loading...Please wait...</div>;
  }
  if (!post) {
    navigate("/not-found");
  }
  return (
    <div className={s.post_details}>
        <h2>{post.title.charAt(0).toLocaleUpperCase() + post.title.slice(1)}</h2>
        <p>{post.body.charAt(0).toLocaleUpperCase() + post.body.slice(1)}</p>
        <Link to="/" className={s.back_button}>Назад</Link>
    </div>
  );
};

export default PostDetailsPage;