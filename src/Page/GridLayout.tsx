import React, {useMemo} from 'react';
import _ from "lodash";
import RGL,{ Responsive, WidthProvider } from 'react-grid-layout';
import '../../node_modules/react-grid-layout/css/styles.css';
import '../../node_modules/react-resizable/css/styles.css';
//import { Responsive as ResponsiveGridLayout } from "react-grid-layout";


const DEFAULT_PROPS =  {
  className: "layout",
  items: 20,
  rowHeight: 30,
  onLayoutChange: function(test:any) {},
  cols: 12
};


const GridLayout = () => {

  const ReactGridLayout = WidthProvider(Responsive);
  const LainLagi = WidthProvider(RGL);


  const layout = [
    { i: 'a', x: 0, y: 0, w: 1, h: 2 },
    { i: 'b', x: 1, y: 0, w: 3, h: 1 },
    { i: 'c', x: 4, y: 0, w: 1, h: 2 }
  ];

  const test = [
    {
      "x": 0,
      "y": 0,
      "w": 2,
      "h": 5,
      "i": "0"
    },
    {
      "x": 2,
      "y": 0,
      "w": 2,
      "h": 5,
      "i": "1"
    },
    {
      "x": 4,
      "y": 0,
      "w": 2,
      "h": 3,
      "i": "2"
    },
    {
      "x": 6,
      "y": 0,
      "w": 2,
      "h": 4,
      "i": "3"
    },
    {
      "x": 8,
      "y": 0,
      "w": 2,
      "h": 3,
      "i": "4"
    },
    {
      "x": 10,
      "y": 0,
      "w": 2,
      "h": 5,
      "i": "5"
    },
    {
      "x": 0,
      "y": 3,
      "w": 2,
      "h": 3,
      "i": "6"
    },
    {
      "x": 2,
      "y": 2,
      "w": 2,
      "h": 2,
      "i": "7"
    },
    {
      "x": 4,
      "y": 3,
      "w": 2,
      "h": 3,
      "i": "8"
    },
    {
      "x": 6,
      "y": 3,
      "w": 2,
      "h": 3,
      "i": "9"
    },
    {
      "x": 8,
      "y": 4,
      "w": 2,
      "h": 4,
      "i": "10"
    },
    {
      "x": 10,
      "y": 4,
      "w": 2,
      "h": 4,
      "i": "11"
    },
    {
      "x": 0,
      "y": 6,
      "w": 2,
      "h": 3,
      "i": "12"
    },
    {
      "x": 2,
      "y": 10,
      "w": 2,
      "h": 5,
      "i": "13"
    },
    {
      "x": 4,
      "y": 8,
      "w": 2,
      "h": 4,
      "i": "14"
    },
    {
      "x": 6,
      "y": 6,
      "w": 2,
      "h": 3,
      "i": "15"
    },
    {
      "x": 8,
      "y": 6,
      "w": 2,
      "h": 3,
      "i": "16"
    },
    {
      "x": 10,
      "y": 8,
      "w": 2,
      "h": 4,
      "i": "17"
    },
    {
      "x": 0,
      "y": 12,
      "w": 2,
      "h": 4,
      "i": "18"
    },
    {
      "x": 2,
      "y": 12,
      "w": 2,
      "h": 4,
      "i": "19"
    }
  ];
  const apa = new Array(DEFAULT_PROPS.items);
  console.log('apa', apa);
 
    const dataPo: { i: string, x: number, y:number, w:number, h:any }[] = useMemo(() => {
        const arrayInitate = _.map(new Array(DEFAULT_PROPS.items), (item , i )=>{
               const y = _.result(DEFAULT_PROPS, "y") || Math.ceil(Math.random() * 4) + 1;
              return {
                i: i.toString(),
                x: (i * 2) % 12,
                y: (Math.floor(i / 6) )* Number(y),
                w: 2,
                h: y,
              };
        });

        console.log('arrayINiate', arrayInitate);
        return arrayInitate ;
    }, [])


  const generatePosition = useMemo(() => {
    return _.map(_.range(DEFAULT_PROPS.items), function(i) {
      return (
        <div key={i} style={{backgroundColor:'yellow'}}>
          <span className="text">{i}</span>
        </div>
      );
    });

  }, []);

  const generatePosition2Responsive = useMemo(() => {
    return _.map(_.range(DEFAULT_PROPS.items), function(i) {
      return (
        <div key={i} style={{backgroundColor:'grey'}}>
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
        className="layout"
        layouts={{ lg: dataPo , md: dataPo, sm: dataPo, xs: dataPo, xxs: dataPo }}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        //onBreakpointChange={onBreakpointChange}
      >
        <div key="1" style={{width:'120px', height:'90px', backgroundColor:'red'}}>13232</div>
        <div key="2" style={{width:'180px', height:'90px', backgroundColor:'blue'}}>2</div>
        <div key="3" style={{width:'90px', height:'90px', backgroundColor:'yellow'}}>3</div>
        {generatePosition2Responsive}
      </ReactGridLayout> */}

       <h1 style={{color:'red'}}>BATASSSSSSSSSSSSSSSSS</h1>
        
       <LainLagi
       {...DEFAULT_PROPS}
        layout={dataPo}
        onLayoutChange={onLayoutChange}
      >
        {generatePosition}
      </LainLagi>
     
    </>
  )
}

export default GridLayout