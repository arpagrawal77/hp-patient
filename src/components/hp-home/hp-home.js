import HpBarChart from './../hp-bar-chart/hp-bar-chart.vue';
import HpPieChart from './../hp-pie-chart/hp-pie-chart.vue';
import PatientService from '../../services/patient-service';

export default {
  name: 'hp-home',
  components: { HpBarChart, HpPieChart },
  props: {},
  data() {
    return {
      patientService: new PatientService(),
      patientDetails: {},
      medications: [],
      supplements: [],
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
      pieChartOptions : {
        responsive: true, 
        maintainAspectRatio: false
      }
    };
  },
  directives: {},
  computed: {
  },
  mounted() {
    const config = {};
    this.patientService.getPatientDetails(config,this.handlePatientResponse,this.handlePatientResponseError);
    this.patientService.getMedicationDetails(config,this.handleMedicationResponse,this.handleMedicationResponseError);
    this.patientService.getSupplimentDetails(config,this.handleSupplementResponse,this.handleSupplementResponseError);
  },
  methods: {
    handlePatientResponse(res) {
      // console.log(res.data.data);
      this.patientDetails = res.data.data;
    },
    handlePatientResponseError(err) {
      console.log(err);
    },
    handleMedicationResponse(res) {
      this.medications = res.data.data.medications;
      // console.log(this.medications);
    },
    handleMedicationResponseError(err) {
      console.log(err);
    },
    handleSupplementResponse(res) {
      console.log(res.data.data);
      this.supplements = res.data.data.supplementDetails;
    },
    handleSupplementResponseError(err) {
      console.log(err);
    }
  },
};
