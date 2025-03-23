import React from 'react';
import "../css/main-btn.css"

interface MainBtnProps{
    content: string,
    small: boolean,
}

const MainBtn: React.FC<MainBtnProps> = ({content, small}) => {
  return (
        <button className={small ? 'main-btn--small' : 'main-btn'}>{content}</button>
  );
};

export default MainBtn;