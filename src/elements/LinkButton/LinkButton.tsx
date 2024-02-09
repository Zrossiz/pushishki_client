import Link from 'next/link';
import styles from './LinkButton.module.scss';
import { LinkButtonProps } from './LinkButton.props';

export const LinkButton = ({ 
    element, 
    href = '', 
    onClick = () => {}, 
    children 
}: LinkButtonProps) => {
    switch (element) {
        case 'button':
            return (
                <button
                    className={styles.button}
                    onClick={() => onClick()}
                >
                    {children}
                </button>
            )
        case 'link':
            return (
                <Link 
                    className={styles.button}
                    href={href}
                >
                    {children}
                </Link>
            )
    }
}