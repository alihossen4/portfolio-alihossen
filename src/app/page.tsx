import Image from "next/image";
import Me from "../../public/Me.png"
import Arrow from "../../public/Arrow.png"
export default function Home() {
  return (
   <>
    <header className="container mx-auto w-[1320px] montserrat">
      <div className="flex">
        <Image src={Arrow} alt="arrow"/>
        <p>Hello! I Am Ali Hossen</p>
      </div>
      <div>
        <div className="left mx-auto">
          <Image src={Me} alt="me"/>
        </div>
        <div className="right"></div>
      </div>
    </header>
   </>
  );
}
