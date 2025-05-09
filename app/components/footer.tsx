'use client';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Ambulan Service</h3>
            <p className="text-gray-400">
              Layanan transportasi medis profesional tersedia 24/7 untuk kebutuhan darurat Anda.
            </p>
            <div className="flex space-x-4">
              <a href="https://wa.me/6281225852454" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.486 2 2 6.486 2 12c0 1.825.494 3.535 1.352 5.004L2 22l5.035-1.316A9.945 9.945 0 0012 22c5.514 0 10-4.486 10-10S17.514 2 12 2zm0 18c-1.42 0-2.79-.369-4.006-1.072l-.277-.167-2.879.754.771-2.82-.181-.289A7.957 7.957 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Menu Cepat</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-400 hover:text-white transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Layanan Kami
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Layanan Kami</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">Transportasi Darurat</li>
              <li className="text-gray-400">Transportasi Non-Darurat</li>
              <li className="text-gray-400">Peralatan Medis</li>
              <li className="text-gray-400">Dukungan 24/7</li>
            </ul>
          </div>

          {/* Emergency Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontak Darurat</h4>
            <div className="space-y-2">
              <a
                href="https://wa.me/6281225852454"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-500 text-2xl font-bold hover:text-red-400 transition-colors animate-pulse inline-block"
              >
                Hubungi Sekarang
              </a>
              <p className="text-gray-400">Tersedia 24/7</p>
              <p className="text-gray-400">info@ambulanservice.com</p>
              <p className="text-gray-400">Jl. Raya Utama No. 123</p>
              <p className="text-gray-400">Kota, Indonesia 12345</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Ambulan Service. Hak Cipta Dilindungi.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Kebijakan Privasi
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Syarat Layanan
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Kebijakan Cookie
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 