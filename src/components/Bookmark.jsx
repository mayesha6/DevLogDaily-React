import React from 'react'

const Bookmark = ({bookmark}) => {
    console.log(bookmark)
  return (
    <div className='md:w-1/3 lg:1/5 bg-gray-300 px-2'>
        <h3 className='pb-5 text-2xl font-bold'>Bookmark: {bookmark.length}</h3>
        <ul className='flex flex-col gap-2'>
            {bookmark.map((bookmark, idx)=>{
                return(
                    <li key={idx} className='bg-white p-2 rounded-lg font-medium'>{bookmark}</li>
                )
            })}
        </ul>
    </div>
  )
}

export default Bookmark