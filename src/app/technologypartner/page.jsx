import * as React from 'react';
import { PageStarter } from '@/Components/PageStarter';
import Image from 'next/image';
import { TechPartCard } from '@/Components/Cards/TechPartCard';

const Page = () => {
    const partners = [
        {
            imageSrc: "/images/techpartner/tp1.png",
            link: "https://www.aquilai.io/"
        },
        {
            imageSrc: "/images/techpartner/tp2.png",
            link: "https://www.vmware.com/"
        },
        {
            imageSrc: "/images/techpartner/tp3.png",
            link: "https://www.veritas.com/"
        },
        {
            imageSrc: "/images/techpartner/tp4.png",
            link: "https://www.sap.com/india/index.html"
        },
        {
            imageSrc: "/images/techpartner/tp5.png",
            link: "https://www.redhat.com/en"
        },
        {
            imageSrc: "/images/techpartner/tp6.png",
            link: "https://www.microsoft.com/en-in"
        },
        {
            imageSrc: "/images/techpartner/tp7.png",
            link: "https://www.imperva.com/"
        },
        {
            imageSrc: "/images/techpartner/tp8.png",
            link: "https://www.imperva.com/"
        },
        {
            imageSrc: "/images/techpartner/tp9.png",
            link: "https://arconnet.com/"
        },
        {
            imageSrc: "/images/techpartner/tp10.png",
            link: "https://arconnet.com/"
        },
        {
            imageSrc: "/images/techpartner/tp11.png",
            link: "https://www.hpe.com/in/en/home.html"
        },
        {
            imageSrc: "/images/techpartner/tp12.png",
            link: "https://about.gitlab.com/"
        },
        {
            imageSrc: "/images/techpartner/tp13.png",
            link: "https://www.arista.com/en/"
        },
        {
            imageSrc: "/images/techpartner/tp14.png",
            link: "https://www.cohesity.com/"
        },
        {
            imageSrc: "/images/techpartner/tp15.png",
            link: "https://www.exagrid.com/"
        },
    ]
    return (
        <div className="text-black bg-white space-y-4">
            <div
                className="h-[50vh] w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${"/images/banners/techpartbanner.png"})` }}
            >
                <div className="bg-black px-4 md:px-10 lg:px-20 bg-blend-overlay flex items-center  w-full h-full bg-opacity-10 backdrop-blur-sm">
                    <div className="flex flex-col space-y-4 md:space-y-8 max-w-full md:max-w-2xl lg:max-w-none">
                        <div className="border-[#F19F1F] border-l-4 p-4 space-y-2 md:space-y-4 px-2 md:px-4">
                            <h1 className="text-2xl text-white font-bold md:text-3xl lg:text-4xl">
                                <span className='text-[#F19F1F]'>Technology</span> Partner
                            </h1>
                            <p className="w-full" style={{ color: 'white' }}>
                            Lorem Ipsum is simply dummy text.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full p-4 grid grid-cols-2 md:grid-cols-4 md:gap-y-8 gap-y-4   justify-items-center">
                {
                    partners.map((partner, idx) => {
                        return <TechPartCard key={idx} imgsrc={partner.imageSrc} link={partner.link} />
                    })
                }
            </div>
        </div>
    )
}

export default Page
