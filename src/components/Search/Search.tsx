import styles from './Search.module.scss';
import { SearchProps } from './Search.props';
import Image from 'next/image';

export const Search = ({ search, setSearch, products }: SearchProps) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.inputWrapper}>
                <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Название товара' />
                <div className={styles.btnWrapper}>
                    <button>
                        <Image width={20} height={20} src={'/icons/Loop.svg'} alt='Отправить' />
                    </button>
                </div>
            </div>
            <div className={styles.popupWrapper}>
                {products.map((item, index) => {
                    return (
                        <div key={item.id} className={styles.itemWrapper}>
                            <div className={styles.photo}>
                                <Image width={60} height={40} alt={item.name} />
                            </div>
                            <div className={styles.name}>
                                {item.name}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}