import React from 'react'
// import { Navigate } from 'react-router-dom'
import Login from '../page/Login'
import ProductDetail from '../page/ProductDetail'

// 리액트 훅 중에 하나인 useNavigate의 규칙은 조건문 반복문에서 useNavigate를 사용할 수 없다.
// 지금은 컴포넌트여서 해결되긴 했는데, 이땐 그냥 Navigate만 쓰면 된다.
// <Navigate to='/login'> 이런 식으로 쓰면 된다.

// 조건부 랜더링을 할 것이다.
// userlogin이 true라면, 클릭시 상세 페이지 productdetail을 보여줄 것이다.
// userlogin이 false라면, 클릭시 로그인 페이지로 이동하게
const PrivateRoute = ({userlogin}) => {
  return userlogin === true ? <ProductDetail/> : <Login/>

}

export default PrivateRoute