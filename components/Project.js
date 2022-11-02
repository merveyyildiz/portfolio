import React from 'react'

const Project = ({ project }) => {
  const {title, description, image, githubUrl, tags} = {...project};

  return (
    <a href={githubUrl} target={"_blank"} rel="noreferrer" className="p-1 rounded-lg bg-gradient-to-r from-pink-500 via-indigo-400 to-purple-700 transition duration-300 hover:scale-105">
      <div className='w-full h-full bg-white dark:bg-gray-900 rounded-lg p-4'>
          <img src={image.url} alt="project" className='w-full h-56 rounded-md' />
          <h2 className='text-center font-semibold font-rockNRoll mt-3 text-xl'>{title}</h2>
          <p className='my-3'>{description}</p>
          <div className='flex items-center justify-center flex-wrap space-x-3 w-100 mt-1'>
            {
              tags && tags.map((tag, index) => (
                <span key={index} className='py-1 px-2 m-1 text-sm bg-pink-700 text-pink-100 rounded-sm'>{tag}</span>
              ))
            }
          </div>
      </div>
    </a>
  )
}

export default Project