import React from 'react'

const About = () => {
  return (
    <div>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Welcome to Thapar University's news portal. We are dedicated to keeping our community informed and connected through comprehensive coverage of campus life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <img 
              src="https://images.shiksha.com/mediadata/images/1533123972phpHxGtXi.jpeg"
              alt="Thapar University" 
              className="rounded-lg shadow-lg w-full h-[400px] object-cover"
            />
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
              <p className="text-gray-600">
                To provide a comprehensive platform for sharing news, events, and stories that matter to the Thapar community. We strive to keep students, faculty, and staff informed about academic achievements, cultural activities, and campus developments.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2">What We Cover</h2>
              <p className="text-gray-600">
                • Academic news and achievements<br />
                • Student society activities<br />
                • Campus events and festivals<br />
                • Research and innovation updates<br />
                • Cultural celebrations
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2">Our Team</h2>
              <p className="text-gray-600">
                Our dedicated team of student journalists and staff members work together to bring you timely and accurate coverage of everything happening at Thapar University.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
