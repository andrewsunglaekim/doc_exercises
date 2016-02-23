$(document).ready(function(){
  var states = ["Alabama", "Alaska", "Arizona", "Arkansas"]
  var numEmployees = [234726, 12933, 134860, 148672]
  var ctx = $("#myChart").get(0).getContext("2d");
  var data = {
    labels: states,
    title: "bob",
    datasets: [
      {
        label: "Number Of Employees",
        fillColor: "lemonchiffon",
        strokeColor: "black",
        data: numEmployees
      }
    ]
  }

  var myBarChart = new Chart(ctx).Bar(data, {
    multiTooltipTemplate: "<%= datasetLabel %> - <%= value %>"
  })
})
