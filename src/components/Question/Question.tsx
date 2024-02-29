import { QuestionProps } from './Question.props';
import styles from './Questions.module.scss';
import { useState } from 'react';
import cn from 'classnames';
import Image from 'next/image';

export const Question = ({ question, answer }:QuestionProps) => {
    const [open, setOpen] = useState<boolean>(false);
    return (
        <li
            className={cn(styles.item, {
              [styles.item__active]: open,
            })}
            onClick={() => setOpen(!open)}
          >
            <div className={styles.item__question}>
              <span>{question}</span>
              <div className={styles.imgWrapper}>
                <Image src={'/icons/PlusIcon.svg'} width={26} height={26} alt='Открыть' />
              </div>
            </div>
            <div className={styles.item__reply}>
              <span>{answer}</span>
            </div>
          </li>
    )
}