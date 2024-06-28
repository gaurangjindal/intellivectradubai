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
                <div className="flex flex-col space-y-4 md:space-y-8 max-w-full md:max-w-2xl lg:max-w-none">
                    <div className="border-[#F19F1F] space-y-2 md:space-y-4 border-l-2 px-2 md:px-4">
                        <h1 className="text-2xl md:text-3xl lg:text-4xl">
                            <span style={{ color: tit1Col }}>{tit1}</span>
                            <span className="text-[#F19F1F]">{tit2}</span>
                        </h1>
                        <p className="w-full md:w-[75%] lg:w-[50%]" style={{ color: descColor }}>
                            {desc}
                        </p>
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
