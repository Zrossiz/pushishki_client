import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import styles from './Quiz.module.scss';
import Image from "next/image";
import { QuizQuestions } from "@/components";

export const Quiz = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true });
    const ref2 = useRef(null)
    const isInView2 = useInView(ref2, { once: true });
    const ref3 = useRef(null)
    const isInView3 = useInView(ref3, { once: true });

    const [open, setOpen] = useState<boolean>(false);
    return (
      <section className={styles.quiz}>
        {open && <QuizQuestions setOpen={setOpen} />}
        <div className={styles.countWrapper}>
          <span>( Всего 3 вопроса )</span>
        </div>
        <div className={styles.titleWrapper}>
          <motion.span      
            ref={ref}
            transition={{ delay: 0.6, duration: 0.4 }}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: isInView ? 0 : 30, opacity: isInView ? 1 : 0 }}
          >
            Подобрать
          </motion.span>
          <div className={styles.secondLineWrapper}>
            <motion.span      
              ref={ref2}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: isInView2 ? 0 : 30, opacity: isInView2 ? 1 : 0 }}
              transition={{ delay: 0.8, duration: 0.4 }}
            >
              подарок
            </motion.span>
            <div className={styles.buttonWrapper} onClick={() => setOpen(true)}>
              <button>
                <Image src={'/icons/SliderNavArrowGreen.svg'} width={46} height={46} alt="Открыть" />
                <Image src={'/icons/SliderNavArrow.svg'} width={46} height={46} alt="Открыть" />
              </button>
            </div>
            <motion.span      
              ref={ref3}
              transition={{ delay: 1, duration: 0.4 }}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: isInView3 ? 0 : 30, opacity: isInView3 ? 1 : 0 }}
            >
              ребенку
            </motion.span>
          </div>
        </div>
        <div className={styles.descWrapper}>
          <span className={styles.darkFont}>Не требуем номер телефона!</span>
          <br />
          <span className={styles.lightFont}>
            Вы получите только
            <br /> 
            список подходящих
            <br />
            электромобилей
          </span>
        </div>
      </section>
    )
}