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


export const Navbar = () => {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
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
        setShowContentInner(false);
    }, [pathname])

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
                    <ul className='flex-col lg:flex-row flex space-y-4 lg:space-y-0 lg:space-x-6 cursor-pointer list-style-none text-gray-600 w-full lg:w-auto'>
                        <Link href="/"><li className={`${pathname === '/' ? classActive : classUnActive}`}>Home</li></Link>
                        <Link href="/about"><li className={`${pathname === '/about' ? classActive : classUnActive}`}>About us</li></Link>
                        <Link href="/technologypartner"><li className={`${pathname === '/technologypartner' ? classActive : classUnActive}`}>Technology Partner</li></Link>
                        <Link href="/solutionandservices"><li className={`${pathname === '/solutionandservices' ? classActive : classUnActive}`}>Solution And Services</li></Link>
                        <button onClick={() => {
                            setShowContentInner(!showContentInner);
                            console.log()
                        }
                        }><li className={`${pathname === '/contenthub' ? classActive : classUnActive}`}>Content Hub<span><IoIosArrowDown /></span></li></button>
                        <Link href="/carrers"><li className={`${pathname === '/carrers' ? classActive : classUnActive}`}>Career</li></Link>
                        <Link href="/contactus"><li className={`${pathname === '/contactus' ? classActive : classUnActive}`}>Contact Us</li></Link>
                    </ul>
                </div>
            </div>
            <div
                className={`transition-all duration-1000 transform ${showContentInner ? 'translate-x-0 opacity-100' : 'md:translate-x-0 translate-x-full opacity-0'
                    } bg-white z-[100] text-black md:w-fit w-fit absolute md:top-10 top-[310px] md:shadow-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-90 md:bg-opacity-100 md:right-40 right-0 md:rounded-lg p-4`}
            >
                <ul className="space-y-4">
                    <li
                        onClick={() => {
                            router.push("/blogs");
                            setShowContentInner(false);
                        }}
                        className="cursor-pointer flex items-center text-lg space-x-4"
                    >
                        <div className="flex items-center justify-between w-full space-x-4">
                            <span>
                                <Image src="/images/icons/blog.png" height={40} width={40} alt="Blog" />
                            </span>
                            <p className="hover:border-b hover:text-[#FFAB2E] border-[#FFAB2E]">Blogs</p>
                            <span>
                                <IoIosArrowForward style={{ fontSize: '20px', color: "#FFAB2E", fontWeight: "bold" }} />
                            </span>
                        </div>
                    </li>
                    <li
                        onClick={() => {
                            router.push("/news");
                            setShowContentInner(false);
                        }}
                        className="cursor-pointer flex items-center text-lg space-x-4"
                    >
                        <div className="flex items-center justify-between w-full space-x-4">
                            <span>
                                <Image src="/images/icons/news.png" height={40} width={40} alt="News" />
                            </span>
                            <p className="hover:border-b hover:text-[#FFAB2E] border-[#FFAB2E]">News</p>
                            <span>
                                <IoIosArrowForward style={{ fontSize: '20px', color: "#FFAB2E", fontWeight: "bold" }} />
                            </span>
                        </div>
                    </li>
                    <li
                        onClick={() => {
                            router.push("/events");
                            setShowContentInner(false);
                        }}
                        className="cursor-pointer flex items-center text-lg space-x-4"
                    >
                        <div className="flex items-center justify-between w-full space-x-4">
                            <span>
                                <Image src="/images/icons/calender.png" height={40} width={40} alt="Events" />
                            </span>
                            <p className="hover:border-b hover:text-[#FFAB2E] border-[#FFAB2E]">Events</p>
                            <span>
                                <IoIosArrowForward style={{ fontSize: '20px', color: "#FFAB2E", fontWeight: "bold" }} />
                            </span>
                        </div>
                    </li>
                    <li
                        onClick={() => {
                            router.push("/casestudy");
                            setShowContentInner(false);
                        }}
                        className="cursor-pointer flex items-center text-lg space-x-4"
                    >
                        <div className="flex items-center justify-between w-full space-x-4">
                            <span>
                                <Image src="/images/icons/casestudy.png" height={40} width={40} alt="Case Study" />
                            </span>
                            <p className="hover:border-b hover:text-[#FFAB2E] border-[#FFAB2E]">Case Study</p>
                            <span>
                                <IoIosArrowForward style={{ fontSize: '20px', color: "#FFAB2E", fontWeight: "bold" }} />
                            </span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}
