"use client"
import { useEffect } from "react";
import Image from "next/image";
import Me from "@/public/Me.png"
import Arrow from "@/public/Arrow.png"
import {gsap} from "gsap";
import SplitText from "gsap/SplitText";
import cup from "@/public/cup.png"
import drop from "@/public/drop.png"
import star from "@/public/star.png"
import light from "@/public/light.png"

export default function Home() {

  useEffect(() => {
  const split = SplitText.create(".exp", {
    type: "words",
  });

  gsap.from(split.words,{
    y:50,
    autoAlpha:0,
    stagger: 0.15,
    duration:0.6,
    delay: 0.1
  })
  gsap.to(".slash",{
      x:580,
      duration:.8,
      delay:.5,
      rotate:360,
  })

}, []);

 const Cart = ({
  title,
  desc,
  children,
}: {
  title: string;
  desc: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col md:flex-row w-full md:w-[570px] bg-transparent p-3 border border-[#000] border-t-[3px] rounded-lg border-t-[#693B93] m-2 shadow-md">
      <div className="flex justify-center md:justify-start items-center mb-4 md:mb-0 md:mr-6">
        {children}
      </div>
      <div className="flex-1">
        <h2 className="text-2xl md:text-3xl font-bold uppercase mb-2">{title}</h2>
        <p className="mb-3 text-sm md:text-base">{desc}</p>
        <button className="bg-[#2C1250] border-[1px] border-[#693B93] p-2 px-3 rounded-xl cursor-pointer text-sm md:text-base hover:bg-[#3a1962] transition-colors">
          LEARN MORE
        </button>
      </div>
    </div>
  );
};


  return (
    <>
      
      <header className="container mx-auto px-4 md:px-6 mt-12 md:mt-16 page-header">
        <div className="flex items-center gap-3 md:gap-6 mb-4">
          <Image src={Arrow} alt="arrow" className="w-6 h-6 md:w-8 md:h-8" />
          <p className="italic text-sm md:text-lg">Hello! I Am Ali Hossen</p>
        </div>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12">
          
          <div className="w-36 h-36 md:w-48 md:h-48 relative rounded-full overflow-hidden shadow-lg mx-auto md:mx-0">
            <Image src={Me} alt="me" layout="fill" objectFit="cover" className="rounded-full" />
          </div>
          
          <div className="text-center md:text-left">
            <p className="text-base md:text-lg mb-2">A pationate web developer</p>
            <h1 className="text-2xl md:text-4xl font-bold leading-snug mb-2">
              It&apos;s not always true that you don&apos;t judge a book by its
              <span className="text-[#7127BA]">cover</span>...
            </h1>
            <p className="text-base md:text-lg">
              
            </p>
          </div>
        </div>
      </header>

      <section className="container mx-auto px-4 md:px-6 mt-12 md:mt-16 text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 relative inline-block exp">
          <span className="absolute left-0 text-green-400 exp">|</span> I&apos;m a Web Developer...
        </h1>
        <p className="text-base md:text-lg max-w-4xl mx-auto md:mx-0">
          Completed a MERN Stack Course from a reputed institute, functioning in the industry for 2+ years now.
          I make meaningful and delightful digital products that create an equilibrium
          between user needs and business goals.
        </p>
      </section>

      <section className="container mx-auto px-4 md:px-6 mt-12 md:mt-16">
        <h1 className="text-2xl md:text-4xl font-semibold mb-6">Work Skills</h1>
        <div className="flex flex-col md:flex-row flex-wrap gap-4 justify-center md:justify-start">
          <Cart title="JavaScript" desc="I have core knowledge in JavaScript & libraries like GSAP">
            <Image src={star} alt="star" width={50} height={50} />
          </Cart>
          <Cart title="MERN Stack" desc="Completed MERN Stack course from Creative IT Institute">
            <Image src={cup} alt="cup" width={50} height={50} />
          </Cart>
          <Cart title="Next.js" desc="Learned Next.js to become an expert">
            <Image src={light} alt="light" width={50} height={50} />
          </Cart>
          <Cart title="Backend" desc="Skills in Node.js, Express, MongoDB, Mongoose, TypeScript">
            <Image src={drop} alt="drop" width={50} height={50} />
          </Cart>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6 mt-12 md:mt-20 text-center">
        <h1 className="text-xl md:text-3xl font-semibold">
          I&apos;m currently looking to join a <span className="text-blue-500">cross-functional</span> team
        </h1>
      </section>
    </>
  );
}