import React, { useEffect, useContext } from 'react'
import { useState } from 'react';
import {
    getComments as getCommentsApi,
    createComment as createCommentApi,
    deleteComment as deleteCommentApi,
    updateComment as updateCommentApi
} from './api';
import CommentItem from './CommentItem';
import CommentForm from './CommentForm';
import CommentContext from '../../../../context/comment/CommentContext';
import PublicationContext from '../../../../context/publication/PublicationContext';

const CommentList = () => {

    const { comments, getCommentsByPubliId, createComment } = useContext(CommentContext);
    const { publication } = useContext(PublicationContext);

    useEffect(() => {
        getCommentsByPubliId(publication._id);
    }, [publication._id])

    const [backendComments, setBackendComments] = useState([]) /* Colocamos un array vacio porque no tenemos ninguna data y esta data tendria que venir desde el backend */
    const [activeComment, setActiveComment] = useState(null) /* Escuchara a dos objetos diferentes cuando tengamos un activeComment:
        {type: 'editing', id: '1'}
        {type: 'replying', id: '1'}
        La id nos indica en que comentario estaremos editando o respondiendo. Por eso es que agregaremos activeComment y setActiveComment en el componente Comment y tambien el el reply
    */

    /* Mucho de los comentarios son replys por eso creo rootComments para traer a los comentarios padres*/
    const rootComments = backendComments.filter(backendComments => backendComments.parentId === null); /* Con esto traigo a los comentarios que no son replys, sino que son los comentarios padres */
    const getReplies = commendId => { /* commendId es el identificador unico del comment padre. Asi es como podemos traer los replies comments del commentario, desde el backend */
        return backendComments.filter(backendComment => backendComment.parentId === commendId) /* Con esto traemos a los replies */
            .sort(  /* Todo esto lo hacemos para colocar las respuestas de modo que la mas nueva quede abajo */
                (a, b) =>
                    new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())
    };

    const addComment = (text, parentId) => { /* colocamos el parentId porque luego cuando hagamos un reply esto quiere decir que estamos creando un comentario que es hijo de otro comentario, entonces por eso es que nuestro comment Form nos debe proporcionar el parentId para que en base a esto podamos hacer el comment reply (children) */
        
        createComment({
            description: text,
            isprivate: false,
            publication: {
                title: publication.title,
                publiid: publication._id
            },
            token: localStorage.getItem('token'),
            usersend: {
                name: 'Braian',
                userid: "62c58e857cd619b966029b71",
                mail: 'braianjassan@gmail.com'
            }
        });

        setActiveComment(null)
    }

    const deleteComment = (commentId) => {
        deleteCommentApi(commentId).then(() => {
            const updatedBackendComments = backendComments.filter(
                backendComments => backendComments.id !== commentId
            );
            setBackendComments(updatedBackendComments);
        });
    }

    const updateComment = (text, commentId) => {
        updateCommentApi(text, commentId).then(() => {
            const updatedBackendComments = backendComments.map(backendComment => {
                if (backendComment.id === commentId) {
                    return { ...backendComment, body: text }
                }
                return backendComment
            })
            setBackendComments(updatedBackendComments)
            setActiveComment(null)
        })
    }

    useEffect(() => {
        getCommentsApi().then(data => {  /* Con esto traigo los comentarios desde api.jsx y los seteo en backendComments */
            setBackendComments(data)
        })
    }, [])

    return (
        <div className='comments'>
            <h3 className='comments-title'>Comentarios</h3>
            <div className='comments-form-container'>
                <div className="comment-form-title">Dejanos tu comentario</div>
                <CommentForm submitLabel='Enviar' handleSubmit={addComment} />
            </div>
            <div className="comments-container">
                {comments.map((comment, index) => (  /* Con esto hago un .map para traer a los comentarios padres que indique en rootComments */
                    <CommentItem
                        key={index + 1}
                        comment={comment}
                        replies={getReplies(comment.id)} /* Con esto recolecto todos los comment replies cuando se renderiza el comment */
                        activeComment={activeComment}
                        setActiveComment={setActiveComment}
                        addComment={addComment}
                    /> /* Con esto inserto Comment e indico a comment un rootComment porque tengo que acceder a todo el rootComment por completo. Al colocar comment={rootComment}, le estoy pasando la info de rootComment al elemento hijo Comment */
                ))}
            </div>
        </div>
    )
}

export default CommentList;