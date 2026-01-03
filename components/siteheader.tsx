"use client";

import { useState, useEffect } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";

type MenuItem = {
  id?: string;
  label: string;
  href?: string;
  children?: MenuItem[];
};

type MenuItemsProps = { items: MenuItem[]; pathname: string };
const MenuItems = ({ items, pathname }: MenuItemsProps) => {
  return (
    <>
      {items.map((item, index) => (
        <li
          key={index}
          className={item.children ? "menu-item-has-children" : ""}
        >
          {item.href ? (
            <Link
              href={item.href}
              className={`nav-link ${pathname === item.href ? "active" : ""}`}
            >
              {item.label}
            </Link>
          ) : (
            <Link href="#" onClick={(e) => e.preventDefault()}>
              {item.label} <i className="ri-add-line"></i>
            </Link>
          )}
          {item.children && (
            <ul className="menu-subs menu-column-1">
              <MenuItems items={item.children} pathname={pathname} />
            </ul>
          )}
        </li>
      ))}
    </>
  );
};

type MobileMenuItemsProps = {
  items: MenuItem[];
  pathname: string;
  openDropdowns: string[];
  toggleDropdown: (id: string) => void;
  handleClose: () => void;
  parentPath?: string;
};
const MobileMenuItems = ({
  items,
  pathname,
  openDropdowns,
  toggleDropdown,
  handleClose,
  parentPath = "",
}: MobileMenuItemsProps) => {
  return (
    <>
      {items.map((item, index) => {
        const itemId = parentPath ? `${parentPath}-${index}` : `${index}`;
        const isOpen = openDropdowns.includes(itemId);
        const hasChildren = item.children && item.children.length > 0;

        return (
          <li key={itemId} className="nav-item">
            {hasChildren ? (
              <>
                <div
                  className="dropdown-toggle nav-link"
                  onClick={() => toggleDropdown(itemId)}
                >
                  <span>{item.label}</span>{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="8"
                    viewBox="0 0 14 8"
                    fill="none"
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <path
                      d="M13 1.5L7 6.5L1 1.5"
                      stroke="#5A6A85"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                {/* Always render dropdown but control visibility with CSS */}
                <ul className={`dropdown-menu ${isOpen ? "show" : ""}`}>
                  <MobileMenuItems
                    items={item.children!}
                    pathname={pathname}
                    openDropdowns={openDropdowns}
                    toggleDropdown={toggleDropdown}
                    handleClose={handleClose}
                    parentPath={itemId}
                  />
                </ul>
              </>
            ) : (
              <Link
                href={item.href || "#"}
                className={`nav-link ${pathname === item.href ? "active" : ""}`}
                onClick={handleClose}
              >
                {item.label}
              </Link>
            )}
          </li>
        );
      })}
    </>
  );
};

function SiteHeader({menus}: {menus: MenuItem[]}) {
  const pathname = usePathname();

  useEffect(() => {
    const el = document.getElementById("navbar");
    if (!el) return;

    const onScroll = () => {
      if (window.scrollY > 170) {
        el.classList.add("sticky");
      } else {
        el.classList.remove("sticky");
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [openDropdowns, setOpenDropdowns] = useState<string[]>([]);
  const toggleDropdown = (dropdownId: string) => {
    setOpenDropdowns((prev) => {
      if (prev.includes(dropdownId)) {
        return prev.filter((id) => !id.startsWith(dropdownId));
      } else {
        return [...prev, dropdownId];
      }
    });
  };
  return (
    <div
      className="navbar-area style-two bg-transparent position-relative"
      id="navbar"
    >
      <div className="container-fluid px-xxl-5">
        <div className="navbar-wrapper d-flex justify-content-between align-items-center">
          <Link href="/" className="navbar-brand">
            <Image
              src="/images/logo.svg"
              alt="Logo"
              width={120}
              height={26}
              className="logo-light"
            />
            <Image
              src="/images/logo.svg"
              alt="Logo"
              width={120}
              height={26}
              className="logo-dark d-none"
            />
          </Link>

          <div className="menu-area me-auto">
            <div className="overlay"></div>
            <nav className="menu">
              <div className="menu-mobile-header">
                <button
                  type="button"
                  className="menu-mobile-arrow bg-transparent border-0"
                >
                  <i className="ri-arrow-left-s-line"></i>
                </button>
                <div className="menu-mobile-title"></div>
                <button
                  type="button"
                  className="menu-mobile-close bg-transparent border-0"
                >
                  <i className="ri-close-line"></i>
                </button>
              </div>
              <ul className="menu-section p-0 mb-0 lh-1">
                <MenuItems items={menus} pathname={pathname} />
              </ul>
            </nav>
          </div>

          <div className="other-options d-flex flex-wrap align-items-center justify-content-end">
            <div className="option-item d-flex flex-wrap align-items-center">
              <div className="contact-link d-flex flex-wrap align-items-center position-relative transition">
                <span className="bg-[var(--primaryColor)]! contact-icon d-flex flex-column align-items-center justify-content-center rounded-circle transition">
                  <Phone className="size-4 text-white" />
                </span>
                <div className="d-xl-inline d-none">
                  <span className="text-title fw-semibold d-block">
                    Call Us:
                  </span>
                  <span className="text_primary fw-semibold">
                    +977 9812768387
                  </span>
                </div>
                <a
                  href="tel:6857886960"
                  className="position-absolute top-0 start-0 w-100 h-100"
                ></a>
              </div>
            </div>
            <div className="option-item">
              <Link
                href="/contact-us"
                className="btn style-one d-inline-flex flex-wrap align-items-center p-0"
              >
                <span className="btn-text d-inline-block fw-semibold position-relative transition">
                  Get In Touch
                </span>
                <span className="btn-icon position-relative d-flex flex-column align-items-center justify-content-center rounded-circle transition">
                  <i className="ri-arrow-right-up-line"></i>
                </span>
              </Link>
            </div>
            <div className="option-item d-lg-none">
              <button
                type="button"
                className="menu-mobile-trigger"
                onClick={handleShow}
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        style={{ width: "300px" }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <Image
              src="/images/logo.svg"
              alt="logo"
              width={134}
              height={35}
              className="black-logo"
            />
            <Image
              src="/images/logo-white.svg"
              alt="logo"
              width={134}
              height={35}
              className="white-logo"
            />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="mobile-menu">
            <ul className="mobile-menu-list">
              <MobileMenuItems
                items={menus}
                pathname={pathname}
                openDropdowns={openDropdowns}
                toggleDropdown={toggleDropdown}
                handleClose={handleClose}
              />
            </ul>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}
export default SiteHeader;
