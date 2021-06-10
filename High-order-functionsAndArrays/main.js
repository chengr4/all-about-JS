const companies = [
  {name: "Company One", category: "Finance", start: 1981, end: 2003},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// forEach

// filter
const canDrink = ages.filter((element) => {
  if(element >= 18) {
    return true;
  }
});

// cleaner code
const canDrink2 = ages.filter( element => element >= 18);

console.log(canDrink);

// map
// Create array of compamy names
const companyNames = companies.map(company => `${company.name}`);

console.log(companyNames);

// 先平方再乘2
const ageMap = ages.map(age => Math.pow(age,2)).map(age => age * 2);
console.log(ageMap);

// sort
const sortedCompanies = companies.sort(function(c1, c2){
  if(c1.start > c2.start) {
    return 1;
  } else {
    return -1;
  }
});

console.log(sortedCompanies);

// cleaner
const sortedCompanies2 = companies.sort((a, b) => (a.start > b.start ? 1: -1));

console.log(sortedCompanies2);

// sort ages
// increasing sort
const sortAges = ages.sort((a, b) => a-b);

// reduce
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5)); // 5 is initial value
// expected output: 15

