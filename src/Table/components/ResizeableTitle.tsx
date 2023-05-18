import * as React from 'react';
import { Resizable } from 'react-resizable';
import 'react-resizable/css/styles.css';

export const ResizeableTitle = (props) => {
  const { onResize, width, onResizeStart, onResizeStop, ...restProps } = props;

  if (!width) {
    return <th {...restProps} />;
  }

  return (
    <Resizable
      width={width}
      height={0}
      onResize={onResize}
      onResizeStart={onResizeStart}
      onResizeStop={onResizeStop}
    >
      <th {...restProps} />
    </Resizable>
  );
};
