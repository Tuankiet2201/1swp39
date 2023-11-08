import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { useDispatch } from "react-redux";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import axios from "axios";
import { ApiUrl } from "../services/ApiUrl";
import CustomModal from "../components/CustomModal";

const columns = [
  {
    title: "Order ID",
    dataIndex: "orderId",
  },
  {
    title: "User Name",
    dataIndex: "userName",
  },

  {
    title: "Store Name",
    dataIndex: "storeName",
  },
  {
    title: "Product Name",
    dataIndex: "productName",
  },
  {
    title: "Phone",
    dataIndex: "phone",
  },
  {
    title: "Address",
    dataIndex: "address",
  },
  {
    title: "Total Price",
    dataIndex: "totalPrice",
  },
  {
    title: "Status",
    dataIndex: "status",
  },
  
  {
    title: "Action",
    dataIndex: "action",
  },
];

const Orders = () => {
  const [orderData, setOrderData] = useState([]);
  const [userData, setUserData] = useState({});
  const [storeData, setStoreData] = useState({});
  const [productData, setProductData] = useState({});

  const [open, setOpen] = useState(false);
  const [orderId, setOrderId] = useState("");
  const showModal = (e) => {
    setOpen(true);
    setOrderId(e);
  };

  const hideModal = () => {
    setOpen(false);
  };
  const dispatch = useDispatch();

  const deleteOrder = async (orderId) => {
    try {
      await axios.delete(`${ApiUrl.deleteOrder}/${orderId}`);
      setOpen(false); // Close the modal
      setTimeout(() => {
        dispatch(fetchData());
      }, 100);
    } catch (error) {
      console.error("Error deleting staff:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    // Fetch orders from your API using Axios
    axios
      .get("http://localhost:8080/api/order/all")
      .then((response) => {
        const apiData = response.data.data;
        setOrderData(apiData);
      })
      .catch((error) => {
        console.error("Error fetching data from the API:", error);
      });
  };

  const data1 = orderData.map((order) => ({
    key: order.orderId,
    orderId: order.orderId,
    userId: order.userId,
    storeId: order.storeId,
    staffId: order.staffId,
    productId: order.productId,
    price: `${order.price},000 VND`,
    totalPrice: `${(parseFloat(order.price) * parseFloat(order.quantity))},000 VND`, 
    status: order.status,
    phone: order.phoneNum,
    address: order.address,
    productName: productData[order.productId]
      ? productData[order.productId].productName
      : "Unknown Store",
    userName: userData[order.userId]
      ? `${userData[order.userId].firstName} ${userData[order.userId].lastName}`
      : "Unknown User",
    storeName: storeData[order.storeId]
      ? storeData[order.storeId].storeName
      : "Unknown Store",

    action: (
      <>
        <Link
          to={`/admin/update-order/${order.orderId}`}
          className="fs-3 text-danger"
        >
          <BiEdit />
        </Link>
<button
          className="ms-3 fs-3 text-danger bg-transparent border-0"
          onClick={() => showModal(order.orderId)}
        >
          <AiFillDelete />
        </button>
      </>
    ),
  }));

  useEffect(() => {
    // Fetch user data and store it in userData state
    axios
      .get("http://localhost:8080/api/user/alluser")
      .then((response) => {
        const userData = response.data.data;
        setUserData(
          userData.reduce((acc, user) => {
            acc[user.userId] = user;
            return acc;
          }, {})
        );
      })
      .catch((error) => {
        console.error("Error fetching user data from the API:", error);
      });
  }, []);

  useEffect(() => {
    // Fetch user data and store it in userData state
    axios
      .get("http://localhost:8080/api/product/all")
      .then((response) => {
        const productData = response.data.data;
        setProductData(
          productData.reduce((acc, product) => {
            acc[product.productId] = product;
            return acc;
          }, {})
        );
      })
      .catch((error) => {
        console.error("Error fetching user data from the API:", error);
      });
  }, []);

  useEffect(() => {
    // Fetch store data and store it in storeData state
    axios
      .get("http://localhost:8080/api/store/all")
      .then((response) => {
        const storeData = response.data.data;
        setStoreData(
          storeData.reduce((acc, store) => {
            acc[store.storeId] = store;
            console.log("acc", acc);
            return acc;
          }, {})
        );
      })
      .catch((error) => {
        console.error("Error fetching store data from the API:", error);
      });
  }, []);

  return (
    <div>
      <h3 className="mb-4 title">Orders</h3>
      <Table columns={columns} dataSource={data1} />
      <CustomModal
        hideModal={hideModal}
        open={open}
        performAction={() => {
          deleteOrder(orderId);
        }}
        title="Are you sure you want to delete this order?"
      />
    </div>
  );
};

export default Orders;