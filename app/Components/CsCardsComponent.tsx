import React from 'react'
import Image from 'next/image'
import { csCards } from '../interfaces'
import CollectionBtn from './CollectionBtn'

const CsCardsComponent = (item:csCards) => {
    const itemType:string = item.type;
  return (
    <div className='bg-cardbgWhite shadow dark:bg-cardBg flex flex-col w-56'>
        <div className='w-full py-2 px-2 flex justify-center items-center'><Image className='object-contain' src={`/cs-img${item.id}.jpeg`} width={215} height={350} alt='cs-img'></Image></div>
        <div className='flex flex-row justify-between w-full mt-3'>
          <div className='h-5 w-5 bg-cardCircleLight shadow-3xl dark:shadow-none dark:bg-ticketCircle -ml-2 -mt-2 rounded-full'></div>
          <div className='border-dashed dark:border-cardbgDark border-t-2 border-ticketLight w-5/6 h-1'></div>
          <div className='h-5 w-5 bg-cardCircleLight shadow-4xl dark:shadow-none dark:bg-ticketCircle -mr-2 -mt-2 rounded-full'></div>
        </div>
        <div className='mt-2 flex flex-col justify-center items-center'>
          <p className='px-3 text-md text-csCardBtn dark:text-cardbgWhite font-poppins mb-2'>{`${item.cardTitle}`}</p>
          <div className='px-3 text-base text-csCardBtn dark:text-cardbgWhite text-center font-poppins mb-2 flex flex-row items-center'>
            <p className='pr-2 border-r border-solid border-csCardBtn dark:border-cardbgWhite'>{item.date}</p>
            <p className='pr-2 pl-2 border-r border-solid border-csCardBtn dark:border-cardbgWhite'>{item.day}</p>
            <p className='pl-2'>{item.time}</p> 
          </div>
          <p className='px-3 text-base text-innerTextLight dark:text-evntsSport text-center font-inter mb-2'>{`${item.place}`}</p>
        </div>
        <CollectionBtn key={item.id} data={itemType}/>
    </div>
  )
}

export default CsCardsComponent