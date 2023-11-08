import React, { useEffect, useState } from "react";
import { BsArrowDownRight, BsArrowUpRight } from "react-icons/bs";
import { Column } from "@ant-design/plots";
import { Table } from "antd";
import axios from "axios";

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
    title: "Store ID",
    dataIndex: "storeId",
  },
  {
    title: "Store Name",
    dataIndex: "storeName",
  },
  {
    title: "Staff ID",
    dataIndex: "staffId",
  },
  {
    title: "Price",
    dataIndex: "price",
  },
  {
    title: "Status",
    dataIndex: "status",
  },
];


const Dashboard = () => {

  const [orderData, setOrderData] = useState([]);
  const [userData, setUserData] = useState({});
  const [storeData, setStoreData] = useState({});

  useEffect(() => {
    // Fetch order data from your API using Axios
    axios
      .get("http://localhost:8080/api/order/all")
      .then((response) => {
        const apiData = response.data.data;
        setOrderData(apiData);
      })
      .catch((error) => {
        console.error("Error fetching order data from the API:", error);
      });
  }, []);
  
  const data1 = orderData.map((order) => ({
    key: order.orderId,
    orderId: order.orderId,
    userId: order.userId,
    storeId: order.storeId,
    staffId: order.staffId,
    price: order.price,
    status: order.status,
    userName: userData[order.userId] ? `${userData[order.userId].firstName} ${userData[order.userId].lastName}` : "Unknown User",
    storeName: storeData[order.storeId] ? `${storeData[order.storeId].storeName}` : "Unknown Store",
  }));

  useEffect(() => {
    // Fetch user data and store it in userData state
    axios
      .get("http://localhost:8080/api/user/alluser")
      .then((response) => {
        const userData = response.data.data;
        setUserData(userData.reduce((acc, user) => {
          acc[user.userId] = user;
          return acc;
        }, {}));
      })
      .catch((error) => {
        console.error("Error fetching user data from the API:", error);
      });
  }, []);

  
  const data = [
    {
      type: "Jan",
      sales: 38,
    },
    {
      type: "Feb",
      sales: 52,
    },
    {
      type: "Mar",
      sales: 61,
    },
    {
      type: "Apr",
      sales: 145,
    },
    {
      type: "May",
      sales: 48,
    },
    {
      type: "Jun",
      sales: 38,
    },
    {
      type: "July",
      sales: 38,
    },
    {
      type: "Aug",
      sales: 38,
    },
    {
      type: "Sept",
      sales: 38,
    },
    {
      type: "Oct",
      sales: 38,
    },
    {
      type: "Nov",
      sales: 38,
    },
    {
      type: "Dec",
      sales: 38,
    },
  ];
  const config = {
    data,
    xField: "type",
    yField: "sales",
    color: ({ type }) => {
      return "#ffd333";
    },
    label: {
      position: "middle",
      style: {
        fill: "#FFFFFF",
        opacity: 1,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: "Month",
      },
      sales: {
        alias: "Income",
      },
    },
  };


  return (
    <div>
      <h3 className="mb-4 title">Dashboard</h3>
      <div className="d-flex justify-content-between align-items-center gap-3">
        <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 roudned-3">
          <div>
            <p className="desc">Total</p>
            <h4 className="mb-0 sub-title">$1100</h4>
          </div>
          <div className="d-flex flex-column align-items-end">
            <h6>
              <BsArrowDownRight /> 32%
            </h6>
            <p className="mb-0  desc">Compared To April 2022</p>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 roudned-3">
          <div>
            <p className="desc">Total</p>
            <h4 className="mb-0 sub-title">$1100</h4>
          </div>
          <div className="d-flex flex-column align-items-end">
            <h6 className="red">
              <BsArrowDownRight /> 32%
            </h6>
            <p className="mb-0  desc">Compared To April 2022</p>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 roudned-3">
          <div>
            <p className="desc">Total</p>
            <h4 className="mb-0 sub-title">$1100</h4>
          </div>
          <div className="d-flex flex-column align-items-end">
            <h6 className="green">
              <BsArrowDownRight /> 32%
            </h6>
            <p className="mb-0 desc">Compared To April 2022</p>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="mb-5 title">Income Statics</h3>
        <div>
          <Column {...config} />
        </div>
      </div>
      <div className="mt-4">
        <h3 className="mb-5 title">Recent Orders</h3>
        <div>
          <Table columns={columns} dataSource={data1} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
