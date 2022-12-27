import React from 'react';
import PubliFormCreate from '../components/entities/publication/new/PubliFormCreate';
import PubliPreview from '../components/entities/publication/new/PubliPreview';
import '../css/entities/publication/new/publicationew.css'

const PublicationNew = () => {
    return (
        <>
            <div className='app'>
                <div className="row">
                    <div className="col-6">
                        <PubliFormCreate />
                    </div>
                    <div className="col-6">
                        <PubliPreview />
                    </div>
                </div>
            </div>

        </>
    );
};

export default PublicationNew;