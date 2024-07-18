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
import PhoneInput from "react-phone-input-2";
import styled from 'styled-components';
import "react-phone-input-2/lib/bootstrap.css";

const PhoneInputContainer = styled.div`
  width: 100%;
  height: 52px;
  border: 1px solid black; /* Add border of 5px solid black */
  border-radius: 8px; /* Rounded corners with 8px radius */
  @media (min-width: 768px) {
    width: 49%;
  }
`;

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
        appliedFor: Yup.string().required('Applied For is required'),
        coverletter: Yup.string(),

    });

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file.size > 5 * 1024 * 1024) {
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
            toast.error("File should be max 5MB and only pdf format allowed");
            return
        }

        if (name === "" || email === "" || phone === "" || appliedFor === "") {
            toast.error("You Have Some Values are missing");
            return;
        }

    };


    return (
        <div className="space-y-[5vh]">
            <PageStarter tit1={"Career"} tit1Col={"white"} tit2={""} descColor={"white"} imageSrc={"/images/banners/carrerpagebanner.jpg"} desc={"Craft your career path with us: where growth thrives."} />
            <div>
                <div className="flex flex-col w-[100%] justify-center items-center space-y-4 bg-white">
                    <div className="space-y-4 lg:w-[70%] p-4">
                        <h1 className="text-4xl text-center text-black font-bold">Join us on our journey to make a difference.</h1>
                        <p className="text-black md:text-center font-normal text-justify md:">
                            A workplace should be welcoming and engaging, exciting and meaningful. Our culture embodies years of hard work nurturing our employees with the right blend of opportunities—from pursuing innovative career tracks and upskilling through professional development, with best-in-class learning and training, to ensuring a fulfilling work-life balance.
                        </p>
                    </div>
                    <div className="w-full flex flex-col lg:flex-row">
                        <div className="lg:w-[50%] w-[100%] relative h-[400px]">
                            <Image src="/images/nowhiring.jpg" layout="fill" />
                        </div>
                        <div className="lg:w-[50%] w-[100%] bg-[#FFDFAD] p-16 py-16 space-y-8">
                            <p className="text-black font-normal">We&apos;re a company that emphasizes autonomy, personal responsibility, and trust because satisfied clients start with employees who enjoy what they do. Our success as a company depends on our strength as a team and cultivating a workplace that&apos;s professionally empowering and enjoyable has been a priority from the beginning. We are always looking for new team members, If you&apos;re interested in joining our team, the process starts with a simple.</p>
                            <button onClick={moveToApply} className="cursor-pointer rounded-lg p-2 px-6 h-fit w-fit text-white bg-[#F19F1F]">Apply</button>
                        </div>
                    </div>
                </div>
                <div className={applyOpen ? "" : "hidden"}>
                    <div className='bg-[#FFFAF2] p-4 text-black w-full flex md:flex-row flex-col items-center justify-center space-y-8 md:space-y-0 md:space-x-16'>
                        <div className='md:space-y-8 space-y-4 lg:w-[70%] w-[100%]'>
                            <h1 className='text-4xl text-[#F19F1F] text-light text-center tracking-wide'>Join Our Team</h1>
                            <Formik
                                initialValues={{ name: '', email: '', phone: '', appliedFor: '', coverletter: '', cv: null }}
                                validationSchema={validationSchema}
                                onSubmit={async (values, { setSubmitting, resetForm }) => {
                                    const formData = new FormData();
                                    formData.append('name', values.name);
                                    formData.append('email', values.email);
                                    formData.append('phone', phone);
                                    formData.append('appliedFor', values.appliedFor);
                                    formData.append('coverletter', values.coverletter);
                                    formData.append('cvFile', file); // Assuming cvFile is a File object

                                    setLoading(true);
                                    try {
                                        const response = await axios.post('/api/apply', {
                                            name: values.name,
                                            email: values.email,
                                            phone: phone,
                                            appliedFor: values.appliedFor,
                                            coverletter: values.coverletter,
                                            cvFile: file
                                        }, {
                                            headers: {
                                                'Content-Type': 'multipart/form-data'
                                            }
                                        });
                                        console.log(response)
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
                                }}
                            >
                                {({ setFieldValue, isSubmitting, errors }) => (
                                    <Form className='space-y-8 bg-white shadow-lg rounded-lg p-8'>
                                        <fieldset className="flex flex-col space-y-4" disabled={loading}>
                                            <div className="flex space-y-4 md:space-y-0 flex-col md:flex-row w-full h-full justify-between">
                                                <div className="md:w-[49%] w-full">
                                                    <Field
                                                        name="name"
                                                        placeholder="Full Name *"
                                                        type="text"
                                                        className="placeholder:text-slate-400 h-[50px] block bg-white w-full border border-black rounded-md py-2 px-3 shadow-sm  sm:text-sm"
                                                    />
                                                    <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
                                                </div>
                                                <div className="md:w-[49%] w-full">
                                                    <Field
                                                        name="email"
                                                        placeholder="Email *"
                                                        type="email"
                                                        className="placeholder:text-slate-400 h-[50px] block bg-white w-full border border-black rounded-md py-2 px-3 shadow-sm  sm:text-sm"
                                                    />
                                                    <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                                                </div>
                                            </div>
                                            <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row w-full justify-between">
                                                <PhoneInputContainer>
                                                    <PhoneInput
                                                        buttonClass='h-[50px]'
                                                        inputClass='h-[50px]'
                                                        containerClass=''
                                                        containerStyle={{ width: '100%' }}
                                                        inputStyle={{ width: '100%' }}
                                                        country={'ae'}
                                                        enableSearch={true}
                                                        value={phone}
                                                        onChange={(code) => setPhone(code)}
                                                        name="phone"
                                                    />
                                                    <ErrorMessage name="phone" component="div" className="text-red-500 text-sm mt-1" />
                                                </PhoneInputContainer>
                                                <div className="md:w-[49%] w-full">
                                                    <Field
                                                        name="appliedFor"
                                                        placeholder="Applied For *"
                                                        type="text"
                                                        className="placeholder:text-slate-400 h-[50px] block bg-white w-full border border-black rounded-md py-2 px-3 shadow-sm  sm:text-sm"
                                                    />
                                                    <ErrorMessage name="appliedFor" component="div" className="text-red-500 text-sm mt-1" />
                                                </div>
                                            </div>
                                            <div>
                                                <Field
                                                    name="coverletter"
                                                    as="textarea"
                                                    placeholder="Cover Letter"
                                                    rows={4}
                                                    className="placeholder:text-slate-400 block bg-white w-full border border-black  rounded-md py-2 px-3 shadow-sm  sm:text-sm"
                                                />
                                                <ErrorMessage name="coverletter" component="div" className="text-red-500 text-sm mt-1" />
                                            </div>
                                            <div className='space-y-2'>
                                                <div className="shrink-0">
                                                    Upload Your CV/Resume<sup>*</sup>
                                                </div>
                                                <label className="block relative">
                                                    <span className="sr-only">Choose profile photo</span>
                                                    <input
                                                        accept=".pdf"
                                                        type="file"
                                                        className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#F19F1F] file:text-[#F19F1F] file:bg-opacity-5 hover:bg-opacity-10"
                                                        onChange={handleFileChange}
                                                    />
                                                </label>
                                                <ErrorMessage name="cv" component="div" className="text-red-500 text-sm mt-1" />
                                            </div>
                                            <button
                                                disabled={loading || isSubmitting}
                                                className="cursor-pointer rounded-lg p-2 px-6 h-fit w-fit text-white bg-[#F19F1F] disabled:bg-gray-100 disabled:text-gray-200 w-fit"
                                                type="submit"
                                            >
                                                {loading ? <div>Loading...</div> : <div className="flex items-center justify-between space-x-2">Submit</div>}
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

const ErrorSummary = ({ errors }) => {
    const errorMessages = Object.values(errors);

    if (!errorMessages.length) return null;

    return (
        <div className="p-4 mb-4 border border-red-500 bg-red-100 text-red-700">
            <ul>
                {errorMessages.map((message, index) => (
                    <li key={index}>{message}</li>
                ))}
            </ul>
        </div>
    );
};
