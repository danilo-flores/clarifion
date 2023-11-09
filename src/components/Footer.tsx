import Image from "next/image";

export default function Footer() {
  return (
    <div className='flex justify-center w-full bg-[#252F3D] text-gray-300'>
      <div className='w-[1280px] flex flex-col md:flex-row justify-between items-center md:p-8 text-sm md:text-base'>
        <div className='flex items-center mt-8 mb-4 md:m-0'>
          <p>Copyright (C) 2023</p>
          <span className='mx-4'>|</span>
          <p>clarifionsupport@clarifion.com</p>
        </div>

        <div className='flex items-center mb-8 md:m-0'>
          <Image alt='lock' src='/svg/lock.svg' width={16} height={16} />
          <p className='ml-4'>Secure 256-bit SSL encryption.</p>
        </div>
      </div>
    </div>
  );
}
