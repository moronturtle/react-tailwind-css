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


  const lele = [
    { i: 'a', x: 0, y: 0, w: 1, h: 2 },
    { i: 'b', x: 1, y: 0, w: 6, h: 1 },
    { i: 'c', x: 4, y: 0, w: 1, h: 2 }
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

      <ReactGridLayout
        className="layout"
        layouts={{ lg: lele , md: lele, sm: lele, xs: lele, xxs: lele }}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        //onBreakpointChange={onBreakpointChange}
      >
        {/* <div key="c" style={{width:'120px', height:'90px', backgroundColor:'red'}}>13232</div>
        <div key="a" style={{width:'180px', height:'90px', backgroundColor:'blue'}}>2</div>
        <div key="b" style={{width:'90px', height:'90px', backgroundColor:'yellow'}}>3</div> */}

        <div key="a" style={{ backgroundColor:'red'}}>13232</div>
        <div key="b" style={{backgroundColor:'blue'}}>2</div>
        <div key="c" style={{backgroundColor:'yellow'}}>3</div>
        {/* {generatePosition2Responsive} */}
      </ReactGridLayout>

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