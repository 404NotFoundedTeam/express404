import { useContext } from "react";
import styled from "styled-components";
import OrdersContext from "../../contexts/OrdersContext";

const TableRowWrapper = styled.div`
  background: #fffced;
  align-items: center;
  margin-bottom: 10px;
  padding: 5px 10px;
  border-radius: 10px;
  .outlined-btn {
    background: transparent;
    color: black;
    padding: 4px 12px;
    border-radius: 10px;
    border: 0.1px solid rgba(128, 128, 128, 0.2);
    transition: 0.2s;
    &:hover {
      background: #ffec00;
    }
  }
  input {
    background: transparent !important;
    border: none !important;
  }
  label {
    font-size: 14px;
  }
  .done {
    background: #ffec00;
  }
  select {
    box-shadow: none !important;
    border: none !important;
    background-color: transparent !important;
  }
`;

const TableRow = ({ orderDetail, done }) => {
  let {
    done: orderDone,
    setDone,
    orders,
    setOrders,
  } = useContext(OrdersContext);
  function orderDelivery(status, detail) {
    if (status) {
      let curDone = [...orderDone];
      let curOrders = [...orders];
      curDone.splice(curDone.indexOf(detail), 1);
      curOrders.push(detail);
      setDone(curDone);
      setOrders(curOrders);
    } else {
      let curDone = [...orderDone];
      let curOrders = [...orders];
      curOrders.splice(curOrders.indexOf(detail), 1);
      curDone.push(detail);
      setDone(curDone);
      setOrders(curOrders);
    }
  }

  return (
    <TableRowWrapper className="row">
      {Object.entries(orderDetail).map(([label, info]) => {
        if (typeof info == "object") {
          return (
            <div className="col-lg-3 col-md-6 p-0" key={label}>
              <div class="form-floating">
                <select
                  class="form-select"
                  id="floatingSelect"
                  aria-label="Floating label select example"
                >
                  {Object.entries(info).map(([meal, amount], i) => {
                    return (
                      <option value={meal}>
                        {meal} - {amount} ta
                      </option>
                    );
                  })}
                </select>
                <label for="floatingSelect">{label}</label>
              </div>
            </div>
          );
        }
        return (
          <div className="col-lg-3 col-md-6 p-0" key={label}>
            <div className="form-floating mb-3">
              <input
                value={info}
                type="text"
                className="form-control"
                disabled
              />
              <label htmlFor="" className="floatingInput">
                {label}
              </label>
            </div>
          </div>
        );
      })}
      <div className="col-lg-2 col-md-6 p-0">
        <button
          onClick={() => orderDelivery(done, orderDetail)}
          className={`outlined-btn ${done ? "done" : ""} `}
        >
          Yetkazildi
        </button>
      </div>
    </TableRowWrapper>
  );
};

export default TableRow;
