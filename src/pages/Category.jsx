import React from 'react'
import ListaCards from '../components/entities/publication/cards/ListaCards'
import '../css/common/pages/category.css'

const Category = ({ title, posts}) => {
  return (
    <>
    <h2 className='titulo'>{title}</h2>
    <div className='card-group'>
      <ListaCards posts={posts} />
    </div>
    </>
  )
}

export default Category;