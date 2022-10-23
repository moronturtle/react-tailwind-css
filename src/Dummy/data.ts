
import LineChart from "../Component/LineChart";
import BarChart from "../Component/BarChart";
import RadarChart from "../Component/RadarChart";


type ComponentList = {
    [key: string]: React.FC
  }
  
export const DATA_EXAMPLE = [
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
  
export const GRAPH_COMPONENT_LIST : ComponentList= {
bar_chart: BarChart,
radar_chart: RadarChart,
line_chart: LineChart
}