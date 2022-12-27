import React, { useState, useContext, useEffect } from 'react';
import { ButtonGroup, Button, Form } from 'react-bootstrap';
import PublicationContext from '../../../../context/publication/PublicationContext';

const PubliFormCreate = () => {

    const { publiPreview, setPublicationPreview, createPublication } = useContext(PublicationContext);

    const { title, description, ubication, category } = publiPreview;

    const initialState = {
        title: '',
        description: '',
        ubication: '',
        category: ''
    }

    const [error, setError] = useState([]);

    useEffect(() => {
        setPublicationPreview(initialState);
    }, [])


    const handleOnChange = e => {
        setPublicationPreview({
            ...publiPreview,
            [e.target.name]: e.target.value
        })
    }

    const handleOnSubmit = e => {
        e.preventDefault();

        createPublication(publiPreview);    
    }

    return (
        <>
            <Form className='formCreate'>
                <h2>Nueva publicación</h2>
                <Form.Group className="mb-3 mt-4">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        name="title"
                        type="text"
                        placeholder="Your title"
                        value={title}
                        onChange={handleOnChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        name="description"
                        type="textarea"
                        placeholder="What's your publication about..."
                        value={description}
                        onChange={handleOnChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Ubication</Form.Label>
                    <Form.Control
                        name="ubication"
                        type="text"
                        placeholder="Where are you publishing from?"
                        value={ubication}
                        onChange={handleOnChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Category</Form.Label>
                    <Form.Select
                        name="category"
                        value={category}
                        onChange={handleOnChange}
                    >
                        <option value={'missing'}>Missing</option>
                        <option value={'found'}>Found</option>
                        <option value={'up for adoption'}>Up for adoption</option>
                    </Form.Select>
                </Form.Group>
                <div>
                    {
                        error && (<p className='errorMsg'>{error}</p>)
                    }
                </div>
                <ButtonGroup>
                    <Button
                        variant='success'
                        className='btnSave'
                        onClick={handleOnSubmit}
                    >Save</Button>
                </ButtonGroup>
            </Form>
        </>
    );
};

export default PubliFormCreate;