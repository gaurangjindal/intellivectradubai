'use client'
import { PageStarter } from '@/Components/PageStarter';
import * as React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";
import { toast } from 'react-toastify';

export default function Page() {
  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [phone, setPhone] = React.useState("")
  const [subject, setSubject] = React.useState("Customer Message")
  const [message, setMessage] = React.useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!name || !email || !message) {
      toast.error('Name, Email, and Message are required');
      return;
    }

    // Prepare data for API request
    const formData = {
      name,
      email,
      phone,
      subject,
      message,
    };
    setLoading(true);
    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message);
        // Clear form fields after successful submission
        setName('');
        setEmail('');
        setPhone('');
        setSubject('');
        setMessage('');
      } else {
        toast.error(data.message || 'Something went wrong');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to send email');
    } finally {
      setLoading(false)
    }
  };
  return (
    <div className="w-full">
      <PageStarter tit1={"Contact"} tit2={" Us"} tit1Col={"black"} descColor={"black"} imageSrc={"/images/banners/contactusbanner.jpg"} desc={"Have questions or interested in partnering with Intelli Vectra Technology? Contact us today for personalized IT solutions and expert consultation tailored to your business needs."}></PageStarter>
      <div className='bg-[#FFFAF2] w-full md:py-8 space-y-2 md:px-32 md:space-y-8'>
        <h1 className='text-center text-3xl underline font-bold text-[#FFC872] '> Get In Touch </h1>
        <div className='flex p-4 flex-col md:flex-row-reverse space-y-4 md:space-y-0 md:space-x-4 w-full justify-center items-center'>
          <div className='bg-white shadow-lg space-y-8 text-black p-4 py-8 rounded-lg md:w-[70%] w-full h-fit md:h-[420px]'>
            <div>
              <h1 className='text-3xl font-extralight'>Send Message</h1>
              <p className='text-xl font-extralight'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </p>
            </div>
            <div>
              <form className='space-y-4'>
                <div className='flex items-center justify-between'>
                  <input value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' className='w-[100%] p-2 font-extralight border border-black ' type="text" name="name" />

                </div>
                <div className='flex items-center justify-between'>
                  <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' className='w-[49%] p-2 font-extralight border border-black ' type="text" name="email" />
                  <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='Phone No' className='w-[49%] p-2 font-extralight border border-black ' type="text" name="phone" />
                </div>
                <div>
                  <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Message' rows={3} className='w-full p-2 font-extralight col-span-4 border border-black '></textarea>
                </div>
                <div className='flex items-center justify-end'>
                  <button disabled={loading} onClick={handleSubmit} className='p-2 bg-[#F19F1F] tracking-wide text-white disabled:bg-gray-200 disabled:text-white'>{loading ? "Loading..." : "Submit"}</button>
                </div>
              </form>
            </div>
          </div>
          <div className='w-full md:grid-cols-1 grid grid-cols-1 gap-1 gap-y-2 md:w-[25%]'>
            <div className='md:h-[100px] h-full p-2 flex items-center md:justify-between space-x-4 shadow-lg md:w-[250px] w-full bg-white rounded-lg'>
              <div className="p-4 rounded-[50%] bg-[#FFAE2F]"><FaPhoneAlt style={{ fontSize: '30px' }} /></div>
              <div className='text-black w-[90%] text-sm font-extralight'>
                <p>24*7 Services</p>
                <p className="text-[#F19F1F] font-normal">Call Us On</p>
                <a className='underline cursor-pointer' href='tel:012-4496-0635'>012-4496-0635</a>
              </div>
            </div>
            <div className='md:h-[100px] h-full p-2 flex items-center md:justify-between space-x-4  shadow-lg md:w-[250px] w-full bg-white rounded-lg'>
              <div className="p-4 rounded-[50%] bg-[#FFAE2F]"><MdEmail style={{ fontSize: '30px' }} /></div>
              <div className='text-black w-[90%] text-sm font-extralight'>
                <p>Drop a Line</p>
                <p className="text-[#F19F1F] font-normal">Mail Address</p>
                <a className='underline cursor-pointer' href='mailto:info@intellivectra.tech'>info@intellivectra.tech</a>
              </div>
            </div>
            <div className='md:h-[100px] h-full p-2 flex items-center md:justify-between space-x-4  shadow-lg md:w-[250px] w-full bg-white rounded-lg'>
              <div className="p-4 rounded-[50%] bg-[#FFAE2F]"><FaLocationDot style={{ fontSize: '30px' }} /></div>
              <div className="text-black  w-[90%] font-extralight">
                <p className="text-xs">Location</p>
                <p className="text-[#F19F1F] font-normal text-xs">Visit Us At</p>
                <p className="text-xs">
                  2nd Floor, Plot No. 29, Maruti
                  Industrial Area, Sector-18,
                  Gurugram–122015 (Haryana).
                </p>

              </div>
            </div>
            <div className='md:h-[100px] h-full p-2 flex items-center md:justify-between space-x-4  shadow-lg md:w-[250px] w-full bg-white rounded-lg'>
              <div className="p-4 rounded-[50%] bg-[#FFAE2F]"><FaRegClock style={{ fontSize: '30px' }} /></div>
              <div className="text-black  w-[90%] font-extralight text-sm">
                <p>Office Hours</p>
                <p className="text-[#F19F1F] font-normal text-xs">Opening Time</p>
                <p>Mon - Fri : 9.30am - 5.30pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col md:flex-row items-end justify-center w-full bg-white'>
        <div className='space-y-4 flex flex-col justify-center'>
          <Image src="/images/burzkhalifa.jpg" height={300} width={500} />
          <h1 className='text-4xl text-[#F19F1F] text-center'>Dubai, UAE</h1>
          <p className='text-[#3F444D] text-center font-extralight'>Office #1111,<br />
            Clover Bay Tower, Business Bay,<br />
            PO Box: 283426, Dubai, UAE</p>
          <div className='flex justify-center w-full'>
            <button className='bg-[#F19F1F] p-2 w-fit'>Get Directions</button>
          </div>
        </div>
        <div className='space-y-4 flex flex-col justify-center'>
          <Image src="/images/indiagate.jpg" height={300} width={500} />
          <h1 className='text-4xl text-[#F19F1F] text-center'>Delhi NCR, India</h1>
          <p className='text-[#3F444D] text-center font-extralight'>2nd Floor, Plot No. 29,<br />
            Maruti Industrial Area, Sector-18,<br />
            Gurugram–122015 (Haryana).</p>
          <div className='flex justify-center w-full'>
            <button className='bg-[#F19F1F] p-2 w-fit'>Get Directions</button>
          </div>
        </div>
        <div className='space-y-4 flex flex-col justify-center'>
          <Image src="/images/indiagate.jpg" height={300} width={500} />
          <h1 className='text-4xl text-[#F19F1F] text-center'>Riyadh,Saudi Arabia</h1>
          <p className='text-[#3F444D] text-center font-extralight'>Samama Tower<br />
            King Fahd Road,Riyadh<br />
            Kingdom of Saudi Arabia 29
          </p>
          <div className='flex justify-center w-full'>
            <button className='bg-[#F19F1F] p-2 w-fit'>Get Directions</button>
          </div>
        </div>
        <div className='space-y-4 flex flex-col justify-center'>
          <Image src="/images/burzkhalifa.jpg" height={300} width={500} />
          <h1 className='text-4xl text-[#F19F1F] text-center'>London,UK</h1>
          <p className='text-[#3F444D] text-center font-extralight'>Coming Soon<br />
            <br />
          </p>
          <div className='flex justify-center w-full'>
            <button className='bg-[#F19F1F] p-2 w-fit'>Get Directions</button>
          </div>
        </div>

      </div>
    </div>

  )
}

