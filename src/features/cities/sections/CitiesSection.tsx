"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import CityCard from "../components/CityCard";
import { cities } from "../data/cities.mock";

export default function CitiesSection() {
  return (
    <section id="Cities" className="flex flex-col gap-[30px] mt-[100px]">
      <div className="w-full max-w-[1130px] mx-auto flex items-center justify-between">
        <h2 className="font-bold text-[32px] leading-[48px] text-nowrap">
          You Can Choose <br />
          Our Favorite Cities
        </h2>
        <a href="#" className="rounded-full py-3 px-5 bg-white font-bold">
          Explore All City
        </a>
      </div>
      <Swiper
        spaceBetween={30}
        slidesOffsetAfter={30}
        slidesOffsetBefore={30}
        slidesPerView="auto"
        className="swiper w-full"
      >
        <div className="swiper-wrapper">
          {cities.map((city) => (
            <SwiperSlide
              key={city.id}
              className="swiper-slide !w-fit first-of-type:pl-[calc((100%-1130px-60px)/2)] last-of-type:pr-[calc((100%-1130px-60px)/2)]"
            >
              <CityCard city={city} />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </section>
  );
}
