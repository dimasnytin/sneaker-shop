const cart = [{
  name:'Арбуз',
  price:100,
  count:1,
},{
  name: 'Хлеб',
  price: 10,
  count: 2,
},{
  name: 'Молоко',
  price: 50,
  count: 1,
}];

let finalPrice = 0;

for (let i = 0; i < cart.length; i++){
  const product = cart[i];
  

  finalPrice += (product.price * product.count);
};

console.log(finalPrice);

function calculateFinalPrice() {

  let finalPrice = 0;

  for (let i = 0; i < cart.length; i++) {
    const product = cart[i];


    finalPrice += (product.price * product.count);
  };

  return finalPrice;
}