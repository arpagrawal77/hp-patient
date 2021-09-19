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
      patientInitials: '',
      patientDetails: {},
      medications: [],
      supplements: [],
      goals: [],
      allergies: [],
      microbiome: [],
      dataLoaded: false,
      diet: {
        breakfast: [],
        lunch: [],
        dinner: [],
        liquids: [],
      },
      chartLabels: ['18 Jul', '19 Jul', '20 Jul', '21 Jul'],
      chartApiData: {
        bmiData: [],
        carbohydrateMetabolismData: [],
        proteinMetabolismData: [],
        fatMetabolismData: [],
        lactoseIntoleranceData: [],
        glutenSensitivityData: [],
        sugarConsumptionData: [],
        artificialSweetnerDamageData: [],
        probioticOrganismsData: [],
        bowelMobilityData: [],
        antibioticDamageData: [],
        autoimmuneIndexData: [],
        sleepQualityData: [],
        proteobacteriaPercentageData: [],
      },
      options: {
        legend: {
          display: false
        },
        tooltips: {
          callbacks: {
             label: function(tooltipItem) {
                    return tooltipItem.yLabel;
             }
          }
        },
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
    chartdata() {
      return {
        labels: this.chartLabels,
        datasets: [
          {
            label: 'Data one',
            backgroundColor: '#E5AE61',
            data: [20, 23, 0, 25]
          }
        ]
      }
    },

    bmiChartData() {
      return {
        labels: this.chartLabels,
        datasets: [
          {
            label: 'BMI',
            backgroundColor: '#E5AE61',
            data: this.chartApiData.bmiData,
          }
        ]
      }
    },

    carbohydrateMetabolismChartData() {
      return {
        labels: this.chartLabels,
        datasets: [
          {
            label: 'BMI',
            backgroundColor: '#E5AE61',
            data: this.chartApiData.carbohydrateMetabolismData,
          }
        ]
      }
    },

    proteinMetabolismChartData() {
      return {
        labels: this.chartLabels,
        datasets: [
          {
            label: 'BMI',
            backgroundColor: '#E5AE61',
            data: this.chartApiData.proteinMetabolismData,
          }
        ]
      }
    },

    fatMetabolismChartData() {
      return {
        labels: this.chartLabels,
        datasets: [
          {
            label: 'BMI',
            backgroundColor: '#E5AE61',
            data: this.chartApiData.fatMetabolismData,
          }
        ]
      }
    },

    lactoseIntoleranceChartData() {
      return {
        labels: this.chartLabels,
        datasets: [
          {
            label: 'BMI',
            backgroundColor: '#E5AE61',
            data: this.chartApiData.lactoseIntoleranceData,
          }
        ]
      }
    },

    glutenSensitivityChartData() {
      return {
        labels: this.chartLabels,
        datasets: [
          {
            label: 'BMI',
            backgroundColor: '#E5AE61',
            data: this.chartApiData.glutenSensitivityData,
          }
        ]
      }
    },

    sugarConsumptionChartData() {
      return {
        labels: this.chartLabels,
        datasets: [
          {
            label: 'BMI',
            backgroundColor: '#E5AE61',
            data: this.chartApiData.sugarConsumptionData,
          }
        ]
      }
    },

    artificialSweetnerDamageChartData() {
      return {
        labels: this.chartLabels,
        datasets: [
          {
            label: 'BMI',
            backgroundColor: '#E5AE61',
            data: this.chartApiData.artificialSweetnerDamageData,
          }
        ]
      }
    },

    probioticOrganismsChartData() {
      return {
        labels: this.chartLabels,
        datasets: [
          {
            label: 'BMI',
            backgroundColor: '#E5AE61',
            data: this.chartApiData.probioticOrganismsData,
          }
        ]
      }
    },

    bowelMobilityChartData() {
      return {
        labels: this.chartLabels,
        datasets: [
          {
            label: 'BMI',
            backgroundColor: '#E5AE61',
            data: this.chartApiData.bowelMobilityData,
          }
        ]
      }
    },

    antibioticDamageChartData() {
      return {
        labels: this.chartLabels,
        datasets: [
          {
            label: 'BMI',
            backgroundColor: '#E5AE61',
            data: this.chartApiData.antibioticDamageData,
          }
        ]
      }
    },

    autoimmuneIndexChartData() {
      return {
        labels: this.chartLabels,
        datasets: [
          {
            label: 'BMI',
            backgroundColor: '#E5AE61',
            data: this.chartApiData.autoimmuneIndexData,
          }
        ]
      }
    },

    sleepQualityChartData() {
      return {
        labels: this.chartLabels,
        datasets: [
          {
            label: 'BMI',
            backgroundColor: '#E5AE61',
            data: this.chartApiData.sleepQualityData,
          }
        ]
      }
    },

    proteobacteriaPercentageChartData() {
      return {
        labels: this.chartLabels,
        datasets: [
          {
            label: 'BMI',
            backgroundColor: '#E5AE61',
            data: this.chartApiData.proteobacteriaPercentageData,
          }
        ]
      }
    },

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
      this.patientInitials = this.getUserInitials(this.patientDetails.firstName, this.patientDetails.lastName);
      console.log(this.patientInitials);
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
      this.microbiome = res.data.data.data;
      this.chartApiData.bmiData = this.makeChartDataSet('bmi');
      this.chartApiData.carbohydrateMetabolismData = this.makeChartDataSet('carbohydrateMetabolism');
      this.chartApiData.proteinMetabolismData = this.makeChartDataSet('proteinMetabolism');
      this.chartApiData.fatMetabolismData = this.makeChartDataSet('fatMetabolism');
      this.chartApiData.lactoseIntoleranceData = this.makeChartDataSet('lactoseIntolerance');
      this.chartApiData.glutenSensitivityData = this.makeChartDataSet('glutenSensitivity');
      this.chartApiData.sugarConsumptionData = this.makeChartDataSet('sugarConsumption');
      this.chartApiData.artificialSweetnerDamageData = this.makeChartDataSet('artificialSweetnerDamage');
      this.chartApiData.probioticOrganismsData = this.makeChartDataSet('probioticOrganisms');
      this.chartApiData.bowelMobilityData = this.makeChartDataSet('bowelMobility');
      this.chartApiData.antibioticDamageData = this.makeChartDataSet('antibioticDamage');
      this.chartApiData.autoimmuneIndexData = this.makeChartDataSet('autoimmuneIndex');
      this.chartApiData.sleepQualityData = this.makeChartDataSet('sleepQuality');
      this.chartApiData.proteobacteriaPercentageData = this.makeChartDataSet('proteobacteriaPercentage');
      this.dataLoaded = true;
    },

    makeChartDataSet(key) {
      return this.microbiome.map(item => item[key]);
    },

    getUserInitials(fname, lname) {
      return fname.charAt(0)+lname.charAt(0);
    },

    handleResponseError(err) {
      console.log(err);
    },
  },
};
