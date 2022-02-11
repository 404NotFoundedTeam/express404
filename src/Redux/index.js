const { createStore } = require("redux");

const initialState = {
  layout: {
    theme: "light",
  },
  user: {
      uid: NaN,
  },
  categories: {

  },
  prodcts: {

  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        ...state,
        layout: {
          ...state.layout,
          theme: state.layout.theme === "dark" ? "light" : "dark",
        },
      };
    case "ADD_TASK":
      return {
        ...state,
        tasks: [
          ...state.tasks,
          { id: setId(state.tasks), title: action.payload, completed: false },
        ],
      };
    case "EDIT_TASK":
      return {
        ...state,
        tasks: [...state.tasks],
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;