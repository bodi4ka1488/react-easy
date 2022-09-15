import s from '../MyPosts/MyPosts.module.css';

import React from 'react';
import Post from './Post/Post';

const MyPosts = () => {

    return (
        <div >
            My posts
            <div>
                New Post
            </div>
            <div className={s.posts}>
                <Post like="15" massage=" Hi how are you ?" />
                <Post like="5" massage=" It is my first post" />
            </div>

        </div>
    );
};

export default MyPosts;