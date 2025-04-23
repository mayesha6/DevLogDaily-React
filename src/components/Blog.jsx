import React from 'react'
import { CiBookmark } from "react-icons/ci";

const Blog = ({blog, handleBookmark}) => {
    const {blog_img, author_img, author_name, blog_title, published_day, read_time, hashtag} = blog
  return (
    <div>
        <div>
            <img src={blog_img} alt="blog_img" className='w-full max-h-[500px] rounded'/>
        </div>
        <div className='flex justify-between items-center pt-4'>
            <div className='flex justify-between items-center gap-3'>
                <img src={author_img} alt='author_img' className='w-[80px] rounded-full border-4 border-gray-300'/>
                <div>
                    <h3 className='font-bold capitalize text-xl'>{author_name}</h3>
                    <p className='text-sm text-gray-400'>{published_day}</p>
                </div>
            </div>
            <div className='flex items-center gap-1'>
                <p className='text-sm text-gray-400 font-semibold'>{read_time} min read</p>
                <CiBookmark className='text-gray-500 cursor-pointer hover:text-blue-600 duration-300' onClick={()=>handleBookmark(blog.blog_title)}/>
            </div>
        </div>
        <h2 className='text-3xl lg:text-5xl font-bold lg:leading-[60px] py-2'>{blog_title}</h2>
        <ul className='flex gap-4 pb-2'>
            {hashtag.map((hashtag, idx)=>{
                return(
                    <li key={idx}>{hashtag}</li>
                )
            })}
        </ul>
        <button>
            <a href="#" className='text-blue-500 duration-300 hover:text-blue-700 hover:underline  pb-16 block'>Mark as read</a>
        </button>
    </div>
  )
}

export default Blog