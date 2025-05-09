'use client';
import Image from 'next/image';

const About = () => {
  const stats = [
    { number: '15+', text: 'Years Experience' },
    { number: '10k+', text: 'Patients Served' },
    { number: '100%', text: 'Success Rate' },
    { number: '24/7', text: 'Support' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Trusted Emergency Medical Transport Service
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              With over 15 years of experience, we provide professional and reliable ambulance services
              24 hours a day, 7 days a week. Our team of highly trained medical professionals ensures
              that you receive the best possible care during transport.
            </p>

            <div className="grid grid-cols-2 gap-8 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-red-600">{stat.number}</div>
                  <div className="text-gray-600">{stat.text}</div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-600">Highly trained medical professionals</p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-600">Modern, fully-equipped ambulances</p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-600">Quick response times</p>
              </div>
            </div>
          </div>

          {/* Right Column - Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-48 rounded-lg overflow-hidden">
              <Image
                src="/ambulan6.jpg"
                alt="Ambulance Service"
                fill
                className="object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden">
              <Image
                src="/ambulan7.jpg"
                alt="Medical Team"
                fill
                className="object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden">
              <Image
                src="/ambulan8.jpg"
                alt="Emergency Response"
                fill
                className="object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden">
              <Image
                src="/ambulan1.jpg"
                alt="Medical Equipment"
                fill
                className="object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 