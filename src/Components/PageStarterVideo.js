import React from 'react';
import { Button } from './ui/Button';
import Link from 'next/link';

const PageStarterVideo = ({ videoSrc, tit1, tit1Col, tit2, desc, descColor,link }) => {
    return (
        <div className="relative h-[50vh] md:h-[80vh] w-full">
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src={videoSrc}
                autoPlay
                muted
                loop
            ></video>
            <div className="relative px-4 md:px-10 lg:px-20 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 bg-white  flex items-center h-full w-full">
                <div className="flex flex-col h-full relative justify-center items-center space-y-4 md:space-y-12 w-full">
                    <div className='fixed bottom-14'>
                        <Link href={link}><button buttonText={"Explore"}  className='cursor-pointer rounded-lg p-2 px-8 h-fit w-fit text-white bg-[#F19F1F]' >Explore</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageStarterVideo;
