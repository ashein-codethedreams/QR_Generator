import { Button, Input } from "antd";
import React, { useState } from "react";
import QRCode from "qrcode.react";

const QRGenerator = () => {
  const [inputText, setInputText] = useState("");
  const [qr, setQr] = useState("");

  const handleTextToQR = () => {
    // Handle text input and set QR code value
    setQr(inputText);
  };

  const downloadQRCode = () => {
    const qrCodeURL = document
      .getElementById("qrCodeEl")
      .toDataURL("image/jpg")
      .replace("image/jpg", "image/octet-stream");
    console.log(qrCodeURL);
    let aEl = document.createElement("a");
    aEl.href = qrCodeURL;
    aEl.download = "QR_Code.jpg";
    document.body.appendChild(aEl);
    aEl.click();
    document.body.removeChild(aEl);
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
        {qr && (
          <div>
            <QRCode id="qrCodeEl" value={qr} />
            <br />
            <br />

            <Button onClick={downloadQRCode}>Download QR Code</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QRGenerator;
