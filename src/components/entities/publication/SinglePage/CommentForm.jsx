import React from 'react'
import { useState } from 'react'

const CommentForm = ({
    handleSubmit, 
    submitLabel, 
    hasCancelButton = false, /* Lo colocamos en false porque se convierte en true cuando lo estamos editando */
    initialText = '',  /* Porque queremos que este vacio (salvo cuando estamos editando) */
    handleCancel

}) => {
    const [text, setText] = useState(initialText)
    const isTextareaDisabled = text.length === 0; /* Si nuestro text es igual a cero, isTextareaDisabled sera TRUE */
    const onSubmit = e => {
        e.preventDefault()
        handleSubmit(text);
        setText('') /* Para volver a colocar vacio el textarea una vez que le doy a boton de enviar*/
    }

  return (
    <form onSubmit={onSubmit}>
        <textarea 
            className='comment-form-textarea' 
            value={text} 
            onChange={(e) => setText(e.target.value)}
        />
        <button className='comment-form-button' disabled={isTextareaDisabled}>
            {submitLabel}
        </button> {/* Al agregar isTextareaDisabled, me deshabilita el boton si es que no hay ningun texto */}
        {hasCancelButton && ( /* Si hasCancelButton es TRUE, entonces renderizo lo siguiente */
            <button 
                type='button' 
                className='comment-form-button comment-form-cancel-button' 
                onClick={handleCancel}
            >
                Cancelar
            </button>
        )}
    </form>
  )
}

export default CommentForm;