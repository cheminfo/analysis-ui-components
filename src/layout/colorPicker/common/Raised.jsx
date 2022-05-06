import merge from 'lodash/merge';
import React from 'react';
import reactCSS from 'reactcss';

// type ZDepth = 0 | 1 | 2 | 3 | 4 | 5;

// interface RaisedProps {
//   background: string;
//   zDepth: ZDepth;
//   radius: number;
//   styles: object;
//   children: React.ReactNode;
// }

export const Raised = (props) => {
  const {
    background = '#fff',
    zDepth = 1,
    radius = 2,
    styles: passedStyles = {},
    children,
  } = props;

  const styles = reactCSS(
    merge(
      {
        default: {
          wrap: {
            position: 'relative',
            display: 'inline-block',
          },
          content: {
            position: 'relative',
          },
          bg: {
            absolute: '0px 0px 0px 0px',
            boxShadow: `0 ${zDepth}px ${zDepth * 4}px rgba(0,0,0,.24)`,
            borderRadius: radius,
            background,
          },
        },
        'zDepth-0': {
          bg: {
            boxShadow: '0px 0px 0px rgba(0,0,0)',
          },
        },

        'zDepth-1': {
          bg: {
            boxShadow: '0 2px 10px rgba(0,0,0,.12), 0 2px 5px rgba(0,0,0,.16)',
          },
        },
        'zDepth-2': {
          bg: {
            boxShadow: '0 6px 20px rgba(0,0,0,.19), 0 8px 17px rgba(0,0,0,.2)',
          },
        },
        'zDepth-3': {
          bg: {
            boxShadow:
              '0 17px 50px rgba(0,0,0,.19), 0 12px 15px rgba(0,0,0,.24)',
          },
        },
        'zDepth-4': {
          bg: {
            boxShadow:
              '0 25px 55px rgba(0,0,0,.21), 0 16px 28px rgba(0,0,0,.22)',
          },
        },
        'zDepth-5': {
          bg: {
            boxShadow:
              '0 40px 77px rgba(0,0,0,.22), 0 27px 24px rgba(0,0,0,.2)',
          },
        },
        square: {
          bg: {
            borderRadius: '0',
          },
        },
        circle: {
          bg: {
            borderRadius: '50%',
          },
        },
      },
      passedStyles,
    ),
    { 'zDepth-1': zDepth === 1 },
  );

  return (
    <div style={styles.wrap}>
      <div style={styles.bg} />
      <div style={styles.content}>{children}</div>
    </div>
  );
};

export default Raised;
