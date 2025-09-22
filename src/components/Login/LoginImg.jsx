import React from 'react';
import instLoginImage from '../../assets/loginImage.png'

const LoginImg = () => {
  return (
    <div>
      <img className='loginImage' src={instLoginImage} alt='InstLoginImage' height={475}/>
    </div>
  );
};

export default LoginImg;