import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import PostContext from '../../contexts/PostContext'
import useJsonFetch from '../../hooks/useJsonFetch';
import Button from '../Button/Button';
import Post from '../Post/Post'

function Posts() {
  const { data } = useContext(PostContext);


  const navigate = useNavigate();
  const toCreateForm = () => {
    navigate('posts/new');
  }

  console.log(data);

  return (
    <>
      <div className="crud__control">
        <Button onClick={toCreateForm}>Создать пост</Button>
      </div>
      <div className="crud__posts">
        {data && data.length ? data.map((post) => {
          return <Post key={post.id} item={post} />
        }) : 'Нет постов'}
      </div>
    </>
  )
}

export default Posts