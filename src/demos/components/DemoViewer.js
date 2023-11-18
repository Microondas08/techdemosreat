import React from "react";

const DemoViewer = ({ demoComponent: Demo }) => {
  if (!Demo) return <div>No se ha seleccionado ningún demo.</div>;

  return (
    <div>
      <h2>Visualizador de Demo</h2>
      <div className="demo-content">
        <Demo />
      </div>
    </div>
  );
};


export default DemoViewer;
