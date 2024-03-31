import React from 'react'
import Image from 'next/image';
import { cardDetails } from '../interfaces';

const MainPageCard = (item:cardDetails) => {
    return (
        <div className="shadow bg-cardbgWhite dark:bg-cardBg text-3xl flex flex-col font-inter p-3">
            <Image className='w-full object-contain'  src={`/main-img${item.id}.png`} alt="img1" width={200} height={200}/>
            <p className='font-inter mt-5 text-csCardBtn dark:text-bgWhite text-md'>{item.title}</p>
            <div className='mt-5 text-csCardBtn dark:text-bgWhite bg-cardInBgWhite dark:bg-bgDark flex flex-row justify-start items-center px-3 py-2'>
                <div>
                    <p className='text-sm text-innerTextLight dark:text-evntsSport'>Total Events</p>
                    <p className='text-base'>{`${item.events} Events`}</p>
                </div>
                <div className='pl-7'>
                    <p className='text-sm text-innerTextLight dark:text-evntsSport'>sport</p>
                    <p className='text-base'>{item.sport}</p>
                </div>
            </div>
        </div>
    );
}

export default MainPageCard
