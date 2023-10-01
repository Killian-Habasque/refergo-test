export default function Grid(props) {
  const { children, columns } = props;

  let gridSize = "";
  if (columns > 0 && columns <= 12) {
    gridSize = columns;
  }

  return (
    <div className={`grid`} style={{gridTemplateColumns: `repeat(${gridSize}, 1fr)`}}>{children}</div>
  );
}
