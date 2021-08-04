import { line, curveNatural, max } from "d3";

const Marks = ({ data, maxNumPointsInFixation, xScale, getXValue, yScale, getYValue }) => {
  // console.log("____________----_________________data");
  // console.log(data);
  // const fixationMaxNumPnts = max();
  return (
    <g className="marks">
      <path
        fill="none"
        stroke="black"
        d={line()
          .x((d) => xScale(getXValue(d)))
          .y((d) => yScale(getYValue(d)))
          .curve(curveNatural)(data)}
      />
      {data.map((d, i) => {
        return (
          // the radius is merely a magic number I found
          <circle key={i} cx={xScale(getXValue(d))} cy={yScale(getYValue(d))} r={(d.numPoints / maxNumPointsInFixation) * 30}>
            <title>{getXValue(d)}</title>
          </circle>
        );
      })}
    </g>
  );
};

export default Marks;
