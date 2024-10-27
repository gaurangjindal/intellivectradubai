import * as React from 'react';
import { PageStarter } from '@/Components/PageStarter';
import Image from 'next/image';
import { TechPartCard } from '@/Components/Cards/TechPartCard';
import Link from 'next/link';

const Page = () => {
    const partners = [
        {
            imageSrc: "/images/techpartner/tp6.png",
            link: "https://www.microsoft.com/",
            out: true,
        },
        {
            imageSrc: "/images/techpartner/tp11.png",
            link: "https://www.hpe.com/",
            out: true
        },
        {
            imageSrc: "/images/techpartner/tp5.png",
            link: "https://www.redhat.com/",
            out: true
        },
        {
            imageSrc: "/images/techpartner/tp2.png",
            link: "https://www.vmware.com/"
        },
        {
            imageSrc: "/images/techpartner/tp17.png",
            link: "https://cloud.google.com/",
            out: true
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
            imageSrc: "/images/techpartner/tp21.png",
            link: "https://aws.amazon.com/?nc2=h_lg",
            out: true
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
            imageSrc: "/images/techpartner/tp8.svg",
            link: "https://www.fortinet.com/",
            out: true
        },
        {
            imageSrc: "/images/techpartner/tp13.png",
            link: "https://www.arista.com/en/"
        },
        {
            imageSrc: "/images/techpartner/tp16.png",
            link: "https://www.trendmicro.com/"
        },
    
        {
            imageSrc: "/images/techpartner/tp18.jpg",
            link: "https://www.commvault.com/",
        },
        {
            imageSrc: "/images/techpartner/tp19.jpg",
            link: "https://www.proofpoint.com/",
        },
        {
            imageSrc: "/images/techpartner/tp20.jpeg",
            link: "https://www.veeam.com/",
            out: true
        },
    
      ]

    const imgSrc = "/images/banners/techpartbanner.jpg";

    return (
        <div className="text-black bg-white bg-opacity-10 space-y-4">
            <PageStarter tit1Col={"black"} tit1={"Technology"} tit2={" Partner"} imageSrc={imgSrc} descColor={"black"} desc={"Where Innovation meets Collaboration."} />
            <div className='text-black flex flex-col items-center justify-center px-8 py-3 space-y-4'>
                <h1 className='text-4xl font-bold text-justify md:text-center'>Fostering partnerships with companies that align with our values</h1>
                <p className='w-[95%] md:text-center text-justify'>Collaborating with industry-leading technology vendors, we deliver bespoke technology
                    solutions precisely tailored to meet our customers’ business needs. From Artificial Intelligence
                    to DevOps, Cloud Solutions to Cybersecurity our strategic partnerships ensure access to cutting-
                    edge innovations and expertise, empowering organizations with the latest advancements in
                    technology. With seamless integration to personalized support, we&#39;re committed to driving
                    success through tailored solutions that optimize efficiency, enhance productivity, and propel
                    growth.</p>
            </div>
            <div className="w-full flex items-center justify-center p-4 bg-[#F19F1F] bg-opacity-10">

                <div className="flex items-center justify-center">
                    <div className="md:w-[100%] flex flex-wrap justify-center items-center">
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

            <div className='p-4 w-full flex items-center justify-center md:px-4 md:py-4'>
                <div className='p-4 space-x-2 flex items-center justify-center border border-black flex flex-col lg:flex-row'>
                    <p>Our partner network is constantly growing. Don&apos;t see the Vendor you&apos;re looking for?</p>
                    <Link href={"/contactus"} className='px-4 bg-[#F19F1F] text-white rounded-lg p-2'>Contact Us</Link>
                </div>

            </div>
        </div>
    )
}

export default Page
