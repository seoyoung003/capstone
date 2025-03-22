import React from 'react';
import "../css/main-btn.css"

interface MainBtnProps{
    content: string,
}

const MainBtn: React.FC<MainBtnProps> = ({content}) => {
  return (
    <div>
        <button className='main-btn'>{content}</button>
    </div>
  );
};

export default MainBtn;