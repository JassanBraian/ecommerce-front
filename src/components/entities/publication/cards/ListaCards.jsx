
import React, { useContext } from 'react';
import Card from './Card';
import { useState, useEffect } from 'react';
import Spinner from '../../../common/spinner/Spinner';
import clientAxios from '../../../../config/axios';
import PublicationContext from '../../../../context/publication/PublicationContext';




const ListaCards = () => {
    const {publications, getPublications} = useContext(PublicationContext);
    const [loading, setLoading] = useState(false);

      useEffect(()=>{
        setLoading(true)
        getPublications()
        setLoading(false)
    }, []);

  if(loading){
      return <Spinner />
  }
  return (
    <section className='container-fluid'>
        <div className='row'>
                 {publications.map((post, index) => <Card key={index} title= {post.title} description={post.description} postId={post._id} image={post.image} isHighlighted={post.isHighlighted}/>)}    
        </div>
    </section>
  )
}
export default ListaCards;