import React from "react";
import { google, atlassian, shopify, slack, dropbox } from "./imports";
import "./Brand.scss";

const Brand = () => {
  return (
    <div className="gpt3__brand section-padding">
      <div>
        <img src={google} alt="" />
      </div>
      <div>
        <img src={slack} alt="" />
      </div>
      <div>
        <img src={atlassian} alt="" />
      </div>
      <div>
        <img src={dropbox} alt="" />
      </div>
      <div>
        <img src={shopify} alt="" />
      </div>
    </div>
  );
};

export default Brand;
