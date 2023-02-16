//import styles from './AuthLayout.module.css'
import { /*Link,*/ useParams } from 'react-router-dom';
import { Switch, Case, Default } from 'react-if';
import React, { useState } from 'react';

import Login from '../../pages/Login/Login';
import RecoverPassword from '../../pages/RecoverPassword/RecoverPassword';
import Signup from '../../pages/Signup/Signup';

function AuthLayout() {

    const {pageId} = useParams();

    return (
        <div>
            <Switch>
                <Case condition={pageId.toLowerCase() === 'login'}>
                    <Login />
                </Case>
                <Case condition={pageId.toLowerCase() === 'recoverpassword'}>
                    <RecoverPassword />
                </Case>
                <Case condition={pageId.toLowerCase() === 'signup'}>
                    <Signup />
                </Case>
                <Default>
                    <h1>PAGE NOT FOUND</h1>
                </Default>
            </Switch>
        </div>
    );
}

export default AuthLayout;