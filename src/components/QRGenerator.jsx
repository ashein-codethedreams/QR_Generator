import React, { useState } from "react";
import QrReader from "react-qr-reader";

const QRGenerator = () => {
  const [scannedText, setScannedText] = useState("");

  const handleOnScan = (data) => {
    if (data) {
      setScannedText(data);
    }
  };

  const handleOnError = (err) => {
    console.error(err);
  };

  return (
    <div style={{ width: "300px" }}>
      <QrReader
        delay={300}
        onError={handleOnError}
        onScan={handleOnScan}
        legacyMode={false}
        facingMode="user"
      />
      {scannedText && <p>Scanned Text: {scannedText}</p>}
    </div>
  );
};

export default QRGenerator;
