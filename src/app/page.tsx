"use client"
import { useEffect } from "react";
import Image from "next/image";
import Me from "../../public/Me.png"
import Arrow from "../../public/Arrow.png"
import {gsap} from "gsap";
import SplitText from "gsap/SplitText";
import cup from "../../public/cup.png"
import drop from "../../public/drop.png"
import star from "../../public/star.png"
import light from "../../public/light.png"

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

  const Cart = ({title, desc,children}:{title:string, desc:string, children:React.ReactNode}) =>{
    return(
      <>
        <div className="w-[570px] h-[192px] flex bg-transparent p-3 cart border border-[#000] border-t-[3px] skills rounded-lg border m-2 border-t-[#693B93]">
          <div className="img bg-transparent mr-12 my-auto ml-8">
            {children}
          </div>
          <div className="desc m-2 mt-6 ">
            <h2 className="text-[34px] uppercase">{title}</h2>
            <p className="my-1">{desc}</p>
            <button className={`bg-[#2C1250] border-[1px] border-[#693B93] p-2 rounded-xl px-3 cursor-pointer my-1`}>LEARN MORE</button>
          </div>
        </div>
      </>
    )
  }
  return (
   <>
    <header className="container mx-auto w-[1320px] montserrat mt-50">
      <div className="flex ml-85 mt-25 mb-[-15px] ">
        <Image src={Arrow} alt="arrow" className=""/>
        <p className="italic text-[20px]">Hello! I Am Ali Hossen</p>
      </div>
      <div className='mx-15 preahvihear-regular ml-45'>
        <div className="left mx-auto inline-block header_image mr-10">
          <Image src={Me} alt="me" className="image_gradient_me"/>
        </div>
        <div className="right inline-block mt-[-50px] h-50 w-150 ml-[60px]">
          <p className="text-[20px] my-3">A Designer who Sometimes Judges the Cover</p>
          <h1 className="text-[50px] leading-[55px]">Its not always true that don't Judges a book
          by its <span className="text-[#7127BA]">cover</span>...</h1>
          <p className="text-[20px] my-2">Because if the cover doesn't attract you others may can't impress you</p>
        </div>
      </div>
    </header>
    <section className="">
      <div>
        <h1 className="container mx-auto ml-115 text-[6vh] title before::text-green-400 exp"><span className=" absolute slash">|</span>I'm a Web Developer...</h1>
      </div>
      <div className="container mx-auto w-[1320px]">
          <p className="w-[80%] text-[22px] ml-38">Completed a Mern Stack Course from reputed institute, functioning in the industry for 3+ years now.
            I make meaningful and delightful digital products that create an equilibrium
            between user needs and business goals.</p>
      </div>
    </section>

    <section className="container mt-20 mx-auto w-[1320px] work_section mr-50">
      <div className="inline-block mx-auto h-gradient"></div>
      <h1 className="text-[40px] my-2">Work Skils</h1>
      <div className="flex">

        <div className="star">
        <Cart  title="JavaScript" desc="I got core knowledge in javascript & and also javascript library like gsap" >
          <Image src={star} alt="star" />
        </Cart>
        </div>

        <div className="cup">
        <Cart  title="mern stack" desc="Completed the the mern stack course from Creative It Institute" >
          <Image src={cup} alt="cup" />
        </Cart>
        </div>
      </div>
      <div className="flex">
        <Cart  title="next js" desc="Learned nextjs to becomes expertise" >
          <Image src={light} alt="star" />
        </Cart>
        <Cart  title="backend" desc="Got backend skills like nodejs, express, mongodb, mongoose, typescript" >
          <Image src={drop} alt="drop" />
        </Cart>
      </div>
    </section>
    <section className="h-[754px] w-[895px] mx-auto my-20">
      <h1 className="text-[30px] text-center">I'm currently looking to join a <span className="text-blue-500">cross-functional</span> team </h1>
    </section>
   </>
  );
}
