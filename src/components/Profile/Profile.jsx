import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div >
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgJJz2pZNuDNyxAEgULHunXqntmrsB9haguQ&usqp=CAU' className={s.img}></img>
            <div>
            <div className={s.wrapper}>
                ava+description
            <MyPosts />
            </div>
            </div>
        </div>
    );
};

export default Profile;