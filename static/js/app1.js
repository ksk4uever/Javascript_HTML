// from data.js
var tableData = data;

// YOUR CODE HERE!
console.log(tableData);


var tbody = d3.select("tbody");

data.forEach((ufosightings) => {
    var row = tbody.append("tr");
    Object.entries(ufosightings).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
  });
  

var submit = d3.select("#submit");

submit.on("click", function() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    console.log(inputValue);
    console.log(tableData);
  
    var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);
  
    console.log(filteredData);

    // d3.event.preventDefault();

});
