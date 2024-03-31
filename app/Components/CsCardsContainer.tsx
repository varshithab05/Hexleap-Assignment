'use client';

import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../Context/store';
import { csCardsDetails } from '../dataFile';
import CsCardsComponent from './CsCardsComponent';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CsCardsContainer = () => {
    const [size, setSize] = useState(3);
    const { limit, setLimit, currentIndex, setCurrentIndex } = useGlobalContext();

    const handleLeft = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + csCardsDetails.length) % csCardsDetails.length);
    };

    const handleRight = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % csCardsDetails.length);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 786) {
                setSize(1);
            } else {
                setSize(3);
            }
        };
        handleResize();

        window.addEventListener('resize', handleResize);

        // Cleanup function to remove event listener when component unmounts
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (currentIndex > csCardsDetails.length - size) {
            setCurrentIndex(0);
        }
    }, [currentIndex, size]);

    return (
        <div className="w-full flex flex-row justify-center items-center">
            <div className="w-full flex justify-center items-center">
                <div className="w-1/6 flex justify-center items-center">
                    <button className="px-3 py-2  xl:border-2 lg:border-2 md:border-2 sm:border-0 border-scrollBtns" onClick={handleLeft}>
                        <FontAwesomeIcon icon={faChevronLeft} className="xl:w-3 xl:h-6 sm:w-2 h-4  text-scrollBtns" />
                    </button>
                </div>
                <div className="flex justify-center items-center gap-4 w-4/6 space-x-4 transition-transform duration-300 ease-in-out">
                    {csCardsDetails.slice(currentIndex, currentIndex + size).map((card) => (
                        <CsCardsComponent key={card.id} {...card} />
                    ))}
                </div>
                <div className="w-1/6 flex justify-center items-center">
                    <button className="px-3 py-2  xl:border-2 lg:border-2 md:border-2 sm:border-0 border-scrollBtns" onClick={handleRight}>
                        <FontAwesomeIcon icon={faChevronRight} className="xl:w-3 xl:h-6 sm:w-2 h-4 text-scrollBtns" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CsCardsContainer;
