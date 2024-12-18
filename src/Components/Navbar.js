'use client'
import * as React from 'react';
import { IoIosArrowDown, IoMdMenu, IoMdClose } from "react-icons/io";
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { SlCalender } from "react-icons/sl";
import { IoIosArrowForward } from "react-icons/io";
import { useRouter } from 'next/navigation';
import { RiMenu2Fill } from "react-icons/ri";
import VerticalCarousel from './VerticleCorousel';
import { jsonforServices } from '@/data';

export const Navbar = () => {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [menuHidden, setMenuHidden] = useState(true);
    const [menuHiddenMobile,setMenuHiddenMobile] = useState(true);
    const [showContentInnerMobile, setShowContentInnerMobile] = useState(false);
    const menuRef = useRef(null);
    const router = useRouter();
    const classActive = "flex items-center pb-2 text-[#FFAB2E] space-x-4 px-2 border-b-2 border-[#FFAB2E]";
    const classUnActive = "flex items-center pb-2 space-x-4 text-black transition-all px-2 duration-300 hover:text-[#FFAB2E] hover:border-b-2 hover:border-[#FFAB2E]";
    const [showContentInner, setShowContentInner] = useState(false);
    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsMenuOpen(false);
            setShowContentInner(false);
        }
    };

    useEffect(() => {
        if (isMenuOpen) {
            document.addEventListener('click', handleClickOutside);
        } else {
            document.removeEventListener('click', handleClickOutside);
        }
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isMenuOpen]);

    useEffect(() => {
        setIsMenuOpen(false);
        setMenuHidden(true);
        setShowContentInner(false);
    }, [pathname])

    const handleSolutionAndServiceMenuOpen = () => {
        setMenuHidden(false);
    }

    const handleSolutionAndServiceMenuClose = () => {
        setMenuHidden(true);
    }

    const handleContentHubOpen = () => {
        setShowContentInner(true);
    }

    const handleContentHubClose = () => {
        setShowContentInner(false);
    }

    const handleSolutionServicesClick = () => {
        setMenuHiddenMobile(!menuHiddenMobile)
    }

    const handleContentHubClick = () => {
        setShowContentInnerMobile(!showContentInnerMobile)
    }

     return (
        <div className="relative w-[100%]">
            <div className='bg-white h-[70px] p-4 w-full flex justify-between items-center shadow-md z-50 relative'>
                <div>
                    <Image height={40} width={200} src='/images/logo.png' alt='Logo' />
                </div>
                <div className='lg:hidden'>
                    <button onClick={() => {
                        if (isMenuOpen) setShowContentInner(false)
                        setIsMenuOpen(!isMenuOpen)
                    }} className='text-black focus:outline-none'>
                        {isMenuOpen ? <IoMdClose size={24} /> : <RiMenu2Fill size={24} />}
                    </button>
                </div>
                <div ref={menuRef} className={`lg:flex lg:flex-row ${isMenuOpen ? 'flex' : 'hidden'} flex-col items-center absolute lg:static top-[70px] right-0 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-80 bg-white lg:w-auto lg:bg-transparent p-4 lg:p-0 w-fit
    ${isMenuOpen ? 'slide-in-right' : 'slide-out-right'} transition-all duration-300 ease-in-out md:transition-none md:w-auto`}>
                    <ul className='flex-col pr-6 lg:flex-row flex space-y-4 lg:space-y-0 lg:space-x-2 cursor-pointer list-style-none text-gray-600 w-full lg:w-auto'>
                        <Link href="/"><li className={`${pathname === '/' ? classActive : classUnActive}`}>Home</li></Link>
                        <Link href="/about"><li className={`${pathname === '/about' ? classActive : classUnActive}`}>About Us</li></Link>
                        <Link href="/solutionandservices" onMouseOver={handleSolutionAndServiceMenuOpen} onMouseOut={handleSolutionAndServiceMenuClose}><li className={`${pathname === '/solutionandservices' ? classActive : classUnActive}`}>Solutions and Services<span><IoIosArrowDown /></span></li></Link>
                        <Link href="/technologypartner"><li className={`${pathname === '/technologypartner' ? classActive : classUnActive}`}>Technology Partners</li></Link>
                        <Link href="/contenthub"><li className={`${pathname === '/contenthub' ? classActive : classUnActive}`}>Content Hub</li></Link>
                        <Link href="/carrers"><li className={`${pathname === '/carrers' ? classActive : classUnActive}`}>Career</li></Link>
                        <Link href="/contactus"><li className={`${pathname === '/contactus' ? classActive : classUnActive}`}>Contact Us</li></Link>
                    </ul>
                </div>
            </div>
            <div className={`
                    bg-white z-[1001]  text-black md:w-fit w-fit absolute md:top-10 top-[310px] md:shadow-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-90 md:bg-opacity-100 md:right-40 right-0 md:rounded-lg p-4 ${!showContentInner ? 'hidden hover:flex' : 'hidden md:block'}`}>
                <ul className="space-y-2">
                    <li
                        onClick={() => {
                            router.push("/blogs");
                            setShowContentInner(false);
                        }}
                        className="cursor-pointer flex items-center text-lg space-x-4"
                    >
                        <div className="flex items-center justify-start w-full space-x-4">
                            <span>
                                <Image src="/images/icons/blog.png" height={20} width={20} alt="Blog" />
                            </span>
                            <p className="hover:border-b hover:text-[#FFAB2E] border-[#FFAB2E]">Blogs</p>

                        </div>
                    </li>
                    <li
                        onClick={() => {
                            router.push("/news");
                            setShowContentInner(false);
                        }}
                        className="cursor-pointer flex items-center text-lg space-x-4"
                    >
                        <div className="flex items-center justify-start w-full space-x-4">
                            <span>
                                <Image src="/images/icons/news.png" height={20} width={20} alt="News" />
                            </span>
                            <p className="hover:border-b hover:text-[#FFAB2E] border-[#FFAB2E]">News</p>

                        </div>
                    </li>
                    <li
                        onClick={() => {
                            router.push("/events");
                            setShowContentInner(false);
                        }}
                        className="cursor-pointer flex items-center text-lg space-x-4"
                    >
                        <div className="flex items-center justify-start w-full space-x-4">
                            <span>
                                <Image src="/images/icons/calender.png" height={20} width={20} alt="Events" />
                            </span>
                            <p className="hover:border-b hover:text-[#FFAB2E] border-[#FFAB2E]">Events</p>

                        </div>
                    </li>
                    <li
                        onClick={() => {
                            router.push("/casestudy");
                            setShowContentInner(false);
                        }}
                        className="cursor-pointer flex items-center text-lg space-x-4"
                    >
                        <div className="flex items-center justify-start w-full space-x-4">
                            <span>
                                <Image src="/images/icons/casestudy.png" height={20} width={20} alt="Case Study" />
                            </span>
                            <p className="hover:border-b hover:text-[#FFAB2E] border-[#FFAB2E]">Case Study</p>
                        </div>
                    </li>
                </ul>
            </div>

            <div className={`
                    bg-white z-[1001] md:hidden text-black md:w-fit w-fit absolute md:top-10 top-[310px] md:shadow-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-90 md:bg-opacity-100 md:right-40 right-0 md:rounded-lg p-4 ${!showContentInnerMobile ? 'hidden hover:flex' : ''}`}>
                <ul className="space-y-2">
                    <li
                        onClick={() => {
                            router.push("/blogs");
                            setShowContentInner(false);
                        }}
                        className="cursor-pointer flex items-center text-lg space-x-4"
                    >
                        <div className="flex items-center justify-start w-full space-x-4">
                            <span>
                                <Image src="/images/icons/blog.png" height={20} width={20} alt="Blog" />
                            </span>
                            <p className="hover:border-b hover:text-[#FFAB2E] border-[#FFAB2E]">Blogs</p>

                        </div>
                    </li>
                    <li
                        onClick={() => {
                            router.push("/news");
                            setShowContentInner(false);
                        }}
                        className="cursor-pointer flex items-center text-lg space-x-4"
                    >
                        <div className="flex items-center justify-start w-full space-x-4">
                            <span>
                                <Image src="/images/icons/news.png" height={20} width={20} alt="News" />
                            </span>
                            <p className="hover:border-b hover:text-[#FFAB2E] border-[#FFAB2E]">News</p>

                        </div>
                    </li>
                    <li
                        onClick={() => {
                            router.push("/events");
                            setShowContentInner(false);
                        }}
                        className="cursor-pointer flex items-center text-lg space-x-4"
                    >
                        <div className="flex items-center justify-start w-full space-x-4">
                            <span>
                                <Image src="/images/icons/calender.png" height={20} width={20} alt="Events" />
                            </span>
                            <p className="hover:border-b hover:text-[#FFAB2E] border-[#FFAB2E]">Events</p>

                        </div>
                    </li>
                    <li
                        onClick={() => {
                            router.push("/casestudy");
                            setShowContentInner(false);
                        }}
                        className="cursor-pointer flex items-center text-lg space-x-4"
                    >
                        <div className="flex items-center justify-start w-full space-x-4">
                            <span>
                                <Image src="/images/icons/casestudy.png" height={20} width={20} alt="Case Study" />
                            </span>
                            <p className="hover:border-b hover:text-[#FFAB2E] border-[#FFAB2E]">Case Study</p>
                        </div>
                    </li>
                </ul>
            </div>

            <div className={`md:space-x-4 z-[1000] bg-white absolute md:top-10 top-[150px] right-[400px] p-4 rounded-lg ${(menuHidden) ? 'hidden hover:flex' : 'hidden md:flex'}`}>
                <div className='text-black'>
                    <ul className='space-y-2'>
                        {
                            jsonforServices.map((service,idx) => {
                                return (
                                    <li key={idx}><Link href={`/solutionandservices/${service.service_id}`} className='w-full justify-start cursor-pointer text-lg flex items-center space-x-4'><span><Image src={service.logo_img_src} width={30} height={30}></Image></span><p className=' hover:border-b hover:text-[#FFAB2E] hover:border-[#FFAB2E] text-sm'>{service.service_name}</p></Link></li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>

            <div className={`md:space-x-4 z-[1000] md:hidden  bg-white absolute md:top-10 top-[150px] left-[400px] p-4 rounded-lg ${(menuHiddenMobile) ? 'hidden' : 'flex'}`}>
                <div className='text-black'>
                    <ul className='space-y-2'>
                        {
                            jsonforServices.map((service,idx) => {
                                return (
                                    <li key={idx}><Link href={`/solutionandservices/${service.service_id}`} className='w-full justify-start cursor-pointer text-lg flex items-center space-x-4'><span><Image src={service.logo_img_src} width={30} height={30}></Image></span><p className='text-sm'>{service.service_name}</p></Link></li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div >
    );
}
