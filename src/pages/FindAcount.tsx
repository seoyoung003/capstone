import React from 'react';
import FindAcountBtn from '../components/FindAcountBtn';
import { Link } from 'react-router-dom';
import "../css/find-acount.css"

const FindAcount: React.FC = () => {
  return (
    <div className='find-acount-container'>
        <form className='find-acount-container__form'>
            <h3>백석대학교</h3>
            <h2>아이디 비밀번호 찾기</h2>
            <p>이메일 주소를 입력 후 인증요청을 눌러주시기 바랍니다. 
                학교에 등록된 이메일주소로 인증번호 6자리가 전송됩니다.
            </p>
            <label htmlFor="email">이메일</label>
            <input type="text" id='email' placeholder='이메일을 입력하세요.'/>
            <FindAcountBtn btnColor='blue'>인증요청</FindAcountBtn>
            <Link to={'/'}><FindAcountBtn btnColor='white'>돌아가기</FindAcountBtn></Link>
        
        </form>

    </div>
  );
};

export default FindAcount;