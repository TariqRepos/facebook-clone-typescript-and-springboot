import React from 'react'
import { Link } from 'react-router-dom';
import { User } from 'firebase/auth';

interface Props {
  user: User | null;
  setAuthState: React.Dispatch<React.SetStateAction<string>>;
  setUser: React.Dispatch<React.SetStateAction<User | null>>
}

const Home: React.FC<Props> = ({ user, setAuthState, setUser }) => {
  return (
      <div>
          <h1> Home Page - Unprotected</h1>
          {/* <Link to={`/cart`}>
              <button>View Cart</button>
          </Link>
          <Link to={`/auth/signup`}>
              <button>SignUp</button>
          </Link> */}
      </div>
  );
}

export default Home