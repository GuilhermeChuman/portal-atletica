import styles from './Detalhes.module.css'
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import * as AnimeService from '../../services/AnimeService';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function Detalhes() {

    const {id} = useParams();

    const [loading, setLoading  ] = useState(false);
    const [animeData, setData ] = useState(null);

    useEffect(() => {
        getAnimeDetails();
    });

    async function switchLoading() {
        setLoading((prevLoading) => !prevLoading);
    }

    async function getAnimeDetails() {

        await switchLoading();

        let resp = await AnimeService.getAnimeDetails(id).then( (response =>{
            return JSON.parse(response);
        }));
    
        if(resp != null){
            setData(resp.data);
        }
            
        else
            setData(resp);
    
        await switchLoading();
    }

    return (
        
        <div className={styles.Detalhes}>

            {(loading) &&
                <Box className={styles.Loading} sx={{ display: 'flex' }}>
                    < CircularProgress size={'120px'} />
                </Box>
            }

            {(animeData != null) &&
            <div>
                {id}
            </div>}
            <Link to='/'>
                <Button variant="contained" size="medium"> Voltar </Button>
            </Link>
        </div>
    );
}

export default Detalhes;