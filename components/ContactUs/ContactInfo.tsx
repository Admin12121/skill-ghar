import Image from "next/image";

const ContactInfo = () => {
  const contactData = [
    {
      id: 1,
      iconSrc: "/images/icons/phone-black.svg",
      iconAlt: "Phone Icon",
      title: "PHONE NUMBER",
      contact: "+977 9812768387",
      linkType: "tel",
      linkValue: "+9779812768387",
    },
    {
      id: 2,
      iconSrc: "/images/icons/mail-black.svg",
      iconAlt: "Mail Icon",
      title: "EMAIL",
      contact: "info@skillgriha.com",
      linkType: "mailto",
      linkValue: "info@skillgriha.com",
    },
    {
      id: 3,
      iconSrc: "/images/icons/pin-black.svg",
      iconAlt: "Location Icon",
      title: "LOCATION",
      contact: "Gangahiti Madhya Marg, Kathmandu",
      linkType: null, // No link for location
    },
  ];

  return (
    <>
      <div className="container pt-120">
        <div className="row justify-content-center pb-90">
          {contactData.map((item) => (
            <div key={item.id} className="col-xl-4">
              <div className="contact-card style-one bg-gray d-flex flex-wrap align-items-center round-30 mb-30">
                <div className="contact-icon bg_secondary d-flex flex-column align-items-center justify-content-center rounded-circle transition">
                  <Image
                    src={item.iconSrc}
                    alt={item.iconAlt}
                    width={24}
                    height={24}
                    className="transition"
                  />
                </div>
                <div className="contact-info">
                  <span className="font-optional fs-13 fw-bold d-block text-title ls-1">
                    {item.title}
                  </span>
                  {item.linkType ? (
                    <a
                      href={`${item.linkType}:${item.linkValue}`}
                      className="text-para hover-text-primary transition"
                    >
                      {item.contact}
                    </a>
                  ) : (
                    <span className="text-para">{item.contact}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
