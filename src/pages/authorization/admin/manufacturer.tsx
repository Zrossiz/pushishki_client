import { getAllManufacturers } from "@/api";
import { HTag, LinkButton } from "@/elements";
import { AdminLayout } from "@/layout/admin/AdminLayout"
import { IManufacturer } from "@/types/Manufacturer";
import { useEffect, useState } from "react";
import styles from '../../../styles/admin/Default.module.scss';
import { ManufacturerListItem } from "@/components/admin";

const ManufacturerPage = () => {
    const [manufacturers, setManufacturers] = useState<IManufacturer[]>([]);

    useEffect(() => {
        (async () => {
            const apiManufacturers = await getAllManufacturers();
            if (Array.isArray(apiManufacturers)) {
                setManufacturers(apiManufacturers);
            }
        })()
    }, []);

    return (
        <AdminLayout>
            <>
                <div className={styles.addButtonWrapper}>
                    <LinkButton element="button">
                        Добавить
                    </LinkButton>
                </div>
                <div className={styles.listWrapper}>
                    {manufacturers.length > 0 ? (
                        manufacturers.map((manufacturer) => {
                            return <ManufacturerListItem key={manufacturer.id} item={manufacturer} />
                        })
                    ) : (
                        <HTag tag="h3">Ничего не найдено</HTag>
                    )}
                </div>
            </>
        </AdminLayout>
    )
}

export default ManufacturerPage;