import React from 'react'
import { useNavigate } from 'react-router-dom'


const ProductCard = ({menu}) => {
  const navigate = useNavigate();

  const showDetail = () => {
    navigate(`/product/${menu.id}`)
  }


  return (
    <div className='product-line' onClick={showDetail}>      
      <img src={menu?.img} />
      {/* ?의 의미는 img 값이 있는지까지 확인을 한번 더 하는 것이다. */}
      <div>{menu.choice == true ? "베스트셀러" : ''}</div>
      <div>{menu.title}</div>
      <div>{menu.price }</div>
      <div>{menu.new == true ? "신제품" : ''}</div> 
    </div>
  )
}

export default ProductCard