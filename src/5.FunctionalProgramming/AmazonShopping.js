// Amazon SHopping cart
// Implement a cart feature:
//  1. Add items to cart.
//  2. Add 3% tax to item in cart
//  3. Buy item: cart -> purchases
//  4. Empty cart

const user = {
    name: 'kim',
    active: true,
    cart: [],
    purchases: []
}


const amazonHistory = [] // have the purcahse history

// Creating compose here
const compose = (f, g) => (...args) => f(g(...args));

// calling the purchase item  (.....functions...)(user, item)
purchaseItem(emptyCart, buyItem, applyTaxToItems, addItemToCart)
    (user, {name: 'laptop', price:200})

// functions are the args here
function purchaseItem(...fns){
    return fns.reduce(compose)
}


// adding the items to the cart
function addItemToCart(user, item){
    amazonHistory.push(user)
    const updateCart = user.cart.concat(item)
    return Object.assign({}, user, {cart: updateCart})
}

// applying tax to the items
function applyTaxToItems(user){
    amazonHistory.push(user)
    const {cart} = user; // or use user.cart      ......cart......
    const taxRate = 1.30; 
    const updateCart = cart.map(item => { // map each item to update the tax rate
        return {
            name: item.name,
            price: item.price * taxRate
        }
    })
    return Object.assign({}, user, {cart: updateCart})// create a copy of the obj and update the tax
}

function buyItem(user){ // move the items to purchases
    amazonHistory.push(user)
    return Object.assign({}, user, {purchases: user.cart})
}

function emptyCart(user){ // empty the cart array
    amazonHistory.push(user)
    return Object.assign({}, user, {cart: []})
}