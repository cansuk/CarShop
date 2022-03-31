import React from 'react'
import ErrorPage from './ErrorPage';
import LoadingPage from './LoadingPage';
import UserTemplate from './UserTemplate';


const UserPage = () => {

    var error = "asdf";
    var data = [];

    if (error) {
        return <ErrorPage />;
    }

    if (!data) {
        return <LoadingPage />;
    }

    return <UserTemplate userList={data} />;
}

export default UserPage