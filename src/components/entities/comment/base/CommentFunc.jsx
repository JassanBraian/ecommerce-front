import React, { useState, useContext } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import CommentModDel from './CommentModDel';
import CommentModUpd from './CommentModUpd';
import CommentModView from './CommentModView';
import CommentContext from '../../../../context/comment/CommentContext';

const CommentFunc = ({ commentId }) => {

    const [showModView, setShowModView] = useState(false);
    const [showModUpd, setShowModUpd] = useState(false);
    const [showModDel, setShowModDel] = useState(false);

    const { getComment } = useContext(CommentContext);

    return (
        <>
            <ButtonGroup>
                <Button
                    variant="info"
                    onClick={() => {
                        getComment(commentId);
                        setShowModView(true);
                    }}
                >Detail</Button>
                <Button
                    variant="warning"
                    onClick={() => {
                        getComment(commentId);
                        setShowModUpd(true)
                    }}
                >Edit</Button>
                <Button
                    variant="danger"
                    onClick={() => {
                        getComment(commentId);
                        setShowModDel(true);
                    }}
                >Delete</Button>
            </ButtonGroup>

            <CommentModView
                showModView={showModView}
                setShowModView={setShowModView}
            />

            <CommentModUpd
                showModUpd={showModUpd}
                setShowModUpd={setShowModUpd}
            />

            <CommentModDel
                showModDel={showModDel}
                setShowModDel={setShowModDel}
            />
        </>
    );
};

export default CommentFunc;