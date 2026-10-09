import Navbar from "@/src/components/Navbar";
import OfficeFeatures from "@/src/features/offices/components/OfficeFeatures";
import OfficeHeader from "@/src/features/offices/components/OfficeHeader";
import SalesContactCard from "@/src/features/offices/components/SalesContactCard";
import { officeSpaces } from "@/src/features/offices/data/officeSpaces.mock";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const office = officeSpaces.find((item) => item.slug === slug);
  if (!office) {
    return {
      title: "Office not found",
      description: "The office you're looking for does not exist",
    };
  }
  const fullImageUrl = office.image.startsWith("http")
    ? office.image
    : `https://yourdomain.com${office.image}`;
  return {
    title: { absolute: `${office.title} - Office` },
    description: `Cari kantor terbaik di ${office.title}.`,
    openGraph: {
      title: `${office.title} - Office Space`,
      description: `Temukan ruang kantor di kota ${office.title}`,
      images: [fullImageUrl],
    },
    twitter: {
      card: "summary_large_image",
      title: `${office.title} - Metro Space`,
      description: `Temukan ruang kantor di kota ${office.title}`,
      images: [fullImageUrl],
    },
    alternates: { canonical: `https://yourdomain.com/office/${slug}` },
  };
}

export default async function OfficeSpaceDetailPage({ params }: Props) {
  const { slug } = await params;

  const office = officeSpaces.find((item) => item.slug === slug);

  if (!office) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <OfficeHeader images={office.images} />
      <section
        id="Details"
        className="relative flex max-w-[1130px] mx-auto gap-[30px] mb-20 z-10"
      >
        <div className="flex flex-col w-full rounded-[20px] border border-[#E0DEF7] p-[30px] gap-[30px] bg-white">
          {office.tags.map((tag) => (
            <p
              key={tag}
              className="w-fit rounded-full p-[6px_16px] bg-[#0D903A] font-bold text-sm leading-[21px] text-[#F7F7FD]"
            >
              {tag}
            </p>
          ))}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-extrabold text-[32px] leading-[44px]">
                {office.title}
              </h1>
              <div className="flex items-center gap-[6px] mt-[10px]">
                <Image
                  src="/assets/images/icons/location.svg"
                  width={24}
                  height={24}
                  alt="icon"
                />
                <p className="font-semibold">{office.location}</p>
              </div>
            </div>
            <div className="flex flex-col gap-[6px]">
              <div className="flex items-center gap-1">
                <Image
                  src="/assets/images/icons/Star 1.svg"
                  width={20}
                  height={20}
                  alt="star"
                />
                <Image
                  src="/assets/images/icons/Star 1.svg"
                  width={20}
                  height={20}
                  alt="star"
                />
                <Image
                  src="/assets/images/icons/Star 1.svg"
                  width={20}
                  height={20}
                  alt="star"
                />
                <Image
                  src="/assets/images/icons/Star 1.svg"
                  width={20}
                  height={20}
                  alt="star"
                />
                <Image
                  src="/assets/images/icons/Star 5.svg"
                  width={20}
                  height={20}
                  alt="star"
                />
              </div>
              <p className="font-semibold text-right">
                {office.rating}/5 (19,384)
              </p>
            </div>
          </div>
          <p className="leading-[30px]">{office.about}</p>
          <hr className="border-[#F6F5FD]" />
          <h2 className="font-bold">You Get What You Need Most</h2>
          <OfficeFeatures features={office.features} />
          <hr className="border-[#F6F5FD]" />
          <div className="flex flex-col gap-[6px]">
            <h2 className="font-bold">Office Address</h2>
            <p>{office.address}</p>
          </div>
          <div className="overflow-hidden w-full h-[280px]">
            <div
              id="my-map-display"
              className="h-full w-full max-w-[none] bg-none"
            >
              <iframe
                className="h-full w-full border-0"
                src={`https://www.google.com/maps/embed/v1/place?q=${office.title}&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`}
              />
            </div>
            <a
              className="from-embedmap-code"
              href="https://www.bootstrapskins.com/themes"
              id="enable-map-data"
            >
              premium bootstrap themes
            </a>
          </div>
        </div>
        <div className="w-[392px] flex flex-col shrink-0 gap-[30px]">
          <div className="flex flex-col rounded-[20px] border border-[#E0DEF7] p-[30px] gap-[30px] bg-white">
            {office.isFullyBooked ? (
              <div>
                <p className="font-bold text-xl leading-[30px]">
                  Sorry. This office is{" "}
                  <span className="text-[#FF2D2D]">fully booked</span> at this
                  moment, try next time.
                </p>
              </div>
            ) : (
              <div>
                <p className="font-extrabold text-[32px] leading-[48px] text-[#0D903A]">
                  Rp {office.price.toLocaleString("id")}
                </p>
                <p className="font-semibold mt-1">
                  For {office.duration} days working
                </p>
              </div>
            )}

            <hr className="border-[#F6F5FD]" />
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <Image
                  src="/assets/images/icons/verify.svg"
                  width={30}
                  height={30}
                  alt="icon"
                />
                <p className="font-semibold leading-[28px]">
                  Mendapatkan akses pembelajaran terbaru terkait dunia startup
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Image
                  src="/assets/images/icons/verify.svg"
                  width={30}
                  height={30}
                  alt="icon"
                />
                <p className="font-semibold leading-[28px]">
                  Mendapatkan akses pembelajaran terbaru terkait dunia startup
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Image
                  src="/assets/images/icons/verify.svg"
                  width={30}
                  height={30}
                  alt="icon"
                />
                <p className="font-semibold leading-[28px]">
                  Mendapatkan akses pembelajaran terbaru terkait dunia startup
                </p>
              </div>
            </div>
            <hr className="border-[#F6F5FD]" />
            <div className="flex flex-col gap-[14px]">
              {office.isFullyBooked ? (
                <button className="flex items-center justify-center w-full rounded-full border border-[#000929] p-[16px_26px] gap-3 bg-white font-semibold">
                  <Image
                    src="/assets/images/icons/save-add.svg"
                    width={24}
                    height={24}
                    alt="icon"
                  />
                  <span>Save for Later</span>
                </button>
              ) : (
                <a
                  target="_blank"
                  href="{`https://wa.me/6285161369612?text=Saya tertarik untuk bekerjasama dengan anda`}"
                  className="flex items-center justify-center w-full rounded-full p-[16px_26px] gap-3 bg-[#0D903A] font-bold text-[#F7F7FD]"
                >
                  <Image
                    src="/assets/images/icons/slider-horizontal-white.svg"
                    width={24}
                    height={24}
                    alt="icon"
                  />
                  <span>Book This Office</span>
                </a>
              )}
            </div>
          </div>
          <div className="flex flex-col rounded-[20px] border border-[#E0DEF7] p-[30px] gap-[20px] bg-white">
            <h2 className="font-bold">Contact Our Sales</h2>
            <div className="flex flex-col gap-[30px]">
              {office.salesContacts.map((contact, index) => (
                <SalesContactCard key={index} contact={contact} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
