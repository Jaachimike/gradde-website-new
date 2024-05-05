import React, { useEffect } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import "swiper/css/autoplay";
import "./style.css";

const Testimonial = () => {
  useEffect(() => {
    const swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 32,
      loop: true,
      centeredSlides: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 32,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 32,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 32,
        },
      },
    });
    return () => {
      swiper.destroy();
    };
  }, []);

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 ">
          <span className="text-sm text-gray-500 font-medium text-center block mb-2">
            TESTIMONIAL
          </span>
          <h2 className="text-4xl text-center font-bold text-gray-900 ">
            What our happy user says!
          </h2>
        </div>
        {/* Slider wrapper */}
        <div className="swiper mySwiper">
          <div className="swiper-wrapper w-max">
            <div className="swiper-slide">
              <div className="group bg-white border border-solid border-gray-300 rounded-xl p-6 transition-all duration-500  w-full mx-auto hover:border-indigo-600 hover:shadow-sm slide_active:border-indigo-600">
                <div className="">
                  <p className="text-base text-gray-600 leading-6  transition-all duration-500 pb-8 group-hover:text-gray-800 slide_active:text-gray-800">
                    I have been using Gradde for the past semester and it has
                    completely transformed the way I grade my students' work. It
                    is so user-friendly and streamlined, and it saves me so much
                    time and effort. I highly recommend it to any teacher!
                  </p>
                </div>
                <div className="flex items-center gap-5 border-t border-solid border-gray-200 pt-5">
                  <div className="block">
                    <h5 className="text-gray-900 font-medium transition-all duration-500  mb-1">
                      Ms Oluwatosin
                    </h5>
                    <span className="text-sm leading-4 text-gray-500">
                      English Teacher
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="group bg-white border border-solid border-gray-300 flex justify-between flex-col rounded-xl p-6 transition-all duration-500  w-full mx-auto hover:border-indigo-600 slide_active:border-indigo-600 hover:shadow-sm">
                <div className="">
                  <p className="text-base text-gray-600 leading-6  transition-all duration-500 pb-8 group-hover:text-gray-800 slide_active:text-gray-800">
                    As a school administrator, Gradde has made it so much easier
                    for me to track student progress and support the teachers in
                    our school. The grade management features are top-notch and
                    the result sharing feature is a lifesaver.
                  </p>
                </div>
                <div className="flex items-center gap-5 pt-5 border-t border-solid border-gray-200">
                  <div className="block">
                    <h5 className="text-gray-900 font-medium transition-all duration-500  mb-1">
                      Ms Chidera
                    </h5>
                    <span className="text-sm leading-4 text-gray-500">
                      Assistant Principal
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className=" flex justify-between flex-col lg:w-full group bg-white border border-solid border-gray-300 rounded-xl p-6 transition-all duration-500  w-full mx-auto slide_active:border-indigo-600 hover:border-indigo-600 hover:shadow-sm">
                <div className="">
                  <p className="text-base text-gray-600 leading-6  transition-all duration-500  pb-8 group-hover:text-gray-800 slide_active:text-gray-800">
                    Gradde's friendly interface has made it a breeze for our
                    teachers to use. How we handle our grades now has helped
                    foster a positive relationship among our students, teachers
                    and parents.
                  </p>
                </div>
                <div className="flex items-center gap-5 border-t border-solid border-gray-200 pt-5">
                  <div className="block">
                    <h5 className="text-gray-900 font-medium transition-all duration-500  mb-1">
                      Mr Michael
                    </h5>
                    <span className="text-sm leading-4 text-gray-500">
                      Head Teacher
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="group bg-white border border-solid border-gray-300 flex justify-between flex-col rounded-xl p-6 transition-all duration-500  w-full mx-auto slide_active:border-indigo-600 hover:border-indigo-600 hover:shadow-sm ">
                <div className="">
                  <p className="text-base text-gray-600 leading-6  transition-all duration-500 pb-8 group-hover:text-gray-800 slide_active:text-gray-800">
                    Gradde has made my workflow better and faster from grading
                    my students results to sharing the results. Would highly
                    recommend
                  </p>
                </div>
                <div className="flex items-center gap-5 pt-5 border-t border-solid border-gray-200">
                  <div className="block">
                    <h5 className="text-gray-900 font-medium transition-all duration-500  mb-1">
                      Mr Daniels
                    </h5>
                    <span className="text-sm leading-4 text-gray-500">
                      Home Teacher
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
