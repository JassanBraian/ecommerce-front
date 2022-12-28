import { useContext, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import CommentFunc from './CommentFunc';
import CommentContext from '../../../../context/comment/CommentContext';
import '../../../../css/entities/comment/comment-list.css'

const CommentList = () => {
    const { comments, getComments } = useContext(CommentContext);

    useEffect(() => {
        getComments();
    }, [])

    return (
        <>
            <div className='app'>
                <Table striped bordered hover className='table'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Descripcion</th>
                            <th>Privado</th>
                            <th>Publication</th>
                            <th>User</th>
                            <th className='text-center'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            comments.map((comment, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{comment.description}</td>
                                    <td>{comment.isprivate ? 'Yes' : 'No'}</td>
                                    <td>{comment.publication.title}</td>
                                    <td>{comment.usersend.name}</td>
                                    <td className='text-center'>
                                        {<CommentFunc commentId={comment._id} />}
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </div>
        </>
    );
};

export default CommentList;