import React, { useState, useEffect, useRef } from 'react'
import Input from './Input';
import { signInUser, signUpUser } from '../../firebase';
import { useNavigate } from 'react-router-dom';

interface Props {
  user: JSON;
  setUser: React.Dispatch<React.SetStateAction<JSON>>;
}

const Form: React.FC<Props> = ({ user, setUser }) => {
  const navigate = useNavigate();
  const [isSignup, setIsSignup] = useState(false);
  const [photo, setPhoto] = useState<any>(null);
  const filePickerRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if(formData.email !== "" && formData.password !== "") {
      if(isSignup) { // Signing up new user
        await signUpUser(formData.firstName, formData.lastName, formData.email, formData.password, photo);
      } else { // Signing in existing user        
        await signInUser(formData.email, formData.password);
      }

      navigate('/');
      setUser(JSON.parse(localStorage.getItem('profile') || '{}'));
    }
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    if(e.target.files !== null) {
      reader.readAsDataURL(e.target.files[0])
    } 
    reader.onload = (readerEvent: ProgressEvent<FileReader>) => {
      setPhoto(readerEvent.target?.result)      
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value});  
  };

  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
    
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className='w-11/12 max-w-lg mx-auto px-10 py-10 rounded-3xl bg-white border-2 border-gray-100'>
      <div className='text-center'>
          <h1 className='text-5xl font-semibold'>Welcome Back</h1>
          <p className='font-medium text-lg text-gray-500 mt-4'>Welcome back! Please enter you details.</p>
      </div>
      <div className='mt-4'>
        { isSignup && (
          <div className='flex w-full'>
            <div className='w-full mr-2'>
              <Input name="firstName" label="First Name" value={formData.firstName} handleChange={handleChange} handleSubmit={handleSubmit} type="text" autoFocus={isSignup ? true : false} />
            </div>
            <div className='w-full ml-2'>
              <Input name="lastName" label="Last Name" value={formData.lastName} handleChange={handleChange} handleSubmit={handleSubmit} type="text" autoFocus={false} />
            </div>
            
          </div>
        )}
        <Input name="email" label="Email" value={formData.email} handleChange={handleChange} handleSubmit={handleSubmit} type="email" autoFocus={!isSignup ? true : false} />
        { !isSignup && <Input name="password" label="Password" value={formData.password} handleChange={handleChange} handleSubmit={handleSubmit} type="password" autoFocus={false}  /> }
        { isSignup && 
          <div className='flex w-full'>
            <div className='w-full mr-2'>
              <Input name="password" label="Password" value={formData.password} handleChange={handleChange} handleSubmit={handleSubmit} type="password" autoFocus={false}  />
              
            </div>
            <div className='w-full ml-2'>
              <Input name="confirmPassword" label="Confirm Password" value={formData.confirmPassword} handleChange={handleChange} handleSubmit={handleSubmit} type="password" autoFocus={false} />
            </div>
          </div>
        }
        { isSignup &&
          <div className='flex flex-col mt-2'>
            <label className='text-lg font-medium'>Profile Picture</label>
            <div>
              {!photo ? 
                (<input className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent' name='photo' onChange={handleImageChange} required type='file' placeholder='Enter your Profile Picture' />) 
                : (
                  <div onClick={() => setPhoto(null)} className='flex flex-col mt-2 filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer'>
                    <img className='mx-auto h-20 w-20 rounded-full' src={photo} />
                  </div>
                )
              }
            </div>
          </div>
         }
        { !isSignup && 
          <div className='mt-8 flex justify-between items-center'>
              <div>
                  <input type="checkbox" id='remember'/>
                  <label className='ml-2 font-medium text-base' htmlFor="remember">Remember for 30 days</label>
              </div>
              <button className='font-medium text-base text-blue-500'>Forgot password</button>
          </div>
        }
        
        <div className='mt-4 flex flex-col gap-y-4'>
            <button onClick={handleSubmit} className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-blue-500 rounded-xl text-white font-bold text-lg'>{isSignup ? 'Sign Up' : 'Sign In'}</button>
            <button 
                className='flex items-center justify-center gap-2 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out transform py-4 rounded-xl text-gray-700 font-semibold text-lg border-2 border-gray-100 '>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.26644 9.76453C6.19903 6.93863 8.85469 4.90909 12.0002 4.90909C13.6912 4.90909 15.2184 5.50909 16.4184 6.49091L19.9093 3C17.7821 1.14545 15.0548 0 12.0002 0C7.27031 0 3.19799 2.6983 1.24023 6.65002L5.26644 9.76453Z" fill="#EA4335"/>
                        <path d="M16.0406 18.0142C14.9508 18.718 13.5659 19.0926 11.9998 19.0926C8.86633 19.0926 6.21896 17.0785 5.27682 14.2695L1.2373 17.3366C3.19263 21.2953 7.26484 24.0017 11.9998 24.0017C14.9327 24.0017 17.7352 22.959 19.834 21.0012L16.0406 18.0142Z" fill="#34A853"/>
                        <path d="M19.8342 20.9978C22.0292 18.9503 23.4545 15.9019 23.4545 11.9982C23.4545 11.2891 23.3455 10.5255 23.1818 9.81641H12V14.4528H18.4364C18.1188 16.0119 17.2663 17.2194 16.0407 18.0108L19.8342 20.9978Z" fill="#4A90E2"/>
                        <path d="M5.27698 14.2663C5.03833 13.5547 4.90909 12.7922 4.90909 11.9984C4.90909 11.2167 5.03444 10.4652 5.2662 9.76294L1.23999 6.64844C0.436587 8.25884 0 10.0738 0 11.9984C0 13.918 0.444781 15.7286 1.23746 17.3334L5.27698 14.2663Z" fill="#FBBC05"/>
                    </svg>
                    Sign in with Google
            </button>
        </div>
        <div className='mt-8 flex justify-center items-center'>
            <p className='font-medium text-base'>{!isSignup ? 'Don\'t have an account?' : 'Already have an account?'}</p>
            <button onClick={switchMode} className='ml-2 font-medium text-base text-blue-500'>{!isSignup ? 'Sign Up' : 'Sign In'}</button>
        </div>
      </div>
    </div>
  )
}

export default Form