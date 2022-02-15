import TableRow from "../../components/TableRow";
import { useSelector } from "react-redux";

const Order = () => {
  const ordersObj = useSelector((state) => state.orders);
  const orders = Object.entries(ordersObj);
  let summa = orders.reduce((first, order) => {
    if (order[1].done) return first;
    return first + order[1]["Summasi"];
  }, 0);

  return (
    <div className="d-flex flex-column pt-5" style={{ height: "90vh" }}>
      <h3 className="mt-2">Arizalar</h3>
      <div className="d-flex flex-wrap align-items-center justify-content-between mb-2">
        <p className="text-secondary m-0">
          Yetib kelgan arizalarni kuzatishingiz mumkin
        </p>
        <p className="text-secondary my-0 me-3">Jami summa: {summa}</p>
      </div>
      <div
        className="flex-1 p-4"
        style={{ overflow: "auto", overflowX: "hidden", marginLeft: "-15px" }}
      >
        {orders.map((order, i) => {
          if (order[1].done) return;
          return <TableRow order={order} key={i} />;
        })}
      </div>
    </div>
  );
};

export default Order;
