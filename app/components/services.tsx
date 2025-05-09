'use client';
import Image from 'next/image';

const Services = () => {
  const services = [
    {
      title: 'Transportasi Darurat',
      description: 'Respons cepat untuk keadaan darurat medis dengan ambulans yang lengkap.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      image: '/ambulan2.jpg'
    },
    {
      title: 'Transportasi Non-Darurat',
      description: 'Layanan transportasi medis terjadwal untuk janji medis, transfer rumah sakit, dan perawatan non-darurat.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      image: '/ambulan3.jpg'
    },
    {
      title: 'Peralatan Medis',
      description: 'Peralatan dan perlengkapan medis modern untuk perawatan pasien yang komprehensif.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      image: '/ambulan4.jpg'
    },
    {
      title: 'Tersedia 24/7',
      description: 'Tim respons darurat siap melayani Anda kapan saja.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      image: '/ambulan5.jpg'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Layanan Kami
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Layanan transportasi medis profesional untuk setiap situasi
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              
              <div className="p-6">
                <div className="text-red-600 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>

              <div className="px-6 pb-6">
                <a
                  href="https://wa.me/6281225852454"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors text-center"
                >
                  Hubungi Sekarang
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 