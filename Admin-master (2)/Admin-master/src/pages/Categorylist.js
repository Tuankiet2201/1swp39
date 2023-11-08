import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  deleteAProductCategory,
  getCategories,
  resetState,
} from "../features/pcategory/pcategorySlice";
import CustomModal from "../components/CustomModal";
import axios from "axios"; // Import Axios
import { ApiUrl } from "../services/ApiUrl";

const columns = [
  {
    title: "ID",
    dataIndex: "categoryId",
  },
  {
    title: "Category Name",
    dataIndex: "categoryName",
    sorter: (a, b) => a.categoryName.length - b.categoryName.length,
  },
  {
    title: "StoreID",
    dataIndex: "storeId",
    sorter: (a, b) => a.storeId.length - b.storeId.length,
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

const Categorylist = () => {
  const [open, setOpen] = useState(false);
  const [pCatId, setpCatId] = useState([]);
  const [categoryid, setCategoryID] = useState([]);
  const showModal = (e) => {
    setOpen(true);
    setCategoryID(e);
  };

  const hideModal = () => {
    setOpen(false);
  };
  const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      axios
        .get(ApiUrl.getAllCategory)
        .then((response) => {
          console.log(response.data.data)
          const categories = response.data.data;
          setpCatId(categories);
        })
    }
    catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  const data1 = pCatId.map((category, index) => ({
    categoryId: category.categoryId,
    categoryName: category.categoryName,
    storeId: category.storeId,
    
    action: (
      <>
        <Link to={`/admin/update-category/${category.categoryId}`} className="fs-3 text-danger">
          <BiEdit />
        </Link>
        <Link to={`/admin/category-detail/${category.categoryId}`} className="fs-3 text">
          <BiEdit />
        </Link>
        <button
          className="ms-3 fs-3 text-danger bg-transparent border-0"
          onClick={() => showModal(category.categoryId)}
        >
          <AiFillDelete />
        </button>
      </>
    ),
  }));


  const deleteCategory = async (categoryId) => {
    try {
      await axios.delete(`${ApiUrl.deleteCategory}/${categoryId}`);
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
      <h3 className="mb-4 title">List Categories</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
      <CustomModal
        hideModal={hideModal}
        open={open}
        performAction={() => {
          deleteCategory(categoryid);
        }}
        title="Are you sure you want to delete this Product Category?"
      />
    </div>
  );
};

export default Categorylist;