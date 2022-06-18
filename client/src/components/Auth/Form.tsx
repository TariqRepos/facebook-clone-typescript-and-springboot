import React, { useState, useEffect } from 'react'
import Input from './Input';
import { auth } from '../../firebase';
import { User, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Form: React.FC = () => {
  const navigate = useNavigate();
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if(formData.email !== "" && formData.password !== "") {
      if(isSignup) {
        createUserWithEmailAndPassword(auth, formData.email, formData.password)
        .then((user) => {
          // localStorage.setItem("profile", JSON.stringify({user.user.}));
        })
        .catch((err) => {
          alert(err);
        })
      }
      else {
        signInWithEmailAndPassword(auth, formData.email, formData.password)
        .then(() => {          
        })
        .catch((err) => {
          alert(err);
        })
      }
    }
  };

  const handleChange = (e: React.FormEvent) => {
    const target = e.target as HTMLInputElement;
    setFormData({ ...formData, [target.name]: target.value});
  };

  const switchMode = () => {
    console.log(process.env.FIREBASE_API_KEY);
    
    setIsSignup((prevIsSignup) => !prevIsSignup);
    
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: ""
    });
  };

  return (
    <div className='w-11/12 max-w-lg mx-auto px-10 py-10 rounded-3xl bg-white border-2 border-gray-100'>
      <div className='text-center'>
          <h1 className='text-5xl font-semibold'>Welcome Back</h1>
          <p className='font-medium text-lg text-gray-500 mt-4'>Welcome back! Please enter you details.</p>
      </div>
      <div className='mt-8'>
        { isSignup && (
          <div className='flex w-full'>
            <div className='w-full mr-2'>
              <Input name="firstName" label="First Name" value={formData.firstName} handleChange={handleChange} type="text" autoFocus={isSignup ? true : false} />
            </div>
            <div className='w-full ml-2'>
              <Input name="lastName" label="Last Name" value={formData.lastName} handleChange={handleChange} type="text" autoFocus={false} />
            </div>
            
          </div>
        )}
        <Input name="email" label="Email" value={formData.email} handleChange={handleChange} type="email" autoFocus={!isSignup ? true : false} />
        <Input name="password" label="Password" value={formData.password} handleChange={handleChange} type="password" autoFocus={false}  />
        { isSignup && <Input name="confirmPassword" label="confirmPassword" value={formData.confirmPassword} handleChange={handleChange} type="password" autoFocus={false} />}
        { !isSignup && 
          <div className='mt-8 flex justify-between items-center'>
              <div>
                  <input  type="checkbox" id='remember'/>
                  <label className='ml-2 font-medium text-base' htmlFor="remember">Remember for 30 days</label>
              </div>
              <button className='font-medium text-base text-blue-500'>Forgot password</button>
          </div>
        }
        
        <div className='mt-8 flex flex-col gap-y-4'>
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