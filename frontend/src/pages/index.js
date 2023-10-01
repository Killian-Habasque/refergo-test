import Section from '@/layouts/section/Section';
import Header from '@/layouts/header/Header';
import Button from '@/components/button/Button';
import Grid from '@/layouts/grid/Grid';
import Card from '@/components/card/Card';

export default function Home() {
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
      <Header />
      <p>Test</p>

      <Button primary content="test" />

      <Section large>
        <p>test</p>
      </Section>
      <br></br>

      <br></br>
      <Section full color={"lightgray"}>
        <Grid columns="2">
          <Card imageCover data={dataCard} />
          <Card imageCover data={dataCard2} />
        </Grid>



        <div className='grid-3'></div>
        <div className='grid-2'></div>
      </Section>
    </main>
  )
}
