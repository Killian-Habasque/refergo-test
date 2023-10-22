import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import useApi from '@/hooks/useApi';
import Head from 'next/head'
import DynamicZone from '@/components/dynamicZone/DynamicZone';
import Section from '@/layouts/section/Section';
import Media from '@/layouts/media/Media';

function App() {
    const { isReady, query: { slug } } = useRouter();
    const [data, setData] = useState(null);

    const { data: categorie, loading: categorieLoading } = useApi(`/categories?filters[slug][$eq]=${slug}&populate=deep,3`);

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
                        <Section size="full" >
                            <Media src={data.thumbnail.data.attributes.url} alt={data.thumbnail.data.attributes.alternativeText} />
                            <Section size="small" align="center">
                                <h1>{data.title}</h1>
                                <p className="subtitle">{data.subtitle}</p>
                            </Section>
                        </Section>
                        <DynamicZone content={data.content} />
                        
                    </main>
                </>
            )}
        </>
    );
}

export default App;