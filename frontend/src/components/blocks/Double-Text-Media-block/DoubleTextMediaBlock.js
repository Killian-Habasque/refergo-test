import Section from '@/layouts/section/Section';
import Media from '@/layouts/media/Media';
import RichText from '@/layouts/richText/RichText';
import Grid from '@/layouts/grid/Grid';

function DoubleTextMediaBlock(props) {
    const { richText, media, layout, mediaFit } = props
    const dataMedia = media.data.attributes;

    const reverse = layout == "media-text" ? "reverse" : ''
    return (
        <Section size="large">
            <Grid columns="2" reverse={reverse}>
                <RichText richText={richText}/>
                <Media fit={mediaFit} src={dataMedia.url} alt={dataMedia.name} />
            </Grid>
        </Section>
    )
}

export default DoubleTextMediaBlock