import sata from "./baseUrl";
import Swal from "sweetalert2";
const fetchdata = async (address, startPrice, endPrice) => {
  try {
    const response = await sata.post("/api/askorders/get", {
      address,
      startPrice,
      endPrice,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const update = async (marked, id) => {
  try {
    console.log(marked);
    await sata.put(`/api/askorders/mark/${id}`, { marked });
  } catch (error) {
    console.log(error);
  }
};

const deleteOrder = async (id, orders, setOrders) => {
  try {
    Swal.fire({
      title: "هل تريد حذف هذا ",
      text: "اذا تم الحذف لم نستطيع اعادة البيانات",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "نعم احذفه",
      cancelButtonText: "لم تحذف",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "تم الحذف ",
          text: "لم يعد موجود في البرنامج ",
          icon: "success",
          confirmButtonColor: "#f47555",
        });
        sata.delete(`/api/askorders/${id}`);
        const ar = orders.filter((order) => order.id !== id);
        setOrders(ar);
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export { fetchdata, update, deleteOrder };
