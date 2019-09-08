import {
    SEARCH_DASHBOARD_REQUESTED,
    SEARCH_DASHBOARD_SUCCEEDED,
    SEARCH_DASHBOARD_FAILED,
    DASHBOARD_REQUESTED,
    DASHBOARD_SUCCEEDED,
    DASHBOARD_FAILED
  } from "./actionCreator";

  const initialState = {
    data:[],
    type:""
  };
  
  const Reducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case SEARCH_DASHBOARD_REQUESTED:
        return Object.assign({}, initialState, type);
      case SEARCH_DASHBOARD_SUCCEEDED:
        return Object.assign(
          {},
          { ...state },
          {
            data: payload,
            type: type
          }
        );
      case SEARCH_DASHBOARD_FAILED:
        return Object.assign(
          {},
          { ...state },
          {
            data: payload,
            type: type
          }
        );
        case DASHBOARD_REQUESTED:
            return Object.assign({}, initialState, type);
          case DASHBOARD_SUCCEEDED:
            return Object.assign(
              {},
              { ...state },
              {
                data: payload,
                type: type
              }
            );
          case DASHBOARD_FAILED:
            return Object.assign(
              {},
              { ...state },
              {
                data: payload,
                type: type
              }
            );
    
      default:
        return state;
    }
  };
  
  export default Reducer;
  