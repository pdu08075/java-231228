/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  // let post = "무신사 남자 상의 리뷰";

  let [a, b] = useState(["상의 상의 상의", "하의하의", "모자모자"]);  // b는 변수가 아닌 함수
  let [like, setLike] = useState([0, 0, 0]);
  let [detailContent, setDetailContent] = useState(true);
  let [title, setTitle] = useState(0);
  let [inputValue, setInputValue] = useState('');  // 비동기식인데  useState가 비교적 느려, console.log가 먼저 동작(setInputValue 누락)

  // console.log(
  //   [1, 2, 3].map(function (a) {
  //     return a;
  //   }) 
  // )

  return (
    <div className="App">
      <div className='black-nav'>
        <h4>React_blog</h4>
      </div>
      {/* <h5 style={{color : "red", fontSize : "15px"}}>{post}</h5> */}
      <button onClick={() => {
        let copyA = [...a];  // 안의 값 수정할 때 카피 뜨기
        copyA[0] = "양말양말";
        b(copyA);
      }}>글 수정</button>
      <button onClick={() => {
        let copySort = [...a];
        copySort.sort();
        b(copySort);
      }}>가나다순 정렬</button>
      <div className='list'>
        <h4 onClick={() => setDetailContent(!detailContent)
        }>{a[0]}<span onClick={() => setLike(like + 1)}>👍</span>{like}</h4>
        <p>4월 24일 발행</p>
      </div>
      <div className='list'>
        <h4>{a[1]}</h4>
        <p>4월 24일 발행</p>
      </div>
      <div className='list'>
        <h4>{a[2]}</h4>
        <p>4월 24일 발행</p>
      </div>

      {
        a.map(function(t, i) {
          return(
            <div className='list' key = {i}>
              <h4 onClick={() => {
                setDetailContent(!detailContent);
                setTitle(i);

              }}>{a[i]}<span onClick={(e) => {
                e.stopPropagation();  // 물림 현상 해결
                let copyLike = [...like];
                copyLike[i] = copyLike[i] + 1;
                setLike(copyLike);
              }}>👍</span>{like[i]}</h4>
              <p>4월 24일 발행</p>

              <button onClick={ () => {
                let copy = [...a];
                copy.splice(i, 1);
                b(copy);
              }}>삭제</button>
            </div>
          )
        })
      }
      <input value={inputValue} onChange={(e) => {setInputValue(e.target.value);
      console.log(inputValue); }}/>
      <button onClick={ () => {
        let copy = [...a]
        copy.unshift(inputValue);  // 글 작성 클릭 시 제일 상단에 업로드
        b(copy);
        setInputValue("");
      }}>글 작성</button>
      {
       detailContent == true ? <DetailContent color="blue" a={a} b={b} title = {title}/> : null  // 함수도 내려줘야 돼서 b도 적음
      }
    </div>
  );
}

function DetailContent(props) {  // 컴포넌트라 칭함
  return(
    <div className='modal' style={{background : props.color}}>
      <h4>{props.a[props.title]}</h4>
      <p>날짜</p>
      <p>상세 내용</p>
      <button onClick={() => {
        let copyA = [...props.a];
        copyA[0] = "양말양말";
        props.b(copyA);
      }}>글 수정</button>
    </div>
  )
}

export default App;
