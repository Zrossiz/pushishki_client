import Calendar from 'react-calendar';
import styles from './DurationSelect.module.scss';
import { IDurationSelectProps } from './DurationSelect.props';
import 'react-calendar/dist/Calendar.css';

export const DurationSelect = ({
  isOpen,
  startDate,
  endDate,
  setStartDate,
  setEndDate,
  setOpen,
}: IDurationSelectProps) => {
  const onChange = (dates: any) => {
    const [start, end] = dates;

    setStartDate(start);
    setEndDate(end ?? start);
    setOpen(false);
  };

  return (
    <>
      <div className={styles.wrapper} onClick={() => setOpen(true)}>
        <div className={styles.value}>Выбрать</div>
      </div>
      {isOpen && (
        <div className={styles.selectWrapper}>
          <Calendar onChange={onChange} value={[startDate, endDate]} selectRange />
        </div>
      )}
    </>
  );
};
