'use client'
import * as React from 'react';
import { CiPhone } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import Image from 'next/image';
import { SocialIcon } from './ui/SocialIcon';
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import Link from 'next/link';

export const Footer = () => {
    return (
        <div className='w-full bg-white'>
            <div className='h-[20px] bg-white'></div>
            <div className='bg-[#343A40]'>
                <div className='py-8 border-b p-4 border-white text-white flex flex-col lg:flex-row justify-center lg:space-x-10 space-y-8 lg:space-y-0'>
                    <div className="md:w-[20%] w-full flex items-center justify-center">
                        <div className='flex justify-center lg:justify-start w-[150px] h-[110px] relative'>
                            <Image src='/images/logo2.png' layout="fill" />
                        </div>
                    </div>

                    <div className='space-y-2 text-center lg:text-left'>
                        <h1 className='text-[#FFAB2E] font-bold'>Company</h1>
                        <ul className='list-style-none space-y-2'>
                            <li><Link href="/about">About us</Link></li>
                            <li><Link href="/technologypartner">Technology Partners</Link></li>
                            <li><Link href="/carrers">Careers</Link></li>
                            <li><Link href="/blog">Content Hub</Link></li>
                        </ul>
                    </div>

                    <div className='space-y-2 text-center lg:text-left'>
                        <h1 className='text-[#FFAB2E] font-bold'>Solutions and Services</h1>
                        <ul className='list-style-none space-y-2'>
                            <li><Link href="/solutionandservices/1">Datacenter Design & Optimization</Link></li>
                            <li><Link href="/solutionandservices/4">Physical Datacenter Design & Layout</Link></li>
                            <li><Link href="/solutionandservices/7">Cybersecurity Consulting Services</Link></li>
                            <li><Link href="/solutionandservices/5">SAP Offerings Consulting Services</Link></li>
                        </ul>
                    </div>

                    <div className='space-y-2 text-center lg:text-left'>
                        <h1 className='text-[#FFAB2E] font-bold'>&nbsp;</h1>
                        <ul className='list-style-none space-y-2'>
                            <li><Link href="/solutionandservices/2">AI & RPA Consulting Services</Link></li>
                            <li><Link href="/solutionandservices/6">Devops Consulting Services</Link></li>
                            <li><Link href="/solutionandservices/8">Staff Augmentation Services</Link></li>
                            <li><Link href="/solutionandservices/3">Cloud Consulting Services</Link></li>
                        </ul>
                    </div>

                    <div className='space-y-2 text-center lg:text-left'>
                        <h1 className='text-[#FFAB2E] font-bold'>Contact Us</h1>
                        <ul className='list-style-none space-y-2'>
                            <li className='flex justify-center lg:justify-start space-x-[5px] items-center'><span><CiPhone /></span><span>+91-012-4496-0635</span></li>
                            <li className='flex justify-center lg:justify-start space-x-[5px] items-center'><span><MdOutlineEmail /></span><span>info@intellivectra.tech</span></li>
                            <li className='flex justify-center items-start lg:justify-start space-x-1'>
                                <span><CiLocationOn /></span>
                                <span className="mt-[-5px]">
                                    2nd Floor, Plot no. 29,<br />
                                    Maruti Industrial Area,<br />
                                    Sector-18,Gurugram-<br />
                                    122015(Haryana)
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='bg-[#343A40] p-4 flex flex-col lg:flex-row items-center justify-between text-center lg:text-left space-y-4 lg:space-y-0'>
                    <p className="text-white">© 2024 Intelli Vectra Technologies Pvt. Ltd. All rights reserved.</p>
                    <ul className='flex list-style-none text-white items-center space-x-4'>
                        <li>Terms</li>
                        <li>Privacy</li>
                        <li>Cookies</li>
                    </ul>
                    <div className='flex items-center space-x-4 text-white'>
                        <SocialIcon>
                            <FaLinkedin size={20} />
                        </SocialIcon>
                        <SocialIcon>
                            <FaTwitter size={20} />
                        </SocialIcon>
                    </div>
                </div>
            </div>
        </div>
    )
}
