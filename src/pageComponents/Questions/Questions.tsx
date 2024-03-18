import cn from 'classnames';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './Questions.module.scss';
import { useState } from 'react';
import { HTag } from '@/elements';
import { motion, AnimatePresence } from 'framer-motion';
import { themes } from './Data';
import { Question, QuestionPopup } from '@/components/client';

export const Questions = () => {
  const [menu, setMenu] = useState<number>(0);
  const [openedQuestion, setOpenedQuestion] = useState<number>(10);
  const [formQuestion, setFormQuestion] = useState<boolean>(false);

  const changeTheme = (index: number) => {
    setOpenedQuestion(10);
    setMenu(index);
  };

  return (
    <>
      <section className={styles.question}>
        <AnimatePresence>
          {formQuestion && <QuestionPopup setForm={setFormQuestion} />}
        </AnimatePresence>
        <div className={styles.titleWrapper}>
          <HTag tag="h2">Вопросы и ответы</HTag>
        </div>
        <div className={styles.questionsElemsWrapper}>
          <div className={styles.paginationWrapper}>
            <ul>
              {themes.map((item, index: number) => {
                return (
                  <li
                    className={cn({
                      [styles.green]: menu === index
                    })}
                    onClick={() => changeTheme(index)}
                    key={index}
                  >
                    {item.title}
                    {index === menu ? (
                      <motion.div className={styles.active} layoutId="underline" />
                    ) : null}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={styles.questionsWrapper}>
            <div className={styles.questions}>
              <ul>
                {themes[menu].questions.map((item, index) => {
                  return (
                    <Question key={Math.random()} question={item.question} answer={item.answer} />
                  );
                })}
              </ul>
            </div>
            <div className={styles.popularQuestionWrapper}>
              <div className={styles.popularQuestion}>
                <div className={styles.questionWrapper}>
                  <HTag tag="h3">{themes[menu].popular?.title}</HTag>
                </div>
                <div className={styles.answerWrapper}>
                  <span>{themes[menu].popular?.answer}</span>
                </div>
              </div>
              <div className={styles.contactsWrapper}>
                <div className={styles.buttonWrapper} onClick={() => setFormQuestion(true)}>
                  <button>Задать вопрос</button>
                </div>
                <a href="#" className={styles.link}>
                  <Image
                    src={'/icons/WhatsApp.svg'}
                    width={40}
                    height={40}
                    alt="Написать в WhatsApp"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
