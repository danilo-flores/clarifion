import Image from "next/image";

export default function Header() {
  return (
    <>
      <div className='hidden md:flex justify-between items-center w-full py-8'>
        <Image alt='logo' src={'/images/logo.png'} width={192} height={36} />

        <div className='flex justify-center items-center'>
          <Image alt='company 1' src={'/images/company-01.png'} width={88} height={32} className='mx-4' />
          <Image alt='company 2' src={'/images/company-02.png'} width={82} height={32} className='mx-4' />
        </div>
      </div>

      <div className='flex md:hidden justify-between items-center w-full py-8'>
        <Image alt='logo' src={'/images/logo.png'} width={142} height={27} />

        <div className='flex justify-center items-center'>
          <Image alt='company 1' src={'/images/company-01.png'} width={44} height={16} className='mx-4' />
          <Image alt='company 2' src={'/images/company-02.png'} width={41} height={16} className='mx-4' />
        </div>
      </div>
    </>
  )
}