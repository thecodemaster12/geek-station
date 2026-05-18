import { Link } from "react-router-dom"

const BlogCard = ({post}) => {
  return (
    <>
        <div className="p-4 border border-dark-gray rounded-md">
            <div className="">
                user info
            </div>
            <div className="">
                <Link to={`/posts/${post.id}`}>
            
                    <h2 className="text-2xl font-bold text-gray-50 hover:text-indigo-500">{post.title}</h2>
                </Link>
                <p>{post.content}</p>

                <div className="">tags</div>
            </div>
            <div className="">
                Like-comments-share
            </div>
        </div>
    </>
  )
}

export default BlogCard