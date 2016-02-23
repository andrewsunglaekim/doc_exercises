$(document).ready(function(){
  var ctx = $("#myChart").get(0).getContext("2d");
  var data = [
    {
      value: 4,
      color: "chartreuse",
      highlight: "black",
      label: "A - I"
    },
    {
      value: 6,
      color: "orange",
      highlight: "red",
      label: "J-R"
    },
    {
      value: 4,
      color: "yellow",
      highlight: "green",
      label: "S-Z"
    }
  ]
  var myPieChart = new Chart(ctx).Doughnut(data)
  $("#legend").get(0).innerHTML = myPieChart.generateLegend()
})
