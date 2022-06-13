import React from 'react'

interface Props {
  name: string;
  src: string;
  profile: string;
}

const StoryCard: React.FC<Props> = ({ name, src, profile }) => {
  return (
    <div className='flex relative h-14 w-14 md:h-20 md:w-20 lg:h-56 lg:w-32 cursor-pointer overflow-x transition duration-200 transform ease-in hover:scale-105 hover:animate-pulse'>
      <img src={profile} alt="profile" width={40} height={40} className='absolute object-cover h-10 w-10 opacity-0 lg:opacity-100 rounded-full border-rad z-50 top-2 left-2'  />
      <img src={src} alt="image_txt" className='object-cover filter brightness-75 rounded-full lg:rounded-3xl'  />
      <p className='absolute opacity-0 lg:opacity-100 bottom-4 w-5/6 text-white text-sm font-bold truncate'>{name}</p>
    </div>
  )
}

export default StoryCard