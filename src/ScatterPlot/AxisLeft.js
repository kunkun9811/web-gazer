/* yScale tickvalue not showing */
const AxisLeft = ({ yScale, innerWidth, tickOffset = 3 }) => {
  return yScale.ticks().map((tickValue, i) => (
    <g className="tick" key={i} transform={`translate(0, ${yScale(tickValue)})`}>
      <line x2={innerWidth} />
      {/* Ticks Text Value */}
      {/* <text style={{ textAnchor: "middle" }} dy="0.71em" y={innerWidth + tickOffset}>
        {tickValue}
      </text> */}
    </g>
  ));
};

export default AxisLeft;
