import { HTag, Input, LinkButton } from '@/elements';
import styles from '../../styles/client/Login.module.scss';
import { useState } from 'react';
import Head from 'next/head';
import { loginUser } from '@/api';
import { useRouter } from 'next/router';

const LoginPage = () => {
  const [name, setName] = useState<string>('test');
  const [password, setPassword] = useState<string>('test123');
  const [error, setError] = useState<string>('');
  const router = useRouter();

  const login = async () => {
    try {
      const user = await loginUser(name, password);
      if ('message' in user) {
        setError(user.message);
      } else {
        router.push('/authorization/admin');
      }
    } catch (err) {
      setError('Неверный логин или пароль. Пожалуйста, попробуйте снова');
      console.log(err);
    }
  };

  return (
    <>
      <Head>
        <title>Логин | Пушишки</title>
      </Head>
      <div className={styles.loginPageWrapper}>
        <div className={styles.formWrapper}>
          <HTag tag="h2" color="white">
            Введите логин и пароль
          </HTag>
          <Input type={'text'} value={name} onChange={setName} placeholder="Имя" />
          <Input type={'password'} value={password} onChange={setPassword} placeholder="Пароль" />
          {error && <div className={styles.errorWrapper}>{error}</div>}
          <LinkButton element={'button'} onClick={login}>
            Войти
          </LinkButton>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
