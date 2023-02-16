import React/*, { useState }*/ from 'react';
import { /*Link,*/ useParams } from 'react-router-dom';
import { Switch, Case, Default } from 'react-if';
import styles from './SessionLayout.module.css'

//components
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

//pages
import Home from '../../pages/Home/Home';

function SessionLayout() {

    const {pageId} = useParams();

    return (
        <div>
            <Navbar/>
            <div className={styles.BodySession}>
                <Switch>
                    <Case condition={pageId.toLowerCase() === 'home'}>
                        <Home />
                    </Case>
                    <Default>
                        <h1>PAGE NOT FOUND</h1>
                    </Default>
                </Switch>
                <Footer/>
            </div>
        </div>
    );
}

export default SessionLayout;