import React, { useState, useEffect } from "react";
import { NodeService } from "../../service/NodeService";
import { TreeSelect } from "primereact/treeselect";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import { Calendar } from "primereact/calendar";
import { NodeService2 } from "../../service/NodeService2";

const NavBarHeader = () => {
  const [nodes, setNodes] = useState(null);
  const [nodes2, setNodes2] = useState(null);
  const [selectedNodeKey1, setSelectedNodeKey1] = useState(null);
  const [selectedNodeKey2, setSelectedNodeKey2] = useState(null);
  const [date3, setDate3] = useState(null);
  const nodeService = new NodeService();
  const nodeService2 = new NodeService2();
  useEffect(() => {
    nodeService.getTreeNodes().then((data) => setNodes(data));

   
  }, []);
  useEffect(() => {
    nodeService2.getTreeNodes2().then((data) => setNodes2(data));
   
  }, []);
 
 

  return (
    <div className="treeselect-demo">
        <h4>Filtres</h4>
      <div className="card2">
        <TreeSelect
        size={1}
          value={selectedNodeKey1}
          options={nodes}
          onChange={(e) => setSelectedNodeKey1(e.value)}
          placeholder="Type de demande"
        ></TreeSelect>
        <TreeSelect
         size={1}
          value={selectedNodeKey2}
          options={nodes2}
          onChange={(e) => setSelectedNodeKey2(e.value)}
          placeholder="Statut"
        ></TreeSelect>
        <div className="field col-12 md:col-4">
          
          <Calendar
            id="icon"
            size={1}
            value={date3}
            onChange={(e) => setDate3(e.value)}
            showIcon
            placeholder="Date de Soumission"
            style={{marginTop: "13px"}}
          />
        </div>
      </div>
    </div>
  );
};

export default NavBarHeader;
