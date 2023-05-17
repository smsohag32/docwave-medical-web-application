import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useState } from "react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";
const Banner = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper w-full h-[calc(100vh-150px)]"
      >
        <SwiperSlide className="text-center font-bold  flex justify-center items-center">
          <img
            className="block w-full relative   h-full object-cover"
            src="https://images.unsplash.com/photo-1516841273335-e39b37888115?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1447&q=80"
            alt=""
          />
          <div className="absolute flex items-center justify-center top-0 left-0 bg-gradient-to-r from-[rgba(10,9,9,0.85)] to-[rgba(48,42,46,0.46)] right-0 bottom-0">
            <div className="max-w-md">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex esse
              quidem obcaecati velit explicabo dolorem commodi distinctio
              eligendi hic vel incidunt voluptas laborum soluta, error
              blanditiis doloribus quae beatae autem.
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-center font-bold  flex justify-center items-center">
          <img
            className="block w-full relative   h-full object-cover"
            src="https://images.unsplash.com/photo-1516841273335-e39b37888115?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1447&q=80"
            alt=""
          />
          <div className="absolute flex items-center justify-center top-0 left-0 bg-gradient-to-r from-[rgba(10,9,9,0.85)] to-[rgba(48,42,46,0.46)] right-0 bottom-0">
            <div className="max-w-md">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex esse
              quidem obcaecati velit explicabo dolorem commodi distinctio
              eligendi hic vel incidunt voluptas laborum soluta, error
              blanditiis doloribus quae beatae autem.
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-center font-bold  flex justify-center items-center">
          <img
            className="block w-full relative   h-full object-cover"
            src="https://images.unsplash.com/photo-1516841273335-e39b37888115?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1447&q=80"
            alt=""
          />
          <div className="absolute flex items-center justify-center top-0 left-0 bg-gradient-to-r from-[rgba(10,9,9,0.85)] to-[rgba(48,42,46,0.46)] right-0 bottom-0">
            <div className="max-w-md">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex esse
              quidem obcaecati velit explicabo dolorem commodi distinctio
              eligendi hic vel incidunt voluptas laborum soluta, error
              blanditiis doloribus quae beatae autem.
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-center font-bold  flex justify-center items-center">
          <img
            className="block w-full relative   h-full object-cover"
            src="https://images.unsplash.com/photo-1516841273335-e39b37888115?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1447&q=80"
            alt=""
          />
          <div className="absolute flex items-center justify-center top-0 left-0 bg-gradient-to-r from-[rgba(10,9,9,0.85)] to-[rgba(48,42,46,0.46)] right-0 bottom-0">
            <div className="max-w-md">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex esse
              quidem obcaecati velit explicabo dolorem commodi distinctio
              eligendi hic vel incidunt voluptas laborum soluta, error
              blanditiis doloribus quae beatae autem.
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-center font-bold  flex justify-center items-center">
          <img
            className="block w-full relative   h-full object-cover"
            src="https://images.unsplash.com/photo-1516841273335-e39b37888115?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1447&q=80"
            alt=""
          />
          <div className="absolute flex items-center justify-center top-0 left-0 bg-gradient-to-r from-[rgba(10,9,9,0.85)] to-[rgba(48,42,46,0.46)] right-0 bottom-0">
            <div className="max-w-md">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex esse
              quidem obcaecati velit explicabo dolorem commodi distinctio
              eligendi hic vel incidunt voluptas laborum soluta, error
              blanditiis doloribus quae beatae autem.
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-center font-bold  flex justify-center items-center">
          <img
            className="block w-full relative   h-full object-cover"
            src="https://images.unsplash.com/photo-1516841273335-e39b37888115?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1447&q=80"
            alt=""
          />
          <div className="absolute flex items-center justify-center top-0 left-0 bg-gradient-to-r from-[rgba(10,9,9,0.85)] to-[rgba(48,42,46,0.46)] right-0 bottom-0">
            <div className="max-w-md">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex esse
              quidem obcaecati velit explicabo dolorem commodi distinctio
              eligendi hic vel incidunt voluptas laborum soluta, error
              blanditiis doloribus quae beatae autem.
            </div>
          </div>
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}></svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
};

export default Banner;
