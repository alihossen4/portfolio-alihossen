"use client"
// import emailjs from "emailjs-com";
import emailjs from "@emailjs/browser"
import Link from "next/link";
import { FormEvent, useRef, useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
type Email = {
  name: string,
  email: string,
  message: string,
}
export default function Page() {
  const servieId:string = "service_gnwvi0u";
  const templateId :string = "template_ztfn0p4"
  const publicId : string = "xbQRBpliTl3526YM4"
  const [name, setName] = useState("")
  const[email, setEmail] = useState("")
  const[message, setMessage] = useState("")
  
  const templateParams:Email = {
  name: name,
  email: email,
  message: message,
  }

  const sendEmail = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs.send(
      servieId,
      templateId,
      // e.currentTarget(),
      templateParams,
      publicId
    ).then((res) => {
        alert("Message Sent!");
        console.log('email send successfully', res)
        setName("")
        setEmail("")
        setMessage("")
      }).catch((error) =>{
        console.log(error);
         alert("Failed to send");
        })
    
  };
// emailjs.send("service_gnwvi0u","template_ztfn0p4");
  return (
    <>
      {/* <Head>
        <title>Contact Me | MERN Stack Developer</title>
        <meta name="description" content="Get in touch with me via email or connect on GitHub and LinkedIn." />
      </Head> */}

      <main className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-6 text-center my-20">Contact Me</h1>

        <div className="flex flex-col md:flex-row gap-12 justify-center items-start">
          
          <div className="flex-1 max-w-150 mt-15">
            <form onSubmit={sendEmail}
              action="mailto:mdahossen.dev@gmail.com"
              method="GET"
              encType="text/plain"
              className="flex flex-col gap-4 "
              id="myForm"
            >
              <label className="flex flex-col font-medium my-2 ">
                Name
              </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                  className="border p-4 py-5 mt-2 rounded focus:outline-none "
                  
                />
              <label className="flex flex-col font-medium">
                Email
              </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e)=> setEmail(e.target.value)}
                  className="border  p-4 py-5 mt-2 rounded focus:outline-none "
                  required
                />
              <label className="flex flex-col font-medium">
                Message
              </label>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={message}
                  onChange={(e)=>setMessage(e.target.value)}
                  className="border p-4 py-6 mt-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  
                />
              <button className="cursor-pointer bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition-colors"  >
                Send Message
              </button>
            </form>
          </div>

          {/* Social Links */}
          <div className="flex-1 max-w-xs flex flex-col items-center gap-6 mt-30">
            <h2 className="text-2xl font-semibold mb-4">Connect with Me</h2>
            <div className="flex gap-6 text-3xl">
              <Link
                href="https://github.com/alihossen4"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-700 transition-colors"
              >
                <FaGithub />
              </Link>
              <Link
                href="https://linkedin.com/in/md-ali-hossen-a8baaa341"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors"
              >
                <FaLinkedin />
              </Link>
              <Link
                href="mailto:mdahossen.dev@gmail.com"
                className="hover:text-red-600 transition-colors"
              >
                <FaEnvelope />
              </Link>
            </div>
            <p className="text-center mt-4 text-xl">
              You can also reach me directly at <br />
              <Link
                href="#"
                className="text-blue-600 text-xl hover:underline"
                
              >
                mdahossen.dev@gmail.com
              </Link>
            </p>
            {/* <form action="mailto:yourgmail@gmail.com" method="POST" encType="text/plain">
            <input type="text" name="name" placeholder="Name" required />
            <input type="email" name="email" placeholder="Email" required />
            <textarea name="message" placeholder="Message"></textarea>

            <button type="submit">Send</button>
            </form> */}
          </div>
        </div>
      </main>
      </>
  );
}