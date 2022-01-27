export const cartReducer = (state, action) => {
  /* action: action is i.e ma be increment or decrement 
    -action take two things one is type and other thing is payload.
    -So payload contains the date that we want to put in the state and manipulate the state.
    -(...) before three dots represents the destructuring. 
    */
  switch (action.type) {
    case "ADD_TO_CART":
      // It will return all of our state, and manipulate our cart state.
      /* cart:[__, {}]: here __: destructuring the everthing that is inside the state already. 
        {}: there we need to add, what we are sending from our app to it, we send the payload.
    */
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    case "REMOVE_FROM_CART":
      /* -Here we are going to filter it, so wheather the product that which is being send from over there we ar going to filter it up.
      -c.id: it compare with every single element inside of the cart.
       */
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      };
    case "CHANGE_CART_QTY":
      return {
        ...state,
        cart: state.cart.filter((c) =>
          c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
        ),
      };
    default:
      return state;
  }
};

export const extrasReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
