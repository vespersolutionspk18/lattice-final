'use client'

import React, { useState } from 'react'
import Button from '../../components/Button'
import { HiArrowUpRight } from 'react-icons/hi2'

interface Position {
  id: number
  title: string
  department: string
  location: string
  type: string
  description: string
}

const positions: Position[] = [
  {
    id: 1,
    title: 'Senior Full Stack Developer',
    department: 'Engineering',
    location: 'Remote / Virginia',
    type: 'Full-time',
    description: 'Build cutting-edge B2B solutions for contractors using Next.js, React, and Node.js.'
  },
  {
    id: 2,
    title: 'Product Designer',
    department: 'Design',
    location: 'Remote / Virginia',
    type: 'Full-time',
    description: 'Design intuitive interfaces for our CRM and 3D rendering tools that contractors love.'
  },
  {
    id: 3,
    title: 'Customer Success Manager',
    department: 'Customer Success',
    location: 'Virginia',
    type: 'Full-time',
    description: 'Help contractors maximize their success with our platform through onboarding and support.'
  },
  {
    id: 4,
    title: 'Sales Development Representative',
    department: 'Sales',
    location: 'Remote / Virginia',
    type: 'Full-time',
    description: 'Connect with contractors nationwide to introduce them to our innovative solutions.'
  },
  {
    id: 5,
    title: 'AI/ML Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    description: 'Develop AI-powered design tools and intelligent features for our contractor platform.'
  }
]

const OpenPositions = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('All')
  
  const departments = ['All', ...new Set(positions.map(p => p.department))]
  const filteredPositions = selectedDepartment === 'All' 
    ? positions 
    : positions.filter(p => p.department === selectedDepartment)

  const scrollToForm = (positionTitle: string) => {
    const formElement = document.getElementById('application-form')
    const positionField = document.getElementById('position-field') as HTMLSelectElement
    
    if (positionField) {
      positionField.value = positionTitle
      const event = new Event('change', { bubbles: true })
      positionField.dispatchEvent(event)
    }
    
    formElement?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div id="open-positions" className="p-12">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <h2 className="text-5xl text-black/85 tracking-tighter">Open Positions</h2>
          <p className="text-xl text-black/65 tracking-tighter">
            Find your next opportunity to make an impact
          </p>
        </div>

        <div className="flex flex-row gap-2">
          {departments.map(dept => (
            <button
              key={dept}
              onClick={() => setSelectedDepartment(dept)}
              className={`px-4 py-2 rounded-full text-base font-medium transition-all ${
                selectedDepartment === dept 
                  ? 'bg-black text-white' 
                  : 'bg-black/5 text-black/70 hover:bg-black/10'
              }`}
            >
              {dept}
            </button>
          ))}
        </div>

        <div className="grid gap-4">
          {filteredPositions.map(position => (
            <div
              key={position.id}
              className="group border border-black/10 rounded-2xl p-6 hover:border-black/30 transition-all"
            >
              <div className="flex flex-row justify-between items-start">
                <div className="flex flex-col gap-3">
                  <div>
                    <h3 className="text-2xl text-black/85 tracking-tighter font-medium">
                      {position.title}
                    </h3>
                    <div className="flex flex-row gap-4 mt-2">
                      <span className="text-sm text-black/60">{position.department}</span>
                      <span className="text-sm text-black/60">•</span>
                      <span className="text-sm text-black/60">{position.location}</span>
                      <span className="text-sm text-black/60">•</span>
                      <span className="text-sm text-black/60">{position.type}</span>
                    </div>
                  </div>
                  <p className="text-base text-black/70 tracking-tight">
                    {position.description}
                  </p>
                </div>
                <button
                  onClick={() => scrollToForm(position.title)}
                  className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-full text-sm font-medium hover:bg-black/90 transition-all"
                >
                  Apply Now
                  <HiArrowUpRight className="text-xs stroke-2" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredPositions.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-black/50 tracking-tighter">
              No positions available in this department at the moment.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default OpenPositions