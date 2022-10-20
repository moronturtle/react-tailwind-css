import React, {useMemo} from 'react';
import _ from "lodash";
import RGL, { WidthProvider } from "react-grid-layout";
import { Responsive as ResponsiveGridLayout } from "react-grid-layout";


const DEFAULT_PROPS =  {
  className: "layout",
  items: 20,
  rowHeight: 30,
  onLayoutChange: function(test:any) {},
  cols: 12
};


const GridLayout = () => {

  const ReactGridLayout = WidthProvider(RGL);

  const layouts = useMemo(() => {
    return _.map(new Array(DEFAULT_PROPS.items), function(item, i) {
      const y = _.result(DEFAULT_PROPS, "y") || Math.ceil(Math.random() * 4) + 1;
      return {
        x: (i * 2) % 12,
        y: (Math.floor(i / 6) )* Number(y),
        w: 2,
        h: y,
        i: i.toString()
      };
    });
  }, []);
  console.log('layout', layout);

  const generatePosition = useMemo(() => {
    return _.map(_.range(DEFAULT_PROPS.items), function(i) {
      return (
        <div key={i}>
          <span className="text">{i}</span>
        </div>
      );
    });

  }, []);


  const onLayoutChange = (layout:any)=>{
    DEFAULT_PROPS.onLayoutChange(layout);
  };

  return (
    <>
         {/* <ReactGridLayout
        layout={layout}
        onLayoutChange={onLayoutChange}
      >
        {generatePosition}
      </ReactGridLayout> */}

      <ResponsiveGridLayout
        className="layout"
        layouts={layouts}
      >
        <div key="1">1</div>
        <div key="2">2</div>
        <div key="3">3</div>
      </ResponsiveGridLayout>
      <h4>TEST</h4>
    </>
  )
}

export default GridLayout