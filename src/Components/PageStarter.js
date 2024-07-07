import * as React from 'react';
import { Button } from './ui/Button';

export const PageStarter = ({ exploreactive, tit1Col, tit1, tit2, description, imageSrc, descColor, desc }) => {
    return (
        <div
            className="relative px-4 md:px-10 lg:px-20 flex items-center h-[50vh] md:h-[80vh] w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${imageSrc})` }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm"></div>
            <div className="relative flex w-full rounded-lg flex-col space-y-4 md:space-y-8 p-4">
                <div className="border-[#F19F1F] rounded-lg p-4 space-y-2 md:space-y-4 border-l-2 px-2 md:px-4">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl">
                        <span className="text-[#F19F1F]">{tit1}</span>
                        <span className="text-white">{tit2}</span>
                    </h1>
                    <p className="w-full" style={{ color: 'white' }}>
                    {desc}
                    </p>
                </div>
                <div className={exploreactive ? "flex" : "hidden"}>
                    <Button buttonText={"Explore"} functionToPerform={null} />
                </div>
            </div>
        </div>
    )
}
