import React from "react";
import PropTypes from "prop-types";
/*
const arr = [
  {name : "a", rating : 2.0, id : 1},
  {name : "b", rating : 3.0, id : 2},
  {name : "c", rating : 4.0, id : 3},
  {name : "d", rating : 5.0, id : 4}
];

function Potato({n, r}){
  //ES6문법 : para.chi = {chi}와 같음
  return <h1>name : {n},  rating : {r+1}</h1>;
}
//Prop 확인하기
Potato.propTypes={
  //type만 체크, 또는 required도 체크
  n : PropTypes.string.isRequired,
  r : PropTypes.string
};

//function component
function App() {
  //component : HTML을 반환하는 함수, js와 HTML의 이런 조합을 jsx라 부른다. 대문자로 시작
  //Potato 함수에 인자로 chi, pp 전달
  return (
    //arr의 원소가 자동적으로 renderTest 함수에 전달, 원소는 중복 안됨. id설정
    <div className="App"> 
     {arr.map(renderTest)}
    </div>
  );
}

function renderTest(para){
  return <Potato n = {para.name} r = {para.rating}/>
}
//map : array의 요소들 변경후 배열 반환
//Array.map(function(para){return para+"xx"});
*/

//class component
class App extends React.Component{
  //return은 없고 render method가 있다.
  //react는 자동적으로 모든 class component의 render method를 실행한다
  //render제외, 모든 멤버들은 ;로 마무리
  render(){
    const {count, isLoading} = this.state;  
  
    //onClick : 버튼을 클릭 할 때, 함수 동작
    return (<div>
      <h1>number : {count}</h1>
      <button onClick = {this.add}>ADD</button>
      <button onClick = {this.minus}>MINUS</button>
      <h1>{isLoading?"Loading" : "Ready"}</h1>
    </div>);
  }
  add = () => {
    //state 변경 : setState함수 사용, 인자에 새로운 구조체 전달
    //this.state보다 current를 사용하자
    this.setState (current =>({count : current.count + 1}));
  };
  minus = () => {
    //setState : component 호출 -> render -> componentDidUpdate 
    this.setState ({count : this.state.count-1});
  };
  state = {//object, 가변 데이터
      count: 0 , //this.state.count
      isLoading: true
  };

  //component life cycle : constructor -> render -> componentDidMount
  componentDidMount(){
    //setTimeout(함수, t) : t시간 후에 함수 실행
    setTimeout(()=>{
      this.setState({isLoading:false});
    }, 6000);
  }
}

export default App;
