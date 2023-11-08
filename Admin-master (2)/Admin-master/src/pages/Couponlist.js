import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteACoupon, getAllCoupon } from "../features/coupon/couponSlice";
import CustomModal from "../components/CustomModal";
import axios from "axios";
import { ApiUrl } from "../services/ApiUrl";

const columns = [
  {
    title: "ID",
    dataIndex: "storeId",
  },
  {
    title: "Name",
    dataIndex: "name",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Location",
    dataIndex: "location",
  },
  {
    title: "Owner Id",
    dataIndex: "ownerId",
  },
  {
    title: "Owner Name",
    dataIndex: "ownerName",
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

const Couponlist = () => {
  const [open, setOpen] = useState(false);
  const [couponId, setCouponId] = useState("");
  const showModal = (e) => {
    setOpen(true);
    setCouponId(e);
  };

  const hideModal = () => {
    setOpen(false);
  };

  const dispatch = useDispatch();
  const [data1, setData1] = useState([]);
  const couponState = useSelector((state) => state.coupon.coupons);

  const fetchData = async () => {
    try {
      const response = await axios.get(ApiUrl.getAllStore);
      const storeData = response.data.data;

      const data = storeData.map((store, index) => ({
        storeId: store.storeId,
        name: store.storeName,
        location: store.location,
        ownerId: store.ownerId,
        ownerName: store.ownerName,

        action: (
          <>
            <Link to={`/admin/update-store/${store.storeId}`} className="fs-3 text-danger">
              <BiEdit />
            </Link>
            <Link to={`/admin/store-detail/${store.storeId}`} className="fs-3 text">
              <BiEdit />
            </Link>
            <button
              className="ms-3 fs-3 text-danger bg-transparent border-0"
              onClick={() => showModal(store.storeId)}
            >
              <AiFillDelete />
            </button>
          </>
        ),
      }));

      setData1(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [dispatch]);

  const deleteStore = async (storeId) => {
    try {
      await axios.delete(`${ApiUrl.deleteStore}/${storeId}`);
      setOpen(false); // Close the modal
      setTimeout(() => {
        dispatch(fetchData());
      }, 100);
    } catch (error) {
      console.error("Error deleting store:", error);
    }
  };


  return (
    <div>
      <h3 className="mb-4 title">List Stores</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
      <CustomModal
        hideModal={hideModal}
        open={open}
        performAction={() => {
          deleteStore(couponId);
        }}
        title="Are you sure you want to delete this Coupon?"
      />
    </div>
  );
};

export default Couponlist;
