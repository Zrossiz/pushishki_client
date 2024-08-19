import { useState } from 'react';
import { VoltageFormProps } from './VoltageForm.props';
import styles from './VoltageForm.module.scss';
import { HTag, Input, LinkButton } from '@/elements';
import { createVoltage, updateVoltage } from '@/api';

export const VoltageForm = ({ voltage, action, setOpen }: VoltageFormProps) => {
  const [value, setValue] = useState<number | undefined>(voltage?.name || undefined);

  const publishVoltage = async () => {
    switch (action) {
      case 'create':
        await createVoltageQuery();
      case 'update':
        await updateVoltageQuery();
    }
  };

  const updateVoltageQuery = async () => {
    if (value && voltage) {
      const data = await updateVoltage(voltage.id, value);

      if ('id' in data) {
        window.location.reload();
      }
    }
  };

  const createVoltageQuery = async () => {
    if (value) {
      const data = await createVoltage(value);

      if ('id' in data) {
        window.location.reload();
      }
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.bg} onClick={() => setOpen(false)}></div>
      <div className={styles.formWrapper}>
        <HTag tag="h2">{voltage ? `Обновить ${voltage.name}` : 'Создать вольтаж'}</HTag>
        <div className={styles.inputsWrapper}>
          <label>Значение вольтажа</label>
          <Input value={value} onChange={setValue} placeholder="Вольтаж" type="number" />
        </div>
        <div className={styles.btnWrapper}>
          <LinkButton element="button" onClick={publishVoltage}>
            Опубликовать
          </LinkButton>
        </div>
      </div>
    </div>
  );
};
