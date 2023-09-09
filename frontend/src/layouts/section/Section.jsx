export default function Section(props) {
    const { secLarge, secSplit2, className, children } = props

    secLarge ? secLarge = "section--large" : null
    secSplit ? secSplit2 = "section--slit" : null

    return (
        <section className={className + secLarge + secSplit}>
            {/* {primary ? "yes" : 'no'} */}
            {children}
        </section>
    )
}
