import styles from "./CreateLicenseForm.module.scss";
import { CreateLicenseProps } from "./CreateLicenseForm.props";

export const CreateLicenseForm = ({ setOpen }: CreateLicenseProps) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.bg} onClick={() => setOpen(false)}></div>
            <div className={styles.formWrapper}>
                hello world
            </div>
        </div>
    )
}