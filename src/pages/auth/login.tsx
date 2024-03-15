import { HTag, Input, LinkButton } from '@/elements';
import styles from '../../styles/Login.module.scss';
import { useState } from 'react';
import Head from 'next/head';
import { checkUser } from '@/api';

const LoginPage = () => {
    const [name, setName] = useState<string>('test');
    const [password, setPassword] = useState<string>('test123');

    const login = async () => {
        try {
            const user = await checkUser(name, password);
            console.log(user);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <Head>
                <title>Логин | Пушишки</title>
            </Head>
            <div className={styles.loginPageWrapper}>
                <div className={styles.formWrapper}>
                    <HTag tag='h2' color='white'>Введите логин и пароль</HTag>
                    <Input type={'text'} value={name} onChange={setName} placeholder='Имя' />
                    <Input type={'text'} value={password} onChange={setPassword} placeholder='Пароль' />
                    <LinkButton element={'button'} onClick={login}>
                        Войти
                    </LinkButton>
                </div>
            </div>
        </>
    )
};

export default LoginPage;