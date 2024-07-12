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
        slidesToScroll: 1,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 4000,
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
            text_content: `Our journey began with a vision to revolutionize the way people connect with technology.
            Founded in 2018, we set out to democratize access to cutting-edge technology solutions for
            businesses of all sizes. Our mission was clear to empower organizations to thrive in the digital
            age by providing innovative, scalable, and user-friendly IT solutions.`,
            image_src: "/images/slider1image.png",
            heading: "Duis aute irure dolor"
        },
        {
            text_content: `IVT&#39;s successful acquisition of its first major project bolstered its industry standing, highlighting
            the team&#39;s expertise and unwavering commitment to excellence in solution delivery. This
            milestone underscores our dedication to exceeding client expectations and sets a solid
            foundation for future growth and innovation in the field.`,
            image_src: "/images/slide2image.png",
        },
        {
            text_content: `Since our inception, we&#39;ve achieved several milestones that have shaped our journey, including
            expanding our global reach to India in 2020. Each milestone represents a significant step
            forward in our commitment to democratizing access to technology solutions worldwide,
            solidifying our presence in key markets and enabling us to better serve our diverse customer
            base in the digital age.`,
            image_src: "/images/slide3image.png",
        },
        {
            text_content: `Strengthened our business portfolio by forging strategic alliances and expanding service
            offerings in Cybersecurity Solutions &amp; Services, reinforcing our dedication to digital resilience.
            These initiatives enhance our capability to proactively safeguard our clients&#39; digital assets and
            adapt to evolving cybersecurity challenges.`,
            image_src: "/images/slider1image.png",
        },
        {
            text_content: `Diversified our business portfolio with AI &amp; DevOps Solutions through strategic alliances and
            service offerings. These advancements empower us to deliver cutting-edge technology
            solutions that drive efficiency and innovation across diverse industries, positioning us as a
            leader in technological transformation.`,
            image_src: "/images/slide2image.png",
        },
        {
            text_content: `The launch of IVT 2.0 heralded a new era, unveiling a revamped office space aimed at nurturing
            innovation, collaboration, and expansion. This modern facility reflects our commitment to
            creating a dynamic work environment that inspires creativity and fosters growth among our
            team members.`,
            image_src: "/images/slide3image.png",
        },
        {
            text_content: `IVT&#39;s expansion into the Kingdom of Saudi Arabia underscores its commitment to establishing a
            comprehensive regional presence, prioritizing accessibility, and exceeding client expectations
            regionwide. This strategic initiative further solidifies our role as a trusted partner in driving
            technological advancement and innovation across the Middle East.`,
            image_src: "/images/slider1image.png",
        },
    ];
    const posi = [0, 16, 32, 48, 64, 80, 96];
    const years = [2018, 2019, 2020, 2021, 2022, 2023, 2024];
    return (
        <div className='space-y-[30px] w-full bg-white'>
            <PageStarter tit1Col={"black"} tit1={"About"} tit2={" Us"} imageSrc={"/images/banners/aboutusbanner.jpg"} descColor={"black"} desc={"Building Bridges in the Digital Landscape"} />
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
                    <p className="text-[#F19F1F] md:text-4xl text-2xl tracking-wide">Welcome to IVT</p>

                    <p className="md:text-[18px] text-normal text-[#3F444]">
                        Intelli Vectra Technologies empower businesses through innovative technology solutions, our
                        vision is to be the catalyst for digital transformation worldwide. With a commitment to
                        excellence, integrity, and customer-centricity, we strive to redefine the possibilities of IT,
                        delivering cutting-edge solutions that inspire progress, drive growth, and shape the future of
                        industries. Our relentless pursuit of innovation, coupled with a passion for exceeding
                        expectations, positions us as the ideal partner for organizations seeking to thrive in an ever-
                        evolving digital landscape. Together, we envision a world where technology empowers,
                        connects, and transforms lives, fostering a brighter, more inclusive future for all.
                    </p>
                    {/* <p className="md:text-[18px] text-normal text-[#3F444]">Our mission is to utilize the power of technology to empower businesses and individuals, driving positive change and facilitating success in an ever more digital world. Through our unwavering commitment to innovation, expertise, and customer satisfaction, we strive to deliver tailored IT solutions that exceed expectations, optimize efficiency, and unlock new opportunities for growth. With a focus on collaboration, integrity, and continuous improvement, we aim to be a trusted partner for our clients, providing reliable support, strategic guidance, and cutting-edge solutions that drive them towards their goals. Together, we embrace the transformative potential of technology to create a brighter, more connected future for all.</p> */}

                    <div className="w-full h-6 bg-white"></div>
                    <Link href="/about"><button className='cursor-pointer p-2 px-6 h-fit w-fit rounded-md text-white bg-[#F19F1F]'>Learn More</button></Link>
                </div>

            </div>

            <div className="bg-[#FFFAF2] w-full ">
                <div className="justify-center w-[100vw] h-[60vh] space-y-8 md:space-y-16 bg-[#F19F1F] bg-opacity-100 bg-blend-screen p-4" style={{ backgroundImage: "url('images/business-network-background-connecting-dots-technology-design 2.png')" }}>
                    <div className='space-y-2'>
                        <h1 className="text-center font-bold text-black text-2xl md:text-4xl"><span className="text-white">Journey </span> Unfolded</h1>
                        <p className="text-center text-white md:text-xl text-sm">Exploring the journey towards excellence</p>
                    </div>

                    <div className="w-full">
                        <div className="w-full items-center justify-center flex md:px-16">
                            <SamplePrevArrow></SamplePrevArrow>
                            <div className="border-t-2 relative border-white w-full px-4" >
                                <div className="flex flex-col items-center justify-center" style={{ position: 'absolute', left: `${posi[slideIndex]}%`,color:'black' }}>
                                    <FaCaretDown fontSize={60} />
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
                                            <div className="w-[70%] rounded-lg p-4 flex items-center space-y-4">
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
                                            <div className="w-[95%] rounded-lg bg-black bg-opacity-10 backdrop-blur-sm p-4  flex items-center space-y-4">
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
                <h1 className="text-center text-4xl font-bold text-black">Our <span className="text-[#F19F1F]">Methodology</span></h1>
                <div className="text-center text-black md:text-xl text-sm font-normal">
                    <p>Navigating Excellence: From Concept to Completion</p>
                </div>
                <div className="w-full flex justify-center">
                    <div className="relative w-full md:w-[80%] h-[300px] md:h-[400px]">
                        <Image src={"/images/ourprocess.jpg"} layout="fill" />
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

            <div className="bg-[#FFFAF1] text-black space-y-6 p-4">
                <h1 className="text-center font-bold text-4xl"><span className="text-[#F19F1F]">Mission </span>& Vision</h1>

                <div className="space-x-0  md:space-x-2 space-y-4 md:space-y-0 flex flex-col md:flex-row">
                    <div className="p-4 md:p-8 border w-full rounded-lg md:w-[50%] space-y-4 md:space-y-6">
                        <h1 className="text-2xl text-center font-bold md:text-4xl">Our <span className="text-[#F19F1F]">Mission</span></h1>
                        <p className="text-lg md:text-xl font-normal">
                            Our mission at Intelli Vectra Technologies is to drive digital transformation by delivering innovative, tailored IT solutions. We strive to simplify complexities, optimize efficiency, and enhance security for businesses across diverse industries. With a commitment to excellence, integrity, and customer satisfaction, we empower our clients to achieve sustainable growth and success in a rapidly evolving technological landscape.
                        </p>
                    </div>
                    <div className="p-4 md:p-8 border rounded-lg w-full md:w-[50%] space-y-4 md:space-y-6">
                        <h1 className="text-2xl text-center font-bold md:text-4xl">Our <span className="text-[#F19F1F]">Vision</span></h1>
                        <p className="text-lg md:text-xl font-normal">
                            Our vision at Intelli Vectra Technologies is to be the forefront catalyst of global digital transformation. We aspire to pioneer cutting-edge technological advancements that empower businesses and individuals alike. Through innovation, integrity, and a commitment to excellence, we envision creating a connected world where technology fosters inclusive growth, transforms industries, and enriches lives on a global scale.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
