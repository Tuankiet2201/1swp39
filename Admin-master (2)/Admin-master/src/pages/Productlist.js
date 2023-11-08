import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios"; // Thêm thư viện axios
import { Link } from "react-router-dom";
import CustomModal from "../components/CustomModal";
import { ApiUrl } from "../services/ApiUrl";

const columns = [
  {
    title: "Id",
    dataIndex: "productId",
  },
  {
    title: "Name",
    dataIndex: "name",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Description",
    dataIndex: "desc",
    sorter: (a, b) => a.desc.length - b.desc.length,
  },
  {
    title: "Price",
    dataIndex: "price",
    sorter: (a, b) => a.price - b.price,
  },

  {
    title: "Quantity",
    dataIndex: "quantity",
    sorter: (a, b) => a.quantity - b.quantity,
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
    sorter: (a, b) => a.quantity - b.quantity,
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

const Productlist = () => {
  const [productData, setProductData] = useState([]);
  const [open, setOpen] = useState(false);
  const [productid, setProductId] = useState([]);
  const showModal = (e) => {
    setOpen(true);
    setProductId(e);
  };

  const hideModal = () => {
    setOpen(false);
  };

  const fetchData = () => {
    axios
      .get(ApiUrl.getAllProduct)
      .then((response) => {
        const apiData = response.data.data;
        setProductData(apiData);
      })
      .catch((error) => {
        console.error("Lỗi khi tải dữ liệu từ API:", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteProduct = async (productId) => {
    try {
      await axios.delete(
        `${ApiUrl.deleteProduct}/${productId}`
      );
      setOpen(false); // Close the modal
      setTimeout(() => {
        fetchData();
      }, 100);
    } catch (error) {
      console.error("Error deleting store:", error);
    }
  };

  const data1 = productData.map((product, index) => {
    return {
      productId: product.productId,
      name: product.productName,
      desc: product.description, 
      quantity: product.quantity, 
      price: `${product.price}`,
      action: (
        <>
          <Link
            to={`/admin/update-product/${product.productId}`}
            className="fs-3 text-danger"
          >
            <BiEdit />
          </Link>
          <Link
            to={`/admin/product-detail/${product.productId}`}
            className="fs-3 text"
          >
            <BiEdit />
          </Link>
          <button
            className="ms-3 fs-3 text-danger bg-transparent border-0"
            onClick={() => showModal(product.productId)}
          >
            <AiFillDelete />
          </button>
        </>
      ),
    };
  });

  return (
    <div>
      <h3 className="mb-4 title">List Products</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
      <CustomModal
        hideModal={hideModal}
        open={open}
        performAction={() => {
          deleteProduct(productid);
        }}
        title="Are you sure you want to delete this Product Category?"
      />
</div>
  );
};

export default Productlist;