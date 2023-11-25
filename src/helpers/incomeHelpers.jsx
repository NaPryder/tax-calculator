export function buildIncomeInformation(topic, items) {
  return (
    <ul
      style={{
        listStyle: "decimal",
        paddingLeft: "10px",
      }}
    >
      <b>{topic}</b>
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

const options = {
  // style: "decimal", // Other options: 'currency', 'percent', etc.
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
};
export function displayNumber(value) {
  return Number(value).toLocaleString("en-US", options);
}
