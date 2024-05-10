import { AdminLayout } from '@/layout/admin/AdminLayout';
import styles from '../../../styles/admin/Category.module.scss';
import { LinkButton } from '@/elements';
import { useEffect, useState } from 'react';
import { CountryForm, CountryListItem } from '@/components/admin';
import { ICountry, ICountryWithLength } from '@/types';
import { getCountries } from '@/api';

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
          {countries?.map((item: ICountry) => {
            return <CountryListItem country={item} key={item.id} />;
          })}
        </div>
      </>
    </AdminLayout>
  );
};

export default CountryPage;
