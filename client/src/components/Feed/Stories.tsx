import React from 'react'
import StoryCard from './StoryCard'

const stories = [
  {
    id: 0,
    name: "Sonny Sangha",
    src: "https://links.papareact.com/zof",
    profile: "https://links.papareact.com/l4v",
  },
  {
    id: 1,
    name: "Elon Musk",
    src: "https://links.papareact.com/4zn",
    profile: "https://links.papareact.com/kxk",
  },
  {
    id: 2,
    name: "Jeff Bezoz",
    src: "https://links.papareact.com/k2j",
    profile: "https://links.papareact.com/f0p",
  },
  {
    id: 3,
    name: "Mark Zuckerberg",
    src: "https://links.papareact.com/xql",
    profile:"https://links.papareact.com/snf",
  },
  {
    id: 4,
    name: "Bill Gates",
    src: "https://links.papareact.com/4u4",
    profile:"https://links.papareact.com/zvy",

  },
]

const Stories = () => {
  return (
    <div className='flex justify-center space-x-3 mx-auto'>
      {stories.map(({ id, name, src, profile }) => (
        <StoryCard key={id} name={name} src={src} profile={profile} />
      ))}
    </div>
  )
}

export default Stories