import React, { useContext, useEffect, useState } from 'react'
import pic from '../../assets/img/avatardef.jpg'
import { useNavigate, useParams } from 'react-router-dom'
import PostContext from '../../contexts/PostContext'
import Button from '../Button/Button';
import FormCreate from '../Form/FormCreate';
import useJsonFetch from '../../hooks/useJsonFetch';

function Post({ item }) {
    const { data, setForm, fetchDelete } = useContext(PostContext);
    const [data_, refetch] = useJsonFetch()
    const [editView, setEditView] = useState(false);
    const [post, setPost] = useState(null);
    const [direct, setDirect] = useState(true);
    const { id } = useParams();
    const navigate = useNavigate();



    const onPost = () => {
        if (direct && item) {
            navigate(`posts/${item.id}`)
            setDirect((prev) => (false));
        }

    }

    useEffect(() => {
        if (id && data) {
            const finded = data.find((el) => el.id === parseInt(id));
            setPost((prev) => (finded));
        }
    }, [data, id])



    const handleDelete = () => {
        fetchDelete(id)
        navigate('/');
    }

    const handleEdit = () => {
        if (id) {
            // setEditView(true);
            // setForm((prev) => ({content: post.content }))
        }
    }


    return (
        <>
            {editView ? <FormCreate  setEditView={setEditView} edit={true}></FormCreate> :
                <>
                    <article className="crud__post" onClick={() => onPost()}>
                        <header className="post__header">
                            <div className="post__header-avatar">
                                <img className="avatar" src={pic} alt="#" />
                            </div>
                            <div className="post__header-info">
                                <span className="post__header-bio post__text">Ilya Yarn</span>
                            </div>
                        </header>
                        <div className="post__content">
                            {item ? item.content : post ? post.content : null}
                            
                        </div>
                    </article>
                    {id ?
                        <footer className="post__footer">
                            <Button onClick={handleDelete} classes={'button button_primary button_primary-delete'}>Удалить</Button>
                            <Button onClick={handleEdit} classes={"button button_primary button_primary-edit"}>Редактировать</Button>
                        </footer> :
                        null}
                </>
            }
        </>
    )
}

Post.propTypes = {}

export default Post
