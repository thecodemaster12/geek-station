import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const PostDetailsPage = () => {
  const { id } = useParams(); // Grabs the 'id' wildcard from the URL
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:3001/posts/${id}`)
      .then((res) => {
        setPost(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching post details:", err);
        setLoading(false);
      });
  }, [id]); // Re-run if the ID in the URL changes

  if (loading) return <div className="text-white p-4">Loading post...</div>;
  if (!post) return <div className="text-white p-4">Post not found!</div>;

  return (
    <div className="p-6 bg-dark-gray rounded-md text-white space-y-4">
      <h1 className="text-4xl font-bold text-primary">{post.title}</h1>
      <div className="text-sm text-tertiary">Posted by User • Post ID: {id}</div>
      <hr className="border-dark-gray" />
      <p className="text-lg leading-relaxed text-gray-200">{post.content}</p>
    </div>
  );
};

export default PostDetailsPage;