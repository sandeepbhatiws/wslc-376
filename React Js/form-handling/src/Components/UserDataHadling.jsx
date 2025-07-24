import React, { useState } from 'react'
import states from '../data/states';
import UserForm from './UserForm';
import UserInfo from './UserInfo';

export default function UserDataHandling() {

    var getData = localStorage.getItem('userInfo');
    var getData = JSON.parse(getData);

    var [userData, setUserData] = useState(getData ? getData : []);

    return (
        <>
            <UserForm userData={userData} setUserData={setUserData}/>
            <UserInfo userData={userData} setUserData={setUserData}/>
        </>
    )
}