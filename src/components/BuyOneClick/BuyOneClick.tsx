import { HTag } from '@/elements';
import styles from './BuyOneClick.module.scss';
import { BuyOneClickProps } from './BuyOneClick.props';
import Image from 'next/image';


export const BuyOneClick = ({ setOpen }: BuyOneClickProps) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.formWrapper}>
                <div className={styles.close} onClick={() => setOpen(false)}>
                    <Image src="/icons/Close.svg" width={30} height={30} alt="Закрыть" />
                </div>
                <div>
                    <HTag tag='h2'>Купить в один клик</HTag>
                </div>
            </div>
        </div>
    )
}