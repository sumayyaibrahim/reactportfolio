import React from 'react'

function Loading() {
  return (
    <div className='fixed z-50 inset-0  flex flex-col items-center justify-center'>
        <img src="/public/Fidget-spinner (1).gif" alt="Loading..." className="w-30 h-30 " />
    </div>
  )
}

export default Loading