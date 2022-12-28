import React, { useContext } from 'react';
import { Modal, Button, ButtonGroup } from 'react-bootstrap';
import CommentContext from '../../../../context/comment/CommentContext';

const CommentModDel = ({ showModDel, setShowModDel }) => {

    const { comment, deleteComment } = useContext(CommentContext);

    const handleConfirmDelete = e => {
        e.preventDefault();
        deleteComment(comment._id);
        setShowModDel(false);
    }

    return (
        <>
            <Modal show={showModDel} centered>
                <Modal.Header>
                    <Modal.Title>Delete Comment</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Are you sure to delete this Comment?</p>
                </Modal.Body>

                <Modal.Footer>
                    <ButtonGroup>
                        <Button
                            variant="danger"
                            onClick={handleConfirmDelete}
                        >Delete</Button>
                        <Button
                            variant="secondary"
                            onClick={() => setShowModDel(false)}
                        >Close</Button>
                    </ButtonGroup>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default CommentModDel;