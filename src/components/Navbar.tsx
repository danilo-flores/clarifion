import Image from "next/image";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { navbarConfig } from "@/utils/config";

export default function Navbar() {
  const portfolioItems = navbarConfig.map(item => (
    <div key={item.id} className='flex justify-center items-center w-full text-white'>
      <Image alt='svg icon' src={item.icon} width={22} height={22} />
      <h1 className='text-xs ml-1'>{item.title}</h1>
    </div>
  ))

  return (
    <div className='flex justify-center w-full bg-[#252F3D]'>
      <div className='container xl:w-[1280px] flex justify-between p-4'>
        {
          navbarConfig.map(item => (
            <div key={item.id} className='hidden md:flex justify-center items-center text-white'>
              <Image alt='svg icon' src={item.icon} width={22} height={22} />
              <h1 className='text-xs ml-1'>{item.title}</h1>
            </div>
          ))
        }

        <div className="relative block md:hidden w-full overflow-hidden">
          <span className="absolute top-0 left-0 text-white">&lt;</span>
          <span className="absolute top-0 right-0 text-white">&gt;</span>
          <AliceCarousel
            mouseTracking
            disableDotsControls
            disableButtonsControls
            infinite
            items={portfolioItems}
          />
        </div>
      </div>
    </div>
  );
};
