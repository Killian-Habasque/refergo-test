import Section from '@/layouts/section/Section';
import RichText from '@/layouts/richText/RichText';

function SimpleTextBlock(props) {
    const { richText, size, textAlign } = props

    return (
        <Section size={size}>
            <RichText richText={richText} textAlign={textAlign} />
        </Section>
    )
}

export default SimpleTextBlock