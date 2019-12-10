import React from "react";
import CardItem from "./cardItem";
export const Dashboard = props => {
  const {
    dashData,
    searchButton,
    searchInput,
    searchedValue,
    addToFav
  } = props;
  return (
    <article className="container">
      <section id="search">
        <br />
        <form className="form-inline ">
          <input
            autoFocus
            onChange={searchInput}
            name="searchedValue"
            className="form-control mr-sm-2"
            type="text"
            placeholder="Search"
            value={searchedValue}
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="button"
            onClick={searchButton}
          >
            Search
          </button>
        </form>
        <br /> <br />
      </section>
      <section id="dashData">
        <div className="row ">
          {dashData &&
            dashData.map((item, index) => {
              return <CardItem item={item} addToFav={addToFav} />;
            })}
        </div>
      </section>
    </article>
  );
};
export default Dashboard;
