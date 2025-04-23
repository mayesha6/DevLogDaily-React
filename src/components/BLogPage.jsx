import {React, useState} from 'react'
import Blogs from './blogs'
import Bookmark from './Bookmark'
import SpentTime from './SpentTime'

const BLogPage = () => {
  const [bookmark, setBookmark] = useState([])
  const [spentTime, setSpentTime] = useState(0)

  const handleBookmark = (blog) => {
    if(!bookmark.includes(blog)){
      const allBookmarkBlog = [...bookmark, blog]
      setBookmark(allBookmarkBlog)       
    }
  }

  const handleSpentTime = (blog) => {
    setSpentTime(()=>spentTime+blog)
  }
  return (
    <section className='py-10'>
        <div className="container mx-auto px-6">
            <div className='md:flex lg:gap-10 gap-5'>
                <Blogs handleBookmark={handleBookmark} handleSpentTime={handleSpentTime}/>
                <div className='md:w-1/3 lg:1/5'>
                  <SpentTime spentTime={spentTime}/>
                  <Bookmark bookmark={bookmark}/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BLogPage