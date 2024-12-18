'use client';
import { PageStarter } from '@/Components/PageStarter';
import Image from 'next/image';
import { useState } from 'react';
import { jsonforServices } from '@/data';
import Link from 'next/link';

export default function Page() {
    const [activeServIdx, setActiveServIdx] = useState('technology');
    const handleSetActive = (index) => {
        setActiveServIdx(index);
    };

    return (
        <div>
            {/* PageStarter component with optimized props */}
            <PageStarter
                desc="Empowering Your Digital Journey. Seamless Solutions for Every IT Need."
                tit1="Solution"
                tit2=" & Services"
                tit1Col="white"
                descColor="white"
                imageSrc="/images/banners/solandservicebanner.jpg"
            />



            {/* Main content section */}
            <div className="flex flex-col lg:flex-row justify-center p-8 px-10 space-y-8 md:space-y-0 lg:space-x-20 bg-white text-black">
            <div className="flex lg:w-[40%] w-full">
          {/* First Image */}
          <div className="bg-white w-full">
            <div className="relative w-[100%] md:w-[450px] md:h-[400px] h-[250px]">
              <Image
                src="/images/banners/solandservvert.jpg"
                alt="Team hands"
                layout='fill'
              />
            </div>
          </div>
          {/* Second Image */}
          <div className="p-4 w-full z-[100] bg-white rounded-lg  md:mt-[300px] mt-[150px] md:ml-[-200px] ml-[-100px]">
            <div className="relative w-[100%] md:w-[550px] md:h-[200px] h-[150px] max-w-xs">
              <Image
                src="/images/banners/solandservhorz.jpg"
                alt="Team meeting"
                layout="fill"
              />
            </div>
          </div>
        </div>
                <div className="w-full lg:w-[50%] space-y-6">
                    {/* Main text content */}
                    <h1 className="text-[#F19F1F] text-4xl font-normal">
                        <span className="text-black">Solutions</span> & Services
                    </h1>
                    <p className="text-[#3F444]">
                        Intelli Vectra Technology offers comprehensive solutions and services designed to simplify IT complexities and drive business success. From custom software development and IT consulting to cloud solutions and cybersecurity, we deliver tailored strategies that optimize operations and enhance efficiency. Our approach combines cutting-edge technology with industry expertise, ensuring scalable solutions that meet diverse business needs. Partner with us to navigate the digital landscape with confidence and achieve lasting growth.
                    </p>
                </div>
            </div>

            {/* Service navigation section bg-gradient-to-r from-white text-black via-[#F4F4F4] to-white */}
            {/* <div className="w-full bg-white">
                <ul className="md:flex hidden space-y-2 md:space-y-0 justify-center items-center md:space-x-12 space-x-1 md:h-16">
                    <NavItem
                        title="Technologies Solutions"
                        active={activeServIdx === 'technology'}
                        onClick={() => handleSetActive('technology')}
                    />
                    <NavItem
                        title="Professional IT Services"
                        active={activeServIdx === 'pit'}
                        onClick={() => handleSetActive('pit')}
                    />
                    <NavItem
                        title="IT Staffing Services"
                        active={activeServIdx === 'staffing'}
                        onClick={() => handleSetActive('staffing')}
                    />
                </ul>
                <div className='w-full px-4 md:hidden'>
                    <select className='w-full bg-gray-100 text-center p-4 font-bold' onChange={(e) => handleSetActive(e.target.value)}>
                        <option className='w-full bg-gray-100 ' value={"technology"}>Technology</option>
                        <option className='w-full bg-gray-100 ' value={'pit'}>Professional IT Services</option>
                        <option className='w-full bg-gray-100 ' value={'staffing'}> Staffing Services </option>
                    </select>
                </div>
            </div> */}

            {/* Service cards section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8 bg-white">
                {jsonforServices
                    .filter((serv) => serv.type === activeServIdx)
                    .map((service) => (
                        <ServiceCard key={service.service_id} service={service} desc={service.description} />
                    ))}
            </div>
        </div>
    );
}

// // Navigation item component
// const NavItem = ({ title, active, onClick }) => {
//     const baseClasses = 'cursor-pointer px-6 h-full flex items-center text-center';
//     const activeClasses = 'border-b-2 border-[#FFAB2E] text-[#FFAB2E]';
//     const inactiveClasses = 'hover:border-b-2 text-black hover:border-[#FFAB2E]';

//     return (
//         <li
//             onClick={onClick}
//             className={`${baseClasses} ${active ? activeClasses : inactiveClasses}`}
//         >
//             {title}
//         </li>
//     );
// };

// Service card component
const ServiceCard = ({ service }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-4 space-y-4">
            <div className="relative w-full h-[250px]">
                <Image src={service.heading_pic_url} layout="fill" className="rounded-lg" />
            </div>
            <h1 className="text-[#FFAB2E] text-xl font-semibold">{service.service_name}</h1>
            <p className="text-black">{service.description}</p>
            <Link href={`/solutionandservices/${service.service_id}`}>
                <button className="mt-2 bg-[#FFAB2E] text-white px-4 py-2 rounded-lg hover:bg-opacity-80 transition duration-300">
                    Read More
                </button>
            </Link>
        </div>
    );
};
