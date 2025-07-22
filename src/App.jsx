import "./styles.css";
import React, { useState } from "react";
import Folder from "./Folder";
import { useTreeTraversal } from "./treeTraverse";
import { folderData } from "./Structure";

export default function App() {
  const [tree, setTree] = useState(folderData);
  async function handleCreate(parentId, data) {
    const nreTree = await useTreeTraversal(folderData, parentId, data);
    setTree(nreTree);
  }
  return (
    <div className="App">
      <Folder createItem={handleCreate} folder={tree} />
    </div>
  );
}
