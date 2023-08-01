import { getProjects } from '@/sanity/sanity-utils';
import Image from 'next/image';
import Link from 'next/link';


import Footer from '../../components/footer';
import Hero from '../../components/hero';
import Whatwedo from '../../components/whatwedo';

import Testimonial from '../../components/testimonial';
import Contact from '../../components/contact';
import Productpage from '../../components/productpage';
import Dropdown from '../../components/dropdown';

export default async function Home() {

  return (

    <>
    <Hero />
    <Whatwedo />
    <div>Featured products div</div>
    <Testimonial />

    <Contact />

    </>












    // <div>

    //   <div>

    //     <h2 className='mt-24 font-bold text-gray-700 text-3xl'>Projects</h2>

    //     <div className='mt-5 grid md:grid-cols-3 lg:grid-cols-3 gap-8'>

    //       {projects.map((project) => (

    //         <Link
    //          href={`projects/${project.slug}`}
    //          key={project._id} 
    //          className="border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-green-500 transition">

    //           {project.image && (

    //             <img
    //               src={project.image}
    //               alt={project.name}
    //               width={300}
    //               height={300}
    //               className="object-cover border border-gray-500 rounded-lg"
    //             />

    //           )}


    //           <div className='mt-2 font-extrabold bg-green-100 bg-clip-text text-transparent'>

    //             {project.name}

    //           </div>

    //         </Link>


    //       ))}

    //     </div>

    //   </div>

    // </div>


  );

}

