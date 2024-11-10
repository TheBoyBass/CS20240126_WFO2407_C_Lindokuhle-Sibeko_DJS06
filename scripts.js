// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

//Exercise 1
//Use `forEach` to log each name and each province to the console

names.forEach((name, index) => {
  console.log(name);
  console.log(provinces[index]);
  console.log(name, '(',provinces[index],')');
});

//Exercise 2

//**Uppercase Transformation**: Use `map` to create a new array of province names in all uppercase. Log the new array to the console

const Provinces_upper = provinces.map(province => province.toUpperCase());
console.log(Provinces_upper);

//Exercise 3
//**Name Lengths**: Create a new array using `map` that contains the length of each name.

const Name_length = names.map(name => name.length);
console.log(Name_length);

//Exercise 4
//**Sorting**: Use `sort` to alphabetically sort the provinces.

const Provinces_sorted = provinces.sort();
console.log(Provinces_sorted);

//Exercise 5
//**Filtering Cape**: Use `filter` to remove provinces containing "Cape". Log the count of remaining provinces.

const Not_Cape_provinces = provinces.filter(province => !province.includes('Cape'));
console.log(Not_Cape_provinces);
console.log(Not_Cape_provinces.length);

//Exercise 6
//**Finding 'S'**: Create a boolean array using `map` and `some` to determine if a name contains the letter 'S'.

const Contains_S = names.map(name => name.includes('S'));
console.log(Contains_S);
console.log(Contains_S.some(contains => contains === true));

//Exercise 7
// **Creating Object Mapping**: Use `reduce` to transform the names array into an object mapping names to their respective provinces.

const Name_to_province = names.reduce((acc, name, index) => {
  acc[name] = provinces[index];
  return acc;
}, {});
console.log(Name_to_province);


//Advanced Exercises (Single `console.log` Execution)

//Ecercise 1
//**Log Products**: Iterate over the products array, logging each product name.

products.forEach(product => console.log(product.product));

//Exercise 2
//**Filter by Name Length**: Filter out products with names longer than 5 characters.

const Long_products = products.filter(product => product.product.length > 5);
console.log(Long_products);

//Exercise 3
// **Price Manipulation**: Filter out products without prices, convert string prices to numbers, and calculate the total price using `reduce`.

const Price_products = products.filter(product => product.price !== '');
const Price_numbers = Price_products.map(product => Number(product.price));
const Total_price = Price_numbers.reduce((acc, price) => acc + price, 0);
console.log(Total_price);