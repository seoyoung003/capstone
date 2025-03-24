import React from 'react';
import "../css/find-acount-btn.css"

interface FindAcountBtnProps{
    children: string;
    btnColor: string;
}
const FindAcountBtn: React.FC<FindAcountBtnProps> = ({children, btnColor}) => {
  return (
    <div>
        <button className={`find-account-btn ${btnColor === 'blue' ? 'find-account-btn--bg-blue' : 'find-account-btn--bg-white'}`}>{children}</button>
    </div>
  );
};

export default FindAcountBtn;