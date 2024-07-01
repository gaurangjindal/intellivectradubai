import * as React from 'react';
import { PageStarter } from '@/Components/PageStarter';
import Image from 'next/image';
import { TechPartCard } from '@/Components/Cards/TechPartCard';

const Page = () => {
    const partners = [
        {
            imageSrc: "/images/tp1.png",
            link: "/"
        },
        {
            imageSrc: "/images/tp2.png",
            link: "/"
        },
        {
            imageSrc: "/images/tp3.png",
            link: "/"
        },
        {
            imageSrc: "/images/tp4.png",
            link: "/"
        },
        {
            imageSrc: "/images/tp5.png",
            link: "/"
        },
        {
            imageSrc: "/images/tp6.png",
            link: "/"
        },
        {
            imageSrc: "/images/tp7.png",
            link: "/"
        },
        {
            imageSrc: "/images/tp8.png",
            link: "/"
        },
        {
            imageSrc: "/images/tp9.png",
            link: "/"
        },
        {
            imageSrc: "/images/tp10.png",
            link: "/"
        },
        {
            imageSrc: "/images/tp11.png",
            link: "/"
        },
        {
            imageSrc: "/images/tp12.png",
            link: "/"
        },
        {
            imageSrc: "/images/tp13.png",
            link: "/"
        },
        {
            imageSrc: "/images/tp14.png",
            link: "/"
        },
        {
            imageSrc: "/images/tp15.png",
            link: "/"
        },
    ]
    return (
        <div className="text-black bg-white space-y-4">
            <div
                className="px-4 md:px-10 lg:px-20 flex items-center h-[50vh] w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${"/images/banners/techpartbanner.png"})` }}
            >
                <div className="flex flex-col space-y-4 md:space-y-8 max-w-full md:max-w-2xl lg:max-w-none">
                    <div className="border-[#F19F1F] border-l-4 p-4 space-y-2 md:space-y-4 px-2 md:px-4">
                        <h1 className="text-2xl text-white font-bold md:text-3xl lg:text-4xl">
                            Technology Partner
                        </h1>
                        <p className="w-full" style={{ color: 'white' }}>
                            Empowering innovation through seamless technology partnerships.
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-full p-4 grid grid-cols-2 md:grid-cols-5 md:gap-y-8 gap-y-4   justify-items-center">
                {
                    partners.map((partner) => {
                        return <TechPartCard imgsrc={partner.imageSrc} link={partner.link} />
                    })
                }
            </div>
        </div>
    )
}

export default Page
