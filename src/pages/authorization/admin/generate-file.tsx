import { CreateLicenseForm, CreateRightsForm } from "@/components/admin";
import { LinkButton } from "@/elements";
import { AdminLayout } from "@/layout/admin/AdminLayout";
import styles from "@/styles/admin/GenerateFile.module.scss";
import { useState } from "react";

const GenerateFilePage = () => {
    const [createLicense, setCreateLicense] = useState(false);
    const [createRights, setCreateRights] = useState(false);

    return (
        <AdminLayout>
            <>
                {createLicense && <CreateLicenseForm setOpen={setCreateLicense} /> }
                {createRights && <CreateRightsForm setOpen={setCreateRights} /> }
                <div className={styles.wrapper}>
                    <div className={styles.btn}>
                        <LinkButton 
                            element="button" 
                            children="Сгенерировать права" 
                            onClick={() => setCreateLicense(true)}
                        />
                    </div>
                    <div className={styles.btn}>
                        <LinkButton 
                            element="button"
                            children="Сгенерировать номера"
                            onClick={() => setCreateRights(true)}
                        />
                    </div>
                </div>
            </>
        </AdminLayout>
    )
}

export default GenerateFilePage;