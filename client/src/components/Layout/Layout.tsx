import React from 'react'
import Feed from '../Feed/Feed'
import Sidebar from '../Sidebar/Sidebar'

const Layout = () => {
  return (
    <div className='h-screen bg-gray-100 overflow-hidden'>
      <main className='flex'>
        <Sidebar />
        <Feed />
      </main>
    </div>
  )
}

export default Layout