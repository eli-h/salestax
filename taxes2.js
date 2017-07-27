function calculateTax(salesData, taxRate) {
	var result = {};
  for (var i in salesData) {
    var name = salesData[i]["name"];
    var province = salesData[i]["province"];
    var sales = salesData[i]["sales"];
    var sum = salesData[i]["sales"].reduce((a, b) => a + b, 0);
    var tax = sum * taxRate[province];
    if (result[name]) {
    	result[name]["totalSales"] += sum
    	result[name]["totalTaxes"] += tax
    } else {
    	result[name] = {
      	totalSales: sum,
      	totalTaxes: tax,
      };
    }
  }
  return result;
}



var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

console.log(calculateTax(companySalesData, salesTaxRates));