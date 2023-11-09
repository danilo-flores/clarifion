import Image from "next/image";
import { stepConfig } from "@/utils/config";

export default function Stepper() {
  return (
    <div className='flex justify-between w-full my-16'>
      {
        stepConfig.map(step => (
          <div key={step.id} className='flex flex-col md:flex-row items-center'>
            <div className={`flex justify-center items-center w-10 h-10 ${step.active ? 'bg-blue-500' : 'bg-green-500'} rounded-full`}>
              {
                step.active ? (
                  <h1 className='text-white text-sm md:text-xl'>{step.id}</h1>
                ) : (
                  <Image alt='svg icon' src={'/svg/check-white.svg'} width={24} height={22} />
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
  );
}
