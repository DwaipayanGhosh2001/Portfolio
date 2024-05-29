"use client";
import { Github, LinkedinIcon, Mail, MessageCircle, PhoneCall } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
import emailjs from "@emailjs/browser";

const serviceId = 'service_favnza6'
const templeteId = 'template_qd9m3y4'
const Publickey = 'nXPVy51mhK3MJVdEw'

function Contact() {
  const [loading, setLoading] = useState(false);
  const [formData, setformData] = useState({
    name: "",
    email: "",
    message: ""
  })
  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.send(serviceId, templeteId, {
      from_name: formData.name,
      to_name: "Dwaipayan",
      from_email: formData.email,
      to_email: "dwaipayanghosh100@gmail.com",
      message: formData.message
    }, Publickey).then(() => {
      setLoading(false);
      alert("Will get back to your soon!");
      setformData({
        name: "",
        email: "",
        message: ""
      })
    }, (error) => {
      setLoading(false);
      console.log(error);
      alert("Something went wrong!");
    });

  }
  return (
    <section id="contact" className='wrapper text-white lg:py-20 px-2'>
      <div className=' max-md:my-20'>
        {/* <div >
          <p className='sectionSubText'>Lets Do Some Work Together</p>
          <h2 className='sectionHeadText'>Conact Me</h2>
        </div> */}
        <div className='flex flex-col md:flex-row gap-10 justify-evenly mt-10'>
          <div className='w-full md:w-96'>
            <h5 className="text-xl font-bold text-white my-2">
              Let&apos;s Connect
            </h5>
            <p className="text-font-1 mb-4 ">
              {" "}
              I&apos;m currently looking for new opportunities, my inbox is always
              open. Whether you have a question or just want to say hi, I&apos;ll
              try my best to get back to you!
            </p>
            <p className='flex gap-3 mb-4'><Mail className='size-6' />: dwaipayanghosh3@gmail.com</p>
            <p className='flex gap-3 mb-4'><PhoneCall className='size-6' /> : +91-8327506082</p>
            <div className=" flex flex-row gap-4">
              <Link href="https://github.com/DwaipayanGhosh2001" target='blank' className='bg-black text-white p-2 rounded-lg'>
                <Github />
              </Link>
              <Link href="https://www.linkedin.com/in/dwaipayan-ghosh-88b65b204/" target="blank" className='bg-sky-700 text-white p-2 rounded-lg'>
                <LinkedinIcon />
              </Link>

            </div>
          </div>
          <div className='w-full md:w-96 mx-auto md:mx-0'>

            <form className="flex flex-col" onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="text-white block text-sm mb-2 font-medium"
                >
                  Your Name
                </label>
                <input
                  name="name"
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="John Doe"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="text-white block mb-2 text-sm font-medium"
                >
                  Your email
                </label>
                <input
                  name="email"
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="example@gmail.com"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="text-white block text-sm mb-2 font-medium"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Let's talk about..."
                />
              </div>
              <button
                type="submit"
                className="primary-btn  font-medium py-2.5 px-5 rounded-full w-full"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Contact