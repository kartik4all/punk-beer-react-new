import React, { Component } from "react";
import Header from "./header";
import { Dashboard } from "./../Routes/dashboard";
import { Favourites } from "./../Routes/favourites";
import { Route, Switch } from "react-router-dom";
import Pagination from "react-js-pagination";

class BeerApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dashData: null,
      searchedValue: "",
      filteredData: [],
      itemCountPerPage: 10,
      activePage: 1
    };
    this.filteredArray = [];
    this.searchButton = this.searchButton.bind(this);
    this.searchInput = this.searchInput.bind(this);
    this.addToFav = this.addToFav.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
  }
  componentDidMount() {
    this.props.dashBoardData({
      activePage: this.state.activePage,
      itemCount: this.state.itemCountPerPage
    });
  }
  componentWillReceiveProps(nextprops) {
    if (nextprops.type == "DASHBOARD_SUCCEEDED") {
      this.setState({ dashData: nextprops.data }, () => {
        this.state.dashData.forEach(function(element) {
          element.flag = false;
        });
      });
    }
    if (nextprops.type == "SEARCH_DASHBOARD_SUCCEEDED") {
      this.setState({ dashData: nextprops.data });
    }
  }
  searchButton() {
    this.state.searchedValue &&
      this.state.searchedValue.length &&
      this.props.searchDashData(this.state.searchedValue);
  }
  handlePageChange(pageNumber) {
    this.setState({ activePage: pageNumber }, () => {
      this.props.dashBoardData({
        activePage: this.state.activePage,
        itemCount: this.state.itemCountPerPage
      });
    });
  }

  searchInput(e) {
    this.setState({ searchedValue: e.target.value });
  }
  addToFav(e, item) {
    item["flag"] = !item["flag"];
    let exist = false;
    this.filteredArray.map(i => {
      if (item.name == i.name) {
        exist = true;
        i.flag = item["flag"];
        alert('Favourite status changed')
        return false;
      }
    });
    !exist && this.filteredArray.push(item) && alert('Added to favourites');
    this.setState({ filteredData: this.filteredArray });
  }

  render() {
    return (
      <article>
        <Header />

        <Switch>
          <Route
            exact
            path="/"
            component={() => (
              <Dashboard
                searchedValue={this.state.searchedValue}
                dashData={this.state.dashData}
                searchInput={this.searchInput}
                searchButton={this.searchButton}
                addToFav={this.addToFav}
              />
            )}
          />
          <Route
            path="/favourites"
            component={() => (
              <Favourites
                filteredData={this.state.filteredData}
                addToFav={this.addToFav}
              />
            )}
          />
        </Switch>
        <br />
        <br />
        <div className="form-row">
          <Pagination
            activePage={this.state.activePage}
            itemsCountPerPage={this.state.itemCountPerPage}
            totalItemsCount={450}
            pageRangeDisplayed={9}
            onChange={this.handlePageChange}
          />
        </div>
      </article>
    );
  }
}
export default BeerApp;
