$(document).ready(function(){
  var ctx = $("#myChart").get(0).getContext("2d");
  var data = [
    {
      value: 75,
      color: "chartreuse",
      highlight: "black",
      label: "Apples"
    },
    {
      value: 30,
      color: "orange",
      highlight: "red",
      label: "Oranges"
    },
    {
      value: 20,
      color: "yellow",
      highlight: "green",
      label: "Bananas"
    }
  ]
  var myPieChart = new Chart(ctx).Pie(data)
})
