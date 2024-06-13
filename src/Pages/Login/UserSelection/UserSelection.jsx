import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import icon from "../../../images/chooseuser.jpeg";

export default function UserSelection() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
      >
        <div className="flex min-h-full flex-1 mt-24 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img className="mx-auto h-10 w-auto" src={icon} alt="" />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              So, Which type of user are you?
            </h2>
          </div>
          <div className="circlePosition w-[460px] h-[400px] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-[50%] absolute z-1 top-[0] translate-x-[20] opacity-30 blur-[34px] left-[10%]"></div>
          <div className="circlePosition w-[460px] h-[400px] bg-gradient-to-r from-violet-500 to-purple-500 rounded-[50%] absolute z-1 top-[50%] translate-x-[20px] opacity-30 blur-[34px] right-[10%]"></div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="flex mt-10">
              <Link
                to="/techlogin"
                className="flex mx-5 w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Technician
              </Link>
              <Link
                to="/custlogin"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Customer
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
