import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "react-headless-accordion";

const ServiceFAQ = () => {
  return (
    <Accordion
      className=" border border-gray-200 shadow-md rounded-lg"
      transition={{
        duration: "300ms",
        timingFunction: "cubic-bezier(0, 0, 0.2, 1)",
      }}>
      <AccordionItem>
        {({ open }) => (
          <div>
            <AccordionHeader
              className={`w-full flex justify-between items-start text-gray-600 border-b py-4 md:p-4 ${
                open && "bg-blue-700 text-gray-100"
              } px-[1rem]`}>
              <span
                className={`font-[400] text-sm md:text-[1.1rem] ${
                  open && "text-gray-100"
                } transition-all  text-start`}>
                Lorem ipsum dolor sit, amet consectetur adipisicing.
              </span>
              <svg
                class={`w-6 h-6 ${!open ? "" : "rotate-90 text-gray-100"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </AccordionHeader>

            <AccordionBody>
              <div className="p-4 font-light bg-gray-200 text-sm">
                Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Perspiciatis, soluta!.
              </div>
            </AccordionBody>
          </div>
        )}
      </AccordionItem>{" "}
      <AccordionItem>
        {({ open }) => (
          <div>
            <AccordionHeader
              className={`w-full flex justify-between items-start text-gray-600 border-b py-4 md:p-4 ${
                open && "bg-blue-700 text-gray-100"
              } px-[1rem]`}>
              <span
                className={`font-[400] text-sm md:text-[1.1rem] ${
                  open && "text-gray-100"
                } transition-all  text-start`}>
                Lorem ipsum dolor sit, amet consectetur adipisicing.
              </span>
              <svg
                class={`w-6 h-6 ${!open ? "" : "rotate-90 text-gray-100"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </AccordionHeader>

            <AccordionBody>
              <div className="p-4 font-light bg-gray-200 text-sm">
                Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Perspiciatis, soluta!.
              </div>
            </AccordionBody>
          </div>
        )}
      </AccordionItem>{" "}
      <AccordionItem>
        {({ open }) => (
          <div>
            <AccordionHeader
              className={`w-full flex justify-between items-start text-gray-600 border-b py-4 md:p-4 ${
                open && "bg-blue-700 text-gray-100"
              } px-[1rem]`}>
              <span
                className={`font-[400] text-sm md:text-[1.1rem] ${
                  open && "text-gray-100"
                } transition-all  text-start`}>
                Lorem ipsum dolor sit, amet consectetur adipisicing.
              </span>
              <svg
                class={`w-6 h-6 ${!open ? "" : "rotate-90 text-gray-100"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </AccordionHeader>

            <AccordionBody>
              <div className="p-4 font-light bg-gray-200 text-sm">
                Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Perspiciatis, soluta!.
              </div>
            </AccordionBody>
          </div>
        )}
      </AccordionItem>
      <AccordionItem>
        {({ open }) => (
          <div>
            <AccordionHeader
              className={`w-full flex justify-between items-start text-gray-600 border-b py-4 md:p-4 ${
                open && "bg-blue-700 text-gray-100"
              } px-[1rem]`}>
              <span
                className={`font-[400] text-sm md:text-[1.1rem] ${
                  open && "text-gray-100"
                } transition-all  text-start`}>
                Lorem ipsum dolor sit, amet consectetur adipisicing.
              </span>
              <svg
                class={`w-6 h-6 ${!open ? "" : "rotate-90 text-gray-100"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </AccordionHeader>

            <AccordionBody>
              <div className="p-4 font-light bg-gray-200 text-sm">
                Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Perspiciatis, soluta!.
              </div>
            </AccordionBody>
          </div>
        )}
      </AccordionItem>{" "}
      <AccordionItem>
        {({ open }) => (
          <div>
            <AccordionHeader
              className={`w-full flex justify-between items-start text-gray-600 border-b py-4 md:p-4 ${
                open && "bg-blue-700 text-gray-100"
              } px-[1rem]`}>
              <span
                className={`font-[400] text-sm md:text-[1.1rem] ${
                  open && "text-gray-100"
                } transition-all  text-start`}>
                Lorem ipsum dolor sit, amet consectetur adipisicing.
              </span>
              <svg
                class={`w-6 h-6 ${!open ? "" : "rotate-90 text-gray-100"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </AccordionHeader>

            <AccordionBody>
              <div className="p-4 font-light bg-gray-200 text-sm">
                Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Perspiciatis, soluta!.
              </div>
            </AccordionBody>
          </div>
        )}
      </AccordionItem>{" "}
      <AccordionItem>
        {({ open }) => (
          <div>
            <AccordionHeader
              className={`w-full flex justify-between items-start text-gray-600 border-b py-4 md:p-4 ${
                open && "bg-blue-700 text-gray-100"
              } px-[1rem]`}>
              <span
                className={`font-[400] text-sm md:text-[1.1rem] ${
                  open && "text-gray-100"
                } transition-all  text-start`}>
                Lorem ipsum dolor sit, amet consectetur adipisicing.
              </span>
              <svg
                class={`w-6 h-6 ${!open ? "" : "rotate-90 text-gray-100"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </AccordionHeader>

            <AccordionBody>
              <div className="p-4 font-light bg-gray-200 text-sm">
                Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Perspiciatis, soluta!.
              </div>
            </AccordionBody>
          </div>
        )}
      </AccordionItem>{" "}
    </Accordion>
  );
};

export default ServiceFAQ;
