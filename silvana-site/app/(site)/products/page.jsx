import React from 'react'

import { getProjects } from '@/sanity/sanity-utils';

import Link from 'next/link';


export default async function ProductsPage() {

    const projects = await getProjects();


    return (
        <>
            <main>
                <div>
                    <div className='w-[100%] bg-purple-50 flex flex-col justify-center items-center text-center'>
                        <div className='w-[100%] mt-24 border-purple-800 border-y-2 grid grid-cols-6 gap-5'>
                            <div>Category 1</div>
                            <div>Category 2</div>
                            <div>Category 3</div>
                            <div>Category 4</div>
                            <div>Category 5</div>
                            <div>Category 6</div>
                        </div>
                        <div className='mt-5 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-10 m-10'>

                            {projects.map((project) => (

                                <Link
                                    href={`/products/${project.slug}`}
                                    key={project._id}
                                    className="border-2 border-purple-50 bg-purple-50 rounded-lg hover:scale-105 hover:bg-violet-100 p-2 transition">

                                    {project.image && (

                                        <img
                                            src={project.image}
                                            alt={project.name}
                                            width={300}
                                            height={200}
                                            className="object-fill rounded-lg"
                                        />

                                    )}


                                    <div className='mt-2 bg-black bg-clip-text text-transparent'>

                                        <h1 className='font-extrabold mb-1'>{project.name}</h1>

                                        <p>a brief description of the product</p>
                                        <button className='rounded-full w-full bg-violet-500 text-black mt-5'>click me</button>


                                    </div>

                                </Link>


                            ))}

                        </div>

                    </div>

                </div>
            </main>
        </>

    )
}


