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
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import { GrLocation } from "react-icons/gr";

import styled from 'styled-components';

// Styled container with responsive width
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
  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [phone, setPhone] = React.useState("")
  const [subject, setSubject] = React.useState("Customer Message")
  const [message, setMessage] = React.useState("");
  const [loading, setLoading] = useState(false);
  const [countryCode, setCountryCode] = useState("")
  // Validation schema
  // Validation schema
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    message: Yup.string().required('Message is required'),
  });

  const ErrorMessage = styled.div`
  color: red;
  font-size: 0.875rem; /* Equivalent to text-sm in Tailwind CSS */
  margin-top: 0.25rem; /* Equivalent to mt-1 in Tailwind CSS */
  min-height: 1.25rem; /* Ensure space for the error message */
`;



  const countryCodes = [
    { code: '+1', name: 'USA' },
    { code: '+44', name: 'UK' },
    { code: '+91', name: 'India' },
    { code: '+93', name: 'Afghanistan' },
    { code: '+355', name: 'Albania' },
    { code: '+213', name: 'Algeria' },
    { code: '+376', name: 'Andorra' },
    { code: '+244', name: 'Angola' },
    { code: '+54', name: 'Argentina' },
    { code: '+374', name: 'Armenia' },
    { code: '+61', name: 'Australia' },
    { code: '+43', name: 'Austria' },
    { code: '+994', name: 'Azerbaijan' },
    { code: '+973', name: 'Bahrain' },
    { code: '+880', name: 'Bangladesh' },
    { code: '+375', name: 'Belarus' },
    { code: '+32', name: 'Belgium' },
    { code: '+501', name: 'Belize' },
    { code: '+229', name: 'Benin' },
    { code: '+975', name: 'Bhutan' },
    { code: '+591', name: 'Bolivia' },
    { code: '+387', name: 'Bosnia and Herzegovina' },
    { code: '+267', name: 'Botswana' },
    { code: '+55', name: 'Brazil' },
    { code: '+673', name: 'Brunei' },
    { code: '+359', name: 'Bulgaria' },
    { code: '+226', name: 'Burkina Faso' },
    { code: '+257', name: 'Burundi' },
    { code: '+855', name: 'Cambodia' },
    { code: '+237', name: 'Cameroon' },
    { code: '+1', name: 'Canada' },
    { code: '+238', name: 'Cape Verde' },
    { code: '+236', name: 'Central African Republic' },
    { code: '+235', name: 'Chad' },
    { code: '+56', name: 'Chile' },
    { code: '+86', name: 'China' },
    { code: '+57', name: 'Colombia' },
    { code: '+269', name: 'Comoros' },
    { code: '+243', name: 'Congo, Democratic Republic of the' },
    { code: '+242', name: 'Congo, Republic of the' },
    { code: '+506', name: 'Costa Rica' },
    { code: '+225', name: "Côte d'Ivoire" },
    { code: '+385', name: 'Croatia' },
    { code: '+53', name: 'Cuba' },
    { code: '+357', name: 'Cyprus' },
    { code: '+420', name: 'Czech Republic' },
    { code: '+45', name: 'Denmark' },
    { code: '+253', name: 'Djibouti' },
    { code: '+1', name: 'Dominica' },
    { code: '+1', name: 'Dominican Republic' },
    { code: '+593', name: 'Ecuador' },
    { code: '+20', name: 'Egypt' },
    { code: '+503', name: 'El Salvador' },
    { code: '+240', name: 'Equatorial Guinea' },
    { code: '+291', name: 'Eritrea' },
    { code: '+372', name: 'Estonia' },
    { code: '+251', name: 'Ethiopia' },
    { code: '+679', name: 'Fiji' },
    { code: '+358', name: 'Finland' },
    { code: '+33', name: 'France' },
    { code: '+241', name: 'Gabon' },
    { code: '+220', name: 'Gambia' },
    { code: '+995', name: 'Georgia' },
    { code: '+49', name: 'Germany' },
    { code: '+233', name: 'Ghana' },
    { code: '+30', name: 'Greece' },
    { code: '+299', name: 'Greenland' },
    { code: '+502', name: 'Guatemala' },
    { code: '+224', name: 'Guinea' },
    { code: '+245', name: 'Guinea-Bissau' },
    { code: '+592', name: 'Guyana' },
    { code: '+509', name: 'Haiti' },
    { code: '+504', name: 'Honduras' },
    { code: '+852', name: 'Hong Kong' },
    { code: '+36', name: 'Hungary' },
    { code: '+354', name: 'Iceland' },
    { code: '+62', name: 'Indonesia' },
    { code: '+98', name: 'Iran' },
    { code: '+964', name: 'Iraq' },
    { code: '+353', name: 'Ireland' },
    { code: '+972', name: 'Israel' },
    { code: '+39', name: 'Italy' },
    { code: '+81', name: 'Japan' },
    { code: '+962', name: 'Jordan' },
    { code: '+7', name: 'Kazakhstan' },
    { code: '+254', name: 'Kenya' },
    { code: '+686', name: 'Kiribati' },
    { code: '+965', name: 'Kuwait' },
    { code: '+996', name: 'Kyrgyzstan' },
    { code: '+856', name: 'Laos' },
    { code: '+371', name: 'Latvia' },
    { code: '+961', name: 'Lebanon' },
    { code: '+266', name: 'Lesotho' },
    { code: '+231', name: 'Liberia' },
    { code: '+218', name: 'Libya' },
    { code: '+423', name: 'Liechtenstein' },
    { code: '+370', name: 'Lithuania' },
    { code: '+352', name: 'Luxembourg' },
    { code: '+853', name: 'Macau' },
    { code: '+389', name: 'Macedonia' },
    { code: '+261', name: 'Madagascar' },
    { code: '+265', name: 'Malawi' },
    { code: '+60', name: 'Malaysia' },
    { code: '+960', name: 'Maldives' },
    { code: '+223', name: 'Mali' },
    { code: '+356', name: 'Malta' },
    { code: '+692', name: 'Marshall Islands' },
    { code: '+222', name: 'Mauritania' },
    { code: '+230', name: 'Mauritius' },
    { code: '+52', name: 'Mexico' },
    { code: '+691', name: 'Micronesia' },
    { code: '+373', name: 'Moldova' },
    { code: '+377', name: 'Monaco' },
    { code: '+976', name: 'Mongolia' },
    { code: '+382', name: 'Montenegro' },
    { code: '+212', name: 'Morocco' },
    { code: '+258', name: 'Mozambique' },
    { code: '+95', name: 'Myanmar' },
    { code: '+264', name: 'Namibia' },
    { code: '+674', name: 'Nauru' },
    { code: '+977', name: 'Nepal' },
    { code: '+31', name: 'Netherlands' },
    { code: '+687', name: 'New Caledonia' },
    { code: '+64', name: 'New Zealand' },
    { code: '+505', name: 'Nicaragua' },
    { code: '+227', name: 'Niger' },
    { code: '+234', name: 'Nigeria' },
    { code: '+683', name: 'Niue' },
    { code: '+850', name: 'North Korea' },
    { code: '+47', name: 'Norway' },
    { code: '+968', name: 'Oman' },
    { code: '+92', name: 'Pakistan' },
    { code: '+680', name: 'Palau' },
    { code: '+970', name: 'Palestine' },
    { code: '+507', name: 'Panama' },
    { code: '+675', name: 'Papua New Guinea' },
    { code: '+595', name: 'Paraguay' },
    { code: '+51', name: 'Peru' },
    { code: '+63', name: 'Philippines' },
    { code: '+48', name: 'Poland' },
    { code: '+351', name: 'Portugal' },
    { code: '+974', name: 'Qatar' },
    { code: '+40', name: 'Romania' },
    { code: '+7', name: 'Russia' },
    { code: '+250', name: 'Rwanda' },
    { code: '+290', name: 'Saint Helena' },
    { code: '+508', name: 'Saint Pierre and Miquelon' },
    { code: '+685', name: 'Samoa' },
    { code: '+378', name: 'San Marino' },
    { code: '+239', name: 'São Tomé and Príncipe' },
    { code: '+966', name: 'Saudi Arabia' },
    { code: '+221', name: 'Senegal' },
    { code: '+381', name: 'Serbia' },
    { code: '+248', name: 'Seychelles' },
    { code: '+232', name: 'Sierra Leone' },
    { code: '+65', name: 'Singapore' },
    { code: '+421', name: 'Slovakia' },
    { code: '+386', name: 'Slovenia' },
    { code: '+677', name: 'Solomon Islands' },
    { code: '+252', name: 'Somalia' },
    { code: '+27', name: 'South Africa' },
    { code: '+82', name: 'South Korea' },
    { code: '+211', name: 'South Sudan' },
    { code: '+34', name: 'Spain' },
    { code: '+94', name: 'Sri Lanka' },
    { code: '+249', name: 'Sudan' },
    { code: '+597', name: 'Suriname' },
    { code: '+268', name: 'Swaziland' },
    { code: '+46', name: 'Sweden' },
    { code: '+41', name: 'Switzerland' },
    { code: '+963', name: 'Syria' },
    { code: '+886', name: 'Taiwan' },
    { code: '+992', name: 'Tajikistan' },
    { code: '+255', name: 'Tanzania' },
    { code: '+66', name: 'Thailand' },
    { code: '+670', name: 'Timor-Leste' },
    { code: '+228', name: 'Togo' },
    { code: '+676', name: 'Tonga' },
    { code: '+216', name: 'Tunisia' },
    { code: '+90', name: 'Turkey' },
    { code: '+993', name: 'Turkmenistan' },
    { code: '+688', name: 'Tuvalu' },
    { code: '+256', name: 'Uganda' },
    { code: '+380', name: 'Ukraine' },
    { code: '+971', name: 'United Arab Emirates' },
    { code: '+44', name: 'United Kingdom' },
    { code: '+1', name: 'United States' },
    { code: '+598', name: 'Uruguay' },
    { code: '+998', name: 'Uzbekistan' },
    { code: '+678', name: 'Vanuatu' },
    { code: '+58', name: 'Venezuela' },
    { code: '+84', name: 'Vietnam' },
    { code: '+681', name: 'Wallis and Futuna' },
    { code: '+967', name: 'Yemen' },
    { code: '+260', name: 'Zambia' },
    { code: '+263', name: 'Zimbabwe' },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!name || !email || !message) {
      toast.error('Name, Email, and Message are required');
      return;
    }


  };
  return (
    <div className="w-full">
      <PageStarter tit1={"Contact"} tit2={" Us"} tit1Col={"black"} descColor={"black"} imageSrc={"/images/banners/contactusbanner.jpg"} desc={"Connect us today and discover the difference."}></PageStarter>
      <div className='bg-[#FFFAF2] w-full py-4 md:py-8 space-y-2 lg:px-32 md:space-y-4'>
        <h1 className='text-center md:text-4xl text-2xl font-bold text-[#F19F1F] '> <span className='text-black'> Get In </span>Touch </h1>
        <div className='flex p-4 flex-col lg:flex-row-reverse space-y-4 lg:space-y-0 lg:space-x-4 w-full justify-center items-center'>
          <div className='bg-white shadow-lg space-y-8 text-black p-4 py-8 rounded-lg lg:w-[70%] w-full'>
            <div>
              <p className='text-lg font-normal'> We&apos;re committed to helping your organization with our Solutions & Services. Submit the form below, and we&apos;ll be in touch soon.</p>
            </div>
            <Formik
              initialValues={{ name: '', email: '', phone: '', message: '' }}
              validationSchema={validationSchema}
              onSubmit={async (values, { setSubmitting, resetForm }) => {
                const formData = {
                  name: values.name,
                  email: values.email,
                  phone: phone,
                  message: values.message,
                  subject: "Contact Us Email"
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
                    resetForm();
                  } else {
                    toast.error(data.message || 'Something went wrong');
                  }
                } catch (error) {
                  console.error('Error:', error);
                  toast.error('Failed to send email');
                } finally {
                  setLoading(false);
                }
                setSubmitting(false);
              }}
            >
              {({ isSubmitting, errors, touched }) => (
                <Form className='space-y-4'>
                  <div className='mb-4'>
                    <Field
                      name='name'
                      placeholder='Name'
                      className='rounded-lg h-[50px] w-full p-2 font-normal border border-black'
                    />
                    {touched.name && errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
                  </div>
                  <div className='mb-4 flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between'>
                    <div className='md:w-[49%] w-full'>
                      <Field
                        name='email'
                        placeholder='Email Address'
                        className='rounded-lg w-full h-[50px] p-2 font-normal border border-black'
                      />
                      {touched.email && errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
                    </div>

                    <PhoneInputContainer>
                      <PhoneInput
                        className='border-0'
                        buttonClass='h-[50px]'
                        inputClass='h-[50px] border-0'
                        containerClass=''
                        containerStyle={{ width: '100%' }}
                        inputStyle={{ width: '100%' }}
                        country={'ae'}
                        enableSearch={true}
                        value={phone}
                        onChange={(code) => setPhone(code)}
                      />
                      {touched.phone && errors.phone && <ErrorMessage>{errors.phone}</ErrorMessage>}
                    </PhoneInputContainer>
                  </div>
                  <div className='mb-4'>
                    <Field
                      as='textarea'
                      name='message'
                      placeholder='Message'
                      rows={3}
                      className='rounded-lg w-full p-2 font-normal border border-black'
                    />
                    {touched.message && errors.message && <ErrorMessage>{errors.message}</ErrorMessage>}
                  </div>
                  <div className='flex items-center md:justify-end justify-center'>
                    <button
                      type='submit'
                      disabled={loading}
                      className='cursor-pointer rounded-lg p-2 px-6 h-fit w-fit text-white bg-[#F19F1F] disabled:bg-gray-200 disabled:text-white'
                    >
                      {loading ? "Loading..." : "Submit"}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
          <div className='w-full lg:grid-cols-1 md:grid-cols-2 grid grid-cols-1 gap-4 gap-y-2 lg:w-[35%]'>
            <div className='md:h-[104px] h-full p-2 flex items-center md:justify-between space-x-4 shadow-lg lg:w-[300px] w-full bg-white rounded-lg'>
              <div className="p-4 rounded-[50%] bg-[#FFAE2F] text-white"><a className='underline cursor-pointer' href='tel:012-4496-0635'><FaPhoneAlt style={{ fontSize: '30px' }} /></a></div>
              <div className='text-black w-[90%] text-sm font-normal'>
                <p className="text-[#F19F1F] font-bold">Call Us On</p>
                <a className='cursor-pointer' href='tel:012-4496-0635'>+971 4 5667357</a>
              </div>
            </div>
            <div className='md:h-[104px] h-full p-2 flex items-center md:justify-between space-x-4  shadow-lg lg:w-[300px] w-full bg-white rounded-lg'>
              <div className="p-4 rounded-[50%] text-white bg-[#FFAE2F]"><a className='cursor-pointer' href='mailto:info@intellivectra.tech'><MdEmail style={{ fontSize: '30px' }} /></a></div>
              <div className='text-black w-[90%] text-sm font-normal'>
                <p className="text-[#F19F1F] font-bold">Mailing Address</p>
                <a className='cursor-pointer' href='mailto:info@intellivectra.com'>info@intellivectra.com</a>
              </div>
            </div>
            <div className='md:h-[104px] h-full p-2 flex items-center md:justify-between space-x-4  shadow-lg lg:w-[300px] w-full bg-white rounded-lg'>
              <div className="p-4 rounded-[50%] text-white bg-[#FFAE2F]"><a href="https://www.google.com/maps/place/Clover+Bay+Tower+-+6a+Marasi+Dr+-+Business+Bay+-+Dubai+-+United+Arab+Emirates/data=!4m2!3m1!1s0x3e5f69d353d52701:0xea5908e654d1ea82?sa=X&ved=1t:242&ictx=111"><FaLocationDot style={{ fontSize: '30px' }} /></a></div>
              <div className="text-black  w-[90%] font-normal">
                <p className="text-[#F19F1F] font-bold text-sm">Visit Us At</p>
                <p className="text-sm">
                  Office #1111, Clover Bay Tower
                  Business Bay, PO Box: 283426
                  Dubai, United Arab Emirates
                </p>

              </div>
            </div>
            <div className='md:h-[104px] h-full p-2 flex items-center md:justify-between space-x-4  shadow-lg lg:w-[300px] w-full bg-white rounded-lg'>
              <div className="p-4 rounded-[50%] bg-[#FFAE2F]"><Image src="/images/clock.png" height={40} width={40}></Image></div>
              <div className="text-black  w-[90%] font-normal text-sm">
                <p className="text-[#F19F1F] font-bold text-sm">Office Hours</p>
                <p>Monday - Friday<br /> 9.30 AM - 5.30 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex pb-4 flex-col lg:flex-row lg:items-end items-center justify-center w-full bg-white'>
        <div className='space-y-4 flex flex-col justify-center'>
          <Image src="/images/burzkhalifa.jpg" height={300} width={500} />
          <h1 className='text-2xl text-[#F19F1F] text-center'>Dubai, UAE</h1>
          <p className='text-[#3F444D] text-center font-normal'>
            Office #1111, Clover Bay Tower<br />
            Business Bay, PO Box: 283426<br />
            Dubai, United Arab Emirates
          </p>
          <a href="https://www.google.com/maps/place/Clover+Bay+Tower+-+6a+Marasi+Dr+-+Business+Bay+-+Dubai+-+United+Arab+Emirates/data=!4m2!3m1!1s0x3e5f69d353d52701:0xea5908e654d1ea82?sa=X&ved=1t:242&ictx=111">
            <div className='flex text-[#F19F1F]  justify-center w-full items-center space-x-2 cursor-pointer'>
              <span><GrLocation /></span> <p className='hover:text-black'>Get Direction</p>
            </div>
          </a>
        </div>
        <div className='space-y-4 flex flex-col justify-center'>
          <Image src="/images/indiagate.jpg" height={300} width={500} />
          <h1 className='text-2xl text-[#F19F1F] text-center'>Delhi NCR, India</h1>
          <p className='text-[#3F444D] text-center font-normal'>2nd Floor, Plot No. 29<br />
            Maruti Industrial Area, Sector-18<br />
            Gurugram–122015 (Haryana), India</p>
          <a target='_blank' href='https://www.google.com/maps/dir/25.6170256,85.116814/Intelli+Vectra+Technologies/@26.787533,75.8239746,6z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x390d1930ce6b42f9:0xb39219cee9e1d009!2m2!1d77.0743589!2d28.490693?entry=ttu'><div className='flex text-[#F19F1F]  justify-center w-full items-center space-x-2 cursor-pointer'>
            <span><GrLocation /></span> <p className='hover:text-black'>Get Direction</p>
          </div>
          </a>
        </div>
        <div className='space-y-4 flex flex-col justify-center'>
          <Image src="/images/riyadh.png" height={300} width={500} />
          <h1 className='text-2xl text-[#F19F1F] text-center'>Riyadh, Saudi Arabia</h1>
          <p className='text-[#3F444D] text-center font-normal'>Samama Tower<br />
            King Fahd Road, Riyadh<br />
            Kingdom of Saudi Arabia
          </p>
          <a target='_blank' href='https://www.google.com/maps/place/The+Place+-+Office+for+rent+in+Samama+Holdings+Riyadh/@24.706165,46.6744409,15z/data=!4m2!3m1!1s0x0:0xbe70ef02eedf2fb?sa=X&ved=1t:2428&ictx=111'>
            <div className='flex text-[#F19F1F]  justify-center w-full items-center space-x-2 cursor-pointer'><div className='flex text-[#F19F1F]  justify-center w-full items-center space-x-2 cursor-pointer'>
              <span><GrLocation /></span> <p className='hover:text-black'>Get Direction</p>
            </div>
            </div>
          </a>
        </div>
        <div className='space-y-4 flex flex-col'>
          <Image src="/images/london.jpg" height={300} width={500} />
          <h1 className='text-2xl text-[#F19F1F] text-center'>London, UK</h1>
          <p className='text-[#3F444D] text-center font-normal'>Coming Soon<br />
            <br />
            <br />
          </p>
          <div className='flex text-gray-200 justify-center w-full items-center space-x-2'>
            <span><GrLocation/></span> <p className=''>Get Direction</p>
          </div>
        </div>

      </div>
    </div>

  )
}

