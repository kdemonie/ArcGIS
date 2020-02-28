// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/infographics/simpleInfographic/dataDrilling/panels/US/Spending",["../../ChartBuilder","../../../../../charts/utils/ChartTypes"],function(b,c){var a={};a.apparelMenVsWomen={states:"n,a,i",defaultState:"a",stateSettings:{n:{isCurrency:!0},a:{title:"Apparel Men vs Women (Avg per Household)",isCurrency:!0}},fieldInfo:{isChart:!0,chartJson:b.createDonutChart({title:"Apparel Men vs Women",points:[{label:"Men`s Apparel",fullName:"clothing.X5002_X"},{label:"Women`s Apparel",
fullName:"clothing.X5016_X"}]})}};a.healthCare={states:"n,a,i",defaultState:"a",stateSettings:{n:{isCurrency:!0},a:{yAxisTitle:"Average dollars spent per household",isCurrency:!0}},fieldInfo:{isChart:!0,chartJson:b.createChart({title:"Health Care",points:[{label:"Health Insurance",fullName:"Health.X8002_X"},{label:"Medicare Payments",fullName:"Health.X8013_X"},{label:"Medical Care",fullName:"HealthPersonalCareCEX.X8018_X"},{label:"Medical Services",fullName:"HealthPersonalCareCEX.X8019_X"},{label:"Drugs and Vitamins",
fullName:"Health.X8028_X"},{label:"Medical Supplies",fullName:"HealthPersonalCareCEX.X8033_X"}],visualProps:{sorting:"Descending"}})}};a.eatingOut={states:"n,a,i",defaultState:"a",stateSettings:{n:{isCurrency:!0},a:{yAxisTitle:"Average dollars spent per household",isCurrency:!0}},fieldInfo:{isChart:!0,chartJson:b.createChart({title:"Eating Out",points:[{label:"Lunch",fullName:"food.X1132_X"},{label:"Dinner",fullName:"food.X1137_X"},{label:"Snacks",fullName:"food.X1142_X"},{label:"Breakfast",fullName:"food.X1147_X"}],
visualProps:{sorting:"Descending"}})}};a.purchasedMostRecentComputers={states:"n,p,i",defaultState:"p",stateSettings:{n:{yAxisTitle:"Number of households"},p:{yAxisTitle:"Percent of households"}},fieldInfo:{isChart:!0,chartJson:b.createChart({type:c.COLUMN,title:"Purchased Most Recent Computer",points:[{label:"1-2 years ago",fullName:"ElectronicsInternet.MP09048h_B"},{label:"3-4 years ago",fullName:"ElectronicsInternet.MP09049h_B"},{label:"5+ years ago",fullName:"ElectronicsInternet.MP09050h_B"}]})}};
a.avgSpentOnFoodAtStores={states:"n,p,i",defaultState:"p",stateSettings:{n:{yAxisTitle:"Number of households"},p:{yAxisTitle:"Percent of households"}},fieldInfo:{isChart:!0,chartJson:b.createChart({title:"Avg Spent per Household at Food Stores",points:[{label:"\x3c$100",fullName:"GroceryAlcoholicBeverages.MP13001h_B"},{label:"$100-$149",fullName:"GroceryAlcoholicBeverages.MP13002h_B"},{label:"$150+",fullName:"GroceryAlcoholicBeverages.MP13003h_B"}]})}};a.travel={states:"n,a,i",defaultState:"a",stateSettings:{n:{isCurrency:!0},
a:{yAxisTitle:"Average dollars spent per household",isCurrency:!0}},fieldInfo:{isChart:!0,chartJson:b.createChart({title:"Spending on Travel",points:[{label:"Transportation Costs",fullName:"TravelCEX.X7002_X"},{label:"Lodging on Trips",fullName:"TravelCEX.X7015_X"},{label:"Vacation Clubs",fullName:"TravelCEX.X7016_X"},{label:"Food \x26 Drink on Trips",fullName:"TravelCEX.X7017_X"},{label:"Entertainment on Trips",fullName:"TravelCEX.X7021_X"}],visualProps:{sorting:"Descending"}})}};a.interestInSports=
{states:"n,p,i",defaultState:"i",stateSettings:{n:{yAxisTitle:"Number of adults"},p:{yAxisTitle:"Percent of adults"}},fieldInfo:{isChart:!0,chartJson:b.createChart({title:"Interest in Sports (Market Potential)",points:[{label:"College basketball Super Fan",fullName:"sports.MP33100a_B"},{label:"College football Super Fan",fullName:"sports.MP33101a_B"},{label:"Golf Super Fan",fullName:"sports.MP33102a_B"},{label:"High school sports Super Fan",fullName:"sports.MP33103a_B"},{label:"MLB Super Fan",fullName:"sports.MP33104a_B"},
{label:"NASCAR Super Fan",fullName:"sports.MP33105a_B"},{label:"NBA Super Fan",fullName:"sports.MP33106a_B"},{label:"NFL Super Fan",fullName:"sports.MP33107a_B"},{label:"NHL Super Fan",fullName:"sports.MP33108a_B"},{label:"Soccer Super Fan",fullName:"sports.MP33113a_B"}],visualProps:{sorting:"Descending"}})}};a.purchasedMusic={states:"n,p,i",defaultState:"p",stateSettings:{n:{yAxisTitle:"Number of adults"},p:{yAxisTitle:"Percent of adults"}},fieldInfo:{isChart:!0,chartJson:b.createChart({title:"Purchased Music",
points:[{label:"At electronics store",fullName:"MediaRadioOtherAudio.MP22081a_B"},{label:"At discount department store",fullName:"MediaRadioOtherAudio.MP22082a_B"},{label:"At music store",fullName:"MediaRadioOtherAudio.MP22083a_B"},{label:"Through amazon prime",fullName:"MediaRadioOtherAudio.MP22084a_B"},{label:"Through google play",fullName:"MediaRadioOtherAudio.MP22085a_B"},{label:"Through iTunes",fullName:"MediaRadioOtherAudio.MP22086a_B"},{label:"Through other online site",fullName:"MediaRadioOtherAudio.MP22087a_B"}],
visualProps:{sorting:"Descending"}})}};a.timeOnline={states:"n,p,i",defaultState:"p",stateSettings:{n:{yAxisTitle:"Number of adults"},p:{yAxisTitle:"Percent of adults"}},fieldInfo:{isChart:!0,chartJson:b.createChart({title:"Time Online",points:[{label:"10+ hours",fullName:"ElectronicsInternet.MP19066a_B"},{label:"5-9.9 hours",fullName:"ElectronicsInternet.MP19067a_B"},{label:"2-4.9 hours",fullName:"ElectronicsInternet.MP19068a_B"},{label:"1-1.9 hours",fullName:"ElectronicsInternet.MP19069a_B"},{label:"0.5-0.9 hours",
fullName:"ElectronicsInternet.MP19070a_B"},{label:"\x3c0.5 hours",fullName:"ElectronicsInternet.MP19071a_B"}]})}};a.movieGenre={states:"n,p,i",defaultState:"i",stateSettings:{n:{yAxisTitle:"Number of adults"},p:{yAxisTitle:"Percent of adults"}},fieldInfo:{isChart:!0,chartJson:b.createChart({title:"Movie Genre - Watched in the last 6 Months",points:[{label:"Action",fullName:"LeisureActivitiesLifestyle.MP20049a_B"},{label:"Adventure",fullName:"LeisureActivitiesLifestyle.MP20050a_B"},{label:"Comedy",
fullName:"LeisureActivitiesLifestyle.MP20051a_B"},{label:"Crime",fullName:"LeisureActivitiesLifestyle.MP20052a_B"},{label:"Drama",fullName:"LeisureActivitiesLifestyle.MP20053a_B"},{label:"Family",fullName:"LeisureActivitiesLifestyle.MP20054a_B"},{label:"Fantasy",fullName:"LeisureActivitiesLifestyle.MP20055a_B"},{label:"Horror",fullName:"LeisureActivitiesLifestyle.MP20056a_B"},{label:"Romance",fullName:"LeisureActivitiesLifestyle.MP20057a_B"},{label:"Science fiction",fullName:"LeisureActivitiesLifestyle.MP20058a_B"},
{label:"Thriller",fullName:"LeisureActivitiesLifestyle.MP20059a_B"}],visualProps:{sorting:"Descending"}})}};a.annualHealthExpenditures={states:"n,a,i",defaultState:"a",stateSettings:{n:{isCurrency:!0},a:{yAxisTitle:"Average dollars spent per household",isCurrency:!0}},fieldInfo:{isChart:!0,chartJson:b.createChart({title:"Average Health Insurance Expenditures",points:[{label:"Blue Cross/Blue Shield",fullName:"Health.X8006_X"},{label:"Medical Payments",fullName:"Health.X8013_X"},{label:"Physician Services",
fullName:"Health.X8020_X"},{label:"Dental Services",fullName:"Health.X8021_X"},{label:"Eyecare Services",fullName:"Health.X8022_X"},{label:"Lab Tests/X-rays",fullName:"Health.X8024_X"},{label:"Hospital Room \x26 Hospital Service",fullName:"Health.X8025_X"},{label:"Convalescent/Nursing Home Care",fullName:"Health.X8026_X"}],visualProps:{sorting:"Descending"}})}};a.medicalServices={states:"n,a,i",defaultState:"a",stateSettings:{n:{isCurrency:!0},a:{yAxisTitle:"Average dollars spent per household",isCurrency:!0}},
fieldInfo:{isChart:!0,chartJson:b.createChart({title:"Medical Services",points:[{label:"Physician",fullName:"Health.X8020_X"},{label:"Dental",fullName:"Health.X8021_X"},{label:"Eyecare",fullName:"Health.X8022_X"},{label:"Lab Tests/X-rays",fullName:"Health.X8024_X"},{label:"Hospital Room \x26 Service",fullName:"Health.X8025_X"},{label:"Convalescent/Nursing Home Care",fullName:"Health.X8026_X"},{label:"Other",fullName:"HealthPersonalCareCEX.X8027_X"}],visualProps:{sorting:"Descending"}})}};a.medicarePopulation65Plus=
{states:"n,p",defaultState:"p",stateSettings:{n:{yAxisTitle:"Number of households"},p:{yAxisTitle:"Percent of households"}},fieldInfo:{isChart:!0,chartJson:b.createChart({title:"Medicare: Population 65+",points:[{label:"Medicare Only",fullName:"Health.ACS65MEDCR"},{label:"Direct-Purchase \x26 Medicare",fullName:"healthinsurancecoverage.ACS65HI2PM"},{label:"Employer \x26 Medicare",fullName:"healthinsurancecoverage.ACS65HI2EM"},{label:"Medicare \x26 Medicaid",fullName:"healthinsurancecoverage.ACS65HI2MM"}],
visualProps:{sorting:"Descending"}})}};a.entertainmentRecreation={states:"n,a,i",defaultState:"a",stateSettings:{n:{isCurrency:!0},a:{yAxisTitle:"Average dollars spent per household",isCurrency:!0}},fieldInfo:{isChart:!0,chartJson:b.createChart({title:"Entertainment/Recreation",points:[{label:"Fees \x26 Admissions",fullName:"entertainment.X9004_X"},{label:"TV/Video/Audio",fullName:"entertainment.X9011_X"},{label:"Pets",fullName:"entertainment.X9035_X"},{label:"Toys \x26 Games",fullName:"entertainment.X9040_X"},
{label:"Recreational Vehicles \x26 Fees",fullName:"entertainment.X9046_X"},{label:"Sports/Rec/Exercise Equip",fullName:"entertainment.X9051_X"},{label:"Photo Equipment/Supplies",fullName:"entertainment.X9060_X"},{label:"Reading",fullName:"entertainment.X9065_X"}],visualProps:{sorting:"Descending"}})}};a.householdGoods={states:"n,a,i",defaultState:"a",stateSettings:{n:{isCurrency:!0},a:{yAxisTitle:"Average dollars spent per household",isCurrency:!0}},fieldInfo:{isChart:!0,chartJson:b.createChart({title:"Household Goods",
points:[{label:"Housekeeping Supplies",fullName:"HousingHousehold.X4033_X"},{label:"Household Textiles",fullName:"HousingHousehold.X4044_X"},{label:"Furniture",fullName:"HousingHousehold.X4052_X"},{label:"Rugs",fullName:"HousingHousehold.X4062_X"},{label:"Major Appliances",fullName:"HousingHousehold.X4063_X"},{label:"Housewares",fullName:"HousingHousehold.X4074_X"},{label:"Small Appliances",fullName:"HousingHousehold.X4082_X"},{label:"Other HH Items",fullName:"HousingHousehold.X4085_X"}],visualProps:{sorting:"Descending"}})}};
a.householdServices={states:"n,a,i",defaultState:"a",stateSettings:{n:{isCurrency:!0},a:{yAxisTitle:"Average dollars spent per household",isCurrency:!0}},fieldInfo:{isChart:!0,chartJson:b.createChart({title:"Household Services",points:[{label:"Household Operations",fullName:"HousingHousehold.X4001_X"},{label:"Child Care",fullName:"HousingHousehold.X4003_X"},{label:"Lawn \x26 Garden",fullName:"HousingHousehold.X4009_X"},{label:"Home Security System",fullName:"HousingHousehold.X4015_X"},{label:"Termite/Pest Control",
fullName:"HousingHousehold.X4020_X"},{label:"Appliance Repair",fullName:"HousingHousehold.X4025_X"},{label:"Housekeeping",fullName:"HousingHousehold.X4016_X"}],visualProps:{sorting:"Descending"}})}};return a});