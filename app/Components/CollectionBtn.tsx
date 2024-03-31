'use client';
import React from 'react'

const CollectionBtn = (itemType:any) => {
  return (
    <div className='w-full flex justify-center items-center mb-3'>
        <button className='w-5/6 bg-csCardBtn text-cardbgWhite px-1 py-2 text-sm text-center'>
            {`${itemType.data} Collection`}
        </button>
    </div>
  )
}

export default CollectionBtn