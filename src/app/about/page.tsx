// pages/about.js
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import logo from "@/public/logo.jpg"
export default function page() {
  return (
    <>
      <Head>
        <title>About Me | MERN Stack Developer</title>
        <meta name="description" content="Learn more about my skills in MERN stack, creative IT solutions, and my recent projects." />
      </Head>

      <main className="container mx-auto px-6 py-12 mt-22">
        <section className="flex flex-col md:flex-row items-center gap-8">
          {/* Profile Image */}
          <div className="w-48 h-48 relative rounded-full overflow-hidden shadow-lg">
            <Image
              src={logo}// replace with your profile image
              alt="Profile Picture"
              layout="fill"
              objectFit="cover" className='rounded-full h-20 w-20'
            />
          </div>

          {/* About Text */}
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-4">Hi, I'm - Md Ali Hossan</h1>
            <p className="text-lg mb-4">
              I'm a passionate <strong>MERN stack developer</strong> with a creative approach to IT solutions.
              I love building responsive and dynamic web applications using <strong>MongoDB, Express, React, and Node.js</strong>.
            </p>
            <p className="text-lg mb-4">
              Recently, I completed a small project that demonstrates my skills in full-stack development and modern UI/UX principles.
              I enjoy turning ideas into functional applications and constantly learning new technologies to improve my craft.
            </p>
            <p className="text-lg">
              When I'm not coding, I explore creative IT solutions, contribute to open-source, and experiment with new frameworks like <strong>Next.js</strong>.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mt-12">
          <h2 className="text-3xl font-semibold mb-6">My Skills</h2>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <li className="bg-gray-600 p-4 rounded shadow text-center font-medium">MongoDB</li>
            <li className="bg-gray-600 p-4 rounded shadow text-center font-medium hover:text-green-200 ">Express.js</li>
            <li className="bg-gray-600 p-4 rounded shadow text-center font-medium hover:text-green-200">React.js</li>
            <li className="bg-gray-600 p-4 rounded shadow text-center font-medium hover:text-green-200">Node.js</li>
            <li className="bg-gray-600 p-4 rounded shadow text-center font-medium hover:text-green-200">Next.js</li>
            <li className="bg-gray-600 p-4 rounded shadow text-center font-medium hover:text-green-200">JavaScript / ES6+</li>
            <li className="bg-gray-600 p-4 rounded shadow text-center font-medium hover:text-green-200" >CSS / Tailwind CSS</li>
            <li className="bg-gray-600 p-4 rounded shadow text-center font-medium hover:text-green-200">REST APIs / MERN Projects</li>
          </ul>
        </section>

        {/* Recent Project Section */}
        <section className="mt-12">
          <h2 className="text-3xl font-semibold mb-6">Recent Project</h2>
          <div className="bg-gray-600 p-6 rounded shadow">
            <h3 className="text-2xl font-bold mb-2">Job Listing</h3>
            <p className="mb-4 text-xl ">
              Job Listing Project: Its actually Job listing website which can get jobs lists, Its built with React [ frontend ] And Express. Due vercel deplpyment problem i could not upload backend , B, and the impact it has. 
             
            </p>
            <Link
              href="https://job-listing-app-smoky.vercel.app/"
              className="text-blue-600 font-semibold hover:underline"
              target='_blank'
            >
              View A Recent Project
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}