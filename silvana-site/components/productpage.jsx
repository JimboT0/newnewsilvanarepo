
import { getProjects } from '@/sanity/sanity-utils';
import Link from 'next/link';



export default async function Productpage() {




  return (
    <div className='w-[100%] bg-purple-50 flex flex-col justify-center items-center text-center'>
    <div className='w-[100%] mt-24 border-purple-800 border-y-2 grid grid-cols-6 gap-5'>
      <div>Category 1</div>
      <div>Category 2</div>
      <div>Category 3</div>
      <div>Category 4</div>
      <div>Category 5</div>
      <div>Category 6</div>
    </div>
    <div className='mt-5 grid md:grid-cols-4 lg:grid-cols-4 gap-10 m-10'>

      {projects.map((project) => (

        <Link
          href={`${project.slug}`}
          key={project._id}
          className="border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-green-500 transition">

          {project.image && (

            <img
              src={project.image}
              alt={project.name}
              width={300}
              height={300}
              className="object-cover rounded-lg"
            />

          )}


          <div className='mt-2 font-extrabold bg-green-800 bg-clip-text text-transparent'>

            {project.name}

          </div>

        </Link>


      ))}

    </div>
    
  </div>
  


      

  )
}

