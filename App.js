import React from "react";
import {HashRouter, Route} from "react-router-dom";
//rounter : 어떤 컴포넌트를 불러올지 결정
import About from "./routes/About";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";
import "./App.css";

//Route 안에는 렌더링할 스크린이 들어간다, 한개의 props을 가진다
//component = {표시할 스크린}
//path를 이용해 url 지정
//path가 겹치는 부분이 있으면 라우터 동시에 렌더링
//이것을 방지하기 위해 exact={true} 추가
function App(){
  return (<HashRouter>
    <Navigation/>
    <Route path = "/" exact={true} component = {Home}/>
    <Route path = "/about" component = {About}/>
    <Route path = "/movie/:id" component = {Detail}/>

  </HashRouter>);
}
//링크에 변수 넣기 : 
//Route path에는 :찍고 변수명
//Link 태그에서는 따옴표 대신 `사용, $(변수명)
export default App;