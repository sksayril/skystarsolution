import React from 'react';
import { Target, Users, Award, Globe } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-premium-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h1 className="text-6xl font-bold text-gray-900 mb-8">
              About <span className="text-gradient">NeuralFlow AI</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We're a team of passionate AI engineers, developers, and innovators dedicated to 
              transforming businesses through intelligent automation and cutting-edge technology.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Mission</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                To democratize AI technology and make it accessible to businesses of all sizes. 
                We believe that every organization should have the power to leverage intelligent 
                automation to solve complex problems and drive growth.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed">
                Our team combines deep technical expertise with business acumen to deliver 
                solutions that not only work but truly transform how our clients operate.
              </p>
            </div>
            <div className="premium-card p-10 rounded-3xl">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Our Values</h3>
              <ul className="space-y-6">
                <li className="flex items-center">
                  <div className="premium-gradient p-2 rounded-full mr-4">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <span className="text-lg text-gray-700 font-medium">Innovation-driven development</span>
                </li>
                <li className="flex items-center">
                  <div className="premium-gradient p-2 rounded-full mr-4">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <span className="text-lg text-gray-700 font-medium">Client-centric solutions</span>
                </li>
                <li className="flex items-center">
                  <div className="premium-gradient p-2 rounded-full mr-4">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <span className="text-lg text-gray-700 font-medium">Ethical AI practices</span>
                </li>
                <li className="flex items-center">
                  <div className="premium-gradient p-2 rounded-full mr-4">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <span className="text-lg text-gray-700 font-medium">Continuous learning</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 bg-premium-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Why Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge technology with proven methodologies to deliver exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: 'Precision Focus',
                description: 'We understand your unique challenges and build solutions that address them directly.',
                gradient: 'premium-gradient',
              },
              {
                icon: Users,
                title: 'Expert Team',
                description: 'Our team includes top AI researchers, engineers, and business strategists.',
                gradient: 'premium-gradient-alt',
              },
              {
                icon: Award,
                title: 'Proven Results',
                description: 'Track record of successful AI implementations across various industries.',
                gradient: 'premium-gradient-blue',
              },
              {
                icon: Globe,
                title: 'Global Reach',
                description: 'Serving clients worldwide with 24/7 support and multilingual capabilities.',
                gradient: 'premium-gradient-purple',
              },
            ].map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="premium-card p-8 rounded-3xl group">
                  <div className={`${feature.gradient} p-4 rounded-2xl inline-block mb-8 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                    <IconComponent className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Our Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our multidisciplinary team brings together diverse skills and experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'AI/ML Engineers',
                description: 'Specialists in machine learning, deep learning, and neural network architectures.',
                skills: ['TensorFlow', 'PyTorch', 'Transformer Models', 'Computer Vision'],
                gradient: 'premium-gradient',
              },
              {
                title: 'Full-Stack Developers',
                description: 'Expert developers creating seamless user experiences and robust backends.',
                skills: ['React/Next.js', 'Node.js', 'Cloud Architecture', 'Database Design'],
                gradient: 'premium-gradient-alt',
              },
              {
                title: 'DevOps Engineers',
                description: 'Infrastructure experts ensuring scalable, secure, and reliable deployments.',
                skills: ['Kubernetes', 'AWS/GCP', 'CI/CD', 'Monitoring'],
                gradient: 'premium-gradient-blue',
              },
            ].map((role, index) => (
              <div key={index} className="premium-card p-8 rounded-3xl group">
                <div className={`${role.gradient} p-4 rounded-2xl inline-block mb-8 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                  <Users className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{role.title}</h3>
                <p className="text-gray-600 mb-8 leading-relaxed text-lg">{role.description}</p>
                <div className="flex flex-wrap gap-3">
                  {role.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 rounded-full text-sm font-medium shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;