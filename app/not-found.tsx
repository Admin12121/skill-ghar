import PageBanner from "@/components/Common/PageBanner";
import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <>
      <PageBanner pageTitle="404 Error" />

      <div className="error-wrap ptb-120">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-xl-10 ps-xl-0 text-center">
              <Image
                src="/images/error.png"
                alt="error"
                width={367}
                height={138}
                className="mx-auto d-block mb-40"
              />

              <h3 className="fs-24 fw-extrabold text-title mt-5 mb-40">
                Oops! We can&apos;t find the page you&apos;re looking for!
              </h3>

              <Link
                href="/"
                className="btn style-one d-inline-flex flex-wrap align-items-center p-0"
              >
                <span className="btn-text d-inline-block fw-semibold position-relative transition">
                  Back To Home
                </span>
                <span className="btn-icon position-relative d-flex flex-column align-items-center justify-content-center rounded-circle transition">
                  <i className="ri-arrow-right-up-line"></i>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
