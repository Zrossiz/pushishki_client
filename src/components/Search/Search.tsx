import getConfig from 'next/config';
import styles from './Search.module.scss';
import { SearchProps } from './Search.props';
import Image from 'next/image';
import { useState } from 'react';

const { publicRuntimeConfig } = getConfig();
const { FILESERVER_URL } = publicRuntimeConfig;

export const Search = ({ search, setSearch, products, stateSearch }: SearchProps) => {
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
            {
                stateSearch && 
                <div className={styles.popupWrapper}>
                    {
                        products?.length >= 1 ?
                        products?.map((item, index) => {
                            return (
                                <div key={item.id} className={styles.itemWrapper}>
                                    <div className={styles.photo}>
                                        <Image width={60} height={40} alt={item.name} src={`${FILESERVER_URL}/upload/${item.image}`} />
                                    </div>
                                    <div className={styles.name}>
                                        {item.name}
                                    </div>
                                </div>
                            )
                        }) :
                        <div>Загрузка...</div>
                    }
                </div>
            }
        </div>
    )
}