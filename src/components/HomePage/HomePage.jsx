import { useState, useEffect } from 'react';
import nftgirl from '../../assets/nft-girl.jpg';
import nftpyramid from '../../assets/nft-pyramid.jpg';
import nftboat from '../../assets/nft-boat.jpg';
import next from '../../assets/arrow-right.svg';
import NFTBlockchainsTable from '../NFTBlockchainsTable/NFTBlockchainsTable';

function HomePage(){
    return (
        <div className='text-indigo-950 dark:text-white px-6 py-5 sm:px-14 sm:py-24 flex justify-between'>

          <div className='flex px-2'>
            <div className="homepage-main-text mt-16">
                <h1 className='text-8xl font-semibold'>
                    Discover, collect <br />and sell NFTs &#128444;
                </h1>
                <p className='text-md font-thin tracking-widest mt-5'>
                    Discover the most outstanding NFTs in all topics of life. <br /> Create your own NFTs and sell them!
                </p>
                <div className="relative w-56 group">
                    <button className="bg-indigo-950 hover:bg-violet-950 dark:bg-sky-500 mt-6 cursor-pointer text-white text-center rounded-full w-56 h-12 pt-1 duration-500 dark:hover:bg-sky-600">Learn more</button>
                    <img src={next} className="absolute right-7 top-12 transform -translate-y-1/2 w-5 h-5 transition-transform duration-300 ease-in-out group-hover:translate-x-1" alt="learn more icon" /> 
                </div>
                <NFTBlockchainsTable />
            </div>
            
            <div className="hidden sm:block homepage-images relative ml-24">
                <img className="w-96 min-w-[18rem] h-auto rounded-md mb-6 animate-float1" src={nftgirl} alt="nft girl image" />
                <img className="w-96 h-auto rounded-md mb-2 animate-float2" src={nftpyramid} alt="nft pyramid image" />
                <img className="hidden lg:block w-96 h-auto rounded-md mb-2 absolute animate-float3 top-40" src={nftboat} alt="nft boat image" />
            </div>
          </div>
        </div>
    );    
    
}

export default HomePage;