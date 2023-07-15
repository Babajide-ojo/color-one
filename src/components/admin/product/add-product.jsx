import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminLayout from "../../shared/admin-layout";

function AddProduct() {
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
    product.append("name", name);
    product.append("category", category);
    product.append("size", size);
    product.append("description", description);
    product.append("price", price);
    product.append("manufacturer", manufacturer);
    product.append("image_url", image_url);
    product.append("image_url_one", image_url_one);
    product.append("image_url_two", image_url_two);
    console.log("product", name, category);
    axios
      .post(`http://localhost:8000/v3/product/add`, product)
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
                <h3>Add product</h3>
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
                    type="number"
                    name="course_overview"
                    class="form-control"
                    id="entryDate"
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
                    onChange={(e) => {
                      setManufacturer(e.target.value);
                    }}
                    required
                  />
                </div>
              </div>
              <div class="row mb-3">
                <label>Image</label>
                <div class="col-sm-12">
                  <input
                    type="file"
                    class="form-control"
                    name="file"
                    id="driverPhoto"
                    onChange={(e) => {
                      setImgUrlOne(e.target.files[0]);
                    }}
                    required
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
                    id="driverPhoto"
                    onChange={(e) => {
                      setImgUrlTwo(e.target.files[0]);
                    }}
                    required
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
                    id="driverPhoto"
                    onChange={(e) => {
                      setImgUrlThree(e.target.files[0]);
                    }}
                    required
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
}

export default AddProduct;
