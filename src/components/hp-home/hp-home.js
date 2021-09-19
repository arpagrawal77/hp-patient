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
      goals: [],
      allergies: [],
      diet: {
        breakfast: [],
        lunch: [],
        dinner: [],
        liquids: [],
      },
      chartdata: {
        labels: ['18 Jul', '19 Jul', '20 Jul', '21 Jul', '22 Jul', '23 Jul'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#E5AE61',
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
              '#CEBFB2',
              '#E5AE61',
              '#F5D1B2',
              '#D2743E'
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
    this.patientService.getPatientDetails(config,this.handlePatientResponse,this.handleResponseError);
    this.patientService.getMedicationDetails(config,this.handleMedicationResponse,this.handleResponseError);
    this.patientService.getSupplimentDetails(config,this.handleSupplementResponse,this.handleResponseError);
    this.patientService.getGoalsDetails(config,this.handleGoalsResponse,this.handleResponseError);
    this.patientService.getAllergyDetails(config,this.handleAllergyResponse,this.handleResponseError);
    this.patientService.getDietDetails(config,this.handleDietResponse,this.handleResponseError);
    this.patientService.getMicrobiomeDetails(config,this.handleMicrobiomeResponse,this.handleResponseError);
  },
  methods: {
    handlePatientResponse(res) {
      // console.log(res.data.data);
      this.patientDetails = res.data.data;
    },
    
    handleMedicationResponse(res) {
      this.medications = res.data.data.medications;
      // console.log(this.medications);
    },
    
    handleSupplementResponse(res) {
      // console.log(res.data.data);
      this.supplements = res.data.data.supplementDetails;
    },
    
    handleGoalsResponse(res) {
      // console.log(res.data.data);
      this.goals = res?.data?.data?.goals;
    },
    
    handleAllergyResponse(res) {
      this.allergies = res?.data?.data?.allergies;
      // console.log(this.allergies);
    },
    
    handleDietResponse(res) {
      // console.log(res?.data?.data?.data);
      this.diet.breakfast = res?.data?.data?.data[0].breakfast.split(",");
      this.diet.lunch = res?.data?.data?.data[0].lunch.split(",");
      this.diet.dinner = res?.data?.data?.data[0].dinner.split(",");
      // console.log(this.diet);
    },

    handleMicrobiomeResponse(res) {
      console.log(res.data.data.data);
    },

    handleResponseError(err) {
      console.log(err);
    },
  },
};
