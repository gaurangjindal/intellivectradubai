import * as React from 'react';
import { PageStarter } from '@/Components/PageStarter';
import Image from 'next/image';
import { TechPartCard } from '@/Components/Cards/TechPartCard';

const Page = () => {
    const partners = [
        {
            imageSrc: "/images/techpartner/tp6.png",
            link: "https://www.microsoft.com/en-in",
            out: true,
        },
        {
            imageSrc: "/images/techpartner/tp11.png",
            link: "https://www.hpe.com/in/en/home.html",
            out: true
        },
        {
            imageSrc: "/images/techpartner/tp5.png",
            link: "https://www.redhat.com/en",
            out: true
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
            imageSrc: "/images/techpartner/tp14.png",
            link: "https://www.cohesity.com/"
        },
        {
            imageSrc: "/images/techpartner/tp12.png",
            link: "https://about.gitlab.com/"
        },
        {
            imageSrc: "/images/techpartner/tp4.png",
            link: "https://www.sap.com/india/index.html"
        },

        {
            imageSrc: "/images/techpartner/tp7.png",
            link: "https://www.imperva.com/"
        },
        {
            imageSrc: "/images/techpartner/tp15.png",
            link: "https://www.exagrid.com/"
        },
        {
            imageSrc: "/images/techpartner/tp9.png",
            link: "https://arconnet.com/"
        },
        {
            imageSrc: "/images/techpartner/tp1.png",
            link: "https://www.aquilai.io/",
            out: true
        },
        {
            imageSrc: "/images/techpartner/tp8.png",
            link: "https://www.prolabs.com/",
            out: true
        },
        {
            imageSrc: "/images/techpartner/tp13.png",
            link: "https://www.arista.com/en/"
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
                        <div className="border-[#F19F1F] border-l-2 rounded-lg p-4 space-y-2 md:space-y-4 px-2 md:px-4">
                            <h1 className="text-2xl text-white md:text-3xl lg:text-4xl">
                                <span className='text-[#F19F1F]'>Technology</span> Partner
                            </h1>
                            <p className="w-full" style={{ color: 'white' }}>
                                Where Innovation Meets Collaboration.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-black px-8 py-3 space-y-4'>
                {/* <h1 className='text-4xl font-bold text-center'>Technology <span className='text-[#F19F1F]'>Partner</span></h1> */}
                <p>Collaborating with industry-leading technology vendors, we deliver bespoke technology solutions precisely tailored to meet our customer&apos;s business needs. From Artificial Intelligence to DevOps, Cloud Solutions to Cybersecurity our strategic partnerships ensure access to cutting-edge innovations and expertise, empowering organizations with the latest advancements in technology. With seamless integration to personalized support, we&apos;re committed to driving success through tailored solutions that optimize efficiency, enhance productivity, and propel growth.</p>
            </div>
            <div className="w-full flex items-center justify-center p-4">

                <div className="flex items-center justify-center">
                    <div className="md:w-[80%] flex flex-wrap justify-center items-center">
                        {
                            partners.map((partner, idx) => {
                                return (
                                    <a href={partner.link} key={idx} target="_blank"><div className="p-2"><div className="border-2 bg-white rounded-md p-2 md:h-[90px] h-[60px] w-[150px] md:w-[200px] items-center justify-center"><div className="h-full relative w-full"><Image objectFit={partner.out ? "fill" : "cover"} alt="Technology Partner" layout='fill' src={partner.imageSrc} /></div></div></div></a>
                                )
                            })
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Page
