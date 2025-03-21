import React from 'react';
import "../css/Header.css"
import logo from  "../assets/Baekseok.png";

const Header: React.FC = () => {
  return (
    <div className='header-container'>
      <img className='header-container__logo' src={logo} alt='백석대학교 로고' />
      <div className='header-container__user-info'>
        <p className='header-container__student-id'>학번</p>
        <p className='header-container__name'>이름</p>
        <button className='header-container__button'>로그아웃</button>
      </div>
     
  </div>


  );
};

export default Header;