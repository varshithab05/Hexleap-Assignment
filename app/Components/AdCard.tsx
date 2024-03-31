import React from 'react'
import Image from 'next/image'
import { adCard } from '../interfaces'

const AdCard = (item:adCard) => {
  return (
    <div className='flex flex-col shadow bg-cardbgWhite dark:bg-cardBg font-inter p-3'>
      <div className='w-full relative'>
        <Image className='w-full object-contain'  src={`/ad-img${item.id}.png`} alt="img1" width={200} height={200}/>
        <div className='z-5 absolute top-0 right-0 text-bgWhite text-sm font-large py-1 px-3 bg-csCardBtn'>Ad</div>
      </div>
      <div className='w-full p-3'>
        <p className='pt-3 text-xl text-csCardBtn dark:text-bgWhite'>{`${item.adTitle}`}</p>
        <p className='text-sm pt-2 text-csCardBtn dark:text-bgWhite'>{`${item.adCont}`}</p>
      </div>
    </div>
  )
}

export default AdCard
