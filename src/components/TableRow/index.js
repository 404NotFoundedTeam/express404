import { useSelector } from "react-redux";
import styled from "styled-components";
import { doneOrder } from "../../firebase/functions";

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

const TableRow = ({ order }) => {
  const userData = useSelector((state) => state.userData);
  const rols = useSelector((state) => state.rols);

  const orderDetail = order[1];
  const orderId = order[0];
  function orderDelivery() {
    if (
      (userData.role === rols.yetkazuvchi && !orderDetail.done) ||
      (userData.role === rols.admin && orderDetail.done) ||
      userData.role === rols.superAdmin
    ) {
      let worker = {};
      if (userData.role === rols.yetkazuvchi) {
        worker = userData.fullName;
      }
      doneOrder(orderId, orderDetail, worker);
    }
  }
  const deleteOrder = () => {
    doneOrder(orderId, {});
  };

  return (
    <TableRowWrapper className="row">
      {Object.entries(orderDetail).map(([label, info], i) => {
        if (typeof info == "object") {
          return (
            <div key={i} className="col-lg-3 col-md-6 p-0" key={label}>
              <div class="form-floating">
                <select
                  class="form-select"
                  id="floatingSelect"
                  aria-label="Floating label select example"
                >
                  {Object.entries(info).map(([meal, amount], i) => {
                    return (
                      <option key={meal + amount} value={meal}>
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
          <div key={i + 0.4} className="col-lg-3 col-md-6 p-0" key={label}>
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
      {((userData.role === rols.yetkazuvchi && !orderDetail.done) ||
        (userData.role === rols.admin && orderDetail.done) ||
        userData.role === rols.superAdmin) && (
        <div className="col-lg-2 col-md-6 p-0">
          <button
            onClick={orderDelivery}
            className={`outlined-btn ${!orderDetail.done ? "done" : ""} `}
          >
            {orderDetail.done ? "Qaytarish" : "Yetkazildi"}
          </button>
        </div>
      )}
      {((userData.role === rols.admin || userData.role === rols.superAdmin) && orderDetail.done) && (
        <div className="col-lg-2 col-md-6 p-0">
          <button onClick={deleteOrder} className={`outlined-btn done`}>
            O'chirish
          </button>
        </div>
      )}
    </TableRowWrapper>
  );
};

export default TableRow;
