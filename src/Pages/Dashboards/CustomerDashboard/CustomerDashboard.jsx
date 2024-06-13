// import { Fragment } from "react";
// import { Disclosure, Menu, Transition } from "@headlessui/react";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
// import { Link, useLocation } from "react-router-dom";
// import image from "../../../images/logo.png";
// import { motion } from "framer-motion";
// import Products from "../../../components/CustomerDashboard/Products";

// const user = {
//   name: "user",
//   email: "user@example.com",
//   imageUrl:
//     "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.azdGx4FxdBOMQWXjf6Bk-wHaHa%26pid%3DApi&f=1&ipt=946bb1e4e8a73f4887d4d9ebcbb2a6d298208afde487d710fc3b39630248f060&ipo=images",
// };
// const navigation = [{ name: "Dashboard", to: "#", current: true }];
// const userNavigation = [{ name: "Log out", to: "/" }];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// export default function CustomerDashboard() {
//   const { state } = useLocation();

//   return (
//     <>
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         transition={{ duration: 1.5 }}
//       >
//         <div className="min-h-full">
//           <div className="bg-gradient-to-r from-indigo-500 to-purple-500 pb-32">
//             <Disclosure
//               as="nav"
//               className="bg-indigo-600 border-b bg-gradient-to-r from-indigo-400 to-violet-500 border-opacity-25 lg:border-none"
//             >
//               {({ open }) => (
//                 <>
//                   <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
//                     <div className="relative h-16 flex items-center justify-between lg:border-b lg:border-indigo-400 lg:border-opacity-25">
//                       <div className="px-2 flex items-center lg:px-0">
//                         <div className="flex-shrink-0">
//                           <img
//                             className="block h-8 w-8"
//                             src={image}
//                             alt="Workflow"
//                           />
//                         </div>
//                         <div className="hidden lg:block lg:ml-10">
//                           <div className="flex space-x-4">
//                             {navigation.map((item) => (
//                               <Link
//                                 key={item.name}
//                                 to={item.to}
//                                 className={classNames(
//                                   item.current
//                                     ? "bg-black text-white"
//                                     : "text-white hover:bg-indigo-500 hover:bg-opacity-75",
//                                   "rounded-md py-2 px-3 text-sm font-medium"
//                                 )}
//                                 aria-current={item.current ? "page" : undefined}
//                               >
//                                 {item.name}
//                               </Link>
//                             ))}
//                           </div>
//                         </div>
//                       </div>

//                       <div className="flex lg:hidden">
//                         <Disclosure.Button className="bg-indigo-600 p-2 rounded-md inline-flex items-center justify-center text-indigo-200 hover:text-white hover:bg-indigo-500 hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white">
//                           <span className="sr-only">Open main menu</span>
//                           {open ? (
//                             <XMarkIcon
//                               className="block h-6 w-6"
//                               aria-hidden="true"
//                             />
//                           ) : (
//                             <Bars3Icon
//                               className="block h-6 w-6"
//                               aria-hidden="true"
//                             />
//                           )}
//                         </Disclosure.Button>
//                       </div>
//                       <div className="hidden lg:block lg:ml-4">
//                         <div className="flex items-center">
//                           <Menu
//                             as="div"
//                             className="ml-3 relative flex-shrink-0"
//                           >
//                             <div>
//                               <Menu.Button className="bg-indigo-600 rounded-full flex text-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white">
//                                 <span className="sr-only">Open user menu</span>
//                                 <img
//                                   className="rounded-full h-8 w-8"
//                                   src={user.imageUrl}
//                                   alt=""
//                                 />
//                               </Menu.Button>
//                             </div>
//                             <Transition
//                               as={Fragment}
//                               enter="transition ease-out duration-100"
//                               enterFrom="transform opacity-0 scale-95"
//                               enterTo="transform opacity-100 scale-100"
//                               leave="transition ease-in duration-75"
//                               leaveFrom="transform opacity-100 scale-100"
//                               leaveTo="transform opacity-0 scale-95"
//                             >
//                               <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
//                                 {userNavigation.map((item) => (
//                                   <Menu.Item key={item.name}>
//                                     {({ active }) => (
//                                       <Link
//                                         to={item.to}
//                                         className={classNames(
//                                           active ? "bg-gray-100" : "",
//                                           "block px-4 py-2 text-sm text-gray-700"
//                                         )}
//                                       >
//                                         {item.name}
//                                       </Link>
//                                     )}
//                                   </Menu.Item>
//                                 ))}
//                               </Menu.Items>
//                             </Transition>
//                           </Menu>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   <Disclosure.Panel className="lg:hidden">
//                     <div className="px-2 pt-2 pb-3 space-y-1">
//                       {navigation.map((item) => (
//                         <Disclosure.Button
//                           key={item.name}
//                           as="a"
//                           to={item.to}
//                           className={classNames(
//                             item.current
//                               ? "bg-indigo-700 text-white"
//                               : "text-white hover:bg-indigo-500 hover:bg-opacity-75",
//                             "block rounded-md py-2 px-3 text-base font-medium"
//                           )}
//                           aria-current={item.current ? "page" : undefined}
//                         >
//                           {item.name}
//                         </Disclosure.Button>
//                       ))}
//                     </div>
//                     <div className="pt-4 pb-3 border-t border-indigo-700">
//                       <div className="px-5 flex items-center">
//                         <div className="flex-shrink-0">
//                           <img
//                             className="rounded-full h-10 w-10"
//                             src={user.imageUrl}
//                             alt=""
//                           />
//                         </div>
//                         <div className="ml-3">
//                           <div className="text-base font-medium text-white">
//                             {user.name}
//                           </div>
//                           <div className="text-sm font-medium text-indigo-300">
//                             {user.email}
//                           </div>
//                         </div>
//                       </div>
//                       <div className="mt-3 px-2 space-y-1">
//                         {userNavigation.map((item) => (
//                           <Disclosure.Button
//                             key={item.name}
//                             as="a"
//                             to={item.to}
//                             className="block rounded-md py-2 px-3 text-base font-medium text-white hover:bg-indigo-500 hover:bg-opacity-75"
//                           >
//                             {item.name}
//                           </Disclosure.Button>
//                         ))}
//                       </div>
//                     </div>
//                   </Disclosure.Panel>
//                 </>
//               )}
//             </Disclosure>
//             <header className="py-10">
//               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <h1 className="text-3xl font-bold text-white">
//                   Welcome {state}
//                 </h1>
//                 <p className="text-white">
//                   Please Choose the service you wish to go for.
//                 </p>
//               </div>
//             </header>
//           </div>

//           <main className="-mt-32">
//             <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
//               <div className="bg-white rounded-lg shadow-2xl px-5 sm:px-6">
//                 <div className="h-200">
//                   <Products />
//                 </div>
//               </div>
//             </div>
//           </main>
//         </div>
//       </motion.div>
//     </>
//   );
// }

import { Fragment, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";
import image from "../../../images/logo.png";
import { motion } from "framer-motion";
import Products from "../../../components/CustomerDashboard/Products";
import ServiceRequestsCustomer from "../../../components/TechnicianDashboard/ServiceRequestsCustomer";

const user = {
  name: "user",
  email: "user@example.com",
  imageUrl:
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.azdGx4FxdBOMQWXjf6Bk-wHaHa%26pid%3DApi&f=1&ipt=946bb1e4e8a73f4887d4d9ebcbb2a6d298208afde487d710fc3b39630248f060&ipo=images",
};

const navigation = [
  { name: "Dashboard", to: "#", current: true },
  { name: "Service Requests", to: "#", current: false },
];

const userNavigation = [{ name: "Log out", to: "/" }];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function CustomerDashboard() {
  const { state } = useLocation();
  const [activeTab, setActiveTab] = useState("Dashboard");

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
      >
        <div className="min-h-full">
          <div className="bg-gradient-to-r from-indigo-500 to-purple-500 pb-32">
            <Disclosure
              as="nav"
              className="bg-indigo-600 border-b bg-gradient-to-r from-indigo-400 to-violet-500 border-opacity-25 lg:border-none"
            >
              {({ open }) => (
                <>
                  <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
                    <div className="relative h-16 flex items-center justify-between lg:border-b lg:border-indigo-400 lg:border-opacity-25">
                      <div className="px-2 flex items-center lg:px-0">
                        <div className="flex-shrink-0">
                          <img
                            className="block h-8 w-8"
                            src={image}
                            alt="Workflow"
                          />
                        </div>
                        <div className="hidden lg:block lg:ml-10">
                          <div className="flex space-x-4">
                            {navigation.map((item) => (
                              <Link
                                key={item.name}
                                to={item.to}
                                onClick={() => setActiveTab(item.name)}
                                className={classNames(
                                  item.name === activeTab
                                    ? "bg-black text-white"
                                    : "text-white hover:bg-indigo-500 hover:bg-opacity-75",
                                  "rounded-md py-2 px-3 text-sm font-medium"
                                )}
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="flex lg:hidden">
                        <Disclosure.Button className="bg-indigo-600 p-2 rounded-md inline-flex items-center justify-center text-indigo-200 hover:text-white hover:bg-indigo-500 hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white">
                          <span className="sr-only">Open main menu</span>
                          {open ? (
                            <XMarkIcon
                              className="block h-6 w-6"
                              aria-hidden="true"
                            />
                          ) : (
                            <Bars3Icon
                              className="block h-6 w-6"
                              aria-hidden="true"
                            />
                          )}
                        </Disclosure.Button>
                      </div>
                      <div className="hidden lg:block lg:ml-4">
                        <div className="flex items-center">
                          <Menu
                            as="div"
                            className="ml-3 relative flex-shrink-0"
                          >
                            <div>
                              <Menu.Button className="bg-indigo-600 rounded-full flex text-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white">
                                <span className="sr-only">Open user menu</span>
                                <img
                                  className="rounded-full h-8 w-8"
                                  src={user.imageUrl}
                                  alt=""
                                />
                              </Menu.Button>
                            </div>
                            <Transition
                              as={Fragment}
                              enter="transition ease-out duration-100"
                              enterFrom="transform opacity-0 scale-95"
                              enterTo="transform opacity-100 scale-100"
                              leave="transition ease-in duration-75"
                              leaveFrom="transform opacity-100 scale-100"
                              leaveTo="transform opacity-0 scale-95"
                            >
                              <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                {userNavigation.map((item) => (
                                  <Menu.Item key={item.name}>
                                    {({ active }) => (
                                      <Link
                                        to={item.to}
                                        className={classNames(
                                          active ? "bg-gray-100" : "",
                                          "block px-4 py-2 text-sm text-gray-700"
                                        )}
                                      >
                                        {item.name}
                                      </Link>
                                    )}
                                  </Menu.Item>
                                ))}
                              </Menu.Items>
                            </Transition>
                          </Menu>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Disclosure.Panel className="lg:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.to}
                          onClick={() => setActiveTab(item.name)}
                          className={classNames(
                            item.name === activeTab
                              ? "bg-indigo-700 text-white"
                              : "text-white hover:bg-indigo-500 hover:bg-opacity-75",
                            "block rounded-md py-2 px-3 text-base font-medium"
                          )}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <header className="py-10">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-white">
                  Welcome {state}
                </h1>
                <p className="text-white">
                  Please Choose the service you wish to go for.
                </p>
              </div>
            </header>
          </div>

          <main className="-mt-32">
            <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
              <div className="bg-white rounded-lg shadow-2xl px-5 sm:px-6">
                {activeTab === "Dashboard" ? (
                  <div className="h-200">
                    <Products />
                  </div>
                ) : activeTab === "Service Requests" ? (
                  <ServiceRequestsCustomer />
                ) : null}
              </div>
            </div>
          </main>
        </div>
      </motion.div>
    </>
  );
}
