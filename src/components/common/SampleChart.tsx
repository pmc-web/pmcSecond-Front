import { Bar, defaults } from 'react-chartjs-2';

const data = {
  // 각 막대별 라벨
  labels: ['1번 막대', '2번 막대', '3번 막대'],
  datasets: [
    {
      borderWidth: 1, // 테두리 두께
      data: [1, 2, 3], // 수치
      backgroundColor: ['yellow', 'red', 'green'], // 각 막대 색
    },
  ],
};
const { global, bar } = defaults;

const options = {
  ...global,
  ...bar,
  responsive: true,
  title: {
    display: true,
    text: 'Custom Chart Title',
    fontSize: 150,
  },
  scales: {
    xAxes: [
      {
        stacked: true,
      },
    ],
    yAxes: [
      {
        stacked: true,
      },
    ],
  },
};
const SampleChart = () => (
  <>
    <div className="header">
      <h1 className="title">Vertical Bar Chart</h1>
      <div className="links">
        <a
          className="btn btn-gh"
          href="https://github.com/reactchartjs/react-chartjs-2/blob/react16/example/src/charts/VerticalBar.js"
        >
          Github Source
        </a>
      </div>
    </div>
    <Bar data={data} options={options} height={300} />
  </>
);

export default SampleChart;
