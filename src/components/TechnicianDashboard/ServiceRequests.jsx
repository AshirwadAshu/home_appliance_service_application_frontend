import axios from "axios";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ServiceRequests() {
  const [fetchServiceRequests, setFetchServiceRequests] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const statusOption = ["ACTIVE", "ONQUEUE", "COMPLETED"];

  useEffect(() => {
    getReq();
  }, []);

  const [formData, setFormData] = useState({
    email: "",
    serviceStatus: "",
    comment: "",
  });

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const getReq = () => {
    axios
      .get("http://localhost:8080/service/all")
      .then((res) => setFetchServiceRequests(res.data.data));
  };

  const handleUpdate = () => {
    axios
      .put("http://localhost:8080/service/update", formData)
      .then((res) => alert(res.data.message));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-bold text-black tracking-wider"
                    >
                      Customer Email
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-bold text-black tracking-wider"
                    >
                      Available Range From
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-bold text-black tracking-wider"
                    >
                      Available Range To
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-bold text-black tracking-wider"
                    >
                      Appointment Date
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-bold text-black tracking-wider"
                    >
                      Service Status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-bold text-black tracking-wider"
                    >
                      Comments
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-bold text-black tracking-wider"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {fetchServiceRequests.map((req) => {
                    return (
                      <tr
                        key={req.serviceId}
                        className="hover:bg-gray-100 transition duration-300 text-center"
                      >
                        <td className="py-2 px-4">{req.email}</td>
                        <td className="py-2 px-4">{req.createdOn}</td>
                        <td className="py-2 px-4">{req.updatedOn}</td>
                        <td className="py-2 px-4">{req.appointmentDate}</td>
                        <td className="py-2 px-4">{req.serviceStatus}</td>
                        <td className="py-2 px-4">{req.comment}</td>
                        <td className="py-2 px-4">
                          <button
                            type="button"
                            onClick={toggleModal}
                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          >
                            Update
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-auto">
              <div className="bg-white px-5 pt-5 pb-4 sm:p-4 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                      Update Service Request Status
                    </h3>
                    <div className="mb-4">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Customer's Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="mt-1 p-2 block border w-96 me-5 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                      />
                      <div className="mb-4">
                        <label htmlFor="serviceStatus" className="block mb-1">
                          Service Status
                        </label>
                        <select
                          id="serviceStatus"
                          name="serviceStatus"
                          value={formData.serviceStatus}
                          onChange={handleInputChange}
                          className="w-96 px-4 py-2 border rounded-md me-5 focus:outline-none focus:border-indigo-500"
                          required
                        >
                          <option value="serviceStatus">
                            Select Service Status
                          </option>
                          {statusOption.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="comment"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Comment
                      </label>
                      <textarea
                        id="comment"
                        name="comment"
                        rows={3}
                        value={formData.comment}
                        onChange={handleInputChange}
                        className="mt-1 p-2 block w-96 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
                      ></textarea>
                    </div>
                    <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                      <button
                        type="button"
                        onClick={handleUpdate}
                        className="w-full inline-flex justify-center me-5 rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                      >
                        Save Changes
                      </button>
                      <button
                        type="button"
                        onClick={toggleModal}
                        className="inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}
