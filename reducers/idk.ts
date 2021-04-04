/* import produce from "immer";

const initialState = {};

export const idk = (state = initialState, action) => {
  produce(state, (draft) => {
    switch (action.type) {
      case SET_INFO:
        draft[0].name = action.data.name;
        draft[0].address.city = action.data.city;
        break;
      case ADD_INFO:
        draft.push({ name: "hhh", address: { city: "zzz" } });
      default:
        return draft;
    }
  });
};
 */
