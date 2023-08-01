import { getProject } from '@/sanity/sanity-utils';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';

type props = {
    params: { project: string }
};

export default async function Project({ params }: props) {

    const slug = params.project;

    const project = await getProject(slug);

    return (

        <div className='flex h-screen items-center justify-center'>
            <div className='bg-purple-50 flex flex-row w-[80%] h-[70%] text-black shadow rounded-xl'>
                <img
                    src={project.image}
                    alt={project.name}
                    width={400}
                    height={800}
                    className='m-10 border-2 border-gray-700 object-cover rounded-xl'
                />
                <div className='m-10 relative'>
                    <h1 className='text-3xl mb-12'>{project.name}</h1>
                    <PortableText value={project.content} />

                    <h2 className='text-xl mt-4 mb-12 '>{project.name}</h2>
                    <PortableText value={project.content} />

                    <button className='absolute rounded-full bg-black p-2 inset-x-0 bottom-0'>ADD TO QUEUE</button>

                </div>


            </div>
        </div>
    )
};