import HpBarChart from './../hp-bar-chart/hp-bar-chart.vue';
import HpPieChart from './../hp-pie-chart/hp-pie-chart.vue';

export default {
  name: 'hp-home',
  components: { HpBarChart, HpPieChart },
  props: {},
  data() {
    return {
      chartdata: {
        labels: ['18 Jul', '19 Jul', '20 Jul', '21 Jul', '22 Jul', '23 Jul'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#ffc679',
            data: [20, 23, 0, 25, 0, 28]
          }
        ]
      },
      options: {
        scales: {
					yAxes: [{
						ticks: {
							beginAtZero: true
						},
						gridLines: {
							display: true
						}
					}],
					xAxes: [{
						ticks: {
							beginAtZero: true
						},
						gridLines: {
							display: false
						},
						barPercentage: 0.2
					}]
				},
        responsive: true,
        maintainAspectRatio: false
      },
      pieChartData : {
        labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
        datasets: [
          {
            backgroundColor: [
              '#41B883',
              '#E46651',
              '#00D8FF',
              '#DD1B16'
            ],
            data: [40, 20, 80, 10]
          }
        ]
      },
      pieChartOptions : {responsive: true, maintainAspectRatio: false}
    };
  },
  directives: {},
  computed: {
  },
  mounted() {
  },
  methods: {
  },
};
