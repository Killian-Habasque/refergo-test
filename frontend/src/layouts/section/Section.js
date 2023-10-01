export default function Section(props) {
    const { children, color, large, medium, small, full } = props
    const types = ["section"];

    full ? types.push("full") : ''
    large ? types.push("lg") : ''
    medium ? types.push("md") : ''
    small ? types.push("sm") : ''

    return <section className={types.join(" ")}>{children}</section>;
  }