import gsap from 'gsap';
import styles from './AddToCartButton.module.scss';
import { useEffect } from 'react';

export const AddToCartButton = () => {
  useEffect(() => {
    document.querySelectorAll('#btn').forEach((button) => {
      button.addEventListener('click', (e) => {
        e.preventDefault();

        let box = button.querySelector('#box'),
          truck = button.querySelector('#truck');

        if (!button.classList.contains(styles.done)) {
          if (!button.classList.contains(styles.animation)) {
            button.classList.add(styles.animation);

            gsap.to(button, {
              '--box-s': 1,
              '--box-o': 1,
              duration: 0.3,
              delay: 0.5,
            });

            gsap.to(box, {
              x: 0,
              duration: 0.4,
              delay: 0.7,
            });

            gsap.to(button, {
              '--hx': -5,
              '--bx': 50,
              duration: 0.18,
              delay: 0.92,
            });

            gsap.to(box, {
              y: 0,
              duration: 0.1,
              delay: 1,
            });

            gsap.set(button, {
              '--truck-y': 0,
              '--truck-y-n': -26,
            });

            gsap.to(button, {
              '--truck-y': 1,
              '--truck-y-n': -25,
              duration: 0.2,
              delay: 1,
              onComplete() {
                gsap
                  .timeline({
                    onComplete() {
                      button.classList.add(styles.done);
                    },
                  })
                  .to(truck, {
                    x: 400,
                    duration: 2,
                  });
                gsap.to(button, {
                  '--progress': 1,
                  duration: 1,
                  ease: 'power2.in',
                });
              },
            });
          }
        } else {
          button.classList.remove(styles.animation, styles.done);
          gsap.set(truck, {
            x: 4,
          });
          gsap.set(button, {
            '--progress': 0,
            '--hx': 0,
            '--bx': 0,
            '--box-s': 0.5,
            '--box-o': 0,
            '--truck-y': 0,
            '--truck-y-n': -26,
          });
          gsap.set(box, {
            x: -24,
            y: -6,
          });
        }
      });
    });
  }, []);
  return (
    <button className={styles.truckButton} id="btn">
      <span className={styles.default}>Добавить в корзину</span>
      <span className={styles.success}>Успешно!</span>
      <div className={styles.truck} id="truck">
        <div className={styles.wheel}></div>
        <div className={styles.back}></div>
        <div className={styles.front}></div>
        <div className={styles.box} id="box"></div>
      </div>
    </button>
  );
};
