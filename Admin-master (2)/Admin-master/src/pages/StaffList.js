import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteABlog, getBlogs, resetState } from "../features/blogs/blogSlice";
import CustomModal from "../components/CustomModal";
import axios from "axios";
import { ApiUrl } from "../services/ApiUrl";


const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "UserID",
    dataIndex: "userId",
  },
  {
    title: "StoreID",
    dataIndex: "storeId",
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

const StaffList = () => {
  const [open, setOpen] = useState(false);
  const [staffId, setStaffId] = useState("");
  const showModal = (e) => {
    setOpen(true);
    setStaffId(e);
  };

  const hideModal = () => {
    setOpen(false);
  };

  const dispatch = useDispatch();;
  const [data1, setData1] = useState([]);

  const fetchData = async () => {
    try {

      const response = await axios.get(ApiUrl.getAllStaff);
      const staffData = response.data.data;

      const data = staffData.map((staff, index) => ({
        key: index + 1,
        userId: staff.userId,
        storeId: staff.storeId,
        action: (
          <>
            <Link to={`/admin/update-staff/${staff.staffId}`} className="fs-3 text-danger">
              <BiEdit />
            </Link>
            <Link to={`/admin/staff-detail/${staff.staffId}`} className="fs-3 text">
              <BiEdit />
            </Link>
            <button
              className="ms-3 fs-3 text-danger bg-transparent border-0"
              onClick={() => showModal(staff.staffId)}
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
  }, []);


  const deleteStaff = async (staffId) => {
    try {
      await axios.delete(`${ApiUrl.deleteStaff}/${staffId}`);
      setOpen(false); // Close the modal
      setTimeout(() => {
        dispatch(fetchData());
      }, 100);
    } catch (error) {
      console.error("Error deleting staff:", error);
    }
  };


  return (
    <div>
      <h3 className="mb-4 title">Staff List</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
      <CustomModal
        hideModal={hideModal}
        open={open}
        performAction={() => {
          deleteStaff(staffId);
        }}
        title="Are you sure you want to delete this blog?"
      />
    </div>
  );
};

export default StaffList;
