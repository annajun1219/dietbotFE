import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import dietlogo from '../components/diet_logo.png';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <div className="flex flex-1 flex-col justify-center items-center" style={{ marginTop: '-100px' }}> 
        <img
          src={dietlogo}
          alt="Diet Logo"
          className="mb-10"
          style={{ width: '100%', maxWidth: '600px', height: 'auto' }}
        />

       
        <div className="flex w-full max-w-lg mt-6 items-center justify-between" style={{ gap: '5%' }}> 
          <button
            onClick={() => navigate('/login')}
            className="w-40"
            style={{
              backgroundColor: 'rgb(221,235,200)',
              color: 'black',
              fontWeight: 'medium',
              padding: '0.5rem',
              borderRadius: '0.5rem',
              transition: 'background-color 0.3s',
            }}
            onMouseOver={(e) =>
              (e.target.style.backgroundColor = 'rgb(200,220,180)')
            }
            onMouseOut={(e) =>
              (e.target.style.backgroundColor = 'rgb(221,235,200)')
            }
          >
            Log In
          </button>
          <button
            onClick={() => navigate('/signup')}
            className="w-40"
            style={{
              backgroundColor: 'rgb(221,235,200)',
              color: 'black',
              fontWeight: 'medium',
              padding: '0.5rem',
              borderRadius: '0.5rem',
              transition: 'background-color 0.3s',
            }}
            onMouseOver={(e) =>
              (e.target.style.backgroundColor = 'rgb(200,220,180)')
            }
            onMouseOut={(e) =>
              (e.target.style.backgroundColor = 'rgb(221,235,200)')
            }
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
