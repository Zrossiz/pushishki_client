import cn from 'classnames';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './Questions.module.scss';
import { useState } from "react";

enum EState {
    Delivery,
    Assembly,
    Payment
}

export const Questions = () => {
    const [menu, setMenu] = useState<EState>(EState.Delivery)
    return (
        <>
            <div className={styles.paginationWrapper}>
                <ul>
                    <li className={cn({
                        [styles.active]: menu === EState.Delivery
                    })} onClick={() => setMenu(EState.Delivery)}>Доставка</li>
                    <li className={cn({
                        [styles.active]: menu === EState.Assembly
                    })} onClick={() => setMenu(EState.Assembly)}>Сборка</li>
                    <li className={cn({
                        [styles.active]: menu === EState.Payment
                    })} onClick={() => setMenu(EState.Payment)}>Оплата</li>
                </ul>
            </div>
            <div className={styles.questionsWrapper}>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
            </div>
        </>
    )
}