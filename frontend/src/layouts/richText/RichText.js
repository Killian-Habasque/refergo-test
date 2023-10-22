import dynamic from 'next/dynamic';

const ReactMarkdown = dynamic(() => import('react-markdown'));

export default function RichText(props) {
    const { richText, textAlign } = props

    const align = textAlign ?? "left"

    return <div className={`text__group ${align}`}>
        <ReactMarkdown>
            {richText}
        </ReactMarkdown>
    </div>;
}