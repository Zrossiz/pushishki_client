import Image from "next/image"
import Link from "next/link"
import styles from './WhatsApp.module.scss'

export const WhatsApp = () => {
    return (
        <div className={styles.wrapper}>
            <Link href="#">
                <Image src="/icons/WhatsApp.svg" height={48} width={48} alt="WhatsApp" />
            </Link>
        </div>
    )
}