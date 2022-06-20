import React from 'react'
import Layout from '../Layout/Layout'
import Navbar from '../Navbar/Navbar'

interface Props {
  user: JSON;
  setUser: React.Dispatch<React.SetStateAction<JSON>>;
}

const Home: React.FC<Props> = ({ user, setUser }) => {
  return (
    <div>
      <Navbar user={user} setUser={setUser} />
      <Layout />
    </div>
  )
}

export default Home