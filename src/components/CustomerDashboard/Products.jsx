import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Modal from "react-modal";
import axios from "axios";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    width: "450px",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "500px",
  },
};

const Products = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalIsOpenService, setIsOpenService] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [formData, setFormData] = useState({
    applianceBrand: "",
    yearOfManufacturing: "",
    productType: "",
    serialNo: "",
    warrantyStatus: "",
    email: "",
    createdOn: "",
    updatedOn: "",
    appointmentDate: "",
    serviceStatus: "",
    comment: "",
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpenAppointment, setModalOpenAppointment] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const closeModalPopUp = () => {
    setModalOpen(false);
  };

  const closeModalPopUpAppointment = () => {
    setModalOpenAppointment(false);
  };

  const applianceBrandOptions = [
    "LG",
    "SONY",
    "BOSCH",
    "SAMSUNG",
    "TOSHIBA",
    "TPLINK",
    "DLINK",
  ];
  const yearOptions = [
    "2024-01-01",
    "2023-01-01",
    "2022-01-01",
    "2021-01-01",
    "2020-01-01",
  ];
  const productTypeOptions = [
    "FAN",
    "AIRCONDITIONER",
    "WASHINGMACHINE",
    "WIRELESSROUTER",
    "COFFEEDISPENSER",
    "REFRIGERATOR",
  ];

  const warrantyOptions = ["UNDERWARRENTY", "OUTOFWARRENTY"];

  const products = [
    {
      id: 1,
      name: "Fan",
      to: "#",
      imageSrc:
        "https://images.unsplash.com/photo-1564510182791-29645da7fac4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RmFufGVufDB8fDB8fHww",
      imageAlt: "Fan",
    },
    {
      id: 2,
      name: "Air Conditioner",
      to: "#",
      imageSrc:
        "https://images.unsplash.com/photo-1436473849883-bb3464c23e93?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imageAlt: "AC",
    },
    {
      id: 3,
      name: "Washing Machine",
      to: "#",
      imageSrc:
        "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8V2FzaGluZyUyMG1hY2hpbmV8ZW58MHx8MHx8fDA%3D",
      imageAlt: "Washing Machine",
    },
    {
      id: 4,
      name: "Wireless Routers",
      to: "#",
      imageSrc:
        "https://plus.unsplash.com/premium_photo-1675024346167-e5fd43181f16?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdpcmVsZXNzJTIwcm91dGVyfGVufDB8fDB8fHww",
      imageAlt: "Wireless router",
    },
    {
      id: 5,
      name: "Coffee Dispenser",
      to: "#",
      imageSrc:
        "https://plus.unsplash.com/premium_photo-1661281243564-5acf9a1797ed?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29mZmVlJTIwbWFjaGluZXxlbnwwfHwwfHx8MA%3D%3D",
      imageAlt: "Coffee Dispenser",
    },
    {
      id: 6,
      name: "Refrigerator",
      to: "#",
      imageSrc:
        "https://media.istockphoto.com/id/990894662/photo/modern-fridge-in-front-of-white-wall.webp?b=1&s=170667a&w=0&k=20&c=WMEUix4zvDRc0baQ2i-E1IxjpS6lXw_vWgiIGeKurKk=",
      imageAlt: "Refrigerator",
    },
  ];

  const handleInputChangeService = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmitService = async (e) => {
    e.preventDefault();
    try {
      const response = await axios
        .post("http://localhost:8080/service/save", formData)
        .then((response) => setModalMessage(response.data.data));
      setModalOpen(true);
      setIsOpenService(false);
    } catch (error) {
      console.error("Error submitting service request form:", error);
    }
  };

  const openModal = (product) => {
    setSelectedProduct(product);
    setFormData({
      ...formData,
      productType: product.name.toUpperCase().replace(/\s/g, ""),
    });
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/appliance/save",
        formData
      );
      setModalOpenAppointment(true);
      setIsOpen(false);
      closeModal();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const openModalService = (product) => {
    setSelectedProduct(product);
    setFormData({
      ...formData,
      productType: product.name.toUpperCase().replace(/\s/g, ""),
    });
    setIsOpenService(true);
  };

  const closeModalService = () => {
    setIsOpenService(false);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
      >
        <div className="bg-white">
          <div className="max-w-7xl mx-auto py-16 px-4 overflow-hidden sm:py-8 sm:px-6 lg:px-3">
            {modalOpen && (
              <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 text-white z-50">
                <div className="bg-white p-8 rounded shadow-lg max-w-md flex flex-col">
                  <p className="text-lg font-semibold mb-4 text-black">
                    Appointment has been successfully registered, Thank you,
                    Please Expect a call/email from out technician team.
                  </p>
                  <p className="text-lg font-semibold mb-4 text-black">
                    {modalMessage}
                  </p>
                  <button
                    className="mt-4 ml-auto px-4 py-2 bg-indigo-600 text-white rounded hover:bg-violet-700 focus:outline-none focus:bg-indigo-600"
                    onClick={closeModalPopUp}
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
            {modalOpenAppointment && (
              <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 text-white z-50">
                <div className="bg-white p-8 rounded shadow-lg max-w-md flex flex-col">
                  <p className="text-lg font-semibold mb-4 text-black">
                    Service Request has been successfully registered. Please
                    Book an appointment for appropriate date.
                  </p>
                  <p className="text-lg font-semibold mb-4 text-black">
                    {modalMessage}
                  </p>
                  <button
                    className="mt-4 ml-auto px-4 py-2 bg-indigo-600 text-white rounded hover:bg-violet-700 focus:outline-none focus:bg-indigo-600"
                    onClick={closeModalPopUpAppointment}
                  >
                    Close
                  </button>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
              {products.map((product) => (
                <div key={product.id}>
                  <Link to={product.href} className="group text-sm">
                    <div className="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden bg-gray-100 group-hover:opacity-75">
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="w-full h-full object-center object-cover"
                      />
                    </div>
                    <h3 className="mt-4 font-medium text-gray-900">
                      {product.name}
                    </h3>
                    <p className="text-gray-500 italic">
                      {product.availability}
                    </p>
                    <p className="mt-2 font-medium text-gray-900">
                      {product.price}
                    </p>
                  </Link>
                  <button
                    type="button"
                    className="mt-5 bg-transparent hover:bg-indigo-500 text-indigo-700 font-semibold hover:text-white py-1 px-3 border border-indigo-500 hover:border-transparent rounded-2xl"
                    onClick={() => openModal(product)}
                  >
                    Service Request
                  </button>
                  <button
                    type="button"
                    className="mt-5 mx-4 bg-transparent hover:bg-indigo-500 text-indigo-700 font-semibold hover:text-white py-1 px-3 border border-indigo-500 hover:border-transparent rounded-2xl"
                    onClick={() => openModalService(product)}
                  >
                    Book Appointment
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Book Appointment Modal"
      >
        <h2 className="text-xl font-bold mb-4">
          Raise A Service Request for {selectedProduct && selectedProduct.name}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="applianceBrand" className="block mb-1">
              Appliance Brand
            </label>
            <select
              id="applianceBrand"
              name="applianceBrand"
              value={formData.applianceBrand}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
              required
            >
              <option value="">Select Brand</option>
              {applianceBrandOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="yearOfManufacturing" className="block mb-1">
              Year of Manufacturing
            </label>
            <select
              id="yearOfManufacturing"
              name="yearOfManufacturing"
              value={formData.yearOfManufacturing}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
              required
            >
              <option value="">Select Year</option>
              {yearOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="productType" className="block mb-1">
              Product Type
            </label>
            <select
              id="productType"
              name="productType"
              value={formData.productType}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
              required
            >
              <option value="">Select Product Type</option>
              {productTypeOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="serialNo" className="block mb-1">
              Serial No
            </label>
            <input
              type="text"
              id="serialNo"
              name="serialNo"
              value={formData.serialNo}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="warrantyStatus" className="block mb-1">
              Warranty Status
            </label>
            <select
              id="warrentyStatus"
              name="warrentyStatus"
              value={formData.warrentyStatus}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
              required
            >
              <option value="">Select Warranty Status</option>
              {warrantyOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-indigo-500 text-white font-semibold py-2 px-6 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={closeModal}
              className="ml-2 bg-gray-300 text-gray-700 font-semibold py-2 px-6 rounded-md hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </form>
      </Modal>
      <Modal
        isOpen={modalIsOpenService}
        onRequestClose={closeModalService}
        style={customStyles}
        contentLabel="Service Request Modal"
      >
        <h2 className="text-xl font-bold mb-4">
          Book Appointment for {selectedProduct && selectedProduct.name}
        </h2>
        <form onSubmit={handleSubmitService}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChangeService}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="createdOn" className="block mb-1">
              Available Range From
            </label>
            <input
              type="date"
              id="createdOn"
              name="createdOn"
              value={formData.createdOn}
              onChange={handleInputChangeService}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="updatedOn" className="block mb-1">
              Available Range To
            </label>
            <input
              type="date"
              id="updatedOn"
              name="updatedOn"
              value={formData.updatedOn}
              onChange={handleInputChangeService}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="appointmentDate" className="block mb-1">
              Appointment Date
            </label>
            <input
              type="date"
              id="appointmentDate"
              name="appointmentDate"
              value={formData.appointmentDate}
              onChange={handleInputChangeService}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="serviceStatus" className="block mb-1">
              Service Status
            </label>
            <select
              id="serviceStatus"
              name="serviceStatus"
              value={(formData.serviceStatus = "ONQUEUE")}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
              required
              disabled
            >
              <option value="">On Queue</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="comment" className="block mb-1">
              Comment
            </label>
            <textarea
              id="comment"
              name="comment"
              value={formData.comment}
              onChange={handleInputChangeService}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
              required
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-indigo-500 text-white font-semibold py-2 px-6 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={closeModalService}
              className="ml-2 bg-gray-300 text-gray-700 font-semibold py-2 px-6 rounded-md hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default Products;
