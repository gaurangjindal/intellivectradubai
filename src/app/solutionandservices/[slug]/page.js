'use client'
import { useRouter } from 'next/router'
import { jsonforServices } from '@/data';
import { Button } from '@/Components/ui/Button';
import Image from 'next/image';
import { PageStarter } from '@/Components/PageStarter';

export default function Page({ params }) {
    const id = parseInt(params.slug);
    const service = jsonforServices.find((serv) => serv.service_id === id);
    console.log(jsonforServices)
    console.log(service)
    return (
        <div className='bg-white pb-12  w-full space-y-[30px] md:space-y-[60px]'>
            <PageStarter imageSrc={service.heading_pic_url} desc={service.short_description} descColor={'white'} tit1={service.service_name} tit1Col={'white'} />
            <div className="w-full md:px-10 md:space-x-20 bg-white text-black items-center justify-center flex flex-col md:flex-row">
                <div className="flex md:w-[40%] w-[100%]">
                    {/* First Image */}
                    <div className="max-w-sm mb-6">
                        <Image
                            src={service.image1}
                            alt="Team hands"
                            width={500}
                            height={700}
                        />
                    </div>
                    {/* Second Image */}
                    <div className="max-w-xs align-bottom ml-[-100px] mt-[100px]">
                        <Image
                            src={service.image2}
                            alt="Team meeting"
                            width={600}
                            height={800}
                        />
                    </div>
                </div>
                <div className="h-full p-2 items-center md:w-[45%] w-[100%] space-y-2 md:space-y-6">
                    <h1 className=" text-[#F19F1F] text-lg font-bold md:text-[30px]">{service.service_name}</h1>

                    <p className="md:text-[18px] text-sm text-[#3F444]">
                        {service.description}
                    </p>
                </div>


            </div>
            <div className="gap-4 md:p-0 p-2 grid md:grid-cols-2 grid-cols-1 justify-items-center">
                {
                    service.points.map((point, idx) => {
                        return (
                            <div key={idx} className="md:w-[92%] text-[#F19F1F] w-[100%] group  border-l-8 hover-box hover:text-white  transition-all duration-1000 ease-in-out  hover:bg-[#F19F1F]  border-[#F19F1F] space-y-4 p-8">

                                <div className=" space-y-4">
                                    <div className='flex items-center space-x-2'><div>{point.logo}</div> <h1 className="text-2xl font-normal">{point.heading}</h1></div>
                                    <p className='text-black '>{point.desc}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}