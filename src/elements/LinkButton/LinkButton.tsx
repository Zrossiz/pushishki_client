import Link from 'next/link';
import styles from './LinkButton.module.scss';
import { LinkButtonProps } from './LinkButton.props';

export const LinkButton = ({
  element,
  href = '',
  onClick = () => {},
  children,
  disabled
}: LinkButtonProps) => {
  switch (element) {
    case 'button':
      return (
        <button disabled={disabled} className={styles.button} onClick={(arg0) => onClick(arg0)}>
          {children}
        </button>
      );
    case 'link':
      return (
        <Link className={styles.button} href={href}>
          {children}
        </Link>
      );
  }
};
