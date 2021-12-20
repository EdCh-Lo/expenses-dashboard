import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  //to only get an array of numbers (12 values for every month)
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);

  //receive 12 values with expenses of the month
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
