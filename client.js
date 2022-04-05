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

// INPUT an employee from employees

// IF the employee.rating is equal or less than 2 no bonus

// ELSE IF the employee.rating is 3 bonus is 4% of annual salary

// ELSE IF the employee.rating is 4 bonus is 6% of annual salary

// ELSE IF the employee.rating is 5 bonus is 10% of annual salary

// END EMPLOYEE RATING IF

// IF employeeNumber is 4 digits, then get get an additional 5%

// IF annualSalary is greater than 65k bonus should be adjusted down 1%

// No bonus can be above 13%
// No bonus can be below 0%

// OUTPUT a new object with employee name ,bonus percentage, 
// total compensation of base + bonus. total bonus will be total 
// compensation rounded to the nearest dollar (maybe appended to the DOM)