import React, { useState, useRef } from 'react'
import { Avatar, } from '@material-ui/core'
import { VideoCameraIcon, CameraIcon } from '@heroicons/react/solid';
import { EmojiHappyIcon } from '@heroicons/react/outline';


const InputBox = () => {
  const userProfile = JSON.parse(localStorage.getItem('profile') || '{}');
  const [photo, setPhoto] = useState<any>(null);
  const filePickerRef = useRef<HTMLInputElement>(null);

  const addPhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    if(e.target.files !== null) {
      reader.readAsDataURL(e.target.files[0])
    } 
    reader.onload = (readerEvent: ProgressEvent<FileReader>) => {
      setPhoto(readerEvent.target?.result);
    }
  }

  const removePhoto = (e: React.MouseEvent<HTMLInputElement>) => {
    setPhoto(null);
  }

  const sendPost = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: submitting posts 2:51:38
  }

  return (
    <div className='bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6'>
      <div className='flex space-x-4 p-4 items-center'>
        <Avatar className='' src={userProfile?.photoURL || ''} />
        <form className='flex flex-1'>
          <input
            className='rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none'
            type='text' placeholder={`Whats on your mind, ${userProfile?.displayName || 'USER_NAME'}?`}
          />
          <button hidden type='submit' onClick={sendPost}>
            Submit
          </button>
        </form>
        {photo && (
          <div onClick={removePhoto} className="flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer" >
            <img className='h-10 object-contain' src={photo} alt="PHOTO_TO_POST" />
            <p className='text-xs text-red-500 text-center'>Remove</p>
          </div>
        )}
      </div>
      <div className="flex justify-evenly p-3 border-t">
        <div className="input__icon">
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className="text-xs sm: text-sm xl:text-base">Live Video</p>
        </div>
        <div className="input__icon" onClick={() => filePickerRef.current?.click()}>
          <CameraIcon className="h-7 text-green-400" />
          <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
          <input ref={filePickerRef} onChange={addPhoto} type="file" hidden />
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