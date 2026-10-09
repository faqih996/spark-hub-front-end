import Navbar from "@/src/components/Navbar";

import { cities } from "@/src/features/cities/data/cities.mock";
import OfficeSpaceCard from "@/src/features/offices/components/OfficeSpaceCard";
import { officeSpaces } from "@/src/features/offices/data/officeSpaces.mock";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { title } from "process";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const city = cities.find((item) => item.slug === slug);
  if (!city) {
    return {
      title: "City not found",
      description: "The city you're looking for does not exist",
    };
  }
  const fullImageUrl = city.image.startsWith("http")
    ? city.image
    : `https://yourdomain.com${city.image}`;
  return {
    title: { absolute: `${city.name} - Office` },
    description: `Cari kantor terbaik di ${city.name}.`,
    openGraph: {
      title: `${city.name} - Office Space`,
      description: `Temukan ruang kantor di kota ${city.name}`,
      images: [fullImageUrl],
    },
    twitter: {
      card: "summary_large_image",
      title: `${city.name} - Metro Space`,
      description: `Temukan ruang kantor di kota ${city.name}`,
      images: [fullImageUrl],
    },
    alternates: { canonical: `https://yourdomain.com/city/${slug}` },
  };
}

export default async function CityDetailPage({ params }: Props) {
  const { slug } = await params;

  const city = cities.find((city) => city.slug === slug);

  if (!city) {
    notFound();
  }

  const cityOffices = officeSpaces.filter(
    (space) => space.location === city.name,
  );

  return (
    <>
      <Navbar />

      <header className="flex flex-col w-full">
        <section id="Hero-Banner" className="relative flex h-[434px]">
          <div
            id="Hero-Text"
            className="relative z-10 mt-[70px] ml-[calc((100%-1130px)/2)] flex h-fit w-full max-w-[650px] flex-col gap-[30px] rounded-[30px] border border-[#E0DEF7] bg-white p-10"
          >
            <h1 className="text-[50px] font-extrabold leading-[60px]">
              Great Office in <br />
              <span className="text-[#0D903A]">{city.name} City</span>
            </h1>

            <p className="text-lg leading-8 text-[#000929]">
              Kantor yang tepat dapat memberikan impact pekerjaan menjadi lebih
              baik dan sehat dalam tumbuhkan karir.
            </p>
          </div>

          <div
            id="Hero-Image"
            className="absolute right-0 h-[434px] w-[calc(100%-((100%-1130px)/2)-305px)] overflow-hidden rounded-bl-[40px]"
          >
            <Image
              width={980}
              height={434}
              src="/assets/images/thumbnails/thumbnail-details-4.png"
              className="h-full w-full object-cover"
              alt="hero background"
            />
          </div>
        </section>
      </header>

      <section
        id="Fresh-Space"
        className="mx-auto mb-[120px] mt-[70px] flex w-full max-w-[1130px] flex-col gap-[30px]"
      >
        <h2 className="text-nowrap text-[32px] font-bold leading-[48px]">
          Browse Offices
        </h2>

        {cityOffices.length > 0 ? (
          <div className="grid grid-cols-3 gap-[30px]">
            {cityOffices.map((space) => (
              <OfficeSpaceCard key={space.id} space={space} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500">
            No Office spaces available in this city
          </p>
        )}
      </section>
    </>
  );
}
