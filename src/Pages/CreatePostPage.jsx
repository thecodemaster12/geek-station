import { useState } from 'react'
import TextEditor from '../components/TextEditor'

const CreatePostPage = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Submitting Post:', { title, content })
    // Here you would typically send the data to your API
    alert('Post created successfully! Check console for data.')
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-dark-gray shadow-md rounded-lg mt-10">
      <h1 className="text-3xl font-bold mb-6 border-b pb-2">Create New Blog Post</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium mb-1">
            Post Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter a catchy title..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Post Content
          </label>
          <TextEditor content={content} onChange={setContent} />
        </div>

        <div className="flex justify-end pt-4">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors shadow-sm"
          >
            Publish Post
          </button>
        </div>
      </form>
      
      <div className="mt-10 p-4  rounded-lg border border-dashed border-gray-300">
        <h2 className="text-sm font-semibold uppercase tracking-wider mb-2">Editor Output Preview (HTML):</h2>
        <div className="text-xs font-mono break-all overflow-auto max-h-40 p-2 rounded border border-gray-200">
          {content || 'Wait for it...'}
        </div>
      </div>
    </div>
  )
}

export default CreatePostPage