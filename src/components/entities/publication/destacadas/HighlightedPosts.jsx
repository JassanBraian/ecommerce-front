import React from 'react'
import { useContext } from 'react';
import PublicationContext from '../../../../context/publication/PublicationContext';


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  console.log(getRandomInt(6))

const HighlightedPosts = () => {
    const {publications, getPublications} = useContext(PublicationContext);
    let highlightedPosts = publications[getRandomInt(5)]
  return (
    <div>HighlightedPosts</div>
  )
}

export default HighlightedPosts