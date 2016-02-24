function convertResultsToObjects(response) {
  // grab the header row, since it's always the first row
  var headers = response[0];

  var results = []; // empty array which will store our converted objects

  // for each row, skipping the first (header) row
  for(var row=1; row < response.length; row++) {
    var currentRow = response[row]; // get the current row
    var newRowObj = {}; // make a new object to hold the converted data

    // for each column in the current row, move the data into the object
    // using the headers as the key, and the value from the current row as the
    // value
    for(var col=0; col < currentRow.length; col++) {
      var key  = headers[col];
      var value = currentRow[col];

      // we have to use the bracket notation here instead of the 'dot' notation
      // because the key is a variable (i.e. we don't know what it is until
      // the code runs)
      newRowObj[key] = value;
    }

    results.push(newRowObj);
  }

  // return the results so they can be used by the next function
  return results;
}



function graph(data, el) {
  el.highcharts({
    title: {
      text: data.title,
      x: -20 //center
    },
    xAxis: {
      title: {
        text: data.xAxisName
      },
      categories: data.years
    },
    yAxis: {
      title: {
          text: data.yAxisName
      },
      plotLines: [{
          value: 0,
          width: 1,
          color: '#808080'
      }]
    },
    tooltip: {
      valueSuffix: data.yAxisName
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle',
      borderWidth: 0
    },
    series: [{
      name: data.name,
      data: data.employees
    }]
  })
  // g = new Dygraph(el, data,
  // {
  //   labels: [ "Year", "Employment" ],
  //   width: 800
  // });
}
