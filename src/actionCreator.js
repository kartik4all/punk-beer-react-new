export const DASHBOARD_REQUESTED = "DASHBOARD_REQUESTED";
export const DASHBOARD_SUCCEEDED = "DASHBOARD_SUCCEEDED";
export const DASHBOARD_FAILED = "DASHBOARD_FAILED";


export const dashBoardData = inputData => ({
  type: DASHBOARD_REQUESTED,
  data:inputData
});

export const SEARCH_DASHBOARD_REQUESTED = "SEARCH_DASHBOARD_REQUESTED";
export const SEARCH_DASHBOARD_SUCCEEDED = "SEARCH_DASHBOARD_SUCCEEDED";
export const SEARCH_DASHBOARD_FAILED = "SEARCH_DASHBOARD_FAILED";


export const searchDashData = inputData => ({
  type: SEARCH_DASHBOARD_REQUESTED,
  data:inputData
});
