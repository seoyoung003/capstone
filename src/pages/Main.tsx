import React, { useState } from 'react';
import SideBar from '../components/SideBar';
import Header from '../components/Header';
import "../css/main.css"
import MainBtn from '../components/MainBtn';
import { Diamond } from 'lucide-react';
import { useEffect } from 'react';
import axios from 'axios';

interface ClassInfo {
  no: number;
  classification: string;
  code: number;
  grade: string;
  credit: number;
  subject: string;
  professor: string;
  class_time_room: string;
  note: string;


}


interface MyClassInfo{
  no: number;
  classification: string;
  code: number;
  credit: number;
  subject: string;
  professor: string;
  class_time_room: string;
  lecture_type: string;
  retake: string;
  acquired_year: string;
  acquired_semester: string;
  acquired_subject_name: string;
  application_date: string;


}

const Main: React.FC = () => {
  const [division, setDivision] = useState("");
  const [classInfo, setClassInfo] = useState<ClassInfo[]>([
    {
      no: 1,
      classification: "전공",
      code: 101001,
      grade: "1학년",
      credit: 3,
      subject: "컴퓨터 기초",
      professor: "홍길동",
      class_time_room: "본부519: 월6,7,8",
      note: "특별 강의"
    },
    {
      no: 2,
      classification: "전공",
      code: 102002,
      grade: "2학년",
      credit: 2,
      subject: "웹 개발",
      professor: "이순신",
      class_time_room: "본부519: 화2,3,4",
      note: "과제 있음"
    },
    {
      no: 3,
      classification: "전공",
      code: 103003,
      grade: "3학년",
      credit: 3,
      subject: "데이터베이스",
      professor: "김철수",
      class_time_room: "본부519: 수5,6,7",
      note: "기말고사 있음"
    },
    {
      no: 4,
      classification: "전공",
      code: 456789,
      grade: "1학년",
      credit: 2,
      subject: "자료구조",
      professor: "이민수",
      class_time_room: "본부 525: 목 5, 6",
      note: "기본적인 자료구조 개념",
    },
    {
      no: 5,
      classification: "전공",
      code: 567890,
      grade: "2학년",
      credit: 3,
      subject: "웹 프로그래밍",
      professor: "최지영",
      class_time_room: "본부 527: 금 3, 4",
      note: "HTML, CSS, JavaScript 기초",
    },
    {
      no: 6,
      classification: "전공",
      code: 678901,
      grade: "3학년",
      credit: 3,
      subject: "네트워크",
      professor: "정호진",
      class_time_room: "본부 529: 월 8, 9",
      note: "네트워크 기초 및 프로토콜",
    },
    {
      no: 7,
      classification: "전공",
      code: 789012,
      grade: "4학년",
      credit: 3,
      subject: "소프트웨어 공학",
      professor: "이상우",
      class_time_room: "본부 531: 화 7, 8",
      note: "소프트웨어 개발 프로세스",
    },
    {
      no: 8,
      classification: "전공",
      code: 890123,
      grade: "4학년",
      credit: 2,
      subject: "알고리즘",
      professor: "김하늘",
      class_time_room: "본부 533: 수 5, 6",
      note: "알고리즘 설계 및 분석",
    }
  ]);

  const [myClassInfo, setMyClassInfoRows] = useState<MyClassInfo[]>([
    
  ]);

  
  // useEffect(() => {
  
  //   axios.get('')  
  //     .then((response) => {
      
  //       setRows(response.data);  
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching courses:', error);
  //     });
  // }, []);  // 빈 배열을 넣어 컴포넌트가 처음 렌더링될 때만 호출되도록 설정

  return (
    <div className='main-container'>  
        <Header/>
        <SideBar/>

      <main className='main-container__content'>
        <div className='main-container__content__title'>개설강좌 리스트 [{division}강좌조회] 2025년도 1학기</div>
        <div className='main-container__content__subject-code'>
          <Diamond size={16}/> 수강신청 바로하기 [과목코드+분반]
          <input type="text" /> <MainBtn content="신청"/>
        </div>

        <div className='main-container__class-info-table'>
          <table>
            <thead>
              <tr>
                <th>NO</th>
                <th></th>
                <th>이수구분</th>
                <th>과목코드-분반</th>
                <th>학년</th>
                <th>학점</th>
                <th>교과목명</th>
                <th>담당교수</th>
                <th>강의시간 및 강의실</th>
                <th>비고</th>
              </tr>
            </thead>
            <tbody>
              {classInfo.map((row, index) => (
                <tr key={index}>
                  <td>{row.no}</td>
                  <td><MainBtn content='신청'/></td>
                  <td>{row.classification}</td>
                  <td>{row.code}</td>
                  <td>{row.grade}</td>
                  <td>{row.credit}</td>
                  <td>{row.subject}</td>
                  <td>{row.professor}</td>
                  <td>{row.class_time_room}</td>
                  <td>{row.note}</td>
                </tr>
              ))}
            </tbody>
      </table>
        </div>

        <hr className='main-container__division'/>
        <div>
          <Diamond size={16}/>
          <div className='main-content__title'>수강신청내역</div>
        </div>
        

        <div className='main-container__my-class-table'>
          <table>
            <thead>
              <tr>
                <th>NO</th>
                <th></th>
                <th>이수구분</th>
                <th>과목코드-분반</th>
                <th>학점</th>
                <th>교과목명</th>
                <th>담당교수</th>
                <th>강의시간 및 강의실</th>
                <th>강의유형</th>
                <th>재수강구분</th>
                <th>취득년도</th>
                <th>취득학기</th>
                <th>취득과목명</th>
                <th>신청일시</th>
              </tr>
            </thead>
            <tbody>
              {myClassInfo.map((row, index) => (
                <tr key={index}>
                  <td>{row.no}</td>
                  <td><MainBtn content='취소'/></td>
                  <td>{row.classification}</td>
                  <td>{row.code}</td>
                  <td>{row.credit}</td>
                  <td>{row.subject}</td>
                  <td>{row.professor}</td>
                  <td>{row.class_time_room}</td>
                  <td>{row.lecture_type}</td>
                  <td>{row.retake}</td>
                  <td>{row.acquired_year}</td>
                  <td>{row.acquired_semester}</td>
                  <td>{row.acquired_subject_name}</td>
                  <td>{row.application_date}</td>
                </tr>
              ))}
            </tbody>
      </table>
        </div>

       
        
      </main>
     
    </div>
  );
};

export default Main;