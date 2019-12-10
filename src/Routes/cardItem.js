import React from "react";
export const CardItem = props => {
  const { item, addToFav } = props;
  return (
    <div className="col-sm-4 ">
      <div id={item.id} className="card  ">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={item.image_url} className="card-img" alt="No image" />
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">{item.description}</p>
            </div>
          </div>
          <div className="col-md-2">
            <button className="starBtn" onClick={e => addToFav(e, item)}>
              <i className={item.flag?"fa fa-star fav" : "fa fa-star"} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardItem;
