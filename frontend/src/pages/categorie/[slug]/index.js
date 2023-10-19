import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import useApi from '@/hooks/useApi';
import Head from 'next/head'


function App() {
    const { isReady, query: { slug } } = useRouter();
    const [data, setData] = useState(null);

    const { data: categorie, loading: productLoading } = useApi(`/categories?filters[slug][$eq]=${slug}&populate=deep,3`);
    


    useEffect(() => {
        if (isReady) {
            setData(categorie[0]?.attributes);
        }
    }, [isReady, categorie]);

    return (
        <>
            {data && (
                <>
                    <Head>
                        {data && <title>{data.title}</title>}
                    </Head>
                    <main>
                        <h1>{data.title}</h1>
                        <p>{data.subtitle}</p>
                    </main>
                </>
            )}
        </>
    );
}

export default App;