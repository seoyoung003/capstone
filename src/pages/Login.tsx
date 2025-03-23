import React from 'react';
import "../css/Login.css"
import { Link } from 'react-router-dom';


const Login: React.FC = () => {

    

  return (
    
        <div className='login-container'>
            <div className='login-form'>
             <div className='login-form__title'>수강신청 로그인</div>
                <form action="" className='login-form__field'>
                        <input className='login-form__input' type="text" name="student_id" placeholder='학번' required/>
                        <input className='login-form__input' type="text" name="password" placeholder='비밀번호' required/>
                        <button className='login-form__submit-button' type="submit">로그인</button>
                </form>

                <div className='login-form__button-group'>
                    <button className='login-form__button login-form__button--navy'><Link to={'/find-acount'}>아이디/비밀번호 찾기</Link></button>
                    <button className='login-form__button'>수강신청 화면설명</button>
                    <button className='login-form__button'>수강신청 유의사항 및 안내 보기</button>

                </div>
                   
                <div className='login-form__text-group'>
                    <p className='login-form__text--blue'>수강신청 전에 반드시 유의사항 및 안내를 확인해주시길 바랍니다.</p>

                    <p className='login-form__text--red'>수강신청 30분전에 로그인이 가능합니다.
                    로그인한 상태로 제 시간에 수강신청이 가능합니다. 수강신청 시 유의해주시길 바랍니다.</p>

                </div>
              

           

            </div>
            
            
        </div>
       
  
  );
};

export default Login;