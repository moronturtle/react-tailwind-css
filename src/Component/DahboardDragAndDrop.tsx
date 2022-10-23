import React from "react";
import { Responsive, WidthProvider }  from "react-grid-layout";
import "../../node_modules/react-grid-layout/css/styles.css";
import "../../node_modules/react-resizable/css/styles.css";

const DATA_EXAMPLE = [
  {
    id: 1,
    type: "timeseries",
    gridPos: { x: 0, y: 0, w: 1, h: 2 },
  },
  {
    id: 2,
    type: "pie_chart",
    gridPos: { x: 1, y: 0, w: 3, h: 1 },
  },
  {
    id: 3,
    type: "line_chart",
    gridPos: { i: "c", x: 4, y: 0, w: 1, h: 2 },
  },
];

const lele = [
    { i: 'a', x: 0, y: 0, w: 1, h: 2 },
    { i: 'b', x: 1, y: 0, w: 3, h: 1 },
    { i: 'c', x: 4, y: 0, w: 1, h: 2 }
  ];

const DahboardDragAndDrop = () => {

const ResponsiveGridLayout = WidthProvider(Responsive);
  return (
    <ResponsiveGridLayout
      className="layout"
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
    >
        <div key="a" data-grid={{ x: 0, y: 0, w: 1, h: 2 }} style={{backgroundColor:'red'}}>
          asdsds
        </div>
        <div key="b" data-grid={{ x: 1, y: 0, w: 1, h: 7 }} style={{backgroundColor:'yellow'}}>
          b
        </div>
        <div key="c" data-grid={{ x: 2, y: 0, w: 1, h: 2 }} style={{backgroundColor:'blue'}}>
          c
        </div>
    </ResponsiveGridLayout>

  );
};

export default DahboardDragAndDrop;
