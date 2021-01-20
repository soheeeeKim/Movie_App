import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';
import Counter from './component/counter.js';
import Movie from './component/Movie.js';

/*
class 작성법
class App extends React.component{
  .....
}
*/

function App() {

  const [text, setgext] = useState('Kosse');
  const onSubmit = ()=>{alert('hi');};
  const onKeyup = (event)=>{
    if(event.keyCode===13) onSubmit();
    alert('key up');
  }; //키보드를 떼면 작동
  const update = ()=>{
    setgext('Coder');
    console.log(text);
  };
  const onSubmi = (event)=>{
    event.preventDefault(); //동작 멈춤
  };
  const movies = [
    {title: 'a', year: 1},
    {title: 'b', year: 2},
    {title: 'c', year: 3},
  ];
  //반복문 : map 함수 사용. map(함수-리턴은 jsx문법). map을 사용할 땐 key props 사용
  const rendermovies = movies.map((movie)=>{
    return (
      <Movie movie={movie}/>
    );
  });

  //렌더링 될 때마다 후에 실행 (setState 후 실행)
  //useEffct(함수, [관심있는 변수]) : 관심있는 변수가 변경될 때만 실행
  //관심있는 변수가 없으면 (empty array) 처음 한 번만 실행
  //useEffect(()=>{alert('effect');});

  //jsx 문법
  //이벤트 리스너. onClick = {함수}
  return (
    <div className="App">
      hello~
      <button onClick={onSubmit}>Submit</button>
      <input onKeyUp={onKeyup}></input>
      <Counter click="click1"/>
      <Counter click = {text}/>
      <button onClick = {update}>change</button>
      {rendermovies}
    </div>
  );
}

export default App;
