import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import useApi from '@/hooks/useApi';


import Head from 'next/head'


function App() {
    const { isReady, query: { slug } } = useRouter();
    const [productData, setProductData] = useState(null);

    const { data: product, loading: productLoading } = useApi(`/products?filters[slug][$eq]=${slug}&populate=*`);
// localhost:1337/api/products?filters[slug][$eq]=test&populate[content][populate]=*
    useEffect(() => {
        if (isReady) {
            setProductData(product);
        }
    }, [isReady, product]);

    return (
        <>
            <Head>
                {productData && <title>{productData[0]?.attributes.title}</title>}
            </Head>
            <main>
                {console.log(productData)}
                {!productLoading ? (
                    <>
                        <p>{product[0]?.attributes.title}</p>
                        <img src={`${process.env.NEXT_PUBLIC_API_DOMAIN}` + product[0]?.attributes.gallery.data[0]?.attributes.url} />
                    </>
                ) : ''}

            </main>

        </>
    );
}

export default App;
