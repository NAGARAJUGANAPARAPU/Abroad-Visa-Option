import React from "react";
import Sidebar from "./Sidebar";

const Refundcancellationpolicy = () => {
  return (
    <div>
      <div className="container">
        <div className="refund-1">
          <Sidebar />
        </div>
        <div className="Refund-2">
          <h1 className="head">Refund and Cancellation Policy</h1>
          <p>
            <br />
            <b>• How to Cancel </b>
            <br />
            <br />
            This cancellation will be confirmed offline and the refund would be
            credited back to the account used for booking, after deduction of
            applicable cancellation charges.
            <br />
            <br />
            <b>• Cancellations & Refunds</b>
            <br />
            <br />
            All cancellation charges are levied on per visa, per person basis.
            If you cancel your visa before an application has been made by
            Teleport on your behalf, the entire fees will be refunded to your
            account. No cancellation will be allowed after visa application has
            already been submitted by Teleport to the embassy.
            <br />
            <br />
            <b>
              • Cancellation and Refund Policy for appointments at VFS Global
              and outsourcing and technology services specialists for
              governments and diplomatic missions worldwide
            </b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Refundcancellationpolicy;
