import React from "react";
import Image from "next/image";
import Link from "next/link";
import BookAVisitForm from "./BookAVisitForm";

interface RoomPlanItem {
  label: string;
  value: number | string;
  unit?: string; // e.g., "Sq ft"
  bold?: boolean; // whether to bold the numeric part
}

interface RoomPlanData {
  iconSrc: string;
  iconAlt: string;
  iconWidth: number;
  iconHeight: number;
  heading: string; // "Room Plan"
  description: string;
  items: RoomPlanItem[];
}

interface FeaturedProperty {
  id: number;
  imageSrc: string;
  imageAlt: string;
  width: number;
  height: number;
  title: string;
  href: string;
  address: string;
  priceLabel: string; // e.g., "Price:"
  price: string; // e.g., "$15.000"
}

interface SidebarProps {
  roomPlan?: RoomPlanData;
  featuredProperties?: FeaturedProperty[];
  viewAllHref?: string;
}

const defaultRoomPlan: RoomPlanData = {
  iconSrc: "/images/icons/floor-plan.svg",
  iconAlt: "Icon",
  iconWidth: 29,
  iconHeight: 29,
  heading: "Room Plan",
  description:
    "Additional amenities include features: two-car garage, energy systems,",
  items: [
    { label: "Total area", value: 158, unit: "Sq ft", bold: true },
    { label: "Bedroom", value: 18, unit: "Sq ft", bold: true },
    { label: "Bathroom", value: 22, unit: "Sq ft", bold: true },
    { label: "Kitchen", value: 21, unit: "Sq ft", bold: true },
    { label: "Livingroom", value: 41, unit: "Sq ft", bold: true },
    { label: "Windows", value: 3 },
  ],
};

const defaultFeatured: FeaturedProperty[] = [
  {
    id: 1,
    imageSrc: "/images/properties/property-thumb-1.jpg",
    imageAlt: "Post Thumb",
    width: 86,
    height: 86,
    title: "Affordable Urban Room",
    href: "/properties/details/",
    address: "40 Journal Square , NJ, USA",
    priceLabel: "Price:",
    price: "$15.000",
  },
  {
    id: 2,
    imageSrc: "/images/properties/property-thumb-2.jpg",
    imageAlt: "Post Thumb",
    width: 86,
    height: 86,
    title: "Northwest Office Space",
    href: "/properties/details/",
    address: "14th Street, Florida, USA",
    priceLabel: "Price:",
    price: "$34.000",
  },
  {
    id: 3,
    imageSrc: "/images/properties/property-thumb-3.jpg",
    imageAlt: "Post Thumb",
    width: 86,
    height: 86,
    title: "Diamond Manco Apartment",
    href: "/properties/details/",
    address: "3rd Ave, New York, USA",
    priceLabel: "Price:",
    price: "$25.000",
  },
];

export default function Sidebar({
  roomPlan = defaultRoomPlan,
  featuredProperties = defaultFeatured,
  viewAllHref = "/properties",
}: SidebarProps) {
  return (
    <>
      <aside className="sidebar mt-lg-50">
        <div className="sidebar-widget bg-gray round-10">
          <h3 className="sidebar-widget-title fs-20 fw-semibold text-title border-0 pb-0 mb-15">
            <Image
              src={roomPlan.iconSrc}
              alt={roomPlan.iconAlt}
              width={roomPlan.iconWidth}
              height={roomPlan.iconHeight}
              className="position-relative"
            />
            {roomPlan.heading}
          </h3>
          <p>{roomPlan.description}</p>

          <ul className="property-info-list list-unstyled">
            {roomPlan.items.map((item, idx) => (
              <li
                key={`${item.label}-${idx}`}
                className="d-flex flex-wrap align-items-center justify-content-between"
              >
                <span>{item.label}</span>
                <span>
                  {item.bold ? (
                    <>
                      <b className="fw-semibold text-title me-1">
                        {item.value}
                      </b>
                      {item.unit ?? ""}
                    </>
                  ) : (
                    <>
                      {item.value}
                      {item.unit ? ` ${item.unit}` : ""}
                    </>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <BookAVisitForm />

        <div className="sidebar-widget tags-widget bg-gray round-10">
          <h3 className="sidebar-widget-title fs-18 fw-semibold text-title mb-15">
            Featured properties
          </h3>

          <div className="rp-post-wrap mb-20">
            {featuredProperties.map((prop) => (
              <div
                key={prop.id}
                className="rp-post-card d-flex flex-wrap align-items-center"
              >
                <div className="rp-post-img">
                  <Image
                    src={prop.imageSrc}
                    alt={prop.imageAlt}
                    width={prop.width}
                    height={prop.height}
                  />
                </div>
                <div className="rp-post-info">
                  <h5 className="fs-15 fw-bold mb-1">
                    <Link
                      href={prop.href}
                      className="text-title hover-text-primary transition"
                    >
                      {prop.title}
                    </Link>
                  </h5>
                  <span className="position-relative d-block mb-1">
                    <i className="ri-map-pin-2-line"></i>
                    {prop.address}
                  </span>
                  <p className="mb-0">
                    {prop.priceLabel}&nbsp;
                    <b className="text_primary fw-semibold">{prop.price}</b>
                  </p>
                </div>
              </div>
            ))}
          </div>

          <Link href={viewAllHref} className="link style-one fw-semibold">
            View All Properties{" "}
            <Image
              src="/images/icons/right-long-arrow-orange.svg"
              alt="icon"
              width={19}
              height={15}
            />
          </Link>
        </div>
      </aside>
    </>
  );
}
