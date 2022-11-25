import React from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom';
import './Router.css'

export default function App() {
  return (
    <Router>
      <div className="hello1">
        {/* 👇️ react router link */}
        <Link>
          <img
            src="https://lh6.googleusercontent.com/ZyMBlJbVaZkbXWEbvnAlMfjC_e0f2tkLbiCDZcJVpGn735QiHcVXF9fQkGgVloyM2U_Z_5SogTIPBMeHyzSa0gM7rI7K_AhyQropXh34zfqBOBcKxVr8CHWA13Bcu36ISC6qqUEu"
            width="800" 
            height="400"
          />
        </Link>        
      </div>
    </Router>
  );
}
