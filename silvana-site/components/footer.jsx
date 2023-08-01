
import Link from 'next/link';


function footer() {
    return (
        <div className="w-[100%] h-[457px] bg-indigo-800 justify-center items-center text-center" >


            <div className=' md:columns-6 columns-1 md:pt-60'>
                <img className="w-[156px] h-10 py-5" src="https://via.placeholder.com/156x40" />
                <div className=' text-zinc-100 text-base font-medium leading-normal gap-3 py-5'><Link href='/' className=' text-zinc-100 text-base font-medium leading-normal gap-3 py-5'>Home</Link></div>
                <div className=' text-zinc-100 text-base font-medium leading-normal gap-3 py-5'><Link href='/about' className=' text-zinc-100 text-base font-medium leading-normal gap-3 py-5'>About Us</Link></div>
                <div className=' text-zinc-100 text-base font-medium leading-normal gap-3 py-5'><Link href='/products' className=' text-zinc-100 text-base font-medium leading-normal gap-3 py-5'>Products</Link></div>
                <div className=' text-zinc-100 text-base font-medium leading-normal gap-3 py-5'><Link href='/contact' className=' text-zinc-100 text-base font-medium leading-normal gap-3 py-5'>Contact Us</Link></div>
                <img className="w-[156px] h-10 py-5" src="https://via.placeholder.com/156x40" />
            </div>


            <div className='flex flex-col justify-center items-center text-center'>
                <div className="w-[70%] h-[0px] border border-slate-800 mt-10"></div>
                <div className="w-[308.70px] h-[38.89px] text-center text-slate-300 text-sm font-normal leading-snug mt-10">© Copyright 2022, All Rights Reserved by Silvana Jewellery</div>
            </div>



        </div>
    )
}

export default footer


