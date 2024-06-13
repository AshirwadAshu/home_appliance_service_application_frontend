import axios from "axios";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ServiceRequests() {
  const [fetchServiceRequests, setFetchServiceRequests] = useState([]);

  useEffect(() => {
    getReq();
  }, []);

  const getReq = () => {
    axios
      .get("http://localhost:8080/service/all")
      .then((res) => setFetchServiceRequests(res.data.data));
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
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
