// JavaScript source code
var companySalesData = [
  {
      name: "Telus",
      province: "BC",
      sales: [100, 200, 400]
  },
  {
      name: "Bombardier",
      province: "AB",
      sales: [80, 20, 10, 100, 90, 500]
  },
  {
      name: "Telus",
      province: "SK",
      sales: [500, 100]
  }
];
var salesTaxRates = {
    AB: 0.05,
    BC: 0.12,
    SK: 0.10
};
function calculateSalesTax(salesData, taxRates) {
    // Implement your code here
    var results = {};
    for (var company in salesData) {
        var id = salesData[company].name;
        if (!(id in results)) {
            results[id] = {};
            results[id].totalSales = totalSales(salesData[company].sales);
            results[id].totalTaxes = totalTaxes(totalSales(salesData[company].sales), salesTaxRates[salesData[company].province]);
        }
        else {
            results[id].totalSales += totalSales(salesData[company].sales);
            results[id].totalTaxes += totalTaxes(totalSales(salesData[company].sales), salesTaxRates[salesData[company].province]);
        }
    }
    function totalSales(sales) {
        var total = 0;
        for (var sale of sales) {
            total += sale;
        }
        return total;
    }
    function totalTaxes(sales, region) {
        return sales * (region);
    }
    return results;
}

var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);
/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/

