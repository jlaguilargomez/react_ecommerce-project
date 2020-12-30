import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items }) => (
  <div className='collection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
      {items
        // Solo queremos los 4 primeros elementos de cada ARRAY
        .filter((item, index) => {
          return index < 4;
        })
        .map(({ id, ...otherItemProps }) => (
          <CollectionItem key={id} {...otherItemProps}></CollectionItem>
        ))}
    </div>
  </div>
);

export default CollectionPreview;
