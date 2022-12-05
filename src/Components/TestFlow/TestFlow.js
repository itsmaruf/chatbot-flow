import React, { useCallback, useState } from "react";

// import custom nodes
import GreetingNode from "../Nodes/GreetingNode";

// react flow import
import ReactFlow, {
  Background,
  applyEdgeChanges,
  applyNodeChanges,
  addEdge,
} from "reactflow";

// REACT-FLOW CSS
import "reactflow/dist/style.css";
import StartNode from "../Nodes/StartNode";
import CatalogNode from "../Nodes/CatalogNode";

// initiate node types
const nodeTypes = {
  greeting: GreetingNode,
  start: StartNode,
  catalog: CatalogNode,
};

// creating nodes
// nodes will be an array of objects with the following properties
const initialNodes = [
  {
    id: "n-1",
    type: "greeting",
    position: {
      x: 300,
      y: 200,
    },
  },
  {
    id: "n-2",
    type: "start",
    position: {
      x: 50,
      y: 300,
    },
  },
  {
    id: "n-3",
    type: "catalog",
    position: {
      x: 800,
      y: 0,
    },
  },
];

// creating edges
// edges will be an array of objects with the following properties

// make the edges array empty to put the new edges
const initialEdges = [];

const TestFlow = () => {
  // state for edges
  const [edges, setEdges] = useState(initialEdges);

  //   state for nodes
  const [nodes, setNodes] = useState(initialNodes);

  //   create a function that will check the node changes
  const onNodeChange = useCallback(
    (changes) => setNodes(applyNodeChanges(changes, nodes)),
    [nodes]
  );

  // create a function that will check the edge changes
  const onEdgeChange = useCallback(
    (changes) => setEdges(applyEdgeChanges(changes, edges)),
    [edges]
  );

  //   create a function to connect the nodes
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  //   state for selected node
  //   const [selectedNode, setSelectedNode] = useState(null);

  //   state for selected edge

  return (
    // react flow
    <div
      style={{
        height: "100vh",
        borderTop: "1px solid rgba(0,0,0,0.1)",
        marginTop: "10px",
      }}
    >
      {/* ractflow will take nodes and edges as props */}
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodeChange}
        onEdgesChange={onEdgeChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
      >
        <Background></Background>
        {/* <Controls></Controls> */}
      </ReactFlow>
    </div>
  );
};

export default TestFlow;
