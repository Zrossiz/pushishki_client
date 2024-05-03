import { HTag } from "@/elements"
import { Layout } from "@/layout/client/Layout"

const Error500 = () => {
    return (
        <Layout title="Мы скоро все починим!" >
            <>
                <HTag tag="h1">Мы скоро все починим!</HTag>
                <p>Загляните к нам позже ^_^</p>
            </>
        </Layout>
    )
}

export default Error500