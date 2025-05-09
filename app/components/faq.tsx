'use client';
import { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Berapa lama waktu respons untuk keadaan darurat?',
      answer: 'Untuk keadaan darurat, tim kami menargetkan waktu respons kurang dari 15 menit di area layanan utama. Waktu dapat bervariasi tergantung lokasi dan kondisi lalu lintas.'
    },
    {
      question: 'Apakah layanan ambulans tersedia 24 jam?',
      answer: 'Ya, layanan ambulans kami beroperasi 24 jam sehari, 7 hari seminggu, termasuk hari libur. Tim kami selalu siap untuk menangani keadaan darurat kapan pun.'
    },
    {
      question: 'Apa saja peralatan medis yang tersedia di ambulans?',
      answer: 'Ambulans kami dilengkapi peralatan medis standar termasuk defibrilator, peralatan resusitasi, tabung oksigen, tandu, peralatan pertolongan pertama, dan monitor vital sign. Semua peralatan dirawat dan diperiksa secara rutin.'
    },
    {
      question: 'Bagaimana dengan biaya layanan ambulans?',
      answer: 'Biaya layanan bervariasi tergantung jenis layanan dan jarak. Untuk keadaan darurat, fokus kami adalah memberikan pertolongan secepat mungkin. Kami dapat mendiskusikan biaya setelah situasi darurat teratasi.'
    },
    {
      question: 'Apakah ambulans dilengkapi tenaga medis profesional?',
      answer: 'Ya, setiap ambulans kami dilengkapi minimal satu paramedis tersertifikasi dan satu asisten medis. Untuk kasus khusus, kami juga dapat menyediakan perawat atau dokter sesuai kebutuhan.'
    },
    {
      question: 'Bagaimana cara memesan layanan ambulans non-darurat?',
      answer: 'Untuk layanan non-darurat seperti transportasi medis terjadwal, Anda dapat menghubungi nomor layanan kami atau mengisi formulir pemesanan online minimal 24 jam sebelumnya.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-xl text-gray-600">
            Temukan jawaban untuk pertanyaan umum tentang layanan ambulans kami
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                <svg
                  className={`w-6 h-6 text-gray-500 transform transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}
              >
                <div className="p-6 pt-0 text-gray-600">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Masih punya pertanyaan lain?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold"
          >
            Hubungi kami
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 