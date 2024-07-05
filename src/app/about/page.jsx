'use client'
import { PageStarter } from "@/Components/PageStarter";
import Image from "next/image";
import { Button } from "@/Components/ui/Button";
import EmblaCarousel from "@/Components/Corousel/EmblaCarousel";
import Link from "next/link";
import Slider from "react-slick";
import { useState } from "react";
import { BiDownArrow } from "react-icons/bi";
import { useEffect } from "react";
import { MdNavigateNext } from "react-icons/md";
import { GrPrevious } from "react-icons/gr";
import { useRef } from "react";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div className="rounded-[50%] p-4 border border-white"><MdNavigateNext /></div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div className="rounded-[50%] p-4 border border-white"><GrPrevious /></div>
    );
}

export default function Page() {
    const [slideIndex, setSlideIndex] = useState(0);
    const [updateCount, setUpdateCount] = useState(0);
    let sliderRef = useRef(null);

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        dots: false,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "fade",
        arrows: false,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        afterChange: () => setUpdateCount(updateCount + 1),
        beforeChange: (current, next) => setSlideIndex(next)
    };
    const slides = [
        {
            text_content: "Our journey began with a vision to revolutionize the way people connect with technology. Founded in 2018, we set out to democratize access to cutting-edge technology solutions for businesses of all sizes. Our mission was clear to empower organizations to thrive in the digital age by providing innovative, scalable, and user-friendly IT solutions.",
            image_src: "/images/slider1image.png",
            heading: "Duis aute irure dolor"
        },
        {
            text_content: "IVT's successful acquisition of its first major project bolstered its industry standing, highlighting the team's expertise and unwavering commitment to excellence in solution delivery.",
            image_src: "/images/slide2image.png",
        },
        {
            text_content: "Since our inception, we've achieved several milestones that have shaped our journey. Expanding our global reach to India in 2020, each milestone represents a significant step forward in our commitment to democratizing access to technology solutions worldwide. These expansions not only solidify our presence in key markets but also enable us to better serve our diverse customer base and fulfill our mission of empowering organizations to thrive in the digital age.",
            image_src: "/images/slide3image.png",
        },
        {
            text_content: "Strengthened our business portfolio by forging strategic alliances and expanding service offerings in Cybersecurity Solutions & Services, reinforcing our dedication to digital resilience.",
            image_src: "/images/slider1image.png",
        },
        {
            text_content: "Diversified our business portfolio with AI & DevOps Solutions through strategic alliances and service offerings.",
            image_src: "/images/slide2image.png",
        },
        {
            text_content: "The launch of IVT 2.0 heralded a new era, unveiling a revamped office space aimed at nurturing innovation, collaboration, and expansion.",
            image_src: "/images/slide3image.png",
        },
        {
            text_content: "IVT's expansion into the Kingdom of Saudi Arabia underscores its commitment to establishing a comprehensive regional presence, prioritizing accessibility, and exceeding client expectations regionwide.",
            image_src: "/images/slider1image.png",
        },
    ];
    const posi = [0, 16, 32, 48, 64, 80, 96];
    const years = [2018, 2019, 2020, 2021, 2022, 2023, 2024];
    return (
        <div className='space-y-[30px] w-full bg-white'>
            <PageStarter tit1Col={"black"} tit1={"About"} tit2={" Us"} imageSrc={"/images/banners/aboutusbanner.jpg"} descColor={"black"} desc={"Intelli Vectra Technologies drives digital transformation with cutting-edge IT solutions. We simplify complexities, ensuring operational efficiency and growth. Committed to excellence and customer-centricity, we foster collaboration and innovation to help businesses thrive in a rapidly evolving digital landscape."} />
            <div className="w-full px-4 md:px-10 lg:px-20 space-y-6 bg-white text-black flex flex-col lg:flex-row items-center justify-center md:space-x-20">
                <div className="flex md:w-[40%] w-full">
                    {/* First Image */}
                    <div className="bg-white w-full">
                        <div className="relative w-[100%] md:w-[350px] h-[400px]">
                            <Image
                                src="/images/aboutusvert.jpg"
                                alt="Team hands"
                                layout='fill'
                            />
                        </div>
                    </div>
                    {/* Second Image */}
                    <div className="p-4 w-full z-[100] bg-white rounded-lg  mt-[300px] ml-[-200px]">
                        <div className="relative w-[100%] md:w-[400px] h-[200px] max-w-xs">
                            <Image
                                src="/images/aboutushorz.jpg"
                                alt="Team meeting"
                                layout="fill"
                            />
                        </div>
                    </div>
                </div>
                <div className="h-full items-center md:w-[50%] w-full space-y-6">
                    <h1 className="px-2 border-l-2 text-black text-[20px] font-bold border-[#F19F1F]">ABOUT US</h1>
                    <p className="text-[#F19F1F] md:text-4xl text-2xl tracking-wide">Welcome to IVT</p>

                    <p className="text-normal text-[#3F444]">
                        Welcome to Intelli Vectra Technologies! We are thrilled to have you here. As a leading IT solutions provider, we are dedicated to helping businesses harness the power of technology to drive digital transformation and simplify IT complexities. Our mission is to deliver innovative, tailored solutions that not only meet but exceed your expectations. With a commitment to excellence, integrity, and customer-centricity, we focus on fostering collaboration and continuous improvement. Our team of experts works tirelessly to ensure operational efficiency, enhanced security, and sustainable growth for our clients. At Intelli Vectra Technologies, we believe in the transformative potential of technology to create a brighter, more connected future for all. Together, let us shape the future of your business.
                    </p>
                    <div className="w-full h-6 bg-white"></div>
                    <Link href="/about"><button className='cursor-pointer p-2 px-6 h-fit w-fit rounded-md text-white bg-[#F19F1F]'>Learn More</button></Link>
                </div>

            </div>

            <div className="bg-[#FFFAF2] w-full ">
                <div className="h-full justify-center w-[100vw] md:h-[70vh] space-y-8 md:space-y-16 bg-[#F19F1F] bg-blend-darken p-4" style={{ backgroundImage: "url('images/business-network-background-connecting-dots-technology-design 2.png')" }}>
                    <div className='space-y-2'>
                        <h1 className="text-center font-bold text-black text-2xl md:text-4xl"><span className="text-white">Our</span> Journey</h1>
                        <p className="text-center text-white text-xl font-bold">Embark on a seamless journey with our IT services.</p>
                    </div>

                    <div className="w-full">
                        <div className="w-full items-center justify-center flex md:px-16">
                            <SamplePrevArrow></SamplePrevArrow>
                            <div className="border-t-2 relative border-white w-full px-4" >
                                <div style={{ position: 'absolute', left: `${posi[slideIndex]}%` }}>
                                    <BiDownArrow fontSize={28} />
                                    <p>{years[slideIndex]}</p>
                                </div>
                            </div>
                            <SampleNextArrow />
                        </div>
                    </div>

                    <div className="w-full justify-center hidden md:block">
                        <Slider {...settings} ref={(slider) => sliderRef = slider}>
                            {slides.map((slide, idx) => {
                                return (
                                    <div key={idx}>
                                        <div className="flex justify-center space-x-8 w-full flex-row">
                                            <div className="w-[35%] relative h-[250px]">
                                                <Image src={slide.image_src} layout='fill'></Image>
                                            </div>
                                            <div className="w-[30%] flex items-center space-y-4">
                                                <div>{slide.text_content}</div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </Slider>
                    </div>

                    <div className="w-full justify-center md:hidden block">
                        <Slider {...settings} ref={(slider) => sliderRef = slider}>
                            {slides.map((slide, idx) => {
                                return (
                                    <div key={idx} >
                                        <div className="flex flex-col justify-center md:space-x-8 w-full md:flex-row">
                                            <div className="md:w-[35%] w-full relative h-[250px]">
                                                <Image src={slide.image_src} layout='fill'></Image>
                                            </div>
                                            <div className="md:w-[30%] w-full flex items-center space-y-4">
                                                <div>{slide.text_content}</div>
                                            </div>
                                        </div>
                                    </div>

                                )
                            })}
                        </Slider>
                    </div>
                    {/* <EmblaCarousel posi={posi} years={years} slides={slides} options={OPTIONS} /> */}
                </div>
            </div>

            <div className="p-4 md:p-8 bg-white space-y-4 flex flex-col items-center">
                <h1 className="text-center text-4xl font-bold text-black">Our <span className="text-[#F19F1F]">Process</span></h1>
                <div className="text-center text-black tracking-wider text-lg font-extralight">
                    <p>Streamlined Solutions for Seamless IT Services Tailored to</p>
                    <p>Your Business Needs</p>
                </div>
                <div className="w-full flex justify-center">
                    <div className="relative w-full md:w-[80%] h-[300px] md:h-[400px]">
                        <Image src={"/images/ourprocess.jpg"} layout="fill" />
                    </div>
                </div>
            </div>


            <div className="md:p-8 p-2 bg-[#FFFAF1] w-[100%] text-black space-y-4">
                <h1 className="font-bold text-center text-4xl"><span className="text-[#F19F1F]">Our </span>Approach</h1>
                <div className="text-center tracking-wider text-lg font-extralight">
                    <p>At IVT, We love technology - But we are obsessed with</p>
                    <p>Your Success</p>
                </div>

                <div className="relative w-full h-[340px] md:h-fit flex justify-center">
                    <div className="w-[100vw] md:h-[550px] h-[300px] relative">
                        <Image src="/images/ourprocess.png" layout='fill'></Image>
                    </div>

                    <div className="absolute md:top-10 top-4 w-full md:w-[94%] md:space-y-[320px] space-y-[180px]">
                        <div className="flex justify-center">
                            <div className="w-[150px] lg:w-[400px]">
                                <h1 className="text-sm md:text-lg text-center font-semibold">Consult & Envision</h1>
                                <p className="font-extralight text-center text-[7px] md:text-[15px]"> Through strategic planning and innovative thinking, we envision tailored solutions aligning with your growth and efficiency vision.</p>
                            </div>
                        </div>

                        <div className="w-full flex items-center justify-between">
                            <div className="w-[150px] lg:w-[400px]">
                                <h1 className="text-sm md:text-lg text-center font-semibold">Manage & Improve</h1>
                                <p className="font-extralight text-center text-[7px] md:text-[15px]"> We employ proactive monitoring, agile methodologies, and responsive support to ensure seamless operation and optimization of your technology infrastructure.</p>
                            </div>
                            <div className="w-[150px] lg:w-[400px]">
                                <h1 className="md:text-lg text-sm text-center font-semibold">Build & Implement</h1>
                                <p className="font-extralight text-center text-[7px] md:text-[15px]"> Our comprehensive approach guarantees reliable implementation and ongoing support, empowering your business with innovative capabilities for sustained growth.</p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            <div className="bg-white text-black space-y-6 p-4">
                <h1 className="text-center font-bold text-4xl"><span className="text-[#F19F1F]">Mission </span>& Vision</h1>

                <div className="space-x-0  md:space-x-2 space-y-4 md:space-y-0 flex flex-col md:flex-row">
                    <div className="p-4 md:p-16 bg-[#FFFAF2] w-full md:w-[50%] space-y-4 md:space-y-6">
                        <h1 className="text-2xl font-bold md:text-4xl">Our <span className="text-[#F19F1F]">Mission</span></h1>
                        <p className="text-base md:text-xl font-extralight tracking-widest">
                            Our mission at Intelli Vectra Technologies is to drive digital transformation by delivering innovative, tailored IT solutions. We strive to simplify complexities, optimize efficiency, and enhance security for businesses across diverse industries. With a commitment to excellence, integrity, and customer satisfaction, we empower our clients to achieve sustainable growth and success in a rapidly evolving technological landscape.
                        </p>
                    </div>
                    <div className="p-4 md:p-16 bg-[#FFFAF2] w-full md:w-[50%] space-y-4 md:space-y-6">
                        <h1 className="text-2xl font-bold md:text-4xl tracking-widest">Our <span className="text-[#F19F1F]">Vision</span></h1>
                        <p className="text-base md:text-xl font-extralight tracking-widest">
                            Our vision at Intelli Vectra Technologies is to be the forefront catalyst of global digital transformation. We aspire to pioneer cutting-edge technological advancements that empower businesses and individuals alike. Through innovation, integrity, and a commitment to excellence, we envision creating a connected world where technology fosters inclusive growth, transforms industries, and enriches lives on a global scale.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
