'use client'
import * as React from 'react';
import { PageStarter } from '@/Components/PageStarter';
import Image from 'next/image';
import { useState } from 'react';
import { GoArrowRight } from "react-icons/go";
import { toast } from 'react-toastify';
import axios from 'axios'

const Page = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [appliedFor, setAppliedFor] = useState("");
    const [coverletter, setCoverLetter] = useState("");
    const [file, setFile] = useState(null); // State to hold the uploaded file
    const [loading, setLoading] = useState(false);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if(file.size > 1024 * 1024) {
            toast('File Size too big');
            e.value = null
            setFile(null)
            return;
        }
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFile(reader.result.split(',')[1]);
                console.log(reader.result)
            };
            reader.readAsDataURL(file);
        }
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        if(file === null) {
            toast.error("Invalid File size or not uploaded");
            return
        }

        if(name === "" || email === "" || phone === "" || appliedFor === "") {
            toast.error("You Have Some Values are missing");
            return;
        }
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('phone', phone);
        formData.append('appliedFor', appliedFor);
        formData.append('coverletter', coverletter);
        formData.append('cvFile', file); // Assuming cvFile is a File object

        setLoading(true);
        try {
            const response = await axios.post('/api/apply', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            if (response.status === 200) {
                toast.success('Application submitted successfully');
                setName("");
                setEmail("");
                setPhone("");
                setAppliedFor("");
                setCoverLetter("");
                setAppliedFor("");
                setFile("");
            } else {
                toast.error('Failed to submit application');
            }
        } catch (error) {
            console.error('Error submitting application:', error);
            toast.error('Failed to submit application');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="">
            <PageStarter tit1={"Career"} tit1Col={"white"} tit2={""} descColor={"white"} imageSrc={"/images/banners/carrerpagebanner.jpg"} desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"} />
            <div className='bg-[#FFFAF2] p-4 text-black w-full flex md:flex-row flex-col items-center justify-center space-y-8 md:space-y-0 md:space-x-16'>
                <div className="md:w-[30%] w-[100%] h-[85vh]  relative">
                    <Image src="/images/wearehiring.png" layout="fill"></Image>
                </div>
                <div className='md:space-y-8 md:w-[30%] w-[100%]'>
                    <h1 className='text-4xl text-[#F19F1F] text-light text-center tracking-wide'>Join The Team</h1>
                    <form onSubmit={handleSubmit}>
                        <fieldset className="flex flex-col space-y-8" disabled={loading}>
                            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name *" type="text" className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" />
                            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email *" type="text" className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" />
                            <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone Number *" type="text" className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" />
                            <input value={appliedFor} onChange={(e) => setAppliedFor(e.target.value)} placeholder="Applied For *" type="text" className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" />
                            <textarea value={coverletter} onChange={(e) => setCoverLetter(e.target.value)} placeholder="Cover Letter" rows={4} className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" />
                            <div className='space-y-2'>
                                <div className="shrink-0">
                                    Upload Your CV<sup>*</sup>
                                </div>
                                <label className="block">
                                    <span className="sr-only">Choose profile photo</span>
                                    <input accept=".pdf" onChange={handleFileChange} type="file" className="block w-full text-sm text-slate-500
                                                        file:mr-4 file:py-2 file:px-4
                                                        file:rounded-full file:border-0
                                                        file:text-sm file:font-semibold
                                                        file:bg-violet-50 file:text-violet-700
                                                        hover:file:bg-violet-100"/>
                                    <label className="italic text-gray-400">Only Pdf is allowed max size 1MB</label>
                                </label>
                            </div>
                            <button disabled={loading} className="bg-[#F19F1F] disabled:bg-gray-200 disabled:text-white font-bold flex space-x-2 items-center rounded-lg p-2 w-fit text-white" type="Submit">{loading ? <div>Loading...</div> : <div className="flex items-center justify-between space-x-2">Submit <span><GoArrowRight fontWeight="bold" /></span></div>}</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Page
