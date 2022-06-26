import React from 'react'
import { Avatar, } from '@material-ui/core'


interface Props {
  Icon?: any;
  src?: string;
  title: string;
}

const SidebarRow: React.FC<Props> = ({ Icon, src, title }) => {
  return (
    <div className='flex items-center space-x-2 p-4 hover:bg-gray-200 rounded-xl cursor-pointer'>
      {src && (
        <img className='h-8 w-8 rounded-full' src={src} alt="USER_PROFILE_PIC" />
      )}
      {Icon && <Icon className='h-8 w-8 text-blue-500' />}
      <p className='hidden sm:inline-flex font-medium'>{title}</p>
    </div>
  )
}

export default SidebarRow