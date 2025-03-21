import React from 'react';
import "../css/sidebar-btn.css"
import { SearchIcon } from 'lucide-react';

const SideBarBtn: React.FC = () => {
  return (
    <div className='sidebar-btn-container'>
        <SearchIcon size={13}></SearchIcon>
        <button>조회</button>
    </div>
  );
};

export default SideBarBtn;