import { getAllProducts } from '@/api';
import { AdminLayout } from '@/layout/admin/AdminLayout';
import { IProductWithLength } from '@/types';
import { useEffect, useState } from 'react';

const ProductPage = () => {
  let products: IProductWithLength | { message: string };
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    (async () => {
      products = await getAllProducts(page);
      console.log(products);
    })();
  }, []);
  

  return (
    <AdminLayout>
      <div>товар</div>
    </AdminLayout>
  );
};

export default ProductPage;
