import React from 'react';
import { SketchPicker } from 'react-color';
import { Responsive as ResponsiveGridLayout } from "react-grid-layout";
import GridLayout from "react-grid-layout";

const ChartResize = () => {

  const layout = [
    { i: "a", x: 0, y: 0, w: 1, h: 2, isResizable:true },
    { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
    { i: "c", x: 4, y: 0, w: 1, h: 2 },
    { i: "sketch", x: 0, y: 0, w: 1, h: 60 }
  ];

  return (
       <GridLayout
        className="layout"
        layout={layout}
        cols={12}
        rowHeight={30}
        width={1200}
      >
        <div key="a" className='bg-cyan-800'>a</div>
        <div key="b"  className='bg-blue-700'>b</div>
        <div key="c" className='bg-yellow-500'>c</div>
        <div key="sketch" className='m-5 pr-6'><SketchPicker /></div>
      </GridLayout>
  )
}

export default ChartResize;
