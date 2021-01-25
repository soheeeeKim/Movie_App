import React from "react"
import { Link, NavLink } from "react-router-dom"
import "./Nav.css"

function Nav() {
  return (
    <div className="nav">
      <div className="title">
        <Link to="/">Bridge.inha</Link>
        <span className="line"></span>
      </div>
      <div className="links">
        <div className="control">
          <NavLink to="/login" activeClassName="active" className="link">
            로그인
          </NavLink>
          <NavLink to="/" activeClassName="active" className="link">
            메인화면
          </NavLink>
          <NavLink to="/board" activeClassName="active" className="link">
            Bridge 광장
          </NavLink>
          <NavLink to="/profile" activeClassName="active" className="link">
            내 정보
          </NavLink>
          <NavLink to="/center" activeClassName="active" className="link">
            제안 센터
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Nav
