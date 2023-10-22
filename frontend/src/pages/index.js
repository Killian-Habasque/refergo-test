import Section from '@/layouts/section/Section';

import Button from '@/components/button/Button';
import Grid from '@/layouts/grid/Grid';
import Card from '@/components/card/Card';

import useApi from '@/hooks/useApi';
const POPULATE_ALL = 'populate=*'
const SORT_DESC = 'sort=createdAt%3Adesc'

export default function Home() {

  const { data: dataProducts, loading: loading } = useApi(`/products?${POPULATE_ALL}&${SORT_DESC}`);
  console.log(dataProducts)
  const dataCard = {
    title: "Étagère de bureau",
    paragraphe: 'Un indispensable pour votre bureau',
    img_src: '/61V7CCa80EL._AC_SL1500_.jpg',
    img_alt: 'test',
    link: '/test'
  }
  const dataCard2 = {
    title: "Étagère de bureau",
    paragraphe: 'Un indispensable pour votre bureau',
    img_src: '/Chaise_ergonomique_NOBLEWELL-NWOC6.jpg',
    img_alt: 'test',
    link: '/test'
  }
  return (
    <main>
     
      <p>Test</p>

      <Button primary content="test" />


      {/* {
        !loading ? (
          dataProducts.map(({ id, attributes }) => (
            <div key={id}>
                {
                  attributes.gallery.data ? (
                    <img src={`${process.env.NEXT_PUBLIC_API_DOMAIN}` + attributes.gallery.data[0].attributes.url} />
                  )
                    : ''
                }
            </div>

          ))
        ) : ''
      } */}

      <Section large>
        <p>test</p>
      </Section>
      <br></br>

      <br></br>
      <Section size="full">
        <Grid columns="2">
          <Card imageCover data={dataCard} />
          <Card imageCover data={dataCard2} />
        </Grid>
      </Section>

      <Section full>
          <Card imageCover data={dataCard} />
          <h1>Chaise ergonomique</h1>
          <h2>Votre blog consacré aux astuces et aux comparatifs de produits ergonomiques.</h2>
      </Section>
    </main>
  )
}
