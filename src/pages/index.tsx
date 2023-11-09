import { featureConfig, navbarConfig, stepConfig } from '@/utils/config';
import { Inter } from 'next/font/google'
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={`flex flex-col items-center w-full ${inter.className}`}>
      <div className='flex justify-center w-full bg-[#252F3D]'>
        <div className='w-[1280px] flex justify-between p-4'>
          {
            navbarConfig.map(item => (
              <div key={item.id} className='hidden md:flex justify-center items-center text-white '>
                <Image alt='svg icon' src={item.icon} width={22} height={22} />
                <h1 className='text-xs ml-1'>{item.title}</h1>
              </div>
            ))
          }

          <div className='md:hidden flex justify-center items-center text-white '>
            <Image alt='svg icon' src={navbarConfig[0].icon} width={22} height={22} />
            <h1 className='text-xs ml-1'>{navbarConfig[0].title}</h1>
          </div>
        </div>
      </div>

      <div className='w-[1280px] flex flex-col items-center justify-between'>
        <div className='flex justify-between items-center w-full py-8'>
          <Image alt='logo' src={'/images/logo.png'} width={192} height={36} />

          <div className='flex justify-center items-center'>
            <Image alt=' logo' src={'/images/company-01.png'} width={88} height={32} className='mx-4' />
            <Image alt=' logo' src={'/images/company-02.png'} width={88} height={32} className='mx-4' />
          </div>
        </div>

        <h1 className='text-center text-3xl md:text-5xl'>Wait! You Order In Progress</h1>
        <h1 className='text-center text-xl md:text-2xl text-[#4D5254] py-4'>Lorem ipsum dolor sit amet, consectetur adipiscing </h1>

        <div className='flex justify-between w-full my-16'>
          {
            stepConfig.map(step => (
              <div key={step.id} className='flex flex-col md:flex-row items-center'>
                <div className={`flex justify-center items-center w-10 h-10 ${step.active ? 'bg-blue-500' : 'bg-green-500'} rounded-full`}>
                  {
                    step.active ? (
                      <h1 className='text-white text-sm md:text-xl'>{step.id}</h1>
                    ) : (
                      <Image alt='svg icon' src={'/svg/check-white.svg'} width={24} height={24} />
                    )
                  }
                </div>

                <h1 className={`text-sm md:text-xl ml-2 ${step.active && 'font-bold'}`}>
                  <span className='hidden md:inline'>Step {step.id}. </span>{step.step}
                </h1>
              </div>
            ))
          }
        </div>

        <div className='flex w-full p-4 md:p-12 mb-16 rounded-[12px] bg-[#FAFAFA]'>
          <div className='hidden md:flex flex-col w-full'>
            <Image alt='banner' src={'/images/banner.png'} width={575} height={591} />

            <div className='p-8 mt-8 rounded-[8px] bg-white'>
              <div className='flex items-center'>
                <Image alt='avatar' src={'/images/customer.png'} width={48} height={48} />

                <div className='flex flex-col ml-4'>
                  <div className='flex'>
                    {
                      Array.from({ length: 5 }, (_, index) => (
                        <Image key={index} alt='star' src={'/svg/star.svg'} width={18} height={18} />
                      ))
                    }
                  </div>

                  <div className='flex items-center'>
                    <h1 className='mr-2'>Ken T.</h1>
                    <Image alt='verify' src={'/svg/verify.svg'} width={18} height={18} />
                    <h2 className='text-green-500'>Verified Customer</h2>
                  </div>
                </div>
              </div>

              <p className='mt-4 text-gray-500'>“As soon as the Clarifions arrived I put one in my bedroom. This was late in the afternoon. When I went to the bedroom in the evening it smelled clean. When I went to bed I felt I could breathe better. Wonderful.”</p>
            </div>
          </div>

          <div className='flex flex-col w-full md:ml-8'>
            <h1 className='text-2xl md:text-3xl leading-relaxed [&>span]:text-blue-500'>
              <span>ONE TIME ONLY</span> Special Price For 6 Extra Clarifion For Only <span>$14 Each</span> ($84.00 Total!)
            </h1>

            <Image alt='banner' src={'/images/banner.png'} width={575} height={591} className='block md:hidden' />

            <div className='flex items-center w-full my-8'>
              <div className='flex items-center rounded-[8px] bg-blue-500'>
                <Image alt='mobile' src={'/images/mobile.png'} width={134} height={134} />
              </div>

              <div className='flex flex-col w-full ml-8'>
                <div className='flex justify-between items-center'>
                  <h1 className='md:text-xl'>Clarifion Air lonizer</h1>
                  <div className='flex items-center'>
                    <h2 className='text-[#969696] text-xs md:text-base mx-2'>$180</h2>
                    <h2 className='text-blue-500 text-base md:text-2xl'>$84</h2>
                  </div>
                </div>

                <div className='flex my-2'>
                  {
                    Array.from({ length: 5 }, (_, index) => (
                      <Image key={index} alt='star' src={'/svg/star.svg'} width={18} height={18} />
                    ))
                  }
                </div>

                <h1 className='flex items-center text-[#37465A]'>
                  <div className='w-4 h-4 rounded-full bg-blue-500 mr-4' /> 12 left in Stock
                </h1>

                <p className='text-sm md:text-base text-[#4D5254]'>Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.</p>
              </div>
            </div>

            <div>
              {
                featureConfig.map((feature: string, index: number) => (
                  <div key={index} className='flex items-center my-2'>
                    <Image alt='svg icon' src={'/svg/check-blue.svg'} width={24} height={24} />

                    <h1 className='text-xs md:text-base ml-2'>{feature}</h1>
                  </div>
                ))
              }
            </div>

            <div className='flex items-center w-full p-4 my-4 rounded-[12px] bg-blue-100'>
              <Image alt='svg icon' src={'/svg/percent.svg'} width={32} height={32} />

              <p className='ml-4 [&>span]:text-blue-500'>Save <span>53%</span> and get <span>6 extra Clarifision</span> for only <span>$14 Each.</span></p>
            </div>

            <button className='w-full p-4 rounded-full bg-green-600 font-bold text-white uppercase transition hover:bg-green-700'>
              Yes - Claim my discount
            </button>

            <div className='hidden md:flex justify-between items-center w-full border-[1px] border-gray-300 px-4 py-2 my-4 rounded-[4px] text-sm text-gray-500'>
              <h1>Free Shipping</h1>
              <span>|</span>
              <h1>Secure 256-Bit SSL Encryption</h1>
              <span>|</span>
              <div className='flex'>
                {
                  Array.from({ length: 7 }, (_, index) => (
                    <Image key={index} alt='payment' src={`/images/payment/${index + 1}.png`} width={24} height={14} />
                  ))
                }
              </div>
            </div>

            <div className='flex flex-col md:flex-row md:hidden justify-between items-center w-full border-[1px] border-gray-300 px-4 py-2 my-4 rounded-[4px] text-sm text-gray-500'>
              <div className='flex items-center'>
                <h1>Free Shipping</h1>
                <span className='mx-2'>|</span>
                <h1>Secure 256-Bit SSL Encryption</h1>
              </div>

              <div className='w-full h-[1px] bg-gray-300 my-3' />

              <div className='flex'>
                {
                  Array.from({ length: 7 }, (_, index) => (
                    <Image key={index} alt='payment' src={`/images/payment/${index + 1}.png`} width={24} height={14} />
                  ))
                }
              </div>
            </div>

            <a className='my-2 text-red-500 text-lg text-center cursor-pointer hover:underline'>NO THANKS, I DON&apos;T WANT THIS</a>

            <div className='flex items-center w-full mt-6'>
              <Image alt='badge' src={'/images/badge.png'} width={88} height={88} />

              <p className='ml-4 text-sm md:text-base text-gray-500 [&>span]:font-bold'>If you are not completely thrilled with your Clarifion - We have a 30 day satisfaction guarantee. Please refer to our return policy at the bottom of the page for more details. Happy Shopping!</p>
            </div>
          </div>
        </div>
      </div>

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
    </main>
  )
}
