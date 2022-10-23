import React from "react";

type ComponentList = {
    [key: string]: React.FC
  }

 export interface ComponentContentProps {
    data?:object[];
  }

export interface DragAndDropProps {
    dataSources: DataGridProps[];
    components: ComponentList
}

export interface DataGridProps {
    id?: number;
    type: string ;
    gridPos: object;
  }

