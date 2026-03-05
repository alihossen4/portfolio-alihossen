import emailjs from "emailjs-com";
import { Head } from "next/head";
import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
type Email = {
  e: string
}
export default function page() {

  const sendEmail = (e:any) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_gnwvi0u",
      "template_ztfn0p4",
      e.target("xbQRBpliTl3526YM4")
      // "xbQRBpliTl3526YM4"
    ).then(
      () => alert("Message Sent!"),
      () => alert("Failed to send")
    );
  };
// emailjs.send("service_gnwvi0u","template_ztfn0p4");
  return (
    <>
      {/* <Head>
        <title>Contact Me | MERN Stack Developer</title>
        <meta name="description" content="Get in touch with me via email or connect on GitHub and LinkedIn." />
      </Head> */}

      <main className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-6 text-center">Contact Me</h1>

        <div className="flex flex-col md:flex-row gap-12 justify-center items-start">
          {/* Contact Form */}
          <div className="flex-1 max-w-md">
            <form
              action="mailto:your.email@gmail.com"
              method="POST"
              encType="text/plain"
              className="flex flex-col gap-4"
            >
              <label className="flex flex-col font-medium">
                Name
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </label>
              <label className="flex flex-col font-medium">
                Email
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </label>
              <label className="flex flex-col font-medium">
                Message
                <textarea
                  name="message"
                  placeholder="Your Message"
                  className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </label>
              <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition-colors" onClick={sendEmail} >
                Send Message
              </button>
            </form>
          </div>

          {/* Social Links */}
          <div className="flex-1 max-w-xs flex flex-col items-center gap-6">
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
                href="https://linkedin.com/in/yourusername"
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
            <p className="text-center mt-4">
              You can also reach me directly at <br />
              <Link
                href="mailto:your.email@gmail.com"
                className="text-blue-600 hover:underline"
              >
                your.email@gmail.com
              </Link>
            </p>
            <form action="mailto:yourgmail@gmail.com" method="POST" encType="text/plain">
            <input type="text" name="name" placeholder="Name" required />
            <input type="email" name="email" placeholder="Email" required />
            <textarea name="message" placeholder="Message"></textarea>

            <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </main>
      </>
  );
}