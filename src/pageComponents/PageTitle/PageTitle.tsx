import { Breadcrumbs } from '@/components';
import styles from './PageTitle.module.scss';
import { HTag } from '@/elements';
import { PageTitleProps } from './PageTitle.props';

export const PageTitle = ({ counter, title, breadcrumbs }: PageTitleProps) => {
    return (
        <section className={styles.pageTitle}>
            <div className={styles.breadcrumbsWrapper}>
                <Breadcrumbs breadcrumbs={breadcrumbs} />
            </div>
            <div className={styles.titleWrapper}>
                <HTag tag='h1'>{title}</HTag>
            </div>
            <div className={styles.counterWrapper}>
                ({counter})
            </div>
        </section>
    )
}