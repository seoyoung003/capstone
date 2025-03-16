import React from 'react';


const Header: React.FC = () => {
  return (
    <div>
        <img src="../assets/Baekseok.png" alt="백석대학교 로고" />
        <p>수강신청 기간임에도 [신청] 버튼이 안보일 경우 우측상단 로그아웃 버튼 클릭 후 재로그인 해주세요.</p>
        <p>학번</p>
        <p>이름</p>
        <button>로그아웃</button>
    </div>
  );
};

export default Header;