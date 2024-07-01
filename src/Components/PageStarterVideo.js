import React from 'react';
import { Button } from './ui/Button';

const PageStarterVideo = ({ videoSrc, tit1, tit1Col, tit2, desc, descColor }) => {
    return (
        <div className="relative h-[50vh] md:h-[80vh] w-full">
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src={videoSrc}
                autoPlay
                muted
                loop
            ></video>
            <div className="relative px-4 md:px-10 lg:px-20 flex items-center h-full w-full">
                <div className="flex flex-col justify-center items-center space-y-4 md:space-y-8 w-full">
                    <div className="border-[#F19F1F] justify-center items-center w-full space-y-2 md:space-y-4 px-2 md:px-4">
                        <h1 className="text-2xl md:text-3xl text-center lg:text-4xl">
                            <span style={{ color: tit1Col }}>{tit1}</span>
                            <span className="text-[#F19F1F]">{tit2}</span>
                        </h1>
                    </div>
                    <div>
                        <Button buttonText={"Explore"} functionToPerform={null} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageStarterVideo;
