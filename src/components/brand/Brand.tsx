import React from 'react';
import { google, slack, atlassian, dropbox, shopify } from './imports';
import './brand.css';

const Brand = () => (
  <div className="gpt3__brand section__padding">
    <div>
      <img src={google} alt="pic"/>
    </div>
    <div>
      <img src={slack}alt="pic" />
    </div>
    <div>
      <img src={atlassian} alt="pic"/>
    </div>
    <div>
      <img src={dropbox}alt="pic" />
    </div>
    <div>
      <img src={shopify}alt="pic" />
    </div>
  </div>
);

export default Brand;
