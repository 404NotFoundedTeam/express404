import TableRow from "../../components/TableRow";

let ordersData = [
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

const Order = () => {
  let summa = 0;
  const calculateSum = () => {
    ordersData.map((order) => summa += order.summasi);
  }
  calculateSum();
  return (
    <div className="d-flex flex-column pt-5" style={{ height: '90vh' }}>
      <h3 className="mt-2">Arizalar</h3>
      <div className="d-flex align-items-center justify-content-between mb-2">
        <p className="text-secondary m-0">Yetib kelgan arizalarni kuzatishingiz mumkin</p>
        <p className="text-secondary my-0 me-3">Jami summa: {summa}</p>
      </div>
      <div className="flex-1 p-4" style={{ overflow: 'auto', overflowX: 'hidden', marginLeft: '-15px' }}>
        {
          ordersData.map((order) => {
            return (
              <TableRow orderDetail={order} done={false} />
            )
          })}
      </div>
    </div>
  );
}

export default Order;