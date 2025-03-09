import React from 'react'

const HeroFloat: React.FC = () => {
  return (
    <div className='absolute top-[15%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-full border px-10 py-0.5 sm:w-fit max-w-sm w-full text-center'>
        <span className='font-semibold text-primary'>100+</span>
        <span> Experiments to learn and grow</span>
    </div>
  )
}

export default HeroFloat