import React from "react";

export default function AlertMine() {
  return (
    <div className="row w-100 myAlert justify-content-center">
      <div className="col-md-6 col-sm-8">
        <Alert severity="success">{text}</Alert>
      </div>
    </div>
  );
}
