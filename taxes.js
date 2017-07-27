function calculateTax(sales, taxRate) {
	var result = {};
	for (var i in sales) {
		if (result[sales[i].name] == undefined)

			result[sales[i].name] = sales[i]["sales"]

	  var sum = sales[i]["sales"].reduce((a, b) => a + b, 0);
	  
	  if (sales[i]["province"] == "AB") {
	  	tax = sum * 0.05
	  	sales[i]["totalTaxes"] = tax;
	  }
	  if (sales[i]["province"] == "BC") {
	  	tax = sum * 0.12;
	  	sales[i]["totalTaxes"] = tax;
	  }
	  if (sales[i]["province"] == "SK") {
	  	tax = sum * 0.10;
	  	sales[i]["totalTaxes"] = tax;
	  }
	  result["totalSales"] = sum
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

