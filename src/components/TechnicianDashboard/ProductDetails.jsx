import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ProductDetails() {
  const [fetchApplience, setFetchApplience] = useState([]);
  useEffect(() => {
    getReq();
  }, []);

  const getReq = () => {
    axios
      .get("http://localhost:8080/appliance/get")
      .then((res) => setFetchApplience(res.data));
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
                      className="px-6 py-3 text-left text-xs font-bold text-black tracking-wider"
                    >
                      Customer Email
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-bold text-black tracking-wider"
                    >
                      Appliance Brand
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-bold text-black tracking-wider"
                    >
                      Year Of Manufacturing
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-bold text-black tracking-wider"
                    >
                      Product Type
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-bold text-black tracking-wider"
                    >
                      Serial NO
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-bold text-black tracking-wider"
                    >
                      Warrenty Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {fetchApplience.map((req) => {
                    return (
                      <tr
                        key={req.applienceId}
                        className="hover:bg-gray-100 transition duration-300"
                      >
                        <td className="py-2 px-4">{req.email}</td>
                        <td className="py-2 px-4">{req.applianceBrand}</td>
                        <td className="py-2 px-4">{req.yearOfManufacturing}</td>
                        <td className="py-2 px-4">{req.productType}</td>
                        <td className="py-2 px-4">{req.serialNo}</td>
                        <td className="py-2 px-4">{req.warrentyStatus}</td>
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
