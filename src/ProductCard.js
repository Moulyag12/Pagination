import React from 'react';
const ProductCard= React.memo(({image,title})=>{
return(
  <div className="product-card">
    <img src={image} alt={title} className="product-img"/>
    <span>{title}</span>
  </div>
);
});

export default ProductCard

/* useMemo:: It memoizes a value or computed result (e.g., an array, object, number) so it's not recalculated every render
React.memo: Optimizes Component Re-renders--It prevents a  functional component from re-rendering if its props haven’t changed.  */