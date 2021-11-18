import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import {toast} from 'react-toastify';
import {useFormik} from 'formik';
import { Checkbox, Button, Input } from '../../components/index';
import {faEnvelope, faLock} from '@fortawesome/free-solid-svg-icons';

import * as Yup from 'yup';

import * as AuthService from '../../services/user.services';



const Login = () => {

    const [isAuthLoading, setAuthLoading] = useState(false);
    const [isGoogleAuthLoading, setGoogleAuthLoading] = useState(false);
    const [isFacebookAuthLoading, setFacebookAuthLoading] = useState(false);

   



    const login = async (email, password) => {
        try {
            setAuthLoading(true);
            const data_user = AuthService.loginByAuth(email, password)
            //const data_user = await AuthService.loginByAuth(email, password);
            toast.success('¡Inicio de sesión exitoso!');
            setAuthLoading(false);
            
         //console.log(token_data_res.payload.user.data);
            
        } catch (error) {
            setAuthLoading(false);
            toast.error(
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                    'Faileded'
            );
        }
    };

    const loginByGoogle = async () => {
        try {
            setGoogleAuthLoading(true);
           
            toast.success('Login is succeeded!');
            setGoogleAuthLoading(false);
           
        } catch (error) {
            setGoogleAuthLoading(false);
            toast.error(
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                    'Failed'
            );
        }
    };

    const loginByFacebook = async () => {
        try {
            setFacebookAuthLoading(true);
            
            toast.success('Login is succeeded!');
            setFacebookAuthLoading(false);
          
        } catch (error) {
            setFacebookAuthLoading(false);
            toast.error(
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                    'Failed'
            );
        }
    };

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .required('Campo requerido'),
            password: Yup.string()
                .min(5, 'Debe tener 5 caracteres o más')
                .max(30, 'Debe tener 30 caracteres o menos')
                .required('Campo requerido')
        }),
        onSubmit: (values) => {
            //alert(JSON.stringify(values, null, 2));
            login(values.email, values.password);
        }
    });

    document.getElementById('root').classList = 'hold-transition login-page';

    return (
        <div className="login-box">
            <div className="card card-outline card-primary">
                <div className="card-header text-center">
                    <Link to="/" className="h1"><b>Admin</b>LTE</Link>
                </div>
                <div className="card-body">
                    <p className="login-box-msg">Regístrese para iniciar su sesión</p>
                    <form onSubmit={formik.handleSubmit} >
                        <div className="input-group mb-3">
                            <Input
                                icon={faEnvelope}
                                placeholder="Email"
                                type="text"
                                formik={formik}
                                formikFieldProps={formik.getFieldProps('email')}
                            />
                        </div>
                    <div className="input-group mb-3">
                        <Input
                            icon={faLock}
                            placeholder="Password"
                            type="password"
                            formik={formik}
                            formikFieldProps={formik.getFieldProps(
                                'password'
                            )}
                        />
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <Checkbox
                                checked={false}
                                label={'Recuérdame'}
                            />
                        </div>
                        <div className="col-6 text-right">
                            <Button
                                
                                type="submit"
                                isLoading={isAuthLoading}
                                disabled={
                                    isFacebookAuthLoading ||
                                    isGoogleAuthLoading
                                }
                            >
                                {'Iniciar sesión'}
                            </Button>
                        </div>
                    </div>
                    </form>
                    <div className="social-auth-links text-center mt-2 mb-3">
                    <Button
                            className="btn-block"
                            
                            icon="facebook"
                            onClick={loginByFacebook}
                            isLoading={isFacebookAuthLoading}
                            disabled={isAuthLoading || isGoogleAuthLoading}
                        >
                            {'Iniciar sesión usando Facebook'}
                        </Button>
                        <Button
                            className="btn-block"
                            
                            icon="google"
                            theme="danger"
                            onClick={loginByGoogle}
                            isLoading={isGoogleAuthLoading}
                            disabled={isAuthLoading || isFacebookAuthLoading}
                        >
                            {'Iniciar sesión usando Google+'}
                        </Button>
                    </div>
                    <p className="mb-1">
                        <a href="forgot-password.html">Olvidé mi contraseña</a>
                    </p>
                    <p className="mb-0">
                        <a href="register.html" className="text-center">Registrar una nueva membresía</a>
                    </p>
                </div>
            </div>
        </div>

    )
}

export default Login
