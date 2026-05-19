import axios from "axios"
import BlogCard from "../components/posts/PostCard"
import { useEffect, useState } from "react"

const HomePage = () => {

  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {

    try {
      axios.get('http://localhost:3001/posts')
      .then(res => {
        setPosts(res.data)
        setLoading(false)
      })
      .catch(err => console.log(err))
    } catch (error) {
      console.log(error)
    }
  }, [])

  if (loading) {
    return <h1>Loading...</h1>
  }
  return (
    <>
      <div className="space-y-4 p-4">
        {posts.length === 0 && <h1>No posts found</h1>}
        {posts.map(post => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </>
  )
}

export default HomePage