import React from 'react';
import { PortfolioPageTemplate } from '../../templates/portfolio-page';

const PortfolioPagePreview = ({ entry, widgetFor }) => (
  <PortfolioPageTemplate title={entry.getIn(['data', 'title'])} content={widgetFor('body')} />
);

export default PortfolioPagePreview;
