import { WrenchIcon } from "@heroicons/react/16/solid";
import { ServerIcon } from "@heroicons/react/20/solid";
import { FlagIcon } from "@heroicons/react/24/solid";
import NavigationBarHome from "../../components/NavigationBar/NavigationBarHome";
import { motion } from "framer-motion";
import image from "../../images/Aboutus.jpg";

export default function ServicesPage() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
      >
        <NavigationBarHome />
        <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <svg
              className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                  width={200}
                  height={200}
                  x="50%"
                  y={-1}
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M100 200V.5M.5 .5H200" fill="none" />
                </pattern>
              </defs>
              <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                <path
                  d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                  strokeWidth={0}
                />
              </svg>
              <rect
                width="100%"
                height="100%"
                strokeWidth={0}
                fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
              />
            </svg>
          </div>
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
              <div className="lg:pr-4">
                <div className="lg:max-w-lg">
                  <p className="text-base font-semibold leading-7 text-indigo-600">
                    We are here for you
                  </p>
                  <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Why Choose us?
                  </h1>
                  <p className="mt-6 text-xl leading-8 text-gray-700">
                    When you choose us, you are choosing experience, efficiency
                    and a commitment to doing what is right by you. We treat you
                    and your property with respect, ensuring all electrical work
                    is completed to the high standards we set for ourselves
                  </p>
                </div>
              </div>
            </div>
            <div className="ml-12 -mt-12 pt-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
              <img
                className="w-[40rem] max-w-none rounded-3xl shadow-2xl border ring-1 ring-gray-400/10 sm:w-[40rem]"
                src={image}
                alt=""
              />
            </div>
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
              <div className="lg:pr-4">
                <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-sm">
                  <p>
                    Yes, Our Service Representatives are Covic vaccinated, No
                    Issues
                  </p>
                  <ul className="mt-20 space-y-8 text-gray-600">
                    <li className="flex gap-x-3">
                      <WrenchIcon
                        className="mt-1 h-5 w-5 flex-none text-indigo-600"
                        aria-hidden="true"
                      />
                      <span>
                        <strong className="font-semibold text-gray-900">
                          Highly Professionals.
                        </strong>{" "}
                        We Only Believe in quality of service, and our highly
                        trained professionals are take care the issues
                        efficiently.
                      </span>
                    </li>
                    <li className="flex gap-x-3">
                      <FlagIcon
                        className="mt-1 h-5 w-5 flex-none text-indigo-600"
                        aria-hidden="true"
                      />
                      <span>
                        <strong className="font-semibold text-gray-900">
                          Best Pricing.
                        </strong>{" "}
                        As a customer you can have multiple options, but not all
                        services provide same value, With us price to service is
                        not an option, it is our policy.
                      </span>
                    </li>
                    <li className="flex gap-x-3">
                      <ServerIcon
                        className="mt-1 h-5 w-5 flex-none text-indigo-600"
                        aria-hidden="true"
                      />
                      <span>
                        <strong className="font-semibold text-gray-900">
                          We Take Privacy Very Seriously.
                        </strong>{" "}
                        Our Privacy Policy By default complies to GDPR, Which
                        means you can control what data you share with us.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
