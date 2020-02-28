// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/infographics/simpleInfographic/dataDrilling/panels/US/Employees",["../../ChartBuilder"],function(b){var a={};a.civilianPopulation16Plus={states:"n,p",fieldInfo:{isChart:!0,chartJson:b.createDonutChart({title:"Civilian Population 16+",points:[{label:"Employed Civilian Pop 16+",fullName:"industry.EMP_CY"},{label:"Unemployed Population 16+",fullName:"industry.UNEMP_CY"}]})}};a.laborForceByOccupation={states:"n,p",defaultState:"p",stateSettings:{n:{yAxisTitle:"Number of adults 16+"},
p:{yAxisTitle:"Percent of adults 16+"}},fieldInfo:{isChart:!0,chartJson:b.createChart({title:"Labor Force by Occupation",points:[{label:"Management",fullName:"occupation.OCCMGMT_CY"},{label:"Business/Financial",fullName:"occupation.OCCBUS_CY"},{label:"Computer/Mathmatical",fullName:"occupation.OCCCOMP_CY"},{label:"Architecture/Engineer",fullName:"occupation.OCCARCH_CY"},{label:"Life/Social Sciences",fullName:"occupation.OCCSSCI_CY"},{label:"Social Service",fullName:"occupation.OCCSSRV_CY"},{label:"Legal",
fullName:"occupation.OCCLEGL_CY"},{label:"Education/Library",fullName:"occupation.OCCEDUC_CY"},{label:"Arts/Entertainment/Rec",fullName:"occupation.OCCENT_CY"},{label:"Health Practices",fullName:"occupation.OCCHTCH_CY"},{label:"Health Support",fullName:"occupation.OCCHLTH_CY"},{label:"Protective Service",fullName:"occupation.OCCPROT_CY"},{label:"Food Preperation",fullName:"occupation.OCCFOOD_CY"},{label:"Building Maintenance",fullName:"occupation.OCCBLDG_CY"},{label:"Personal Care",fullName:"occupation.OCCPERS_CY"},
{label:"Sales",fullName:"occupation.OCCSALE_CY"},{label:"Office/Admin",fullName:"occupation.OCCADMN_CY"},{label:"Farm/Fish/Forestry",fullName:"occupation.OCCFARM_CY"},{label:"Construction/Extraction",fullName:"occupation.OCCCONS_CY"},{label:"Maintenance/Repair",fullName:"occupation.OCCMAIN_CY"},{label:"Production",fullName:"occupation.OCCPROD_CY"},{label:"Transportation/Moving",fullName:"occupation.OCCTRAN_CY"}],visualProps:{sorting:"Descending"}})}};return a});