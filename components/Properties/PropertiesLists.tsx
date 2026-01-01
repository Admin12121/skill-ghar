"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const PropertiesLists = () => {
  // Sample property data - in a real app, this would come from an API
  const allProperties = [
    {
      id: 1,
      image: "/images/properties/property-1.jpg",
      price: 546,
      title: "Loft In Mid-City Paradise",
      address: "20 Cooper Square, New York, USA",
      type: "Apartment",
      location: "New York",
      size: 1200,
      category: "For Rent",
    },
    {
      id: 2,
      image: "/images/properties/property-2.jpg",
      price: 345,
      title: "Central House Villa",
      address: "721 Broadway, New York, NY 10003, USA",
      type: "Villa",
      location: "New York",
      size: 1800,
      category: "For Rent",
    },
    {
      id: 3,
      image: "/images/properties/property-3.jpg",
      price: 867,
      title: "Sinomen Plant Palace",
      address: "371 7th Ave, New York, NY 10001",
      type: "Condominium",
      location: "New York",
      size: 1600,
      category: "For Sale",
    },
    {
      id: 4,
      image: "/images/properties/property-4.jpg",
      price: 720,
      title: "Luxury Downtown Apartment",
      address: "123 Main St, Los Angeles, CA",
      type: "Apartment",
      location: "California",
      size: 1100,
      category: "For Rent",
    },
    {
      id: 5,
      image: "/images/properties/property-5.jpg",
      price: 950,
      title: "Beachfront Villa",
      address: "456 Ocean Dr, Miami, FL",
      type: "Villa",
      location: "Florida",
      size: 2200,
      category: "For Sale",
    },
    {
      id: 6,
      image: "/images/properties/property-6.jpg",
      price: 620,
      title: "Modern City Condo",
      address: "789 Urban Ave, Chicago, IL",
      type: "Condominium",
      location: "Chicago",
      size: 1400,
      category: "For Rent",
    },
    {
      id: 7,
      image: "/images/properties/property-4.jpg",
      price: 780,
      title: "Suburban Family Townhouse",
      address: "214 Maple St, Austin, TX",
      type: "Townhouse",
      location: "Austin",
      size: 1750,
      category: "For Sale",
    },
    {
      id: 8,
      image: "/images/properties/property-2.jpg",
      price: 1120,
      title: "Riverside Penthouse Suite",
      address: "12 Riverside Blvd, Seattle, WA",
      type: "Penthouse",
      location: "Seattle",
      size: 2000,
      category: "For Rent",
    },
    {
      id: 9,
      image: "/images/properties/property-3.jpg",
      price: 540,
      title: "Countryside Retreat Cottage",
      address: "89 Willow Lane, Denver, CO",
      type: "Cottage",
      location: "Denver",
      size: 1300,
      category: "For Sale",
    },
  ];

  // State for filters
  const [filters, setFilters] = useState({
    propertyType: "",
    location: "",
    maxPrice: "",
    propertySize: "",
    propertyCategory: "",
  });

  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // State for filtered and paginated properties
  const [filteredProperties, setFilteredProperties] = useState(allProperties);
  const [currentProperties, setCurrentProperties] = useState<Property[]>([]);

  // Ref for scrolling to top
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle filter changes
  interface FilterState {
    propertyType: string;
    location: string;
    maxPrice: string;
    propertySize: string;
    propertyCategory: string;
  }

  interface Property {
    id: number;
    image: string;
    price: number;
    title: string;
    address: string;
    type: string;
    location: string;
    size: number;
    category: string;
  }

  const handleFilterChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFilters((prev: FilterState) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Apply filters and search
  const applyFilters = () => {
    let result = [...allProperties];

    // Apply property type filter
    if (filters.propertyType) {
      result = result.filter(
        (property) => property.type === filters.propertyType
      );
    }

    // Apply location filter
    if (filters.location) {
      result = result.filter(
        (property) => property.location === filters.location
      );
    }

    // Apply max price filter
    if (filters.maxPrice) {
      const maxPriceValue = parseInt(filters.maxPrice.replace("$", ""));
      result = result.filter((property) => property.price <= maxPriceValue);
    }

    // Apply property size filter
    if (filters.propertySize) {
      const [minSize, maxSize] = filters.propertySize
        .split(" - ")
        .map((str) => parseInt(str));
      result = result.filter(
        (property) => property.size >= minSize && property.size <= maxSize
      );
    }

    // Apply property category filter
    if (filters.propertyCategory) {
      result = result.filter(
        (property) => property.category === filters.propertyCategory
      );
    }

    setFilteredProperties(result);
    setCurrentPage(1); // Reset to first page when filters change
  };

  // Handle search button click
  const handleSearch = () => {
    applyFilters();
  };

  // Update current properties when page or filters change
  useEffect(() => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    setCurrentProperties(
      filteredProperties.slice(indexOfFirstItem, indexOfLastItem)
    );
  }, [currentPage, filteredProperties]);

  // Scroll to top when page changes
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [currentPage]);

  // Calculate total pages
  const totalPages = Math.ceil(filteredProperties.length / itemsPerPage);

  // Generate page numbers for pagination
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <div className="container ptb-120" ref={containerRef}>
        <div className="property-filter-box d-flex flex-wrap align-items-end bg-gray round-10 mb-40">
          <div className="form-group mb-20">
            <label className="fs-14 fw-semibold text-title d-block mb-1">
              Property Type
            </label>
            <select
              name="propertyType"
              value={filters.propertyType}
              onChange={handleFilterChange}
              className="w-100 ht-48 border-0 bg-white outline-0"
            >
              <option value="">All Types</option>
              <option value="Villa">Villa</option>
              <option value="Apartment">Apartment</option>
              <option value="Condominium">Condominium</option>
            </select>
          </div>

          <div className="form-group mb-20">
            <label className="fs-14 fw-semibold text-title d-block mb-1">
              Location
            </label>
            <select
              name="location"
              value={filters.location}
              onChange={handleFilterChange}
              className="w-100 ht-48 border-0 bg-white outline-0"
            >
              <option value="">All Cities</option>
              <option value="Florida">Florida</option>
              <option value="California">California</option>
              <option value="New York">New York</option>
            </select>
          </div>

          <div className="form-group mb-20">
            <label className="fs-14 fw-semibold text-title d-block mb-1">
              Max Price
            </label>
            <input
              type="number"
              name="maxPrice"
              value={filters.maxPrice}
              onChange={handleFilterChange}
              className="w-100 ht-48 border-0 bg-white text-para outline-0"
              placeholder="$1000"
            />
          </div>

          <div className="form-group mb-20">
            <label className="fs-14 fw-semibold text-title d-block mb-1">
              Property Size
            </label>
            <select
              name="propertySize"
              value={filters.propertySize}
              onChange={handleFilterChange}
              className="w-100 ht-48 border-0 bg-white outline-0"
            >
              <option value="">All Sizes</option>
              <option value="1000 - 1200 Sqft">1000 - 1200 Sqft</option>
              <option value="1000 - 1400 Sqft">1000 - 1400 Sqft</option>
              <option value="1200 - 1600 Sqft">1200 - 1600 Sqft</option>
            </select>
          </div>

          <div className="form-group mb-20">
            <label className="fs-14 fw-semibold text-title d-block mb-1">
              Property Category
            </label>
            <select
              name="propertyCategory"
              value={filters.propertyCategory}
              onChange={handleFilterChange}
              className="w-100 ht-48 border-0 bg-white outline-0"
            >
              <option value="">All Categories</option>
              <option value="For Sale">For Sale</option>
              <option value="For Rent">For Rent</option>
            </select>
          </div>
          
          <div className="form-group mb-20">
            <button
              onClick={handleSearch}
              className="btn style-two d-block w-100 p-0"
            >
              <span className="btn-text d-block w-100 fw-semibold position-relative transition">
                Search Property
              </span>
            </button>
          </div>
        </div>

        <div className="row justify-content-center gx-xxl-25">
          {currentProperties.length > 0 ? (
            currentProperties.map((property) => (
              <div key={property.id} className="col-xl-4 col-md-6">
                <div className="property-card style-one img-hover-zoom mb-45">
                  <div className="property-img img-zoom position-relative overflow-hidden z-1 round-10">
                    <Image
                      src={property.image}
                      alt={property.title}
                      width={570}
                      height={640}
                      className="position-absolute top-0 bottom-0 start-0 end-0 z-1 round-10"
                    />
                    <Image
                      src={property.image}
                      alt={property.title}
                      width={570}
                      height={640}
                      className="round-10"
                    />
                    <div className="property-price position-absolute end-0 bg_primary text-white z-1">
                      <span className="fw-bold">${property.price}</span>/Month
                    </div>
                    <Link
                      href="/properties/details"
                      className="position-absolute top-0 start-0 w-100 h-100"
                    ></Link>
                  </div>
                  <h3 className="fs-24 fw-semibold mb-15">
                    <Link
                      href="/properties/details"
                      className="text-title link-hover-primary transition"
                    >
                      {property.title}
                    </Link>
                  </h3>
                  <p className="position-relative mb-0">
                    <Image
                      src="/images/icons/pin.svg"
                      alt="Icon"
                      width={14}
                      height={17}
                    />
                    {property.address}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12 text-center">
              <p className="fs-18 text-title">
                No properties found matching your criteria.
              </p>
            </div>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <ul className="page-nav pagination justify-content-center mb-0 mt-lg-4">
            <li className="page-item">
              <button
                type="button"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="page-link d-flex flex-column align-items-center justify-content-center rounded-circle"
              >
                <Image
                  src="/images/icons/left-long-arrow-gray.svg"
                  alt="Previous"
                  width={16}
                  height={12}
                />
              </button>
            </li>
            {pageNumbers.map((number) => (
              <li key={number} className="page-item">
                <button
                  type="button"
                  onClick={() => setCurrentPage(number)}
                  className={`page-link d-flex flex-column align-items-center justify-content-center rounded-circle ${
                    currentPage === number ? "active" : ""
                  }`}
                >
                  {number.toString().padStart(2, "0")}
                </button>
              </li>
            ))}
            <li className="page-item">
              <button
                type="button"
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className="page-link d-flex flex-column align-items-center justify-content-center rounded-circle"
              >
                <Image
                  src="/images/icons/right-long-arrow-gray.svg"
                  alt="Next"
                  width={16}
                  height={12}
                />
              </button>
            </li>
          </ul>
        )}
      </div>
    </>
  );
};

export default PropertiesLists;