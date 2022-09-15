import React from 'react';
import s from './Post.module.css';


const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZHRzP0QJoXUth7GgmlDljIchrMAqR0eUTQA&usqp=CAU' />
            {props.massage}
            <div>
                <span>Like {props.like}</span>
            </div>

        </div>
    );
};

export default Post;