import { useState } from "react";
import TableRow from "../../components/TableRow";

let doneData = [
  {
    "To'liq ismi": 'Nurmatov Abdurahim',
    "Taom nomi": 'osh',
    "Soni": 1,
    "Telefon raqami": '+998 99 897 98 83',
    "summasi": 40000,
  },
  {
    "To'liq ismi": 'Nurmatov Abdurahim',
    "Taom nomi": 'osh',
    "Soni": 1,
    "Telefon raqami": '+998 99 897 98 83',
    "summasi": 40000,
  },
  {
    "To'liq ismi": 'Nurmatov Abdurahim',
    "Taom nomi": 'osh',
    "Soni": 1,
    "Telefon raqami": '+998 99 897 98 83',
    "summasi": 40000,
  },
  {
    "To'liq ismi": 'Nurmatov Abdurahim',
    "Taom nomi": 'osh',
    "Soni": 1,
    "Telefon raqami": '+998 99 897 98 83',
    "summasi": 40000,
  },

]

const Done = () => {
  let summa = 0;
  const calculateSum = () => {
    doneData.map((order) => summa += order.summasi);
  }
  calculateSum();
  return (
    <div className="d-flex flex-column pt-5" style={{ height: '93vh' }}>
      <h3 className="mt-2">Yetkazilgan</h3>
      <div className="d-flex align-items-center justify-content-between mb-2">
        <p className="text-secondary m-0">Yetkazilgan taomlar ro’yxati bilan tanishing</p>
        <p className="text-secondary my-0 me-3">Jami summa: {summa}</p>
      </div>
      <div className="flex-1 p-4" style={{ overflow: 'auto', overflowX: 'hidden', marginLeft: '-15px' }}>
        {
          doneData.map((order) => {
            return (
              <TableRow orderDetail={order} done={true} />
            )
          })}
      </div>
    </div>
  );
}

export default Done;