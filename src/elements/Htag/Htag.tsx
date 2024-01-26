import { HtagProps } from "./Htag.props";
import styles from './Htag.module.scss';
import cn from 'classnames';

export const HTag = ({ children, tag, color, className }: HtagProps) => {
    switch (tag) {
        case "h1":
            return (
                <h1
                    className={cn(styles.h1, className, {
                        [styles.black]: color === "black",
                    })}
                >
                    {children}
                </h1>
            );
        case "h2":
            return (
                <h2
                    className={cn(styles.h2, className, {
                        [styles.black]: color === "black",
                    })}
                >
                    {children}
                </h2>
            );
        case "h3":
            return (
                <h3
                    className={cn(styles.h3, className, {
                        [styles.black]: color === "black",
                    })}
                >
                    {children}
                </h3>
            );
    }
}