'use client';
import React from 'react';
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
    magelang: {
      name: "Kota Magelang",
      address: "Jl. Gatot Subroto No.59, Magelang, Jawa Tengah 56172",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63283.33037738815!2d110.17462580895385!3d-7.479719694843165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a8f6e30f69087%3A0x3027a76e356c0!2sMagelang%2C%20Magelang%20City%2C%20Central%20Java!5e0!3m2!1sen!2sid!4v1710842150317!5m2!1sen!2sid"
    },
    yogya: {
      name: "Kota Yogyakarta",
      address: "Jl. Malioboro No. 1, Yogyakarta, Daerah Istimewa Yogyakarta",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.1831871999997!2d110.3693!3d-7.7956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5787bd5b6bc5%3A0x21723fd4d3684f71!2sMalioboro%2C%20Sosromenduran%2C%20Gedong%20Tengen%2C%20Yogyakarta%20City%2C%20Special%20Region%20of%20Yogyakarta!5e0!3m2!1sen!2sid!4v1710842150317!5m2!1sen!2sid"
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
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            <a
              href="https://wa.me/6281225852454"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-600 transition-colors"
            >
              Ambulan 24 Jam Magelang Terdekat
            </a>
          </h1>
          <p className="text-xl text-gray-600">
            Layanan Ambulan 24 Jam Terdekat di Magelang, Yogyakarta, Semarang, dan Solo. Siap melayani 24/7 untuk keadaan darurat di seluruh wilayah Jawa Tengah.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  Kontak Darurat 24 Jam
                </h2>
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
                    Hubungi Ambulan Terdekat
                  </a>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-900">
                  Lokasi Layanan Ambulan
                </h2>
                <div className="w-full h-[300px] rounded-lg overflow-hidden">
                  <iframe
                    src={locations[formData.location as keyof typeof locations].mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Lokasi Ambulan 24 Jam"
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
                <h2 className="text-xl font-semibold text-gray-900">
                  Jam Operasional Ambulan
                </h2>
                <div className="text-gray-600">
                  <p>Layanan Ambulan Darurat: 24 Jam / 7 Hari</p>
                  <p>Kantor Administrasi: Senin-Minggu 24 Jam</p>
                  <p className="mt-2 text-sm">Melayani area: Magelang, Yogyakarta, Semarang, dan Solo</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Pesan Ambulan Darurat
            </h2>
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
                  placeholder="Masukkan nama lengkap"
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
                  placeholder="Contoh: 081234567890"
                />
              </div>
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                  Pilih Lokasi Terdekat
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
                  Detail Keadaan Darurat
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-black"
                  required
                  placeholder="Jelaskan kondisi darurat yang membutuhkan ambulans"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-red-600 text-white py-3 px-6 rounded-lg hover:bg-red-700 transition-colors"
              >
                Hubungi Ambulan Terdekat via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 