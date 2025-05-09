'use client';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
    location: 'jakarta' // default location
  });

  const locations = {
    jakarta: {
      name: "Bandara Soekarno-Hatta Jakarta",
      address: "Tangerang, Banten 19120",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2868122201244!2d106.65118621476885!3d-6.127516995559667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a02695aaccb09%3A0x61dee98159fa3fe8!2sBandara%20Internasional%20Soekarno-Hatta!5e0!3m2!1sid!2sid!4v1647827938045!5m2!1sid!2sid"
    },
    semarang: {
      name: "Bandara Ahmad Yani Semarang",
      address: "Jl. Puad Ahmad Yani, Semarang 50145",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.1995849118623!2d110.37560067497487!3d-6.979356093040773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708c947764ce31%3A0xf8c5bd4d4c7a9f0!2sBandar%20Udara%20Internasional%20Jenderal%20Ahmad%20Yani!5e0!3m2!1sid!2sid!4v1710841831133!5m2!1sid!2sid"
    },
    yogya: {
      name: "Bandara Yogyakarta International",
      address: "Jl. Yogyakarta International Airport, Kulon Progo",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.4647989793186!2d110.05522731478037!3d-7.905199994291492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7ae11340a7c4b1%3A0x4027a76e35477e0!2sBandar%20Udara%20Internasional%20Yogyakarta!5e0!3m2!1sid!2sid!4v1647828087654!5m2!1sid!2sid"
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const locationData = locations[formData.location as keyof typeof locations];
    const whatsappMessage = `Nama: ${formData.name}%0A` +
      `Telepon: ${formData.phone}%0A` +
      `Lokasi: ${locationData.name}%0A` +
      `Alamat: ${locationData.address}%0A` +
      `Pesan: ${formData.message}`;
    
    window.open(`https://wa.me/6281225852454?text=${whatsappMessage}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            <a
              href="https://wa.me/6281225852454"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-600 transition-colors"
            >
              Hubungi Kami
            </a>
          </h2>
          <p className="text-xl text-gray-600">
            Siap melayani 24/7 untuk keadaan darurat
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Kontak Darurat
                </h3>
                <div className="flex items-center space-x-4 text-red-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a
                    href="https://wa.me/6281225852454"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl font-bold hover:text-red-700 transition-colors animate-pulse"
                  >
                    Hubungi Sekarang
                  </a>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-gray-900">
                  Lokasi Kami
                </h4>
                <div className="w-full h-[300px] rounded-lg overflow-hidden">
                  <iframe
                    src={locations[formData.location as keyof typeof locations].mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-4">
                  {Object.entries(locations).map(([key, location]) => (
                    <button
                      key={key}
                      onClick={() => setFormData(prev => ({ ...prev, location: key }))}
                      className={`p-2 rounded-lg text-sm font-medium transition-colors ${
                        formData.location === key
                          ? 'bg-red-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {location.name}
                    </button>
                  ))}
                </div>
                <p className="text-gray-600">
                  {locations[formData.location as keyof typeof locations].address}
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-gray-900">
                  Jam Operasional
                </h4>
                <div className="text-gray-600">
                  <p>Layanan Darurat: 24/7</p>
                  <p>Kantor Administrasi: Senin-Jumat 09.00-17.00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Kirim Pesan
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-black"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Nomor Telepon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-black"
                  required
                />
              </div>
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                  Pilih Lokasi
                </label>
                <select
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-black"
                  required
                >
                  {Object.entries(locations).map(([key, location]) => (
                    <option key={key} value={key}>
                      {location.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Pesan
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-black"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-red-600 text-white py-3 px-6 rounded-lg hover:bg-red-700 transition-colors"
              >
                Kirim Pesan via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 