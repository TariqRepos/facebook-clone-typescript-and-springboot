import React from 'react'
import { VideoCameraIcon, CameraIcon } from '@heroicons/react/solid';
import { EmojiHappyIcon } from '@heroicons/react/outline';


const InputBox = () => {

  const sendPost = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: submitting posts
  }

  return (
    <div className='bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6'>
      <div className='flex space-x-4 p-4 items-center'>
        <img className='rounded-full' height={40} width={40} src="https://scontent-dfw5-2.xx.fbcdn.net/v/t39.30808-1/254972431_592971878785814_898164213403171906_n.jpg?stp=cp0_dst-jpg_p60x60&_nc_cat=100&ccb=1-7&_nc_sid=7206a8&_nc_ohc=QACyqBwCXdsAX-xDWIZ&_nc_ht=scontent-dfw5-2.xx&oh=00_AT8CyiyhVMO3xO5PdCCljgxZ5DZpP7o83wOqVWUzASbumw&oe=62AA28FB" alt="User_pic" />
        <form className='flex flex-1'>
          <input
            className='rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none'
            type='text' placeholder={`Whats on your mind [YOUR_NAME]?`}
          />
          <button hidden type='submit' onClick={sendPost}>
            Submit
          </button>
        </form>
      </div>
      <div className="flex justify-evenly p-3 border-t">
        <div className="input__icon">
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className="text-xs sm: text-sm xl:text-base">Live Video</p>
        </div>
        <div className="input__icon">
          <CameraIcon className="h-7 text-green-400" />
          <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
        </div>
        <div className="input__icon">
          <EmojiHappyIcon className="h-7 text-yellow-300" />
          <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
        </div>
      </div>
    </div>
  )
}

export default InputBox