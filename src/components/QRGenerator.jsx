import { Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import React, { useRef, useState } from "react";
import QrReader from "react-qr-reader";

const QRGenerator = () => {
  const [scannedText, setScannedText] = useState("No Result");

  const qrRef = useRef(null);

  const handleOnScan = (data) => {
    if (data) {
      setScannedText(data);
    }
  };

  const handleOnError = (err) => {
    console.error(err);
  };

  const openDialog = () => {
    qrRef.current.openImageDialog();
  };

  return (
    <div>
      <Button onClick={openDialog} icon={<UploadOutlined />}>
        Upload QR Code Photo
      </Button>

      {scannedText && <p>Scanned Text: {scannedText}</p>}
      <QrReader
        ref={qrRef}
        delay={300}
        onError={handleOnError}
        onScan={handleOnScan}
        legacyMode
      />
    </div>
  );
};

export default QRGenerator;
