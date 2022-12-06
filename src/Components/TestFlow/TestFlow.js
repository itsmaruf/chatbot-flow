import React, { useCallback, useRef, useState } from "react";
import "./TestFlow.css";

// import custom nodes
import GreetingNode from "../Nodes/GreetingNode";

// react flow import
import ReactFlow, {
  ReactFlowProvider,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  updateEdge,
} from "reactflow";

// REACT-FLOW CSS
import "reactflow/dist/style.css";
import StartNode from "../Nodes/StartNode";
import CatalogNode from "../Nodes/CatalogNode";
import PackageTrackingNode from "../Nodes/PackageTrackingNode";
import ContactNode from "../Nodes/ContactNode";

// initiate node types
const nodeTypes = {
  greeting: GreetingNode,
  start: StartNode,
  catalog: CatalogNode,
  packageTracker: PackageTrackingNode,
  contact: ContactNode,
};

// creating nodes
// nodes will be an array of objects with the following properties
const initialNodes = [];

// creating edges
// edges will be an array of objects with the following properties

// make the edges array empty to put the new edges
// const initialEdges = [];

const TestFlow = () => {
  const reactFlowWrapper = useRef(null);
  const edgeUpdateSuccessful = useRef(true);

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);

  //   create a function to connect the nodes
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  // initiate drags
  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  let id = 0;
  const getId = () => `node_${id++}`;

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      const type = event.dataTransfer.getData("application/reactflow");

      // check if the dropped element is valid
      if (typeof type === "undefined" || !type) {
        return;
      }

      const deleteNode = (id) => {
        setNodes((nds) => nds.filter((n) => n.id !== `node_${id - 1}`));
        console.log("deleted");
      };

      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });
      const newNode = {
        id: getId(),
        type,
        position,
        data: { label: `${type} node`, id: id, deleteNode },
        deleteNode,
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance]
  );

  console.log(nodes);

  const onEdgeUpdateStart = useCallback(() => {
    edgeUpdateSuccessful.current = false;
  }, []);

  const onEdgeUpdate = useCallback((oldEdge, newConnection) => {
    edgeUpdateSuccessful.current = true;
    setEdges((els) => updateEdge(oldEdge, newConnection, els));
  }, []);

  const onEdgeUpdateEnd = useCallback((_, edge) => {
    if (!edgeUpdateSuccessful.current) {
      setEdges((eds) => eds.filter((e) => e.id !== edge.id));
    }

    edgeUpdateSuccessful.current = true;
  }, []);

  //   state for selected node
  //   const [selectedNode, setSelectedNode] = useState(null);

  //   state for selected edge

  return (
    // react flow
    <div>
      {/* ractflow will take nodes and edges as props */}
      <div className="dndflow">
        <ReactFlowProvider>
          <div className="reactflow-wrapper" ref={reactFlowWrapper}>
            <ReactFlow
              nodes={nodes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onConnect={onConnect}
              nodeTypes={nodeTypes}
              onInit={setReactFlowInstance}
              onDrop={onDrop}
              onDragOver={onDragOver}
              snapToGrid
              onEdgeUpdate={onEdgeUpdate}
              onEdgeUpdateStart={onEdgeUpdateStart}
              onEdgeUpdateEnd={onEdgeUpdateEnd}
              // deleteNode
            >
              <Background></Background>
              {/* <Controls></Controls> */}
            </ReactFlow>
          </div>
        </ReactFlowProvider>
      </div>
    </div>
  );
};

export default TestFlow;
