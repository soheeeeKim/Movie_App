import React from "react"
import Input from "./inputs"
import { Link } from "react-router-dom"
import LoginQuestion from "../images/login_question.png"
import "./login.css"

class Login extends React.Component {
  Check(event) {
    event.preventDefault()

    if (event.target[0].attributes[3].value === "") alert("please write id!")
    else if (event.target[1].attributes[3].value === "") alert("please write password!")
    else alert("login!")
  }
  render() {
    return (
      <div className="haha">
        <div className="total">
          <div className="logins">
            <h2>로그인</h2>

            <form onSubmit={(e) => this.Check(e)} className="login">
              <div className="loginInput">
                <div className="Id">
                  <Input
                    name="id"
                    placeholder="id"
                    message="*아이디를 입력하세요"
                    type="text"
                    up="ID"
                  />
                </div>
                <div className="Password">
                  <Input
                    name="password"
                    placeholder="password"
                    message="*비밀번호를 입력하세요"
                    type="password"
                    up="PW"
                  />
                </div>
              </div>
              <div className="loginButton">
                <input type="submit" value=""></input>
              </div>
              <div className="etc">
                <div className="finds">
                  <img src={LoginQuestion} alt="" />
                  <div className="find">
                    <Link to="/find_id">아이디 찾기</Link>
                    <span></span>
                    <Link to="/find_password">비밀번호 찾기</Link>
                  </div>
                </div>
                <div className="register">
                  <Link to="/register">Bridge.inha가 처음이신가요?</Link>
                </div>
              </div>
            </form>
          </div>
          <div className="letter">
            <img
              src="https://ae01.alicdn.com/kf/HTB1szZRQVXXXXaJaXXXq6xXFXXXj/Beibehang.jpg"
              alt=""
            />
            <div className="wrap">
              <div className="title">
                <h2>Bridge.inha</h2>
              </div>
              <span className="line"></span>
              <div className="description">
                <p>
                  Bridge.inha는 Psychological test(심리테스트)의 결과를 기반으로 사용자에게
                  인하대학교 후문 근처의 음식점을 소개하는 서비스 입니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
