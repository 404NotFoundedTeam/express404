import styled from "styled-components";

const TableRowWrapper = styled.div`
  background: #FFFCED;
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
      background: #FFEC00;
    }
  }
  input {
    background: transparent !important;
    border:none !important;
  }
  label {
    font-size: 14px;
  }
  .done {
    background: #FFEC00;
  }
`

const TableRow = ({ orderDetail, done }) => {
  return (
    <TableRowWrapper className="row">
      {
        Object.entries(orderDetail).map(([label, info]) => {
          if (label == 'holati') return;
          return (
            <div className='col-lg-4 col-md-6 p-0' key={label}>
              <div className="form-floating mb-3">
                <input value={info} type="text" className="form-control" disabled />
                <label htmlFor="" className="floatingInput">{label}</label>
              </div>
            </div>

          )
        })
      }
      <div className='col-lg-4 col-md-6 p-0'>
        <button className={`outlined-btn ${done ? 'done' : ''} `}>Yetkazildi</button>
      </div>
    </TableRowWrapper>
  );
}

export default TableRow;