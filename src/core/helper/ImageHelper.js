import React from "react";
import { API } from "../../backend";

//Loading images

const ImageHelper = ({ product }) => {
  const imageurl = product
    ? `${API}/product/photo/${product._id}`
    : ``;
  return (
    <div className="rounded border border-success p-2">
      <img
        src={imageurl}
        alt="product"
        style={{ maxHeight: "100%", maxWidth: "100%" }}
        className="mb-3 rounded"
      />
    </div>
  );
};

export default ImageHelper;
