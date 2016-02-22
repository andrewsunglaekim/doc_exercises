$(document).ready(function(){
  var ctx = $("#myChart").get(0).getContext("2d");
  var data = {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    datasets: [
      {
        label: "Mary",
        fillColor: "lemonchiffon",
        strokeColor: "black",
        data: [2, 1, 4, 1, 4]
      },
      {
        label: "Tom",
        fillColor: "papayawhip",
        strokeColor: "plum",
        data: [1, 2, 3, 2, 5]
      },
      {
        label: "Sue",
        fillColor: "lightcyan",
        strokeColor: "palevioletred",
        data: [1, 1, 4, 1, 5]
      }

    ]
  }

  var myBarChart = new Chart(ctx).Bar(data, {
    multiTooltipTemplate: "<%= datasetLabel %> - <%= value %>"
  })
})
