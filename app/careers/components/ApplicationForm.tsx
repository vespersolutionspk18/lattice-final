'use client'

import React, { useState, useEffect } from 'react'
import Button from '@/app/components/Button'

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    position: '',
    location: '',
    experience: '',
    portfolio: '',
    linkedin: '',
    salary: '',
    startDate: '',
    referral: '',
    coverLetter: '',
    resume: null as File | null
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    
    if (type === 'file') {
      const fileInput = e.target as HTMLInputElement
      setFormData({
        ...formData,
        [name]: fileInput.files?.[0] || null
      })
    } else {
      setFormData({
        ...formData,
        [name]: value
      })
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Application submitted:', formData)
  }

  const positions = [
    'Senior Full Stack Developer',
    'Product Designer', 
    'Customer Success Manager',
    'Sales Development Representative',
    'AI/ML Engineer'
  ]

  useEffect(() => {
    const handlePositionUpdate = (e: Event) => {
      const target = e.target as HTMLSelectElement
      if (target.id === 'position-field') {
        setFormData(prev => ({
          ...prev,
          position: target.value
        }))
      }
    }

    const positionField = document.getElementById('position-field')
    positionField?.addEventListener('change', handlePositionUpdate)
    
    return () => {
      positionField?.removeEventListener('change', handlePositionUpdate)
    }
  }, [])

  return (
    <div id="application-form" className="p-5">
      <div className="flex flex-row gap-0">
        {/* Left Section with Image Background */}
        <div className="relative w-[45%] p-7 flex flex-col justify-between rounded-3xl overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2070&auto=format&fit=crop"
          alt="Office environment"
          className="absolute inset-0 w-full h-full object-cover -z-20"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-md -z-10"></div>
        
        <div className="relative z-10 flex flex-col h-full justify-between">
          <div>
            <h1 className="text-white text-5xl tracking-tighter mb-4">
              Ready to join<br />
              our team?
            </h1>
          </div>
          
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <div>
                <h3 className="text-white text-2xl tracking-tighter mb-2">Why work at Lattice?</h3>
                <ul className="text-white/90 text-base tracking-tight space-y-2">
                  <li>• Competitive salary & equity packages</li>
                  <li>• Comprehensive health, dental, and vision coverage</li>
                  <li>• Flexible remote work options</li>
                  <li>• Professional development budget</li>
                  <li>• Unlimited PTO policy</li>
                  <li>• Latest tech equipment of your choice</li>
                </ul>
              </div>
            </div>
            <div>
              <Button href="/contact" variant="green">
                Have Questions?
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section with Form */}
      <div className="w-[55%] p-8 bg-white">
        <form onSubmit={handleSubmit} className="space-y-4">
          <h2 className="text-3xl text-black/85 tracking-tighter mb-6">Application Form</h2>
          
          {/* Name Row */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-black/85 text-sm mb-1 tracking-tight">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="John"
                className="w-full px-3 py-2 text-base border border-black/10 rounded-xl focus:border-black/80 focus:outline-none focus:ring-2 focus:ring-black/5 transition-all placeholder:text-black/30"
                required
              />
            </div>
            <div>
              <label className="block text-black/85 text-sm mb-1 tracking-tight">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Doe"
                className="w-full px-3 py-2 text-base border border-black/10 rounded-xl focus:border-black/80 focus:outline-none focus:ring-2 focus:ring-black/5 transition-all placeholder:text-black/30"
                required
              />
            </div>
          </div>

          {/* Email and Phone */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-black/85 text-sm mb-1 tracking-tight">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full px-3 py-2 text-base border border-black/10 rounded-xl focus:border-black/80 focus:outline-none focus:ring-2 focus:ring-black/5 transition-all placeholder:text-black/30"
                required
              />
            </div>
            <div>
              <label className="block text-black/85 text-sm mb-1 tracking-tight">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(555) 123-4567"
                className="w-full px-3 py-2 text-base border border-black/10 rounded-xl focus:border-black/80 focus:outline-none focus:ring-2 focus:ring-black/5 transition-all placeholder:text-black/30"
                required
              />
            </div>
          </div>

          {/* Position Applying For */}
          <div>
            <label className="block text-black/85 text-sm mb-1 tracking-tight">
              Position Applying For <span className="text-red-500">*</span>
            </label>
            <select
              id="position-field"
              name="position"
              value={formData.position}
              onChange={handleChange}
              className="w-full px-3 py-2 text-base border border-black/10 rounded-xl focus:border-black/80 focus:outline-none focus:ring-2 focus:ring-black/5 transition-all appearance-none bg-white cursor-pointer"
              required
            >
              <option value="">Select a position</option>
              {positions.map(pos => (
                <option key={pos} value={pos}>{pos}</option>
              ))}
              <option value="other">Other / General Application</option>
            </select>
          </div>

          {/* Location and Experience */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-black/85 text-sm mb-1 tracking-tight">
                Current Location <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="City, State"
                className="w-full px-3 py-2 text-base border border-black/10 rounded-xl focus:border-black/80 focus:outline-none focus:ring-2 focus:ring-black/5 transition-all placeholder:text-black/30"
                required
              />
            </div>
            <div>
              <label className="block text-black/85 text-sm mb-1 tracking-tight">
                Years of Experience <span className="text-red-500">*</span>
              </label>
              <select
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                className="w-full px-3 py-2 text-base border border-black/10 rounded-xl focus:border-black/80 focus:outline-none focus:ring-2 focus:ring-black/5 transition-all appearance-none bg-white cursor-pointer"
                required
              >
                <option value="">Select experience</option>
                <option value="0-2">0-2 years</option>
                <option value="3-5">3-5 years</option>
                <option value="6-10">6-10 years</option>
                <option value="10+">10+ years</option>
              </select>
            </div>
          </div>

          {/* Portfolio and LinkedIn */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-black/85 text-sm mb-1 tracking-tight">
                Portfolio/Website
              </label>
              <input
                type="url"
                name="portfolio"
                value={formData.portfolio}
                onChange={handleChange}
                placeholder="https://yourportfolio.com"
                className="w-full px-3 py-2 text-base border border-black/10 rounded-xl focus:border-black/80 focus:outline-none focus:ring-2 focus:ring-black/5 transition-all placeholder:text-black/30"
              />
            </div>
            <div>
              <label className="block text-black/85 text-sm mb-1 tracking-tight">
                LinkedIn Profile
              </label>
              <input
                type="url"
                name="linkedin"
                value={formData.linkedin}
                onChange={handleChange}
                placeholder="https://linkedin.com/in/yourprofile"
                className="w-full px-3 py-2 text-base border border-black/10 rounded-xl focus:border-black/80 focus:outline-none focus:ring-2 focus:ring-black/5 transition-all placeholder:text-black/30"
              />
            </div>
          </div>

          {/* Salary and Start Date */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-black/85 text-sm mb-1 tracking-tight">
                Expected Salary Range <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="salary"
                value={formData.salary}
                onChange={handleChange}
                placeholder="$80,000 - $100,000"
                className="w-full px-3 py-2 text-base border border-black/10 rounded-xl focus:border-black/80 focus:outline-none focus:ring-2 focus:ring-black/5 transition-all placeholder:text-black/30"
                required
              />
            </div>
            <div>
              <label className="block text-black/85 text-sm mb-1 tracking-tight">
                Earliest Start Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                className="w-full px-3 py-2 text-base border border-black/10 rounded-xl focus:border-black/80 focus:outline-none focus:ring-2 focus:ring-black/5 transition-all"
                required
              />
            </div>
          </div>

          {/* How did you hear about us */}
          <div>
            <label className="block text-black/85 text-sm mb-1 tracking-tight">
              How did you hear about this position?
            </label>
            <input
              type="text"
              name="referral"
              value={formData.referral}
              onChange={handleChange}
              placeholder="LinkedIn, Company website, Referral, etc."
              className="w-full px-3 py-2 text-base border border-black/10 rounded-xl focus:border-black/80 focus:outline-none focus:ring-2 focus:ring-black/5 transition-all placeholder:text-black/30"
            />
          </div>

          {/* Resume Upload */}
          <div>
            <label className="block text-black/85 text-sm mb-1 tracking-tight">
              Resume/CV <span className="text-red-500">*</span>
            </label>
            <input
              type="file"
              name="resume"
              onChange={handleChange}
              accept=".pdf,.doc,.docx"
              className="w-full px-3 py-2 text-base border border-black/10 rounded-xl focus:border-black/80 focus:outline-none focus:ring-2 focus:ring-black/5 transition-all file:mr-3 file:px-3 file:py-1 file:border-0 file:rounded-lg file:bg-black/5 file:text-black/70 file:text-sm cursor-pointer"
              required
            />
            <p className="text-xs text-black/50 mt-1">PDF, DOC, or DOCX (Max 5MB)</p>
          </div>

          {/* Cover Letter */}
          <div>
            <label className="block text-black/85 text-sm mb-1 tracking-tight">
              Why do you want to work at Lattice? <span className="text-red-500">*</span>
            </label>
            <textarea
              name="coverLetter"
              value={formData.coverLetter}
              onChange={handleChange}
              placeholder="Tell us about your interest in this position and what you'd bring to our team..."
              rows={4}
              className="w-full px-3 py-2 text-base border border-black/10 rounded-xl focus:border-black/80 focus:outline-none focus:ring-2 focus:ring-black/5 transition-all placeholder:text-black/30 resize-none"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full bg-black text-white py-3 px-6 rounded-full text-base font-medium hover:bg-black/90 transition-all flex items-center justify-center gap-2"
            >
              Submit Application
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" transform="rotate(45 12 12)" />
              </svg>
            </button>
          </div>
        </form>
      </div>
      </div>
    </div>
  )
}

export default ApplicationForm