import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="header" className=' flex justify-between p-5'>
        <img src="/Images/brand_logo.png" alt="logo" className='ml-10 object-contain' />

        <ul className='flex  ' >
          <li className='p-2 text-[25px] font-bold mx-[10px] '>Menu</li>
          <li className='p-2 text-[25px] font-bold mx-[10px] '>Location</li>
          <li className='p-2 text-[25px] font-bold mx-[10px] '>About</li>
          <li className='p-2 text-[25px] font-bold mx-[10px] '>Contact</li>
        </ul>

        <button className=' rounded-xl bg-orange-600 w-[100px] h-[40px] px-[25px] mr-10 text-[15px] font-semibold '>Login</button>
      </div>


      <div id="container" className='flex justify-center items-center p-[150px]'>

        <div id="1container" className=''>
        <h1 className=' text-[108px] font-extrabold leading-[100px] mb-5   ' >YOUR FEET <br /> DESERVE <br />  THE BEST</h1>
        <p className='mb-5'>YOUR FEET DESERVE THE BEST AND WE’RE HERE <br />TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE <br /> THE BEST AND WE’RE HERE TO HELP YOU WITH OUR <br /> SHOES.</p>

        <button className=' bg-red-600 rounded-xl font-[500] text-white capitalize w-[100px] h-[40px] mb-5 mr-5'>Shop Now</button>
        <button className=' bg-transparent rounded-xl font-[500] text-black capitalize w-[100px] h-[40px] border-2 border-black mb-5'>Category</button>

        <p className='mb-5'>Also Available On</p>

        <img src="/Images/shops.png" alt="" />
        </div>

        <div id="2Container" className=' flex justify-center items-end'>
          <img src="/Images/shoe_image.png" alt="" />
        </div>
      
      </div>
    </>
  )
}

export default App
