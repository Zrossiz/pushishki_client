import styles from "./CreateRightsForm.module.scss";
import { CreateRightsFormProps } from "./CreateRightsForm.props";

export const CreateRightsForm = ({ setOpen }: CreateRightsFormProps) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.bg} onClick={() => setOpen(false)}></div>
            <div className={styles.formWrapper}>
                hello world1
            </div>
        </div>
    )
}