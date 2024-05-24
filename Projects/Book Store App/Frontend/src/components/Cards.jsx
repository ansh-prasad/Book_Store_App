import React from "react";

function Cards({ item }) {
  return (
    <>
      <div className="mt-6 my-3 p-3">
        <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200  border-white">
          <figure>
            <img src={item.image} alt="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.tital}</p>
            <div className="card-actions justify-between py-2 ">
              <div className="badge badge-outline  ">${item.price}</div>

              <button className="btn btn-primary ">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
