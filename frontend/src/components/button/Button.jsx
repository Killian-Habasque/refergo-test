export default function Button(props){
    const { className = "", type = "button", content, loading, onClick, style = {} } = props
    return (
      <button onClick={onClick} className={`button ${className}`} type={type} style={style}>{ loading ? <><span className="dot"></span> <span className="dot"></span> <span className="dot"></span> </> : content }</button>
    )
  }