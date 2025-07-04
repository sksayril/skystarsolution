import React from 'react';

const clients = [
  {
    name: 'Google',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg',
    url: 'https://google.com',
  },
  {
    name: 'Microsoft',
    logo: 'https://cdnlogo.com/logos/m/6/microsoft.svg',
    url: 'https://microsoft.com',
  },
  {
    name: 'Amazon',
    logo: 'https://static.vecteezy.com/system/resources/previews/014/018/563/non_2x/amazon-logo-on-transparent-background-free-vector.jpg',
    url: 'https://aws.amazon.com',
  },
  {
    name: 'Meta',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/meta.svg',
    url: 'https://meta.com',
  },
  {
    name: 'Netflix',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/netflix.svg',
    url: 'https://netflix.com',
  },
  {
    name: 'Slack',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg',
    url: 'https://slack.com',
  },
  {
    name: 'Spotify',
    logo: 'https://www.logo.wine/a/logo/Spotify/Spotify-Icon-Logo.wine.svg',
    url: 'https://spotify.com',
  },
  {
    name: 'Uber',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/uber.svg',
    url: 'https://uber.com',
  },
];

const duplicatedClients = [...clients, ...clients];

const ClientCarousel: React.FC = () => {
  return (
    <div className="py-16 bg-premium-light overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Our Clients
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Trusted by leading companies worldwide
        </p>
      </div>
      <div className="relative">
        <div className="flex animate-scroll-left space-x-8">
          {duplicatedClients.map((client, idx) => (
            <a
              key={client.name + idx}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 flex flex-col items-center group min-w-[160px]"
              style={{ opacity: 0.85 }}
            >
              <div className="bg-white/80 rounded-2xl shadow-lg p-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-12 w-12 object-contain drop-shadow-xl"
                  loading="lazy"
                />
              </div>
              <span className="mt-4 text-sm font-semibold text-gray-700 group-hover:text-gradient transition-colors duration-300">
                {client.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientCarousel; 