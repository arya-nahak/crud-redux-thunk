const initialState = {
  data: [],
  singleData: {},
  isLoading: false,
  error: null,
  addReq: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    // Read
    case "REQUEST":
      return { ...state, isLoading: true };
    case "SUCCESS":
      return { ...state, isLoading: false, data: payload };
    case "FAILURE":
      return { ...state, isLoading: false, error: payload };
    // Create
    case "ADD_REQUEST":
      return { ...state, isLoading: true, addReq: false };
    case "ADD_SUCCESS":
      return { ...state, isLoading: false, addReq: true };
    case "ADD_FAILURE":
      return { ...state, isLoading: false, error: payload, addReq: false };
    // Update
    case "EDIT_SUCCESS":
      return { ...state, isLoading: false, singleData: payload, addReq: true };
    case "EDIT_FAILURE":
      return { ...state, isLoading: false, error: payload, addReq: false };

    case "update_REQUEST":
      return { ...state, isLoading: true, addReq: false };
    case "update_SUCCESS":
      return { ...state, isLoading: false, addReq: true };
    case "update_FAILURE":
      return { ...state, isLoading: false, error: payload, addReq: false };
    // Delete
    case "DELETE_REQUEST":
      return { ...state, isLoading: true };
    case "DELETE_SUCCESS":
      return {
        ...state,
        isLoading: false,
        data: state.data.filter((item) => item.id !== payload),
      };
    case "DELETE_FAILURE":
      return { ...state, isLoading: false, error: payload };

    default:
      return state;
  }
};
