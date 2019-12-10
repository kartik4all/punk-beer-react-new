import BeerApp from "./../Components/beerApp";
import { connect } from "react-redux";
import { dashBoardData, searchDashData } from "../actionCreator";
const mapStateToProps = ({ Reducer }) => ({
  data: Reducer.data,
  type: Reducer.type
});

const mapDispatchToProps = dispatch => ({
  dashBoardData: data => dispatch(dashBoardData(data)),
  searchDashData: data => dispatch(searchDashData(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BeerApp);
