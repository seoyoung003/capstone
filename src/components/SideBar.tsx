import React from 'react';
import SideBarBtn from './SideBarBtn';
import "../css/sidebar.css"

const SideBar: React.FC = () => {
  return (
    <div className='sidebar'>
        <div>
            <p className='sidebar__user-info'>사용자정보</p>
            <ul>
                <li>년도/학기</li>
                <li>소속</li>
                <li>학년</li>
                <li>성별/학번</li>
                <li>신청가능학점</li>
                <li>주</li>
                <li>복</li>
                <li>다</li>
                <li>부</li>
            </ul>
        </div>

        <div className='sidebar__part--block'>
          <div className='sidebar__part__top'>
            전공강좌
            <SideBarBtn/>
          </div>
          
          <div className='sidebar__part sidebar__part--marginleft'>
              <p>학부</p>
              <select name="department" id="department">
                <option value=""></option>
              </select>
          </div>
          
          <div className='sidebar__part sidebar__part--marginleft'>
              <p>전공</p>
              <select name="major" id="major">
                <option value=""></option>
              </select>
          </div>
          
          <div className='sidebar__part sidebar__part--marginleft'>
              <p>구분</p>
              <select name="division" id="division">
                <option value=""></option>
              </select>
          </div>     
        </div>

        <div className='sidebar__part--block'>
          <div className='sidebar__part__top'>
            교양강좌
            <SideBarBtn/>
          </div>
          
          <div className='sidebar__part__area sidebar__part--marginleft'>
              <p>영역</p>
              <select name="general-elective-area" id="general-elective-area">
                <option value=""></option>
              </select>
          </div>
        </div> 

        <div className='sidebar__part--block'>
          <div className='sidebar__part__top'>
            교직강좌
            <SideBarBtn/>
          </div>
          
          <div className='sidebar__part__area sidebar__part--marginleft'>
              <p>영역</p>
              <select name="teaching-course-area" id="teaching-course-area">
                <option value=""></option>
              </select>
          </div>
        </div>
           
      

    </div>
  );
};

export default SideBar;
