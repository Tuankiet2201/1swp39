import { getUsers } from "../features/cutomers/customerSlice"; // Import the correct path to your Redux slice
import React, { useEffect, useState } from "react";
import { Table } from "antd";
import axios from "axios";
import { useDispatch } from "react-redux"; // You no longer need useSelector for this version
import CustomModal from "../components/CustomModal";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { ApiUrl } from "../services/ApiUrl";

const columns = [
  {
    title: "ID",
    dataIndex: "userId",
  },
  {
    title: "Name",
    dataIndex: "name",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Role",
    dataIndex: "role",
  },
  {
    title: "Create At",
    dataIndex: "crtAt",
    sorter: (a, b) => a.name.crtAt - b.name.crtAt,
  },
  {
    title: "Update At",
    dataIndex: "udtAt",
    sorter: (a, b) => a.name.udtAt - b.name.udtAt,
  },
  {
    title: "Last Login",
    dataIndex: "lastLg",
    sorter: (a, b) => a.name.lastLg - b.name.lastLg, // sort alphabet
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

const Customers = () => {
  const [userData, setUserData] = useState([]);
  const [open, setOpen] = useState(false);
  const [userId, setUserId] = useState([]);
  const showModal = (e) => {
    setOpen(true);
    setUserId(e);
  };

  const hideModal = () => {
    setOpen(false);
  };

  const fetchData = () => {
    // Make the API call using Axios when the component mounts
    axios
      .get(ApiUrl.getAllUser)
      .then((response) => {
        // Map the API data to match the table columns
        const apiData = response.data.data;
        console.log(response.data);
        const mappedData = apiData.map((customer, index) => ({
          userId: customer.userId,
          name: `${customer.firstName} ${customer.lastName}`,
          email: customer.email,
          role: customer.role,
          crtAt: customer.createAt,
          udtAt: customer.updatedAt,
          lastLg: customer.lastLogin,
          action: (
            <>
              <Link
                to={`/admin/update-user/${customer.userId}`}
                className="fs-3 text-danger"
              >
                <BiEdit />
              </Link>
              <Link
                to={`/admin/user-detail/${customer.userId}`}
                className="fs-3 text"
              >
                <BiEdit />
              </Link>
              <button
                className="ms-3 fs-3 text-danger bg-transparent border-0"
                onClick={() => showModal(customer.userId)}
              >
                <AiFillDelete />
              </button>
            </>
          ),
        }));
        setUserData(mappedData);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteUser = async (userId) => {
    try {
      await axios.delete(`${ApiUrl.deleteUser}/${userId}`);
      setOpen(false); // Close the modal
      setTimeout(() => {
        fetchData();
      }, 100);
} catch (error) {
      console.error("Error deleting store:", error);
    }
  };

  return (
    <div>
      <h3 className="mb-4 title">List Users</h3>
      <div>
        <Table columns={columns} dataSource={userData} />
      </div>
      <CustomModal
        hideModal={hideModal}
        open={open}
        performAction={() => {
          deleteUser(userId);
        }}
        title="Are you sure you want to delete this User?"
      />
    </div>
  );
};

export default Customers;