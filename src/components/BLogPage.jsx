import {React, useState} from 'react'
import Blogs from './blogs'
import Bookmark from './Bookmark'

const BLogPage = () => {
  const [bookmark, setBookmark] = useState([])
  const handleBookmark = (blog) => {
    if(!bookmark.includes(blog)){
      const allBookmarkBlog = [...bookmark, blog]
      setBookmark(allBookmarkBlog)       
    }
  }
  return (
    <section>
        <div className="container mx-auto px-6">
            <div className='md:flex lg:gap-10 gap-5'>
                <Blogs handleBookmark={handleBookmark}/>
                <Bookmark bookmark={bookmark}/>
            </div>
        </div>
    </section>
  )
}

export default BLogPage