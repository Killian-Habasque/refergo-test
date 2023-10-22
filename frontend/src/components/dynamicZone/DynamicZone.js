import ComponentAdapter from '@/adapters/ComponentsAdapter';

function DynamicZone(props) {
    const { content } = props
    return (
        <>
            {
                content.map((element) => (
                    <ComponentAdapter key={element.__component + "-" + element.id} data={element} component={element.__component} />
                ))
            }
        </>
    )
}

export default DynamicZone