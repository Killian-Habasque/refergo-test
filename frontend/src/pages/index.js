import Section from '@/layouts/section/Section.jsx';
import Header from '@/layouts/header/Header.jsx';
import Button from '@/components/button/Button.jsx';

export default function Home() {
  return (
    <main>
        <Header/>
        <p>Test</p>
        
        <Button content="test"/>

        <Section primary></Section>
        <Section>
          <div className='grid-3'></div>
          <div className='grid-2'></div>
        </Section>
    </main>
  )
}
