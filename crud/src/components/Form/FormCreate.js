import React, { useContext } from 'react'
import Button from '../Button/Button'
import Input from '../Input/Input'
import PostContext from '../../contexts/PostContext'
import { useNavigate } from 'react-router-dom'
import IconDelete from '../IconDelete/IconDelete'



function FormCreate({ edit, setEditView, id }) {
    const { form, setForm, fetchPost } = useContext(PostContext);
    const navigate = useNavigate();


    const handleChange = (name, value) => {
        setForm((prevForm) => ({ ...prevForm, [name]: value }));
    }



    const handleSubmit = (evt) => {
        evt.preventDefault();
        fetchPost(form.content)
        setForm((prevForm) => ({ content: ''}));
        navigate('/');
    }

    const onMain = () => {
        navigate('/');
        setForm((prevForm) => ({ content: '' }));
    }

    const onCard = () => {
        setEditView((prev) => (false));
    }



    return (
        <>
            <article className="crud__createForm crud__post">
                <IconDelete onBack={edit ? onCard : onMain} />
                <form onSubmit={handleSubmit} className="form-group crud__form-control">
                    <Input value={form.content} handleChange={handleChange} />
                    <footer className="post__footer">
                        <Button> {edit ? 'Сохранить' : 'Опубликовать'} </Button>
                    </footer>
                </form>
            </article>
        </>

    )
}

FormCreate.propTypes = {}

export default FormCreate
