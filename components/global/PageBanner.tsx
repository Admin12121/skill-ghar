import Image from "next/image";
import Link from "next/link";
import { House } from "lucide-react";

interface Props {
  pageTitle: string;
}

const PageBanner = ({ pageTitle }: Props) => {
  return (
    <main>
      <div className="breadcrumb-area position-relative z-1 overflow-hidden">
        <Image
          src="/images/breadcrumb/baner.jpg"
          alt="Background"
          width={1880}
          height={390}
          className="position-absolute top-0 start-0 w-100 h-100 z-n1 object-cover"
          style={{ opacity: 0.15 }}
        />
        {/* <Image
          src="/images/breadcrumb/br-line-shape.png"
          alt="Shape"
          width={1880}
          height={390}
          className="br-line-shape position-absolute top-0 start-0 w-100 h-100 z-n1"
        /> */}
        <Image
          src="/images/breadcrumb/br-shape-1.png"
          alt="Shape"
          width={86}
          height={72}
          className="br-shape-one position-absolute z-n1 bounce"
        />
        <Image
          src="/images/breadcrumb/br-shape-2.png"
          alt="Shape"
          width={387}
          height={225}
          className="br-shape-two position-absolute bottom-0 z-n1 moveHorizontal"
        />

        <div className="container-fluid px-xxl-5">
          <div className="row">
            <div className="col-md-10 offset-md-1 text-center">
              <h2 className="section-title style-one fw-black text-title">
                {pageTitle}
              </h2>
              <ul className="br-menu list-unstyled flex items-center justify-center">
                <li>
                  <Link href="/" className="flex flex-row gap-2 items-center justify-center">
                    <House className="size-4" />
                    HOME
                  </Link>
                </li>
                <li style={{ textTransform: "uppercase" }}>{pageTitle}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PageBanner;
