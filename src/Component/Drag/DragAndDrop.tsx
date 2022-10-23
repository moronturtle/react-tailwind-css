import React from 'react';
import { Responsive, WidthProvider }  from "react-grid-layout";
import { ComponentContentProps,DataGridProps, DragAndDropProps } from './Interfaces';
import { GridLayout, StyledComponentContent } from './style';
import "../../../node_modules/react-grid-layout/css/styles.css";
import "../../../node_modules/react-resizable/css/styles.css";

// example dataSources /////
// const dataSources = [
//     {
//       id: 1,
//       type: "bar_chart",
//       gridPos: { x: 0, y: 0, w: 3, h: 2 },
//     },
//     {
//       id: 2,
//       type: "radar_chart",
//       gridPos: { x: 3, y: 0, w: 3, h: 3 },
//     },
//     {
//       id: 3,
//       type: "line_chart",
//       gridPos: { x: 6, y: 0, w: 3, h: 2 },
//     },
//   ];

// example components /////
// const GRAPH_COMPONENT_LIST : ComponentList= {
//     bar_chart: BarChart,
//     radar_chart: RadarChart,
//     line_chart: LineChart
//   }

const DragAndDrop = ({dataSources, components}:DragAndDropProps) => {

const generateComponent =(ComponentContent:React.FC<ComponentContentProps>) =>{
    return (
        <StyledComponentContent>
          <ComponentContent />
        </StyledComponentContent>
    )
}

const ResponsiveGridLayout = WidthProvider(Responsive);

  return (
    <ResponsiveGridLayout
      className="layout"
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 1 }}
    >
        {
          dataSources.map((data:DataGridProps)=>(
            <GridLayout key={data.type} data-grid={data.gridPos}>
                {generateComponent(components[data.type])}
            </GridLayout>

          ))
        }
    </ResponsiveGridLayout>
  )
}

export default DragAndDrop