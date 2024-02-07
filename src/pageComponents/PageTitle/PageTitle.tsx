import { Breadcrumbs } from '@/components';
import styles from './PageTitle.module.scss';
import { HTag } from '@/elements';
import { PageTitleProps } from './PageTitle.props';

export const PageTitle = ({ counter }: PageTitleProps) => {
    return (
        <section className={styles.pageTitle}>
            <div className={styles.breadcrumbsWrapper}>
                <Breadcrumbs breadcrumbs={[
                    {
                        name: 'Главная',
                        path: '/'
                    }
                ]} />
            </div>
            <div className={styles.titleWrapper}>
                <HTag tag='h1'>Категории</HTag>
            </div>
            <div className={styles.counterWrapper}>
                ({counter})
            </div>
        </section>
    )
}