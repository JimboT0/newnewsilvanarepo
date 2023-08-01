import React from 'react'
import { Playfair_Display } from 'next/font/google'
import Link from 'next/link';

function hero() {
    return (
        <div className="w-[100%] h-100vh bg-purple-50 flex flex-col md:flex-row justify-center items-center text-center">
            <div className=' flex flex-col justify-center items-center text-center order-2 md:order-1'>
                <div className="w-[100%] text-indigo-900 text-[53px] font-semibold leading-[106.69px] tracking-wide font-">Explore Silver Heaven</div>
                <div className="w-[547px] text-slate-400 text-base font-bold leading-7">A Best-in-class experience in the finest silver jewellery products and services for both Individuals and retailers...</div>
                <div className='flex justify-center items-center text-center p-4'>
                    <Link href='/products' className="w-[290px] h-[50px] bg-indigo-800 rounded-[20px] flex justify-center items-center text-center m-2"><div className="w-[242.97px] text-center text-indigo-200 text-[17px] font-black tracking-tight">Explore Our Catalogue</div></Link>
                    <Link href='https://www.silvana.co.za/' className="w-[290px] h-[50px] bg-purple-50 rounded-[20px] border border-indigo-200 flex justify-center items-center text-center m-2"><div className="w-[242.97px] text-center text-indigo-800 text-[17px] font-black tracking-tight">Explore Our Services</div></Link>
                </div>
            </div>
            <img className="w-[486px] h-[580px] rounded-[20px] m-10 order-1 md:order-2" src="https://via.placeholder.com/486x580" />

        </div>
    )
}

export default hero
