import React from "react";


function Potato({chi}){
  //ES6문법 : para.chi = {chi}와 같음
  return <h1>Like {chi}</h1>;
}
function App() {
  //component : HTML을 반환하는 함수, js와 HTML의 이런 조합을 jsx라 부른다. 대문자로 시작
  //Potato 함수에 인자로 chi, pp 전달
  return (
    <div className="App"> 
    Hello
    <Potato chi = "pota" pp="ppp"/>    
    <Potato chi = "p" pp="ppp"/>
    <Potato chi = "pp" pp="ppp"/>

    </div>
  );
}

export default App;
