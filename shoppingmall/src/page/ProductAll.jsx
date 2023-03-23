import React from 'react'
import { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import { Container, Row, Col } from 'react-bootstrap'



//useeffect는 두개의 파라미터를 갖는다. 1

const ProductAll = () => {
  const [productsList, setProductList] = useState([]);




  // async await로 http를 요청한 것이다.
  // 이게 비동기 처리하는 가장 최근에 나온 문법이다.
  // 기존에는 비동기 처리를 해주는 것이 콜백함수이다.
  // async await는 콜백 함수의 단점을 개선한 것이다.
  // 콜백함수로 사용할 경우, 콜백함수 안에 또 콜백함수가 들어가는 형태로 중첩되서
  // 가독성도 떨어지고, 로직 변경이 힘들다. 이걸 속칭 콜백 지옥이라고 한다.
  
  // 참고로 비동기 처리란
  // 득정 코듸의 실행이 완료될 때까지 기다리지 않고
  // 다음 코드를 먼저 실행한다.
  // 가령 서버에서 3000개의 정보를 받은 후에 ui를 렌더링 한다고 생각하자
  // 그걸 기다릴 유저는 아무도 없다. 그래서 화면을 먼저 렌더링해서 화면을 보여주고 그 다음 서버에서 데이터를 가져오는 것이다. 

  // 1. 함수 앞에 async라는 예약어를 써준다.
  // 2. 함수 내부 로직 중에 http 통신을 담당하는 비동기처리 코드 앞에다가 await를 써주면 된다.
  // 3. await를 함수 내에서 사용하려면,
  // 반드시 함수 앞에 asyn 키워드가 있어야 한다.

  // await
  // 함수를 호출하고 본문이 실행될 때 잠시 중단되었다가
  // promise가 처리가 되면 실행이 재개된다.
  // promise가 처리가 되기 전까지 기다려준다는 것이다.
  // 그때동안 자바스크립트는 렌더링 하는 것이다.
  // promise는 자바스크립트의 비동기 처리에 사용되는 객체이다.

  // 비동기처리 안 하면 서버에서 정보 갖고 오느라 로딩하는데 10분 넘게 걸릴 수도...
  // 구문법에서는 콜백함수 사용했는데 진짜 보기 복잡하다.

  const getProducts = async () => {
    // 모든 데이터를 가진 주소를 부른다.
    let url = "http://localhost:5000/products"
    let response = await fetch(url);
    // url을 fetch 해줘라 라는 명령어
    let data = await response.json();
    // response에서 json을 뽑아라
    console.log(data);

    // state 변경 함수에 date값을 할당
    setProductList(data)
  }


  useEffect(()=>{
    getProducts();
  },[]);

  return (
    <div>
      {
        productsList.map((menu, i)=>{
          return (
            <ProductCard menu={menu}/>
          )
        })
      }
    </div>
  )
}

export default ProductAll