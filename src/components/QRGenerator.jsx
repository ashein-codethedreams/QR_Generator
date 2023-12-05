import { Button, Input } from "antd";
import React, { useState } from "react";
import QRCode from "react-qr-code";

const QRGenerator = () => {
  const [inputText, setInputText] = useState("");
  const [qr, setQr] = useState("");

  const handleTextToQR = () => {
    setQr(inputText);
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          padding: "10px",
        }}
      >
        <Input
          style={{
            border: "1px solid green",
            borderRadius: "1px",
            width: "300px",
            marginRight: "20px",
          }}
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Enter text for QR code"
        />
        <Button
          onClick={handleTextToQR}
          style={{
            backgroundColor: "green",
            color: "white",
            borderRadius: "1px",
          }}
        >
          Generate
        </Button>
      </div>
      <div
        style={{
          marginTop: "50px",
          marginLeft: "50px",
        }}
      >
        {qr && <QRCode value={qr} />}
      </div>
    </div>
  );
};

export default QRGenerator;
