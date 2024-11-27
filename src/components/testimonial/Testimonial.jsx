import React, { useContext } from "react";
import myContext from "../context/data/myContext";

function Testimonial() {
  const context = useContext(myContext);
  const { mode } = context;
  return (
    <div>
      <section className="">
        <div className=" container mx-auto px-5 py-10">
          <h1
            className=" text-center text-3xl font-bold text-black"
            style={{ color: mode === "dark" ? "white" : "" }}
          >
            Testimonial
          </h1>
          <h2
            className=" text-center text-2xl font-semibold mb-10"
            style={{ color: mode === "dark" ? "white" : "" }}
          >
            What our <span className=" text-pink-500">customers</span> are
            saying
          </h2>
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="public\LLM.jpeg"
                />
                <p
                  style={{ color: mode === "dark" ? "white" : "" }}
                  className="leading-relaxed"
                >
                  RentHub made it so easy to find and rent exactly what I
                  needed! The entire process was smooth, the app is intuitive,
                  and the customer support was quick to respond. Renting has
                  never been this convenient!
                </p>
                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                <h2
                  style={{ color: mode === "dark" ? "#ff4162" : "" }}
                  className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase"
                >
                  Garv Gang
                </h2>
                <p
                  style={{ color: mode === "dark" ? "white" : "" }}
                  className="text-gray-500"
                >
                  Rajasthan(Kota)
                </p>
              </div>
            </div>

            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="public\SOURAV PHOTO.jpeg"
                />
                <p
                  style={{ color: mode === "dark" ? "white" : "" }}
                  className="leading-relaxed"
                >
                  RentHub’s selection of items was not as extensive as I hoped.
                  I struggled to find what I needed, and some items were marked
                  unavailable at the last minute. Needs more reliability.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                <h2
                  style={{ color: mode === "dark" ? "#ff4162" : "" }}
                  className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase"
                >
                  SOURAV KUMAR
                </h2>
                <p
                  style={{ color: mode === "dark" ? "white" : "" }}
                  className="text-gray-500"
                >
                  Bihar(BodhGaya)
                </p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="public\PPM.jpeg"
                />
                <p
                  style={{ color: mode === "dark" ? "white" : "" }}
                  className="leading-relaxed"
                >
                  Thanks to RentHub, I no longer worry about buying things I
                  only need temporarily. The products are top-notch, and the
                  customer support is always helpful and responsive. Couldn’t
                  ask for a better experience!.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                <h2
                  style={{ color: mode === "dark" ? "#ff4162" : "" }}
                  className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase"
                >
                  Naman Maheshwari
                </h2>
                <p
                  style={{ color: mode === "dark" ? "white" : "" }}
                  className="text-gray-500"
                >
                  Rajasthan(Udaipur)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonial;
//sourav
