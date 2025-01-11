import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import dietlogo from '../components/diet_logo.png';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <div className="flex flex-1 flex-col justify-center items-center">
        {/* 로고 */}
        <img
          src={dietlogo}
          alt="Diet Logo"
          className="mb-6"
          style={{ width: '80%', maxWidth: '400px', height: 'auto' }}
        />
        {/* 로고 아래 텍스트 */}
        {/* "다이어트를 더욱 쉽게" 글자 제거 */}

        {/* 버튼들 */}
        <div className="space-y-8"> {/* 간격 조정 */}
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
            로그인
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
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
