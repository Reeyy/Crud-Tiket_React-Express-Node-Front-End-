import { Link } from "react-router-dom";
const PricingList = ({ kelas }) => {
  return (
    <>
      <div className="mt-10 lg:mt-32 mx-auto container ">
        <h1 className="lg:text-5xl text-2xl text-center f-m-w text-indigo-700 font-bold">
          kelas penumpang
        </h1>

        {kelas.map((data, index) => {
          return (
            <div
              key={index}
              className="py-8 h-full flex-col mt-12 lg:flex  items-center justify-between xl:px-0 px-4"
            >
              <div className="h-full lg:w-1/3 lg:mr-8 lg:mb-0 mb-4">
                <div className="w-full h-96 relative">
                  <img
                    src={data.img}
                    className="absolute w-full h-full inset-0 object-center object-cover z-10"
                    alt="img1"
                  />
                  <div className="left-0 px-3 flex items-cente mb-3 justify-between bottom-0 w-full absolute z-20 pt-4">
                    <h4 className="f-m-m px-6 py-3 rounded-md bg-white">
                      <b>Rp. </b>
                      {data.price}
                    </h4>
                    <div className="py-3 px-1 bg-black flex items-center rounded-md bg-opacity-75">
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.9998 17.75L5.82784 20.995L7.00684 14.122L2.00684 9.25495L8.90684 8.25495L11.9928 2.00195L15.0788 8.25495L21.9788 9.25495L16.9788 14.122L18.1578 20.995L11.9998 17.75Z"
                          fill="#FDC741"
                        />
                      </svg>
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.9998 17.75L5.82784 20.995L7.00684 14.122L2.00684 9.25495L8.90684 8.25495L11.9928 2.00195L15.0788 8.25495L21.9788 9.25495L16.9788 14.122L18.1578 20.995L11.9998 17.75Z"
                          fill="#FDC741"
                        />
                      </svg>
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.9998 17.75L5.82784 20.995L7.00684 14.122L2.00684 9.25495L8.90684 8.25495L11.9928 2.00195L15.0788 8.25495L21.9788 9.25495L16.9788 14.122L18.1578 20.995L11.9998 17.75Z"
                          fill="#FDC741"
                        />
                      </svg>
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.9998 17.75L5.82784 20.995L7.00684 14.122L2.00684 9.25495L8.90684 8.25495L11.9928 2.00195L15.0788 8.25495L21.9788 9.25495L16.9788 14.122L18.1578 20.995L11.9998 17.75Z"
                          fill="#FDC741"
                        />
                      </svg>
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.9998 17.75L5.82784 20.995L7.00684 14.122L2.00684 9.25495L8.90684 8.25495L11.9928 2.00195L15.0788 8.25495L21.9788 9.25495L16.9788 14.122L18.1578 20.995L11.9998 17.75Z"
                          fill="#FDC741"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="mt-12">
                  <h1 className="f-m-m text-2xl font-semibold leading-7">
                    {data.kelas}
                  </h1>
                  <p className="text-base f-m-m leading-loose mt-2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. It has survived not only five
                    centuries. Lorem Ipsum is simply dummy text of the printing
                    and typesetting industry.
                  </p>
                  <div className="mt-6">
                    <Link to="/addtiket">
                      <p className="text-indigo-700 underline cursor-pointer text-base font-semibold">
                        Buy Tiket
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default PricingList;
