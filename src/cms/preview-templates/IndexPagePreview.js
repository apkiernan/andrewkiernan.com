import React from 'react';
import { IndexPageTemplate } from '../../templates/index-page';

const IndexPagePreview = ({ entry, widgetFor }) => {
  const image = entry.getIn(['data', 'image']);
  const title = entry.getIn(['data', 'title']);
  const heading = entry.getIn(['data', 'heading']);
  const subheading = entry.getIn(['data', 'subheading']);
  const description = entry.getIn(['data', 'description']);

  return (
    <IndexPageTemplate
      image={image}
      title={title}
      heading={heading}
      subheading={subheading}
      description={description}
      html={widgetFor('body')}
    />
  );
};

export default IndexPagePreview;
