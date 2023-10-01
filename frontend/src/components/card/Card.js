import Button from "../button/Button";

export default function Card(props) {
  const { data, imageCover } = props;
  const formats = ["card"];

  imageCover ? formats.push("image-cover") : ''

  return (
    <div className={formats.join(" ")}>
      <div className="card-content">
        {data.title ? <h2>{data.title}</h2> : ''}
        {data.paragraphe ? <p>{data.paragraphe}</p> : ''}
        {data.link ? <Button light content="Voir plus" /> : ''}  
      </div>
      {data.img_src ? <img src={data.img_src} alt={data.img_alt ?? ''} /> : ''}
      
    </div>
  );

}
