import { getAllSubCategories } from "@/api";
import { Layout } from "@/layout/client/Layout";
import { PageTitle } from "@/pageComponents";
import { IElektromobiliPage } from "@/types";
import styles from '../../../styles/client/SubCategory.module.scss';
import Link from "next/link";

const ElektromobiliPage = ({ subCategories }: IElektromobiliPage) => {
  console.log(subCategories);
  return (
    <Layout>
      <>
        <PageTitle 
          title="Электромобили" 
          breadcrumbs={[
            {
              name: 'Главная',
              path: '/',
            },
            {
              name: `Категории`,
              path: `/categories`,
            },
          ]} 
        />
        <div className={styles.main}>
          {Array.isArray(subCategories) && subCategories?.length > 0 ? 
            subCategories.map((subCategory) => {
              return (
                <Link href={`/categories/elektromobili/${subCategory.slug}`} className={styles.itemWrapper}>
                  {subCategory.name}
                </Link>
              )
            }
          ) : (
            <div>ничего не найдено</div>
          )}
        </div>
      </>
    </Layout>
  )
}

export default ElektromobiliPage;

export const getServerSideProps = async (context: any) => {
  const subCategories = await getAllSubCategories('elektromobili');
  return {
    props: {
      subCategories
    }
  }
}