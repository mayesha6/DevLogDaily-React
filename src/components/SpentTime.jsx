import React from 'react'

const SpentTime = ({spentTime}) => {
  return (
    <div>
        <p className='font-semibold text-purple-600 bg-purple-200 border-[1px] border-purple-600 py-3 text-center rounded-lg mb-7'>Spent time on read : {spentTime} min</p>
    </div>
  )
}

export default SpentTime