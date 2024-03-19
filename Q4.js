function calculateTax() {
    // Define tax rates based on income ranges using closure
    const taxRates = [
      { range: 10000, rate: 0.1 },
      { range: 30000, rate: 0.15 },
      { range: 70000, rate: 0.2 },
      { range: Infinity, rate: 0.25 }
    ];
  
    // Return a function that calculates the tax based on income
    return function(income) {
      let tax = 0;
      for (const { range, rate } of taxRates) {
        if (income <= range) {
          tax += income * rate;
          break;
        } else {
          tax += range * rate;
          income -= range;
        }
      }
      return tax;
    };
  }
  
  // Test the calculateTax function with various incomes
  const calculate = calculateTax();
  console.log("Tax for $5000 income:", calculate(5000));
  console.log("Tax for $15000 income:", calculate(15000));
  console.log("Tax for $40000 income:", calculate(40000));
  console.log("Tax for $80000 income:", calculate(80000));