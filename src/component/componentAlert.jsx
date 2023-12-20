import React, { useState, useEffect } from "react";
import { Alert } from "react-bootstrap";

const MyAlert = () => {
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    // Nascondi l'alert dopo 3 secondi
    const timeoutId = setTimeout(() => {
      setShowAlert(false);
    }, 3000);

    // Pulisci il timeout quando il componente viene smontato
    return () => clearTimeout(timeoutId);
  }, []); // L'array vuoto [] indica che l'effetto viene eseguito solo al mount del componente

  return <>{showAlert && <Alert variant="info">Welcome!</Alert>}</>;
};

export default MyAlert;
