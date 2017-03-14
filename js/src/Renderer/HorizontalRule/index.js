import React, { PropTypes } from 'react';

const HorizontalRule = ({ block, contentState }) => {
  const entity = contentState.getEntity(block.getEntityAt(0));
  const { style, height, width } = entity.getData();
  return (<hr height={height} width={width} stlye={style} />);
};

HorizontalRule.propTypes = {
  block: PropTypes.object,
  contentState: PropTypes.object,
};

export default HorizontalRule;
