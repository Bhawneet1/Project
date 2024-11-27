import React from 'react'

const Contact = () => {
  return (
    <div>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions or feedback? We'd love to hear from you. Get in touch with the Thapar University community through any of the channels below.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <img 
              src="https://media-cdn.tripadvisor.com/media/photo-s/09/5b/9d/fd/thapar-university.jpg"
              alt="Thapar University Campus" 
              className="rounded-lg shadow-lg w-full h-[400px] object-cover"
            />
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-2">Visit Us</h2>
              <p className="text-gray-600">
                Thapar Institute of Engineering & Technology<br />
                P.O. Box 32, Patiala<br />
                Punjab - 147004
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2">Contact Information</h2>
              <p className="text-gray-600">
                Phone: 0175-2393021<br />
                Email: admissions@thapar.edu<br />
                Office Hours: Monday - Friday, 9:00 AM - 5:00 PM
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2">Connect With Us</h2>
              <p className="text-gray-600">
                Follow us on social media to stay updated with the latest news and events happening at Thapar University.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
