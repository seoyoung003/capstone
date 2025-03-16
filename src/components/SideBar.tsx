import React from 'react';

const SideBar: React.FC = () => {
  return (
    <div className='sidebar'>
        <div className='sidebar__user-info'>
            사용자정보
            <ul className="sidebar__list">
          <li className="sidebar__item">년도/학기</li>
          <li className="sidebar__item">소속</li>
          <li className="sidebar__item">학년</li>
          <li className="sidebar__item">성별/학번</li>
          <li className="sidebar__item">신청가능학점</li>
          <li className="sidebar__item">희망전공</li>
          <li className="sidebar__item">주</li>
          <li className="sidebar__item">복</li>
          <li className="sidebar__item">다</li>
          <li className="sidebar__item">부</li>
          <li className="sidebar__item">영어트랙</li>
          <li className="sidebar__item">국어시험</li>
          <li className="sidebar__item">물리시험</li>
          <li className="sidebar__item">생물시험</li>
          <li className="sidebar__item">수학시험</li>
        </ul>
        </div>
        
        <div className=''>

        </div>
    </div>
  );
};

export default SideBar;