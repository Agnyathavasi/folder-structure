import React, { useState, useEffect } from "react";
import { Icon } from "./Icon";

const Folder = ({ folder, createItem }) => {
  const [isExpanded, setExpanded] = useState(false);
  const [isCreationVisible, setCreation] = useState(false);
  const [newAdd, setNewAdd] = useState({});

  useEffect(() => {
    console.log("Folder", folder);
  }, []);

  function handleFolderCreate(e) {
    e.stopPropagation();
    setNewAdd({ isDir: true, name: "" });
    setCreation(true);
    setExpanded(true);
  }

  function handleFileCreate(e) {
    e.stopPropagation();
    setNewAdd({ isDir: false, name: "" });
    setCreation(true);
    setExpanded(true);
  }

  function handleKeyPress(e) {
    if (e.key === "Enter" && newAdd.name.length) {
      const payload = { ...newAdd, id: new Date().getTime(), children: [] };
      createItem(folder.id, payload);
      setNewAdd({});
      setCreation(false);
    }
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          cursor: "pointer",
          backgroundColor: "#bbb",
          margin: "5px 0",
          maxWidth: "300px",
        }}
        onClick={() => setExpanded((prev) => !prev)}
      >
        <section>
          <Icon isDir={folder.isDir} />
          <span style={{ paddingLeft: "5px" }}>{folder.name}</span>
        </section>
        {folder.isDir && (
          <section style={{ display: "flex", alignItems: "center" }}>
            <button onClick={handleFolderCreate}>+ Folder</button>
            <button onClick={handleFileCreate}>+File</button>
          </section>
        )}
      </div>
      {isExpanded && (
        <div style={{ paddingLeft: "20px" }}>
          {isCreationVisible && (
            <div>
              <Icon isDir={newAdd.isDir} />
              <input
                value={newAdd.name}
                onBlur={() => {
                  setExpanded(false);
                  setNewAdd({});
                  setCreation(false);
                }}
                onKeyDown={handleKeyPress}
                onChange={(e) =>
                  setNewAdd((prev) => ({ ...prev, name: e.target.value }))
                }
              />
            </div>
          )}
          {folder.children.map((it) => (
            <Folder key={it.id} folder={it} createItem={createItem} />
          ))}
        </div>
      )}
    </>
  );
};

export default Folder;
