import React, { useState } from "react";
import DemoViewer from "./demos/components/DemoViewer";
// Importa tus componentes aquí

function App() {
  const [selectedDemo, setSelectedDemo] = useState(null);

  // Lista de demos disponibles
  const demos = ["demo1", "demo2", "demo3"]; // Asegúrate de que estos nombres coincidan con los nombres de las carpetas

  // Función para cargar el contenido de un demo
const loadDemo = (demoName) => {
  import(`./demos/${demoName}/index.js`)
    .then((module) => {
      setSelectedDemo(() => module.default);
    })
    .catch((err) => {
      console.error("Error al cargar el demo: ", err);
    });
};


  return (
    <div>
      {/* Selector de demo */}
      {demos.map((demo) => (
        <button key={demo} onClick={() => loadDemo(demo)}>
          {demo}
        </button>
      ))}

      {/* Visualizador de demo */}
      {selectedDemo && <DemoViewer demoComponent={selectedDemo} />}
    </div>
  );
}

export default App;
