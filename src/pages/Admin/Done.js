import { useContext, useState } from "react";
import TableRow from "../../components/TableRow";
import OrdersContext from "../../contexts/OrdersContext";

const Done = () => {
  let { done, setDone } = useContext(OrdersContext);
  let summa = 0;
  const calculateSum = () => {
    done.map((order) => (summa += order.summasi));
  };
  calculateSum();
  return (
    <div className="d-flex flex-column pt-5" style={{ height: "93vh" }}>
      <h3 className="mt-2">Yetkazilgan</h3>
      <div className="d-flex flex-wrap align-items-center justify-content-between mb-2">
        <p className="text-secondary m-0">
          Yetkazilgan taomlar ro’yxati bilan tanishing
        </p>
        <p className="text-secondary my-0 me-3">Jami summa: {summa}</p>
      </div>
      <div
        className="flex-1 p-4"
        style={{ overflow: "auto", overflowX: "hidden", marginLeft: "-15px" }}
      >
        {done.map((order, i) => {
          return <TableRow orderDetail={order} done={true} key={i} />;
        })}
      </div>
    </div>
  );
};

export default Done;
