const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );
function bonusCalculator(employee){
let calculatedBonus = {     
  name: employee.name,
};
//make empty object
// INPUT an employee from employees 
if (employee.reviewRating <= 2){
  calculatedBonus.bonusPercentage = 0;
}
// IF the employee.rating is equal or less than 2 no bonus
else if (employee.reviewRating === 3){
  calculatedBonus.bonusPercentage = 0.04;
}
// ELSE IF the employee.rating is 3 bonus is 4% of annual salary
else if (employee.reviewRating === 4){
  calculatedBonus.bonusPercentage = 0.06;
}
// ELSE IF the employee.rating is 4 bonus is 6% of annual salary
else if (employee.reviewRating === 5){
  calculatedBonus.bonusPercentage = 0.1;
}
// ELSE IF the employee.rating is 5 bonus is 10% of annual salary

// END EMPLOYEE RATING IF
if (employee.employeeNumber.length === 4) {
  calculatedBonus.bonusPercentage += 0.05;
}
// IF employeeNumber is 4 digits, then get get an additional 5%
if (employee.annualSalary > 65000) {
  calculatedBonus.bonusPercentage -= 0.01;
}
// IF annualSalary is greater than 65k bonus should be adjusted down 1%
if (calculatedBonus.bonusPercentage > 0.13) {
  calculatedBonus.bonusPercentage = 0.13;
} else if (calculatedBonus.bonusPercentage < 0) {
  calculatedBonus.bonusPercentage = 0;
}
// No bonus can be above 13%
// No bonus can be below 0%

calculatedBonus.totalCompensation = Number(employee.annualSalary) + Number(employee.annualSalary) * calculatedBonus.bonusPercentage
calculatedBonus.totalBonus = Math.round(calculatedBonus.totalCompensation)


return calculatedBonus; 

// OUTPUT a new object with employee name ,bonus percentage, 
// total compensation of base + bonus. total bonus will be total 
// compensation rounded to the nearest dollar (maybe appended to the DOM)
 
}

for (let employee of employees) {
  console.log(bonusCalculator(employee));
}