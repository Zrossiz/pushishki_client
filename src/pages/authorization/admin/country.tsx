import { AdminLayout } from '@/layout/admin/AdminLayout';
import styles from '../../../styles/admin/Default.module.scss';
import { HTag, LinkButton } from '@/elements';
import { useEffect, useState } from 'react';
import { CountryForm, CountryListItem } from '@/components/admin';
import { ICountry, ICountryWithLength } from '@/types';
import { checkUser, getCountries } from '@/api';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';

const CountryPage = () => {
  const [create, setCreate] = useState<boolean>(false);
  const [countries, setCountries] = useState<ICountry[]>();

  useEffect(() => {
    (async () => {
      const countiresApi: ICountryWithLength | { message: string } = await getCountries();

      if ('data' in countiresApi) {
        setCountries(countiresApi.data);
      }
    })();
  }, []);

  return (
    <AdminLayout>
      <>
        {create && <CountryForm isEdit={false} setOpen={setCreate} />}
        <div className={styles.addButtonWrapper}>
          <LinkButton element="button" onClick={() => setCreate(true)}>
            Добавить
          </LinkButton>
        </div>
        <div className={styles.listWrapper}>
          {countries && countries?.length > 0 ? (
            countries?.map((item: ICountry) => {
              return <CountryListItem country={item} key={item.id} />;
            })
          ) : (
            <HTag tag="h3">Ничего не найдено</HTag>
          )}
        </div>
      </>
    </AdminLayout>
  );
};

export default CountryPage;

export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
  try {
    const cookies = ctx.req.headers.cookie;
    const isLogin = await checkUser(cookies);

    if (isLogin) {
      return {
        props: {
          message: 'login',
        },
      };
    } else {
      return {
        redirect: {
          destination: '/authorization/login',
          permanent: false,
        },
      };
    }
  } catch (err) {
    return {
      redirect: {
        destination: '/authorization/login',
        permanent: false,
      },
    };
  }
};
