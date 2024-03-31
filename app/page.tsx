import React, { useState } from "react";
import CsCardsContainer from "./Components/CsCardsContainer";
import MainCardContainer from "./Components/MainCardContainer";
import { ThemeToggle } from "./Components/ThemeToggle";


export default function Home() {
  return (
      <main className="bg-bgWhite dark:bg-bgDark pt-8 flex flex-col justify-between items-center">
        <div className="w-5/6 mb-8">
          <div className="flex flex-row justify-start items-center"> <span className="font-poppins font-bold text-csCardBtn dark:text-cardbgWhite border-b-2 border-sportHighLight text-2xl">Sports</span></div>
        </div>
        <MainCardContainer/>
        <div className="bg-csBgLight dark:bg-csBgDark w-5/6 mt-5 flex flex-col justify-center items-center py-14 mb-14">
          <div className="w-5/6 flex flex-col justify-center items-center">
            <h2 className=" text-csCardBtn dark:text-bgWhite xl:text-5xl md:text-xl sm:text-sm font-poppins font-bold">Collection SpotLight</h2>
            <p className="font-inter text-base text-csCardBtn dark:text-bgWhite text-center pt-3 w-5/6">Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!</p>
          </div>
          <div className="w-full mt-14 flex flex-row justify-center items-center">
            <CsCardsContainer />
          </div>
        </div>
      </main>
  );
}
