import React, { useEffect, useState } from 'react'
import Blog from './blog'

const Blogs = ({handleBookmark}) => {
    const [blogs, setBlogs] = useState([])
    useEffect(()=>{
        fetch('blogData.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    }, [])
  return (
    <div className='md:w-2/3 lg:w-4/5'>
        {blogs.map((blog)=>{
            return(
                <Blog key={blog.id} blog={blog} handleBookmark={handleBookmark}/>
            )
        })}
    </div>
  )
}

export default Blogs