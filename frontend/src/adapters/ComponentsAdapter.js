import SimpleTextBlock from "@/components/blocks/Simple-Text-block/SimpleTextBlock";
import SimpleMediaBlock from "@/components/blocks/Simple-Media-block/SimpleMediaBlock";
import DoubleTextMediaBlock from "@/components/blocks/Double-Text-Media-block/DoubleTextMediaBlock";

function ComponentAdapter(props) {
    const { data, component } = props

    switch (component) {
        case 'components.simple-text-block':
            return (<SimpleTextBlock richText={data.richText} size={data.size} textAlign={data.textAlign}/>)
        case 'components.simple-media-block':
            return (<SimpleMediaBlock media={data.media} />)
        case 'components.double-text-media-block':
            return (<DoubleTextMediaBlock richText={data.richText} media={data.media} layout={data.layout} mediaFit={data.mediaFit}/>)
    }

}
export default ComponentAdapter