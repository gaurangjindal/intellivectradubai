// components/VerticalCarousel.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoMdArrowForward } from "react-icons/io";

const VerticalCarousel = () => {
    const jsonforServices = [
        {
            "service_id": 1,
            "service_name": "DATACENTER DESIGN & OPTIMIZATION",
            "description": "Datacenter Design & Optimization involves assessing, planning, and implementing improvements to enhance the efficiency of your data center infrastructure.",
        },
        {
            "service_id": 2,
            "service_name": "AI & RPA",
            "description": "AI & RPA combine artificial intelligence and automation to streamline processes and improve efficiency, including machine learning, NLP, and robotic automation.",
        },
        {
            "service_id": 3,
            "service_name": "Cloud Solution",
            "description": "Intelli Vectra Technologies offers scalable Cloud Services for seamless data management, security, and accessibility, ensuring high performance and reliability.",
        },
        {
            "service_id": 4,
            "service_name": "Physical Datacenter Design & Layout",
            "description": "Planning the infrastructure of data centers, including server room layout, cooling, and security measures for optimal performance and reliability.",
        },
        {
            "service_id": 5,
            "service_name": "SAP Offerings",
            "description": "SAP Offerings include ERP, CRM, SCM, HCM, BI, mobile applications, integration services, and consulting to optimize business processes and drive innovation.",
        },
        {
            "service_id": 6,
            "service_name": "DevOps",
            "description": "DevOps merges development and operations, emphasizing collaboration, automation, and continuous delivery to accelerate software development and enhance agility.",
        },
        {
            "service_id": 15,
            "service_name": "Cloud Solution",
            "description": "Intelli Vectra Technologies offers scalable Cloud Services for seamless data management, security, and accessibility, ensuring high performance and reliability.",
        },
        {
            "service_id": 8,
            "service_name": "Managed Services",
            "description": "Intelli Vectra Solutions offers Managed Services, covering IT support, security, cloud management, backup, disaster recovery, network services, and compliance.",
        },
    ];
    
    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 2,
        slidesToScroll: 1,
        vertical: true,
        autoplay: true,
        autoplaySpeed: 100,
        cssEase: "linear"
    };



    return (
        <div className="max-w-lg h-[100%] bg-gray-100 rounded-lg">
            <Slider {...settings} className="space-y-8">
                {
                    jsonforServices.map((json, idx) => {
                        return (
                            <SlidingCard idx={idx + 1} heading={json.service_name} content={json.description} link={`/solutionandservices/${json.service_id}`} />
                        )
                    })
                }
            </Slider>
        </div>
    );
};

const SlidingCard = ({ idx, heading, content, link }) => {
    return (
        <div className="py-4 px-4">
            <div className="bg-white rounded-lg text-black p-4 space-y-4">
                <h1 className="text-2xl border-b w-full p-2"><span className="text-3xl text-[#FFAB2E] font-bold">{idx}</span>.{heading}</h1>
                <p className="text-lg">{content}</p>

                <div className="w-full text-center"><a className="text-[#FFAB2E] text-center space-x-4 flex items-center justify-center" href={link}><p>Find Out More</p><span><IoMdArrowForward style={{ fontSize: '30px' }} /></span></a></div>
            </div>
        </div>
    )

}

export default VerticalCarousel;
