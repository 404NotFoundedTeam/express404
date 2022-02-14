const { createStore } = require("redux");
const initialState = {
  userData: {
    uid: undefined,
    userData: {},
  },
  korzina: [],
  categories: [],
  products: {},
  orders: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CATEGORIES":
      return { ...state, categories: { ...action.payload } };
    case "GET_PRODUCTS":
      return { ...state, products: { ...action.payload } };
    case "GET_ORDERS":
      return { ...state, orders: { ...action.payload } };
    case "HAVE_USER":
      return { ...state, user: { ...state.user, uid: action.payload } };
    case "USER_DATA":
      return { ...state, userData: { ...action.payload } };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
