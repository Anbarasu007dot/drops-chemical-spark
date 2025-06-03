import React from 'react';

export const LogoCarousel = () => {
  const logos = [
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoa1iqJRFd7I_mmGhnrz7Yr2jpMs7WKRPxog&s",
      alt: "ELGi Equipments"
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0ubXmTzOPd0ikx_d2mtRaN9h8Qch4ls3f1J4WgKDcyGIELuC78gcA3y2KXRsPiKBV2Dw&usqp=CAU",
      alt: "Roots Industries"
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDGfMI62jUY6FhDdBw5WTcnrSOe6I8VCrIIA&s",
      alt: "L&T Construction"
    },
    {
      src: "https://icon2.cleanpng.com/20180624/spo/aazkk20gu.webp",
      alt: "Radisson Blu"
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6gfcyPuEO0i6__nvSA4xvdGx6LW3pr9twZw&s",
      alt: "Craftsman Automation"
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXFMLy8l6NWCHjNtjYHQZ6kBNozBAwCEjhgQ&s",
      alt: "O by Tamara"
    },
    {
      src: "https://www.brushexpert.com/getimage/directory%20-%20logos/zahoransky%20logo.jpg/",
      alt: "Zahoransky India"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-700 to-blue-900 text-white overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white tracking-wide drop-shadow-lg" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
          Trusted by Industry Leaders
        </h2>
        <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-12">
          Partnering with renowned companies across Tamil Nadu and beyond
        </p>

        <div className="relative">
          <div className="flex overflow-hidden">
            <div className="logo-carousel flex">
              {[...logos, ...logos].map((logo, index) => (
                <div key={index} className="flex items-center justify-center mx-4">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="max-w-40 max-h-20 object-contain opacity-90 transition-opacity duration-300 bg-transparent"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `<span class='text-white font-semibold text-sm'>${logo.alt}</span>`;
                      }
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
