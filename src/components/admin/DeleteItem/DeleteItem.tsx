import { DeleteItemProps } from './DeleteItem.props';
import styles from './Delete.module.scss';
import { HTag } from '@/elements';
import { axiosInst } from '@/utils';
import getConfig from 'next/config';
import { useRouter } from 'next/router';
import { deleteFile, deleteProductFiles } from '@/api';

const { publicRuntimeConfig } = getConfig();
const { API_URL } = publicRuntimeConfig;

export const DeleteItem = ({ id, name, entity, setOpen, imgName }: DeleteItemProps) => {
  const router = useRouter();

  const deleteItem = async () => {

    if (entity = 'product') {
      await deleteProductFiles(id);
    };

    if (imgName) {
      await deleteFile(imgName);
    };

    const product = await axiosInst.delete(`${API_URL}/${entity}/${id}`);

    if (product.status === 200) {
      router.reload();
    }
  };


  return (
    <div className={styles.wrapper}>
      <div className={styles.bg} onClick={() => setOpen(false)}></div>
      <div className={styles.deleteForm}>
        <HTag tag="h3">Вы действительно хотите удалить {name}?</HTag>
        <div className={styles.buttonsWrapper}>
          <div className={styles.close} onClick={() => setOpen(false)}>
            Отменить
          </div>
          <div className={styles.confirm} onClick={deleteItem}>
            Удалить
          </div>
        </div>
      </div>
    </div>
  );
};
