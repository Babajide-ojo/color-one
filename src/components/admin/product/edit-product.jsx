import { useState, useEffect, useContext } from "react";
import { ProductsContext } from "../../../context/products-context";
import axios from "axios";
import { withRouter } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminLayout from "../../shared/admin-layout";

const EditProduct = (match) => {
  const { products } = useContext(ProductsContext);
  const { _id } = match?.match?.params;
  const [product, setProduct] = useState(null);
  useEffect(() => {
    const product = products.find((item) => item._id === _id);
    setProduct(product);
  }, [_id, product, products]);

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [size, setSize] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [image_url, setImgUrlOne] = useState("");
  const [image_url_one, setImgUrlTwo] = useState("");
  const [image_url_two, setImgUrlThree] = useState("");

  const toastMsg = (message) => toast(message);

  const handleSubmit = (e) => {
    e.preventDefault();
    const product = new FormData();
    product.append("name", product?.name);
    product.append("category", category);
    product.append("size", size);
    product.append("description", description);
    product.append("price", price);
    product.append("manufacturer", manufacturer);
    product.append("image_url", product?.image_url);
    product.append("image_url_one", product?.image_url_one);
    product.append("image_url_two", product?.image_url_two);
    console.log("product", name, category);
    axios
      .post(`http://localhost:8000/v3/product/update/${_id}`, product)
      .then((res) => {
        if (res.status === 200) {
          console.log("res", res);
          toastMsg("Product added successfully");
        }
      })
      .catch((err) => {
        console.log(err);
      });
    e.target.reset();
  };
  return (
    <AdminLayout>
      <div className="product-body">
        <ToastContainer />
        <div className="contain form-contain form-input">
          <div className="right-menu user-form">
            <div></div>
            <div className="add-product">
              <form
                onSubmit={handleSubmit}
                encType="multipart/form-data"
                method="POST"
              >
                <div className="form-title">
                  <h3>Update product</h3>
                  <hr></hr>
                </div>
                <br></br>

                <div class="row mb-3">
                  <label>Name</label>
                  <div class="col-sm-12">
                    <input
                      type="text"
                      class="form-control"
                      name="course_title"
                      defaultValue={product?.name}
                      id="driverName"
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      required
                    />
                  </div>
                </div>
                <div class="row mb-3">
                  <label>Category</label>
                  <div class="col-sm-12">
                    <input
                      type="text"
                      class="form-control"
                      name="course_category"
                      id="address"
                      defaultValue={product?.category}
                      onChange={(e) => {
                        setCategory(e.target.value);
                      }}
                      required
                    />
                  </div>
                </div>
                <div class="row mb-3">
                  <label>Size </label>
                  <div class="col-sm-12">
                    <input
                      type="text"
                      name="course_overview"
                      class="form-control"
                      id="entryDate"
                      defaultValue={product?.size}
                      onChange={(e) => {
                        setSize(e.target.value);
                      }}
                      required
                    />
                  </div>
                </div>
                <div class="row mb-3">
                  <label>Description</label>
                  <div class="col-sm-12">
                    <input
                      type="course_creator"
                      class="form-control"
                      name="video_url"
                      id="entryDate"
                      defaultValue={product?.description}
                      onChange={(e) => {
                        setDescription(e.target.value);
                      }}
                      required
                    />
                  </div>
                </div>
                <div class="row mb-3">
                  <label>Price</label>
                  <div class="col-sm-12">
                    <input
                      type="course_creator"
                      class="form-control"
                      name="video_url"
                      defaultValue={product?.price}
                      id="entryDate"
                      onChange={(e) => {
                        setPrice(e.target.value);
                      }}
                      required
                    />
                  </div>
                </div>
                <div class="row mb-3">
                  <label>Manufacturer</label>
                  <div class="col-sm-12">
                    <input
                      type="course_creator"
                      class="form-control"
                      name="video_url"
                      id="entryDate"
                      defaultValue={product?.manufacturer}
                      onChange={(e) => {
                        setManufacturer(e.target.value);
                      }}
                      required
                    />
                  </div>
                </div>
                <div class="row mb-3">
                  <div className="update-img-div col-sm-4">
                    {" "}
                   
                    <img
                      className="update-img"
                      src={product?.image_url}
                      alt=""
                    />{" "}
                  </div>
                  <div className="update-img-div col-sm-4">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-pencil-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                    </svg>
                    <img
                      className="update-img"
                      src={product?.image_url_one}
                      alt=""
                    />{" "}
                      <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-pencil-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                    </svg>
                  </div>
                  <div className="update-img-div col-sm-4">
                    {" "}
                   
                    <img
                      className="update-img"
                      src={product?.image_url_two}
                      alt=""
                    />{" "}
                      <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-pencil-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                    </svg>
                  </div>
                </div>
                <div class="row mb-3">
                  <label>Image</label>
                  <div class="col-sm-12">
                    <input
                      type="file"
                      class="form-control"
                      name="file"
                      id=""
                      defaultValue={product?.image_url}
                      onChange={(e) => {
                        setImgUrlOne(e.target.files[0]);
                      }}
                    />
                  </div>
                </div>
                <div class="row mb-3">
                  <label>Image 1</label>
                  <div class="col-sm-12">
                    <input
                      type="file"
                      class="form-control"
                      name="file"
                      id=""
                      defaultValue={product?.image_url_one}
                      onChange={(e) => {
                        setImgUrlTwo(e.target.files[0]);
                      }}
                    />
                  </div>
                </div>
                <div class="row mb-3">
                  <label>Image 2</label>
                  <div class="col-sm-12">
                    <input
                      type="file"
                      class="form-control"
                      name="file"
                      id=""
                      defaultValue={product?.image_url_two}
                      onChange={(e) => {
                        setImgUrlThree(e.target.files[0]);
                      }}
                    />
                  </div>
                </div>
                <button type="submit" class="btn btn-warning submit-btn">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default withRouter(EditProduct);
