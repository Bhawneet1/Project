import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const Sections = () => {
  const { section } = useParams()
  
  // Validate section parameter
  const validSections = ['academic', 'society', 'fest']
  if (section && !validSections.includes(section.toLowerCase())) {
    return <Navigate to="/" replace />
  }

  const renderSection = () => {
    switch(section?.toLowerCase()) {
      case 'academic':
        return (
          <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 py-16">
            <h1 className="text-4xl font-bold mb-8">Academic News</h1>
            <p className="text-gray-600">Latest academic updates and achievements from Thapar University.</p>
          </div>
        )
      case 'society': 
        return (
          <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 py-16">
            <h1 className="text-4xl font-bold mb-8">Society Updates</h1>
            <p className="text-gray-600">News and events from various student societies and clubs.</p>
          </div>
        )
      case 'fest':
        return (
          <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 py-16">
            <h1 className="text-4xl font-bold mb-8">Festival Coverage</h1>
            <p className="text-gray-600">Coverage of cultural and technical festivals at Thapar.</p>
          </div>
        )
      default:
        return (
          <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 py-16">
            <h1 className="text-4xl font-bold mb-8">All Sections</h1>
            <p className="text-gray-600">Please select a specific section to view content.</p>
          </div>
        )
    }
  }

  return (
    <div>
      {renderSection()}
    </div>
  )
}

export default Sections
