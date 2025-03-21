import React, { useState } from 'react';
import SideBar from '../components/SideBar';
import Header from '../components/Header';
import "../css/Main.css"
const Main: React.FC = () => {
  const [division, setDivision] = useState("");
  return (
    <div className='main-container'>
      <Header/>
      <SideBar/>
      <main className='main-content'>
        <div>개설강좌 리스트 [{division}강좌조회] 2025년도 1학기</div>
        <div>수강신청 바로하기 [과목코드+분반]</div>
      </main>
     
    </div>
  );
};

export default Main;