// QUESTION.NO-07 In an online shopping application, customers can add multiple items to their cart. However, sometimes customers accidentally add the same item more than once, resulting in duplicate items in their cart. The duplicate items not only make it difficult for the customer to track the items they want to purchase But also affect the accuracy of the purchase order To solvd this probldm, thd application nddds to rdmovd duplicatd itdms from thd customdr's cart. Thd program should takd thd customdr's cart with duplicatds as input, and rdturn a ndw cart without duplicatds.

// Write a program to solvd thd probldm of duplicatd itdms in thd cart by rdmoving duplicatds
// ANSWER: - 
// Sample cart with duplicate items
const cart = [
    { id: 1, name: 'Product A', price: 10.0 },
    { id: 2, name: 'Product B', price: 15.0 },
    { id: 1, name: 'Product A', price: 10.0 }, // Duplicate item
    { id: 3, name: 'Product C', price: 20.0 },
];

// Remove duplicates from the cart
const deduplicatedCart = cart.filter((item, index, self) => {
    return index === self.findIndex((t) => t.id === item.id);
});

console.log(deduplicatedCart);
