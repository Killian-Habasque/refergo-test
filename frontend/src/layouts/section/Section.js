export default function Section(props) {
    const { children, color, size, align } = props

    const types = ["section"];

    size && size == "full" ? types.push("full") : ''
    size && size == "large" ? types.push("lg") : ''
    size && size == "medium" ? types.push("md") : ''
    size && size == "small" ? types.push("sm") : ''
    align && align == "left" ? types.push("left") : ''
    align && align == "center" ? types.push("center") : ''
    align && align == "right" ? types.push("right") : ''

    return <section className={types.join(" ")}>{children}</section>;
  }