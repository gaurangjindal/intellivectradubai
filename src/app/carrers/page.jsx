'use client'
import { PageStarter } from "@/Components/PageStarter";
import Image from "next/image";
import { useRouter } from 'next/navigation'
import * as React from 'react';
import { useState } from 'react';
import { GoArrowRight } from "react-icons/go";
import { toast } from 'react-toastify';
import axios from 'axios'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default function Page() {
    const router = useRouter();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [appliedFor, setAppliedFor] = useState("");
    const [coverletter, setCoverLetter] = useState("");
    const [file, setFile] = useState(null); // State to hold the uploaded file
    const [loading, setLoading] = useState(false);
    const [applyOpen, setApplyOpen] = useState(false);

    const moveToApply = () => {
        setApplyOpen(!applyOpen);
    }

    const validationSchema = Yup.object({
        name: Yup.string().required('Full Name is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        phone: Yup.string()
            .matches(/^[0-9]+$/, 'Phone must be only digits')
            .min(10, 'Phone must be at least 10 digits')
            .required('Phone Number is required'),
        appliedFor: Yup.string().required('Applied For is required'),
        coverletter: Yup.string(),
        
    });

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file.size > 1024 * 1024) {
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

        if (file === null) {
            toast.error("Invalid File size or not uploaded");
            return
        }

        if (name === "" || email === "" || phone === "" || appliedFor === "") {
            toast.error("You Have Some Values are missing");
            return;
        }

    };


    return (
        <div className="space-y-[5vh]">
            <PageStarter tit1={""} tit1Col={"white"} tit2={"Career"} descColor={"white"} imageSrc={"/images/banners/carrerpagebanner.jpg"} desc={" Join Intelli Vectra Technology and be part of a dynamic team driving digital innovation. Explore rewarding career opportunities where your skills and ideas can shape the future of technology solutions."} />
            <div>
                <div className="flex flex-col w-[100vw] justify-center items-center space-y-4 bg-white">
                    <div className="space-y-4 w-[70vw]">
                        <h1 className="text-4xl text-center text-black font-bold">Be a part of our mission</h1>
                        <p className="text-black text-center font-extralight">
                            Be a vital part of Intelli Vectra Technology mission to lead digital transformation globally. Join us in creating impactful solutions that empower businesses and shape the future of technology.
                        </p>
                    </div>
                    <div className="w-full flex flex-col md:flex-row">
                        <div className="md:w-[50%] w-[100%] relative h-[400px]">
                            <Image src="/images/nowhiring.jpg" layout="fill" />
                        </div>
                        <div className="md:w-[50%] w-[100%] bg-[#FFDFAD] p-16 py-16 space-y-8">
                            <p className="text-black tracking-widest font-extralight">We are expanding our team at Intelli Vectra Technology and looking for driven individuals like you to join us. Explore rewarding career opportunities and apply your skills to shape the future of IT solutions. Whether you are an experienced professional or new to the field, we invite you to be part of our innovative journey. Apply now and make an impact with us.</p>
                            <button onClick={moveToApply} className="py-2 bg-[#F19F1F] font-light px-8">Apply</button>
                        </div>
                    </div>
                </div>
                <div className={applyOpen ? "" : "hidden"}>
                    <div className='bg-[#FFFAF2] p-4 text-black w-full flex md:flex-row flex-col items-center justify-center space-y-8 md:space-y-0 md:space-x-16'>
                        <div className="md:w-[30%] w-[100%] h-[85vh]  relative">
                            <Image src="/images/wearehiring.png" layout="fill"></Image>
                        </div>
                        <div className='md:space-y-8 md:w-[30%] w-[100%]'>
                            <h1 className='text-4xl text-[#F19F1F] text-light text-center tracking-wide'>Join Our Team</h1>
                            <Formik
                                initialValues={{ name: '', email: '', phone: '', appliedFor: '', coverletter: '', cv: null }}
                                validationSchema={validationSchema}
                                onSubmit={
                                    async (values, { setSubmitting, resetForm}) => {
                                        const formData = new FormData();
                                        formData.append('name', values.name);
                                        formData.append('email', values.email);
                                        formData.append('phone', values.phone);
                                        formData.append('appliedFor', values.appliedFor);
                                        formData.append('coverletter', values.coverletter);
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
                                                resetForm();
                                            } else {
                                                toast.error('Failed to submit application');
                                            }
                                        } catch (error) {
                                            console.error('Error submitting application:', error);
                                            toast.error('Failed to submit application');
                                        } finally {
                                            setLoading(false);
                                        }
                                    }
                                }
                            >
                                {({ setFieldValue, isSubmitting }) => (
                                    <Form className='space-y-8'>
                                        <fieldset className="flex flex-col space-y-8" disabled={loading}>
                                            <div>
                                                <Field
                                                    name="name"
                                                    placeholder="Full Name *"
                                                    type="text"
                                                    className=" placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                                                />
                                                <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
                                            </div>
                                            <div>
                                                <Field
                                                    name="email"
                                                    placeholder="Email *"
                                                    type="email"
                                                    className=" placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                                                />
                                                <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                                            </div>
                                            <div>
                                                <Field
                                                    name="phone"
                                                    placeholder="Phone Number *"
                                                    type="text"
                                                    className=" placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                                                />
                                                <ErrorMessage name="phone" component="div" className="text-red-500 text-sm" />
                                            </div>
                                            <div>
                                                <Field
                                                    name="appliedFor"
                                                    placeholder="Applied For *"
                                                    type="text"
                                                    className=" placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                                                />
                                                <ErrorMessage name="appliedFor" component="div" className="text-red-500 text-sm" />
                                            </div>
                                            <div>
                                                <Field
                                                    name="coverletter"
                                                    as="textarea"
                                                    placeholder="Cover Letter"
                                                    rows={4}
                                                    className=" placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                                                />
                                                <ErrorMessage name="coverletter" component="div" className="text-red-500 text-sm" />
                                            </div>
                                            <div className='space-y-2'>
                                                <div className="shrink-0">
                                                    Upload Your CV<sup>*</sup>
                                                </div>
                                                <label className="block">
                                                    <span className="sr-only">Choose profile photo</span>
                                                    <input
                                                        accept=".pdf"
                                                        type="file"
                                                        className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
                                                        onChange={handleFileChange}
                                                    />
                                                    <label className=" text-gray-400">Only Pdf is allowed max size 1MB</label>
                                                </label>
                                                <ErrorMessage name="cv" component="div" className="text-red-500 text-sm" />
                                            </div>
                                            <button
                                                disabled={loading || isSubmitting}
                                                className="bg-[#F19F1F] disabled:bg-gray-200 disabled:text-white font-bold flex space-x-2 items-center rounded-lg p-2 w-fit text-white"
                                                type="submit"
                                            >
                                                {loading ? <div>Loading...</div> : <div className="flex items-center justify-between space-x-2">Submit <span><GoArrowRight fontWeight="bold" /></span></div>}
                                            </button>
                                        </fieldset>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}