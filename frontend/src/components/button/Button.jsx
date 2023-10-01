export default function Button(props){
    const { primary, secondary, light, className = "", content, loading, onClick, style = {} } = props
    const types = ["button"];

    primary ? types.push("primary") : ''
    secondary ? types.push("secondary") : ''
    light ? types.push("light") : ''

    return (
      <button onClick={onClick} className={`${types.join(" ")}${className}`} style={style}>{ loading ? <><span className="dot"></span> <span className="dot"></span> <span className="dot"></span> </> : content }</button>
    )
  }