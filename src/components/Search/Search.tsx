import styles from './Search.module.scss';
import { SearchProps } from './Search.props';
import Image from 'next/image';

export const Search = ({ search, setSearch }: SearchProps) => {
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
        </div>
    )
}