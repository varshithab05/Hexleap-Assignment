'use client';
import React from 'react'
import { useState } from 'react';
import { useGlobalContext } from '../Context/store';




const SeeMore = () => {
  const {limit,setLimit} = useGlobalContext();
  function updateVisibleCards(){
    setLimit(limit+5);
  }
  return (
    <div className='bg-Btn text-base font-semibold text-bgWhite px-8 rounded py-2.5 '>
        <button onClick={updateVisibleCards}>See more</button>
    </div>
  )
}

export default SeeMore ;
// export limit as