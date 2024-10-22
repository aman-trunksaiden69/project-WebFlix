import React from 'react'
import noresults from '/noresults.svg'

function Notfound() {
  return (
    <div className='w-full h-full flex flex-col gap-3 justify-center items-center bg-black'>
      <img className='h-[50%] object-cover ' src={noresults} alt="" />
      <div className='flex flex-col items-center justify-center'>
      <h1 className='text-[#8F98A8] text-xl font-["gilroy"] font-semibold'>
        Could't find results
      </h1>
      </div>
    </div>
  )
}

export default Notfound