'use client'
import { PageStarter } from "@/Components/PageStarter";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import { useState } from "react";
import { MdNavigateNext } from "react-icons/md";
import { GrPrevious } from "react-icons/gr";
import { useRef } from "react";
import { FaCaretDown } from "react-icons/fa";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div className="rounded-[50%] p-4 border border-black text-black"><MdNavigateNext /></div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div className="rounded-[50%] p-4 border border-black text-black"><GrPrevious /></div>
    );
}

export default function Page() {
    const [slideIndex, setSlideIndex] = useState(0);
    const [updateCount, setUpdateCount] = useState(0);
    let sliderRef = useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 8000,
        cssEase: "fade",
        arrows: false,
        pauseOnHover: false,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        afterChange: () => setUpdateCount(updateCount + 1),
        beforeChange: (current, next) => setSlideIndex(next)
    };
    const slides = [
        {
            cardDetailedText: `Our journey began with a vision to revolutionize the way people connect with technology.
            Founded in 2018, we set out to democratize access to cutting-edge technology solutions for
            businesses of all sizes. Our mission was clear to empower organizations to thrive in the digital
            age by providing innovative, scalable, and user-friendly IT solutions.`,
            title: 2018
        },
        {
            cardDetailedText: `IVT's successful acquisition of its first major project bolstered its industry standing, highlighting the team's expertise and unwavering commitment to excellence in solution delivery. This milestone underscores our dedication to exceeding client expectations and sets a solid foundation for future growth and innovation in the field.`,
            image_src: "/images/slide2image.png",
            title: 2019
        },
        {
            cardDetailedText: `Since our inception, we've achieved several milestones that have shaped our journey, including expanding our global reach to India in 2020. Each milestone represents a significant step forward in our commitment to democratizing access to technology solutions worldwide, solidifying our presence in key markets and enabling us to better serve our diverse customer base in the digital age.`,
            image_src: "/images/slide3image.png",
            title: 2020
        },
        {
            cardDetailedText: `Strengthened our business portfolio by forging strategic alliances and expanding service offerings in Cybersecurity Solutions & Services, reinforcing our dedication to digital resilience. These initiatives enhance our capability to proactively safeguard our clients' digital assets and adapt to evolving cybersecurity challenges.`,
            title: 2021
        },
        {
            cardDetailedText: `Diversified our business portfolio with AI & DevOps Solutions through strategic alliances and service offerings. These advancements empower us to deliver cutting-edge technology solutions that drive efficiency and innovation across diverse industries, positioning us as a leader in technological transformation.`,
            title: 2022
        },
        {
            cardDetailedText: `The launch of IVT 2.0 heralded a new era, unveiling a revamped office space aimed at nurturing innovation, collaboration, and expansion. This modern facility reflects our commitment to creating a dynamic work environment that inspires creativity and fosters growth among our team members.`,
            title: 2023
        },
        {
            cardDetailedText: `IVT's expansion into the Kingdom of Saudi Arabia underscores its commitment to establishing a comprehensive regional presence, prioritizing accessibility, and exceeding client expectations regionwide. This strategic initiative further solidifies our role as a trusted partner in driving technological advancement and innovation across the Middle East.`,
            title: 2024
        },
    ];
    const posi = [0, 16, 32, 48, 64, 80, 96];
    const years = [2018, 2019, 2020, 2021, 2022, 2023, 2024];
    return (
        <div className='w-full bg-white'>
            <PageStarter tit1Col={"black"} tit1={"About"} tit2={" Us"} imageSrc={"/images/banners/aboutusbanner.jpg"} descColor={"black"} desc={"Building Bridges in the Digital Landscape."} />
            <div className="w-full px-4 md:py-8 p-4 md:px-10 lg:px-20 space-y-6 md:space-y-0 bg-white text-black flex flex-col lg:flex-row justify-center lg:space-x-20">
                <div className="flex lg:w-[40%] w-full">
                    {/* First Image */}
                    <div className="bg-white w-full">
                        <div className="relative w-[100%] md:w-[450px] md:h-[400px] h-[250px]">
                            <Image
                                src="/images/banners/VERTICAL.jpg"
                                alt="Team hands"
                                layout='fill'
                            />
                        </div>
                    </div>
                    {/* Second Image */}
                    <div className="p-4 w-full z-[100] bg-white rounded-lg  md:mt-[300px] mt-[150px] md:ml-[-200px] ml-[-100px]">
                        <div className="relative w-[100%] md:w-[550px] md:h-[200px] h-[150px] max-w-xs">
                            <Image
                                src="/images/banners/HORIZONTAL.jpg"
                                alt="Team meeting"
                                layout="fill"
                            />
                        </div>
                    </div>
                </div>
                <div className="h-full items-center lg:w-[50%] w-full space-y-6">
                    <p className="text-[#F19F1F] md:text-4xl text-2xl tracking-wide">Welcome to IVT</p>

                    {/* <p className="md:text-[18px] text-normal text-[#3F444]">
                        Intelli Vectra Technologies empower businesses through innovative technology solutions, our
                        vision is to be the catalyst for digital transformation worldwide. With a commitment to
                        excellence, integrity, and customer-centricity, we strive to redefine the possibilities of IT,
                        delivering cutting-edge solutions that inspire progress, drive growth, and shape the future of
                        industries. Our relentless pursuit of innovation, coupled with a passion for exceeding
                        expectations, positions us as the ideal partner for organizations seeking to thrive in an ever-
                        evolving digital landscape. Together, we envision a world where technology empowers,
                        connects, and transforms lives, fostering a brighter, more inclusive future for all.
                    </p> */}
                    <p className="md:text-[18px] text-normal text-[#3F444]">Intelli Vectra Technologies stands as a beacon of innovation in the realm of IT solutions, dedicated to pioneering advancements that revolutionize how businesses operate and interact with their ecosystems. Our holistic approach, grounded in a deep-seated commitment to excellence and integrity, ensures that every solution we deliver not only meets but exceeds the expectations of our clients worldwide.</p>

                    <p className="md:text-[18px] text-normal text-[#3F444]">At Intelli Vectra, we believe in the power of technology to transcend boundaries and create meaningful connections. By harnessing the latest advancements in AI, IoT, and digital transformation, we empower enterprises to adapt, grow, and thrive in an increasingly interconnected world. Our collaborative partnerships foster a culture of continuous improvement, where together with our clients, we shape the future landscape of industries.

                        Driven by a passion for innovation and a customer-first philosophy, we are not just technology providers but trusted advisors, guiding organizations through complex digital challenges with clarity and foresight. With every project and partnership, we strive to build a more inclusive and sustainable future, where technology serves as a catalyst for positive change in communities around the globe.</p>

                    <p className="md:text-[18px] text-normal text-[#3F444]">Intelli Vectra Technologies: Redefining possibilities, empowering businesses, and transforming lives for a brighter tomorrow.</p>
                    {/* <p className="md:text-[18px] text-normal text-[#3F444]">Our mission is to utilize the power of technology to empower businesses and individuals, driving positive change and facilitating success in an ever more digital world. Through our unwavering commitment to innovation, expertise, and customer satisfaction, we strive to deliver tailored IT solutions that exceed expectations, optimize efficiency, and unlock new opportunities for growth. With a focus on collaboration, integrity, and continuous improvement, we aim to be a trusted partner for our clients, providing reliable support, strategic guidance, and cutting-edge solutions that drive them towards their goals. Together, we embrace the transformative potential of technology to create a brighter, more connected future for all.</p> */}

                    <div className="w-full h-6 bg-white"></div>

                </div>

            </div>

            <div className="bg-[#FFFAF2] w-full flex flex-col items-center justify-center">
                <div className="justify-center w-[100vw] space-y-8 md:px-4 md:py-8 p-4 md:space-y-16">
                    <div className='space-y-2'>
                        <h1 className="text-center font-bold text-black text-2xl md:text-4xl"><span className="text-[#F19F1F] ">Journey </span> Unfolded</h1>
                        <p className="text-center md:text-xl text-sm text-black italic">Discovering Paths to Success</p>
                    </div>

                    <div className="w-full">
                        <div className="w-full items-center justify-center flex md:px-16">
                            <SamplePrevArrow></SamplePrevArrow>
                            <div className="border-t-2  relative border-black w-full px-4" >
                                <div className="flex items-center justify-center flex-col" style={{ position: 'absolute', left: `${posi[slideIndex]}%` }}>
                                    <FaCaretDown fontSize={60} style={{ color: "black" }} />
                                    <p style={{ color: 'black' }}>{years[slideIndex]}</p>
                                </div>
                            </div>
                            <SampleNextArrow />
                        </div>
                    </div>

                    <div className="h-[2vh] md:hidden">

                    </div>

                    <div className="w-full justify-center hidden md:block p-2">
                        <Slider {...settings} ref={(slider) => sliderRef = slider}>
                            {slides.map((slide, idx) => {
                                return (
                                    <div key={idx}>
                                        <div className="flex justify-center space-x-8 w-full flex-row">
                                            <div className="w-[70%] rounded-lg p-4 text-lg flex items-center space-y-4 text-black">
                                                <div className="text-black">{slide.cardDetailedText}</div>
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
                                            <div className="w-[95%] rounded-lg p-4 text-black  flex items-center space-y-4">
                                                <div>{slide.cardDetailedText}</div>
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

            <div className="md:px-4 md:py-8 p-4 bg-white space-y-4 flex flex-col items-center">
                <h1 className="text-center text-2xl md:text-4xl  font-bold text-black">Our <span className="text-[#F19F1F]">Methodology</span></h1>
                <div className="text-center text-black md:text-xl text-sm font-normal">
                    <p className="italic">Navigating Excellence: From Concept to Completion</p>
                </div>
                <div className="w-full flex justify-center">
                    <div className="relative sm:block hidden w-full  h-[300px] md:h-[500px]">
                        <Image src={"/images/our_method_desktop.png"} layout="fill" />
                    </div>

                    <div className="relative w-full block sm:hidden md:w-[80%] h-[130vh] md:h-[400px]">
                        <Image src={"/images/our_method_mobile (1).png"} layout="fill" />
                    </div>


                </div>
            </div>


            {/* <div className="md:p-8 p-2 bg-[#FFFAF1] w-[100%] text-black space-y-4">
                <h1 className="font-bold text-center text-4xl"><span className="text-[#F19F1F]">Our </span>Approach</h1>
                <div className="text-center md:text-xl text-sm font-normal">
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
                                <p className="font-normal text-center text-[7px] md:text-[15px]"> Through strategic planning and innovative thinking, we envision tailored solutions aligning with your growth and efficiency vision.</p>
                            </div>
                        </div>

                        <div className="w-full flex items-center justify-between">
                            <div className="w-[150px] lg:w-[400px]">
                                <h1 className="text-sm md:text-lg text-center font-semibold">Manage & Improve</h1>
                                <p className="font-normal text-center text-[7px] md:text-[15px]"> We employ proactive monitoring, agile methodologies, and responsive support to ensure seamless operation and optimization of your technology infrastructure.</p>
                            </div>
                            <div className="w-[150px] lg:w-[400px]">
                                <h1 className="md:text-lg text-sm text-center font-semibold">Build & Implement</h1>
                                <p className="font-normal text-center text-[7px] md:text-[15px]"> Our comprehensive approach guarantees reliable implementation and ongoing support, empowering your business with innovative capabilities for sustained growth.</p>
                            </div>
                        </div>
                    </div>
                </div>


            </div> */}

            <div className="bg-[#FFFAF2] text-black space-y-6  md:px-4 md:py-8 p-4">
                <h1 className="text-center font-bold text-2xl md:text-4xl "><span className="text-[#F19F1F]">Mission </span>& Vision</h1>

                <div className="space-x-0 md:space-x-2 space-y-4 md:space-y-0 flex flex-col md:flex-row">
                    <div className="p-4 md:p-8 rounded-lg border bg-[#FFFAF2] w-full md:w-[50%] space-y-4 md:space-y-6">
                        <h1 className="text-2xl text-center font-bold md:text-4xl">Our <span className="text-[#F19F1F]">Mission</span></h1>
                        <p className="text-lg md:text-xl font-normal">
                            Our mission is to empower businesses through innovative technology solutions that enhance efficiency, drive growth, and foster success. We are dedicated to delivering high-quality, scalable IT solutions and services that meet the evolving needs of our clients, ensuring their competitive edge in the digital era. Through our commitment to excellence, continuous improvement, and customer-centric approach, we strive to build lasting partnerships and contribute to the technological advancement of the industries we serve.
                        </p>
                    </div>
                    <div className="p-4 md:p-8 rounded-lg border bg-[#FFFAF2] w-full md:w-[50%] space-y-4 md:space-y-6">
                        <h1 className="text-2xl text-center font-bold md:text-4xl">Our <span className="text-[#F19F1F]">Vision</span></h1>
                        <p className="text-lg md:text-xl font-normal">
                            Our vision is to be the leading provider of innovative technology solutions, recognized for our ability to transform businesses and drive digital excellence. We aspire to create a future where cutting-edge IT solutions and services seamlessly integrate into every aspect of business operations, empowering organizations to reach new heights of success. Through our relentless pursuit of innovation, quality, and customer satisfaction, we aim to shape the technological landscape and become a trusted partner in our clients&apos; growth and development.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}