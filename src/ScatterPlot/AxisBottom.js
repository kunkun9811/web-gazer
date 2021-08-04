const AxisBottom = ({ xScale, innerHeight, tickOffset = 3 }) => {
  return xScale.ticks().map((tickValue, i) => (
    <g className="tick" key={i} transform={`translate(${xScale(tickValue)}, 0)`}>
      <line y2={innerHeight} />
      {/* Ticks Text Value */}
      {/* <text style={{ textAnchor: "middle" }} dy="0.71em" y={innerHeight + tickOffset}>
        {tickValue}
      </text> */}
    </g>
  ));
};

export default AxisBottom;
