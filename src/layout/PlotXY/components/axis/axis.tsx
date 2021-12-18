import { axisBottom, axisLeft, AxisScale } from 'd3-axis';
import { select, selectAll } from 'd3-selection';
import React, { useEffect } from 'react';

export default function Axis(props: {
  scale: AxisScale<number>;
  orient: string;
  ticks?: number;
  transform: string;
}) {
  const { scale, orient, ticks, transform } = props;
  const ref = React.createRef<SVGGElement>();
  useEffect(() => {
    const renderAxis = () => {
      const node: any = ref.current;
      let axis: any;

      if (orient === 'bottom') {
        axis = axisBottom(scale);
      }
      if (orient === 'left') {
        axis = axisLeft(scale).ticks(ticks);
      }
      select(node).call(axis);
    };
    const updateAxis = () => {
      if (orient === 'left') {
        const axis: any = axisLeft(scale).ticks(ticks);
        selectAll(`.${orient}`).call(axis);
      }
    };
    renderAxis();
    return () => {
      updateAxis();
    };
  }, [orient, ref, scale, ticks]);

  return <g ref={ref} transform={transform} className={`${orient} axis`} />;
}
