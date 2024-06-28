import * as React from 'react';
import { Button } from './ui/Button';

export const PageStarter = ({ exploreactive,tit1Col, tit1, tit2, description, imageSrc, descColor, desc }) => {
    return (
        <div
            className="px-4 md:px-10 lg:px-20 flex items-center h-[50vh] md:h-[80vh] w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${imageSrc})` }}
        >
            <div className="flex flex-col space-y-4 md:space-y-8 max-w-full md:max-w-2xl lg:max-w-none">
                <div className="border-[#F19F1F] rounded-lg  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 p-4 bg-white  space-y-2 md:space-y-4 border-l-2 px-2 md:px-4">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl">
                        <span style={{ color: tit1Col }}>{tit1}</span>
                        <span className="text-[#F19F1F]">{tit2}</span>
                    </h1>
                    <p className="w-full md:w-[75%] lg:w-[50%]" style={{ color: descColor }}>
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
