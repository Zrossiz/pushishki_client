import { QuestionPopupProps } from './QuestionPopup.props';
import styles from './QuestionPopup.module.scss';
import { HTag, Input, LinkButton } from '@/elements';
import { AnimatePresence, motion } from 'framer-motion';
import { title } from 'process';
import Image from 'next/image';
import { useState } from 'react';
import getConfig from 'next/config';
import axios from 'axios';
import { useRouter } from 'next/router';

const { publicRuntimeConfig } = getConfig();
const { BOT_URL, CLIENT_URL } = publicRuntimeConfig;

export const QuestionPopup = ({ setForm }: QuestionPopupProps) => {
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [question, setQuestion] = useState<string>('');

  const router = useRouter();

  const link = router.asPath;

  const sendFormToTelegram = async () => {
    await axios.post(`${BOT_URL}/bot/question`, {
      name,
      phone,
      question,
      link: `${CLIENT_URL}${link}`,
    });
    setForm(false);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.background} onClick={() => setForm(false)}></div>
      <AnimatePresence>
        <motion.div
          className={styles.formWrapper}
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.close} onClick={() => setForm(false)}>
            <Image src="/icons/Close.svg" fill alt="Закрыть" />
          </div>
          <div>
            <HTag tag="h2">Задайте вопрос</HTag>
          </div>
          <div className={styles.inputsWrapper}>
            <div className={styles.nameRatingWrapper}>
              <Input placeholder="Ваше имя и фамилия" value={name} onChange={setName} type="text" />
            </div>
            <div className={styles.titleWrapper}>
              <Input type="phone" onChange={setPhone} placeholder="Телефон" />
            </div>
            <div className={styles.descWrapper}>
              <textarea
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                rows={4}
                placeholder="Комментарий"
              ></textarea>
            </div>
          </div>
          <div className={styles.sendWrapper}>
            <LinkButton
              disabled={name && title && question ? false : true}
              element="button"
              onClick={() => sendFormToTelegram()}
            >
              Отправить
            </LinkButton>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
