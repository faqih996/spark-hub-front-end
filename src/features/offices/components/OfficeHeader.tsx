"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

type OfficeHeaderProps = {
  images: string[];
};

export default function OfficeHeader({ images }: OfficeHeaderProps) {
  return (
    <section id="Gallery" className="-mb-[50px]">
      <div className="swiper w-full">
        <Swiper
          className="swiper-wrapper"
          slidesPerView="auto"
          spaceBetween={10}
          slidesOffsetAfter={10}
          slidesOffsetBefore={10}
        >
          {images.map((image, index) => (
            <SwiperSlide key={image} className="swiper-slide !w-fit">
              <div className="h-[550px] w-[700px] overflow-hidden">
                <Image
                  src={image}
                  width={700}
                  height={550}
                  className="h-full w-full object-cover"
                  alt={`Office image ${index + 1}`}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
