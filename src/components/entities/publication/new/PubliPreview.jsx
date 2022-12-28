// import '../../../../css/entities/publication/publipreview.css'
import React, { useContext } from 'react';
import PublicationContext from '../../../../context/publication/PublicationContext';

const PubliPreview = () => {

    const { publiPreview } = useContext(PublicationContext);
    const { title, description, ubication, category } = publiPreview;

    return (
        <>
            <div className='preview'>
                <h2>Previsualización</h2>
                <div className='mt-4'>
                    <h5>{title ? title : 'Title'}</h5>
                    <div className='mb-2'>
                        {description ? description :
                            'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
                            + 'Eveniet praesentium nam quae inventore alias quam atque vero.'
                            + 'Rerum repellendus, officiis dicta, odit labore sit modi molestiae'
                            + 'quisquam maxime perspiciatis blanditiis.Lorem ipsum dolor sit amet'
                            + 'consectetur adipisicing elit. Eveniet praesentium nam quae inventore'
                            + 'alias quam atque vero. Rerum repellendus, officiis dicta, odit labore'
                            + 'sit modi molestiae quisquam maxime perspiciatis blanditiis.'
                        }
                    </div>
                    <div className='mb-2'>
                        Ubicacion: {ubication ? ubication : 'Eveniet praesentium nam quae inventore alias quam atque vero'}
                    </div>
                    <div className='mb-2'>                    
                        Situación: {category ? category : 'Perdido'}
                    </div>
                    <div className='mb-2'>
                        Imágenes: a,b,c
                    </div>
                </div>
            </div>
        </>
    );
};

export default PubliPreview;