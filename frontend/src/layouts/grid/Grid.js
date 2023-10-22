export default function Grid(props) {
  const { children, columns, reverse } = props;
  const types = ["grid"];
  reverse ? types.push("reverse") : ''

  let gridSize = "";
  if (columns > 0 && columns <= 12) {
    gridSize = columns;
  }

  return (
    <div className={types.join(" ")} style={{gridTemplateColumns: `repeat(${gridSize}, 1fr)`}}>{children}</div>
  );
}
