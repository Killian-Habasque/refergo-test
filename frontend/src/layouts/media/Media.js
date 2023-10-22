export default function Media(props) {
    const { src, alt, fit } = props
    const objectFit = fit ?? "cover"

    return <div className="media__group"><img className={`media ${objectFit}`} src={process.env.NEXT_PUBLIC_API_DOMAIN + src} alt={alt}/></div>;
}