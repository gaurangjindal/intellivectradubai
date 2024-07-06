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


export default function Page() {
  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [phone, setPhone] = React.useState("")
  const [subject, setSubject] = React.useState("Customer Message")
  const [message, setMessage] = React.useState("");
  const [loading, setLoading] = useState(false);

  // Validation schema
  // Validation schema
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    countryCode: Yup.string().required('Country code is required'),
    phone: Yup.string().matches(/^[0-9]+$/, 'Phone must be only digits').min(10, 'Phone must be at least 10 digits').required('Phone is required'),
    message: Yup.string().required('Message is required'),
  });

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
      <div className='bg-[#FFFAF2] w-full py-4 md:py-8 space-y-2 md:px-32 md:space-y-8'>
        <h1 className='text-center text-2xl font-bold text-[#FFC872] '> Get In Touch </h1>
        <div className='flex p-4 flex-col md:flex-row-reverse space-y-4 md:space-y-0 md:space-x-4 w-full justify-center items-center'>
          <div className='bg-white shadow-lg space-y-8 text-black p-4 py-8 rounded-lg md:w-[70%] w-full h-fit'>
            <div>
              <h1 className='text-3xl font-extralight'>Send Message</h1>
              <p className='text-xl font-extralight'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </p>
            </div>
            <Formik
              initialValues={{ name: '', email: '', countryCode: '', phone: '', message: '' }}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting }) => {
                // Handle form submission
                console.log(values);
                setSubmitting(false);
              }}
            >
              {({ isSubmitting }) => (
                <Form className='space-y-4'>
                  <div className='mb-4'>
                    <Field
                      name='name'
                      placeholder='Name'
                      className='rounded-lg w-full p-2 font-extralight border border-black'
                    />
                    <ErrorMessage name='name' component='div' className='text-red-500 text-sm' />
                  </div>
                  <div className='flex items-center justify-between mb-4 space-x-2'>
                    <div className='w-[44%]'>
                      <Field
                        name='email'
                        placeholder='Email'
                        className='rounded-lg w-full p-2 font-extralight border border-black'
                      />
                      <ErrorMessage name='email' component='div' className='text-red-500 text-sm' />
                    </div>
                    <div className='w-[80px]'>
                      <Field as='select' name='countryCode' className='rounded-lg w-full p-2 font-extralight border border-black'>
                        <option value='' label='Code' />
                        {countryCodes.map((country) => (
                          <option key={country.code} value={country.code} label={`${country.code}`} />
                        ))}
                      </Field>
                      <ErrorMessage name='countryCode' component='div' className='text-red-500 text-sm' />
                    </div>
                    <div className='w-[44%]'>
                      <Field
                        name='phone'
                        placeholder='Phone'
                        className='rounded-lg w-full p-2 font-extralight border border-black'
                      />
                      <ErrorMessage name='phone' component='div' className='text-red-500 text-sm' />
                    </div>
                  </div>
                  <div className='mb-4'>
                    <Field
                      as='textarea'
                      name='message'
                      placeholder='Message'
                      rows={3}
                      className='rounded-lg w-full p-2 font-extralight border border-black'
                    />
                    <ErrorMessage name='message' component='div' className='text-red-500 text-sm' />
                  </div>
                  <div className='flex items-center justify-end'>
                    <button
                      type='submit'
                      disabled={isSubmitting}
                      className='p-3 px-6 bg-[#F19F1F] tracking-wide rounded-lg text-white disabled:bg-gray-200 disabled:text-white'
                    >
                      {isSubmitting ? "Loading..." : "Submit"}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
          <div className='w-full md:grid-cols-1 grid grid-cols-1 gap-1 gap-y-2 md:w-[25%]'>
            <div className='md:h-[100px] h-full p-2 flex items-center md:justify-between space-x-4 shadow-lg md:w-[250px] w-full bg-white rounded-lg'>
              <div className="p-4 rounded-[50%] bg-[#FFAE2F]"><a className='underline cursor-pointer' href='tel:012-4496-0635'><FaPhoneAlt style={{ fontSize: '30px' }} /></a></div>
              <div className='text-black w-[90%] text-sm font-extralight'>
                <p className="text-[#F19F1F] font-normal">Call Us On</p>
                <a className='cursor-pointer' href='tel:012-4496-0635'>012-4496-0635</a>
              </div>
            </div>
            <div className='md:h-[100px] h-full p-2 flex items-center md:justify-between space-x-4  shadow-lg md:w-[250px] w-full bg-white rounded-lg'>
              <div className="p-4 rounded-[50%] bg-[#FFAE2F]"><a className='cursor-pointer' href='mailto:info@intellivectra.tech'><MdEmail style={{ fontSize: '30px' }} /></a></div>
              <div className='text-black w-[90%] text-sm font-extralight'>
                <p className="text-[#F19F1F] font-normal">Mail Address</p>
                <a className='cursor-pointer' href='mailto:info@intellivectra.tech'>info@intellivectra.tech</a>
              </div>
            </div>
            <div className='md:h-[100px] h-full p-2 flex items-center md:justify-between space-x-4  shadow-lg md:w-[250px] w-full bg-white rounded-lg'>
              <div className="p-4 rounded-[50%] bg-[#FFAE2F]"><FaLocationDot style={{ fontSize: '30px' }} /></div>
              <div className="text-black  w-[90%] font-extralight">
                <p className="text-[#F19F1F] font-normal text-xs">Visit Us At</p>
                <p className="text-xs">
                  Office #1111,
                  Clover Bay Tower, Business Bay,
                  PO Box: 283426, Dubai, UAE
                </p>

              </div>
            </div>
            <div className='md:h-[100px] h-full p-2 flex items-center md:justify-between space-x-4  shadow-lg md:w-[250px] w-full bg-white rounded-lg'>
              <div className="p-4 rounded-[50%] bg-[#FFAE2F]"><FaRegClock style={{ fontSize: '30px' }} /></div>
              <div className="text-black  w-[90%] font-extralight text-sm">
                <p className="text-[#F19F1F] font-normal text-xs">Opening Time</p>
                <p>Mon - Fri<br /> 9.30AM - 5.30PM</p>
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
            Gurugram–122015 (Haryana), India.</p>
          <div className='flex justify-center w-full'>
            <button className='bg-[#F19F1F] p-2 w-fit'>Get Directions</button>
          </div>
        </div>
        <div className='space-y-4 flex flex-col justify-center'>
          <Image src="/images/indiagate.jpg" height={300} width={500} />
          <h1 className='text-4xl text-[#F19F1F] text-center'>Riyadh, Saudi Arabia</h1>
          <p className='text-[#3F444D] text-center font-extralight'>Samama Tower<br />
            King Fahd Road,Riyadh<br />
            Kingdom of Saudi Arabia
          </p>
          <div className='flex justify-center w-full'>
            <button className='bg-[#F19F1F] p-2 w-fit'>Get Directions</button>
          </div>
        </div>
        <div className='space-y-4 flex flex-col justify-center'>
          <Image src="/images/burzkhalifa.jpg" height={300} width={500} />
          <h1 className='text-4xl text-[#F19F1F] text-center'>London, UK</h1>
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

