import { HTag, Input, LinkButton } from '@/elements';
import styles from './SubCategory.module.scss';
import { SubCategoryFormProps } from './SubCategory.props';
import { useEffect, useState } from 'react';
import { ICategoryWithLength, ISubCategory } from '@/types';
import { createSubCategory, getCategories, updateSubCategory } from '@/api';
import Select from 'react-select';

export const SubCategoryForm = ({ setOpen, action, subCategory }: SubCategoryFormProps) => {
  const [name, setName] = useState<string>(subCategory?.name ?? '');
  const [selectedCategory, setSelectedCategory] = useState<number>(subCategory?.categoryId ?? 1);
  const [metaDescription, setMetaDescription] = useState<string>(
    subCategory?.metaDescription ?? '',
  );
  const [metaTitle, setMetaTitle] = useState<string>(subCategory?.metaTitle ?? '');
  const [metaKeyWords, setMetaKeyWords] = useState<string>(subCategory?.metaKeyWords ?? '');

  const [categories, setCategories] = useState<ICategoryWithLength>();

  useEffect(() => {
    (async () => {
      const apiCategories = await getCategories();

      if ('data' in apiCategories) {
        setCategories(apiCategories);
      }
    })();
  }, []);

  const categoryOptions = categories?.data.map((item) => ({
    value: item.id,
    label: item.name,
  }));

  const create = async () => {
    if (!selectedCategory) {
      return;
    }

    if (action === 'update' && subCategory) {
      const updated = await updateSubCategory(
        subCategory?.id,
        name,
        selectedCategory,
        metaTitle,
        metaDescription,
        metaKeyWords,
      );

      if ('id' in updated) {
        return window.location.reload();
      }
    }

    const created = await createSubCategory(
      name,
      selectedCategory,
      metaTitle,
      metaDescription,
      metaKeyWords,
    );

    if ('id' in created) {
      window.location.reload();
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.bg} onClick={() => setOpen(false)}></div>
      <div className={styles.formWrapper}>
        <HTag tag="h2">
          {action === 'create' ? 'Создать подкатегорию' : 'Обновить подкатегорию'}
        </HTag>
        <div className={styles.inputsWrapper}>
          <div className={styles.inputWrapper}>
            <label>Название подкатегории</label>
            <Input
              type="text"
              placeholder="Название подкатегории"
              value={name}
              onChange={setName}
            />
          </div>
        </div>
        {categoryOptions && (
          <div className={styles.inputsWrapper}>
            <label htmlFor="categories">Категория</label>
            <div className={styles.categoriesSelect}>
              <Select
                id="categories"
                options={categoryOptions}
                value={categoryOptions.find((option) => option.value === selectedCategory)}
                onChange={(selectedOption) => setSelectedCategory(selectedOption?.value ?? 1)}
                theme={(theme) => ({
                  ...theme,
                  colors: {
                    ...theme.colors,
                    primary: 'green',
                  },
                })}
                placeholder={'Выберите категорию'}
              />
            </div>
          </div>
        )}
        <div className={styles.inputsWrapper}>
          <div className={styles.inputWrapper}>
            <label>Мета заголовок</label>
            <Input
              type="text"
              placeholder="Мета заголовок"
              value={metaTitle}
              onChange={setMetaTitle}
            />
          </div>
        </div>
        <div className={styles.inputsWrapper}>
          <div className={styles.inputWrapper}>
            <label>Мета описание</label>
            <Input
              type="text"
              placeholder="Мета описание"
              value={metaDescription}
              onChange={setMetaDescription}
            />
          </div>
        </div>
        <div className={styles.inputsWrapper}>
          <div className={styles.inputWrapper}>
            <label>Мета ключевые слова</label>
            <Input
              type="text"
              placeholder="Мета ключевые слова"
              value={metaKeyWords}
              onChange={setMetaKeyWords}
            />
          </div>
        </div>
        <div className={styles.btnWrapper}>
          <LinkButton element="button" onClick={create}>
            Опубликовать
          </LinkButton>
        </div>
      </div>
    </div>
  );
};
