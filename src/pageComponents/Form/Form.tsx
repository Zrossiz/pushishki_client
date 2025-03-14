import { HTag } from '@/elements';
import styles from './Form.module.scss';
import Image from 'next/image';
import { useState } from 'react';
import cn from 'classnames';
import { motion } from 'framer-motion';
import { MainPageReviews } from '@/components/client';
import axios from 'axios';
import getConfig from 'next/config';
import { useRouter } from 'next/router';
import { sendQuestion } from '@/api';

const { publicRuntimeConfig } = getConfig();
const { API_URL, CLIENT_URL } = publicRuntimeConfig;

export const Form = () => {
  const [send, setSend] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [question, setQuestion] = useState<string>('');
  const [phone, setPhone] = useState<string>('');

  const router = useRouter();

  const link = router.asPath;

  const sendFormToTelegram = async () => {
    setSend(true);
    await sendQuestion(name, phone, question, `${CLIENT_URL}${link}`);
    setName('');
    setQuestion('');
    setPhone('');

    setTimeout(() => {
      setSend(false);
    }, 2000);
  };

  const getInputNumbersValue = (input: HTMLInputElement) => {
    return input.value.replace(/\D/g, '');
  };

  const onPhoneInput = (e: any) => {
    let input = e.target;
    let inputNumbersValue = getInputNumbersValue(input);
    let formattedInputValue = '';
    let selectionStart = input.selectionStart;
    setPhone(e.target.value);

    if (!inputNumbersValue) {
      return (input.value = '');
    }

    if (input.value.length != selectionStart) {
      if (e.data && /\D/g.test(e.data)) {
        input.value = inputNumbersValue;
      }
      return;
    }

    if (['7', '8', '9'].indexOf(inputNumbersValue[0]) > -1) {
      if (inputNumbersValue[0] == '9') {
        inputNumbersValue = '7' + inputNumbersValue;
      }

      let firstSymbols = inputNumbersValue[0] == '8' ? '8' : '+7';
      formattedInputValue = firstSymbols + ' ';

      if (inputNumbersValue.length > 1) {
        formattedInputValue += '(' + inputNumbersValue.substring(1, 4);
      }

      if (inputNumbersValue.length >= 5) {
        formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);
      }

      if (inputNumbersValue.length >= 8) {
        formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
      }

      if (inputNumbersValue.length >= 10) {
        formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
      }
    } else {
      formattedInputValue = '+' + inputNumbersValue.substring(0, 16);
    }
    input.value = formattedInputValue;
  };

  const onPhoneKeyDown = (e: any) => {
    let input = e.target;
    if (e.keyCode == 8 && getInputNumbersValue(input).length == 1) {
      input.value = '';
    }
  };

  const onPhonePaste = (e: any) => {
    let pasted = e.clipboardData || window.Clipboard;
    let input = e.target;
    let inputNumbersValue = getInputNumbersValue(input);

    if (pasted) {
      let pastedText = pasted.getData('Text');
      if (/\D/g.test(pastedText)) {
        input.value = inputNumbersValue;
      }
    }
  };

  return (
    <section className={styles.form}>
      <div className={styles.wrapper}>
        <div className={styles.titleWrapper}>
          <HTag tag="h2">Связаться с нами</HTag>
        </div>
        <form className={styles.formWrapper} method="POST">
          <input
            type="text"
            required
            placeholder="Имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            id="phoneInput"
            type="tel"
            required
            placeholder="Телефон"
            maxLength={18}
            onChange={(e) => onPhoneInput(e)}
            onKeyDown={(e) => onPhoneKeyDown(e)}
            onPaste={(e) => onPhonePaste(e)}
          />
          <input
            className={styles.big}
            type="text"
            placeholder="Ваш вопрос"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
        </form>
        <div className={styles.buttonWrapper}>
          <button
            disabled={name && phone && question ? false : true}
            onClick={() => sendFormToTelegram()}
          >
            Отправить
            <div
              className={cn(styles.iconWrapper, {
                [styles.activeIcon]: send,
              })}
            >
              <Image src={'/icons/Plane.svg'} height={26} width={26} alt="Отправить" />
            </div>
            {send && (
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className={styles.sended}
              >
                <Image src={'/icons/CheckIcon.svg'} height={40} width={40} alt="Отправлено" />
              </motion.div>
            )}
          </button>
        </div>
      </div>
      <div className={styles.reviewsWrapper}>
        <MainPageReviews />
      </div>
    </section>
  );
};
