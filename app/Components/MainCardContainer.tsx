'use client';
import React, { useContext } from 'react'
import { details,adCardDetails } from '../dataFile'
import AdCard from './AdCard'
import MainPageCard from './MainPageCard'
import { useState } from 'react'
import { useGlobalContext } from '../Context/store';
import SeeMore from './SeeMore'

const MainCardContainer = () => {
  const {limit,setLimit} = useGlobalContext()
  return (
    <div className='w-5/6 flex flex-col justify-center items-center'>
      <div className='grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-2 w-full'>
          {
            details.map((item)=> (
              item.id<limit?
                <MainPageCard key={item.id} {...item} />   
              : <></>
            ))
          }
          {
            adCardDetails.map((item)=> (
              <AdCard key={item.id} {...item} />
            ))
          }
      </div>
      <div className='w-full flex justify-center items-center mt-6'>
        <SeeMore />
      </div>
    </div>
  )
}

export default MainCardContainer