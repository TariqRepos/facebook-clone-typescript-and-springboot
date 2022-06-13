import React from 'react'

interface Props {
  Icon?: any;
  src?: string;
  title: string;
}

const SidebarRow: React.FC<Props> = ({ Icon, src, title }) => {
  return (
    // IMAGE
    <div className='flex items-center space-x-2 p-4 hover:bg-gray-200 rounded-xl cursor-pointer'>
      {Icon && <Icon className='h-8 w-8 text-blue-500' />}
      <p className='hidden sm:inline-flex font-medium'>{title}</p>
    </div>
  )
}

export default SidebarRow