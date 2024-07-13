'use client'
import { PageStarter } from "@/Components/PageStarter";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import dynamic from 'next/dynamic';

const Chrono = dynamic(() => import('react-chrono').then(mod => mod.Chrono), { ssr: false });

export default function Page() {
    const years = [2018, 2019, 2020, 2021, 2022, 2023, 2024];
    const [value, setValue] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setValue(prevValue => (prevValue + 1) % years.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    const slides = [
        {
            title: "2018",
            cardDetailedText: `Our journey began with a vision to revolutionize the way people connect with technology.
            Founded in 2018, we set out to democratize access to cutting-edge technology solutions for
            businesses of all sizes. Our mission was clear to empower organizations to thrive in the digital
            age by providing innovative, scalable, and user-friendly IT solutions.`,
            classNames: 'text-xl'
        },
        {
            title: "2019",
            cardDetailedText: `IVT's successful acquisition of its first major project bolstered its industry standing, highlighting
            the team's expertise and unwavering commitment to excellence in solution delivery. This
            milestone underscores our dedication to exceeding client expectations and sets a solid
            foundation for future growth and innovation in the field.`,
        },
        {
            title: "2020",
            cardDetailedText: `Since our inception, we've achieved several milestones that have shaped our journey, including
            expanding our global reach to India in 2020. Each milestone represents a significant step
            forward in our commitment to democratizing access to technology solutions worldwide,
            solidifying our presence in key markets and enabling us to better serve our diverse customer
            base in the digital age.`,
        },
        {
            title: "2021",
            cardDetailedText: `Strengthened our business portfolio by forging strategic alliances and expanding service
            offerings in Cybersecurity Solutions & Services, reinforcing our dedication to digital resilience.
            These initiatives enhance our capability to proactively safeguard our clients' digital assets and
            adapt to evolving cybersecurity challenges.`,
        },
        {
            title: "2022",
            cardDetailedText: `Diversified our business portfolio with AI & DevOps Solutions through strategic alliances and
            service offerings. These advancements empower us to deliver cutting-edge technology
            solutions that drive efficiency and innovation across diverse industries, positioning us as a
            leader in technological transformation.`,
        },
        {
            title: "2023",
            cardDetailedText: `The launch of IVT 2.0 heralded a new era, unveiling a revamped office space aimed at nurturing
            innovation, collaboration, and expansion. This modern facility reflects our commitment to
            creating a dynamic work environment that inspires creativity and fosters growth among our
            team members.`,
        },
        {
            title: "2024",
            cardDetailedText: `IVT's expansion into the Kingdom of Saudi Arabia underscores its commitment to establishing a
            comprehensive regional presence, prioritizing accessibility, and exceeding client expectations
            regionwide. This strategic initiative further solidifies our role as a trusted partner in driving
            technological advancement and innovation across the Middle East.`,
        },
    ];

    return (
        <div className='space-y-[30px] w-full bg-white'>
            <PageStarter tit1Col={"black"} tit1={"About"} tit2={" Us"} imageSrc={"/images/banners/aboutusbanner.jpg"} descColor={"black"} desc={"Building Bridges in the Digital Landscape"} />
            <div className="w-full px-4 md:px-10 lg:px-20 space-y-6 bg-white text-black flex flex-col lg:flex-row items-center justify-center md:space-x-20">
                <div className="flex md:w-[40%] w-full">
                    <div className="bg-white w-full">
                        <div className="relative w-[100%] md:w-[350px] h-[400px]">
                            <Image
                                src="/images/aboutusvert.jpg"
                                alt="Team hands"
                                layout='fill'
                            />
                        </div>
                    </div>
                    <div className="p-4 w-full z-[100] bg-white rounded-lg mt-[300px] ml-[-200px]">
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
                    <div className="w-full h-6 bg-white"></div>
                    <Link href="/about">
                        <button className='cursor-pointer p-2 px-6 h-fit w-fit rounded-md text-white bg-[#F19F1F]'>
                            Learn More
                        </button>
                    </Link>
                </div>
            </div>

            <div className="bg-[#FFFAF2] w-full ">
                <div className="justify-center w-[100vw] space-y-8 md:space-y-16 bg-[#FFFAF1] p-8">
                    <div className='space-y-2'>
                        <h1 className="text-2xl text-center font-bold md:text-4xl text-black">Journey <span className="text-[#F19F1F]">Unfolded</span></h1>
                        <p className="text-center text-black md:text-xl text-sm">Exploring the journey towards excellence</p>
                    </div>

                    <div className="w-full">
                        <Chrono
                            borderLessCards={true}
                            activeItemIndex={value}
                            cardHeight={100}
                            focusActiveItemOnLoad={true}
                            toolbarPosition={"bottom"}
                            enableLayoutSwitch={false}
                            enableQuickJump={false}
                            enableBreakPoint={false}
                            slideItemDuration={4500}
                            slideShowType="reveal"
                            items={slides}
                            mode="HORIZONTAL"
                            highlightCardsOnHover={true}
                            scrollable={{ scrollbar: true }}
                            fontSizes={{
                                cardSubtitle: '0.85rem',
                                cardDetailedText: '1rem',
                                cardTitle: '1rem',
                                title: '1rem',
                            }}
                        />
                    </div>
                </div>
            </div>

            <div className="p-8 md:p-8 bg-white space-y-4 flex flex-col items-center">
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

            <div className="bg-[#FFFAF1] text-black space-y-6 p-8">
                <h1 className="text-center font-bold text-4xl"><span className="text-[#F19F1F]">Mission </span>& Vision</h1>
                <div className="space-x-0 md:space-x-2 space-y-4 md:space-y-0 flex flex-col md:flex-row">
                    <div className="p-4 md:p-8 border w-full rounded-lg md:w-[50%] space-y-4 md:space-y-6">
                        <h1 className="text-2xl text-center font-bold md:text-4xl">Our <span className="text-[#F19F1F]">Mission</span></h1>
                        <p className="text-lg md:text-xl font-light text-black">
                            Empower businesses through innovative technology solutions, driving growth, efficiency, and digital transformation. We strive for excellence, integrity, and customer-centricity, enabling our clients to thrive in an ever-evolving digital landscape.
                        </p>
                    </div>
                    <div className="p-4 md:p-8 border w-full rounded-lg md:w-[50%] space-y-4 md:space-y-6">
                        <h1 className="text-2xl text-center font-bold md:text-4xl">Our <span className="text-[#F19F1F]">Vision</span></h1>
                        <p className="text-lg md:text-xl font-light text-black">
                            Redefine the possibilities of technology, delivering innovative, scalable, and user-friendly IT solutions that inspire progress and shape the future of industries. Our relentless pursuit of innovation fosters a brighter, more inclusive future, where technology connects and transforms lives.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
