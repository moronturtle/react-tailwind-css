import React from "react";
import { Responsive, WidthProvider }  from "react-grid-layout";
import "../../node_modules/react-grid-layout/css/styles.css";
import "../../node_modules/react-resizable/css/styles.css";
import LineChart from "../Component/LineChart";
import BarChart from "../Component/BarChart";
import RadarChart from "../Component/RadarChart";
import '../Component/test.css';

type ComponentList = {
  [key: string]: React.FC
}

const DATA_EXAMPLE = [
  {
    id: 1,
    type: "bar_chart",
    gridPos: { x: 0, y: 0, w: 3, h: 2 },
  },
  {
    id: 2,
    type: "radar_chart",
    gridPos: { x: 3, y: 0, w: 3, h: 3 },
  },
  {
    id: 3,
    type: "line_chart",
    gridPos: { x: 6, y: 0, w: 3, h: 2 },
  },
];

const GRAPH_COMPONENT_LIST : ComponentList= {
  bar_chart: BarChart,
  radar_chart: RadarChart,
  line_chart: LineChart
}

const generateComponent =(ComponentContent:React.FC) =>{
    return (
      <div style={{marginBottom:'0.5px'}}>
        <ComponentContent />
      </div>
    )
}

const onLayoutChange =(layout:any, layouts:any)=>{
  console.log('layout',layout);
  console.log('layouts',layouts);
};

const DahboardDragAndDrop = () => {

const ResponsiveGridLayout = WidthProvider(Responsive);
  return (
    <>
    <h2>bukan component</h2>
    <ResponsiveGridLayout
      className="layout"
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 1 }}
      onLayoutChange={onLayoutChange}
    >
        {/* <div key="a" data-grid={{ x: 0, y: 0, w: 1, h: 2 }} style={{backgroundColor:'red'}}>
          asdsds
        </div>
        <div key="b" data-grid={{ x: 1, y: 0, w: 1, h: 7 }} style={{backgroundColor:'yellow'}}>
          b
        </div>
        <div key="c" data-grid={{ x: 2, y: 0, w: 1, h: 2 }} style={{backgroundColor:'blue'}}>
          c
        </div> */}
        {
          DATA_EXAMPLE.map((data:any)=>(
            <div key={data.type} data-grid={data.gridPos} style={{width: 'max-content'}} className="test">
                {generateComponent(GRAPH_COMPONENT_LIST[data.type])}
            </div>

          ))
        }
    </ResponsiveGridLayout>
    </>
  );
};

export default DahboardDragAndDrop;
