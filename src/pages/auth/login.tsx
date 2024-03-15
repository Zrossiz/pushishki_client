import { HTag, Input, LinkButton } from '@/elements';
import styles from '../../styles/Login.module.scss';
import { useState } from 'react';

const LoginPage = () => {
    const [name, setName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    return (
        <div className={styles.loginPageWrapper}>
            <div className={styles.formWrapper}>
                <HTag tag='h2'>Введите логин и пароль</HTag>
                <Input type={'text'} value={name} onChange={setName} placeholder='Имя' />
                <Input type={'text'} value={password} onChange={setPassword} placeholder='Пароль' />
                <LinkButton element={'button'}>
                    Войти
                </LinkButton>
            </div>
        </div>
    )
};

export default LoginPage;