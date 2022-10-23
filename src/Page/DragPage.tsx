import React from 'react';
import DragAndDrop from '../Component/Drag/DragAndDrop';
import { DATA_EXAMPLE, GRAPH_COMPONENT_LIST } from '../Dummy/data';

const DragPage = () => {
  return (
   <>
     <h2>pake component</h2>
     <DragAndDrop dataSources={DATA_EXAMPLE} components={GRAPH_COMPONENT_LIST} />
   </>
  )
}

export default DragPage;