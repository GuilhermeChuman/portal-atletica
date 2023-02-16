import styles from './Login.module.css'
import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import logo from '../../assets/RabadonLogo2.png'

function Login() {

    //TextField Customizado
    const CssTextField = styled(TextField)({
        '& label.Mui-focused': {
            color: 'white',
        },
        '& label': {
            color: 'white'
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'white',
            },
            '&:hover fieldset': {
                borderColor: 'white',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'white',
            },
        },
    });
    //---------------------------

    //Botão customizado
    const CustomButton = styled(Button)({
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: 16,
        padding: '6px 12px',
        border: '1px solid',
        lineHeight: 1.5,
        color: '#7153b9',
        backgroundColor: 'white',
        borderColor: 'white',
        fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        ].join(','),
        '&:hover': {
        backgroundColor: 'white',
        borderColor: 'white',
        boxShadow: 'none',
        },
        '&:active': {
        boxShadow: 'none',
        backgroundColor: 'white',
        borderColor: 'white',
        }
    });

    const CustomButtonOutline = styled(Button)({
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: 16,
        padding: '6px 12px',
        border: '1px solid',
        lineHeight: 1.5,
        color: 'white',
        backgroundColor: '#e98426',
        borderColor: 'white',
        fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        ].join(','),
        '&:hover': {
        backgroundColor: '#e98426',
        borderColor: 'white',
        boxShadow: 'none',
        },
        '&:active': {
        boxShadow: 'none',
        backgroundColor: '#e98426',
        borderColor: 'white',
        }
    });
    //---------------------------

    const Enter = () => {
        alert("Enter");
    }

    const Cadastrar = () => {
        alert("Cadastrar");
    }

    const RecoverPassword = () => {
        alert("RecoverPassword");
    }
    
    return (
        <div className={styles.BodyLogin}>
            <Card className={styles.CardLogin} sx={{ minWidth: 275 }}>
                <CardContent>
                    <Box    
                    className={styles.FormLogin}
                    component="form"
                    sx={{'& .MuiTextField-root': { m: 1, width: '25ch' },}}
                    noValidate
                    autoComplete="off">
                        <div className={[styles.LoginLogo, styles.LineLogin].join(" ")}>
                            <img src={logo} alt=''></img>
                        </div>
                        <div className={[styles.LineLogin]}>
                            <CssTextField
                            className={[styles.TextLogin]}
                            required
                            color='info'
                            id="outlined-required"
                            label="Login"/>
                        </div>
                        <div className={[styles.LineLogin]}>
                            <CssTextField
                            className={[styles.TextLogin]}
                            required
                            color='info'
                            id="outlined-required"
                            label="Senha"/>
                        </div>

                        <div className={[styles.GroupButtonLogin, styles.LineLogin].join(" ")}>
                            <CustomButton onClick={Enter}>Login</CustomButton>
                            <CustomButtonOutline onClick={Cadastrar}>Cadastrar</CustomButtonOutline>
                        </div>

                        <div className={styles.LineLogin}>
                            <span className={styles.RecoverLink} onClick={RecoverPassword}>Esqueci minha senha</span>
                        </div>
                    </Box>
                </CardContent>
            </Card>
        </div>
    );
}

export default Login;