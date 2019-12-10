import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

import {
    SEARCH_DASHBOARD_REQUESTED,
    SEARCH_DASHBOARD_SUCCEEDED,
    SEARCH_DASHBOARD_FAILED,
    DASHBOARD_REQUESTED,
    DASHBOARD_SUCCEEDED,
    DASHBOARD_FAILED
  } from "./actionCreator";



  function* dashData({data}) {
    try {
      const dashData = yield call(dashDataApi,data);
      yield put({
        type: DASHBOARD_SUCCEEDED,
        payload: dashData
      });
    
    } catch (error) {
      yield put({
        type: DASHBOARD_FAILED,
        payload: error.response.data
      });
    }
  }
  function dashDataApi(data) {
   return  fetch(`https://api.punkapi.com/v2/beers?page=${data.activePage}&per_page=${data.itemCount}`)
        .then(response => response.json())
        .then(myJson => myJson)
  }
  function* searchDashData(payload) {
    try {
      const dashData = yield call(searchDashDataApi,payload);
      yield put({
        type: SEARCH_DASHBOARD_SUCCEEDED,
        payload: dashData
      });
    } catch (error) {
      yield put({
        type: SEARCH_DASHBOARD_FAILED,
        payload: error.response.data
      });
    }
  }
  function searchDashDataApi({data}) {
      if(Number(data)){
return fetch(`https://api.punkapi.com/v2/beers?abv_gt=${data}`)
.then(response => response.json())
.then(myJson => myJson)
      
  }
else{
  let string = data.replace(' ', '_')
    return fetch(`https://api.punkapi.com/v2/beers?beer_name=${string}`)
    .then(response => response.json())
    .then(myJson => myJson)
}
}




function* sagas(){
    yield takeLatest(DASHBOARD_REQUESTED,dashData);
    yield takeLatest(SEARCH_DASHBOARD_REQUESTED, searchDashData);
}

export default sagas;