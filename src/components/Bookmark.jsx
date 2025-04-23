import React from 'react'

const Bookmark = ({bookmark}) => {
  return (
    <div className='bg-gray-300 px-2 py-4 rounded-lg'>
        <h3 className='pb-5 text-2xl font-bold'>Bookmark: {bookmark.length}</h3>
        <ul className='flex flex-col gap-2'>
            {bookmark.map((bookmark, idx)=>{
                return(
                    <li key={idx} className='bg-gray-100 p-2 rounded-lg font-medium'>{bookmark.blog_title}</li>
                )
            })}
        </ul>
    </div>
  )
}

export default Bookmark