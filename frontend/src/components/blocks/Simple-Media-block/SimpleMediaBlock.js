import Section from '@/layouts/section/Section';
import Media from '@/layouts/media/Media';

function SimpleMediaBlock(props) {
    const { media } = props
    const data = media.data.attributes;

    return (
        <Section size="large">
            <Media fit="cover" src={data.url} alt={data.name}/>
        </Section>
    )
}

export default SimpleMediaBlock