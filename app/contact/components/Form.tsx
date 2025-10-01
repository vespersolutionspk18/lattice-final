'use client'

import React, { useState } from 'react'
import Button from '@/app/components/Button'

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    jobTitle: '',
    company: '',
    interest: '',
    region: '',
    source: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <div className="flex flex-row gap-0">
      {/* Left Section with Image Background */}
      <div className="relative w-[45%] p-7 flex flex-col justify-between rounded-3xl overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
          alt="Team collaboration"
          className="absolute inset-0 w-full h-full object-cover -z-20"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-md -z-10"></div>
        
        <div className="relative z-10 flex flex-col h-full justify-between">
          <div>
            <h1 className="text-white text-5xl tracking-tighter mb-4">
              Fill out our form<br />
              to get in touch
            </h1>
          </div>
          
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-white/90 text-xl tracking-tighter">
                Interesting in joining our team? Head over to our<br />
                Careers page to check our latest job vacancies.
              </p>
            </div>
            <div>
              <Button href="/careers" variant="green">
                Careers
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section with Form */}
      <div className="w-[55%] p-8 bg-white">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Row */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-black/85 text-sm mb-1 tracking-tight">
                Hello, my first name is... <span className="text-red-500">*</span>
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
                And my last name is... <span className="text-red-500">*</span>
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

          {/* Email */}
          <div>
            <label className="block text-black/85 text-sm mb-1 tracking-tight">
              My email is <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@coolbusiness.com"
              className="w-full px-3 py-2 text-base border border-black/10 rounded-xl focus:border-black/80 focus:outline-none focus:ring-2 focus:ring-black/5 transition-all placeholder:text-black/30"
              required
            />
          </div>

          {/* Job Title and Company Row */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-black/85 text-sm mb-1 tracking-tight">
                My job title is... <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleChange}
                placeholder="Marketing Director"
                className="w-full px-3 py-2 text-base border border-black/10 rounded-xl focus:border-black/80 focus:outline-none focus:ring-2 focus:ring-black/5 transition-all placeholder:text-black/30"
                required
              />
            </div>
            <div>
              <label className="block text-black/85 text-sm mb-1 tracking-tight">
                My company name is... <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Some cool company"
                className="w-full px-3 py-2 text-base border border-black/10 rounded-xl focus:border-black/80 focus:outline-none focus:ring-2 focus:ring-black/5 transition-all placeholder:text-black/30"
                required
              />
            </div>
          </div>

          {/* Interest Dropdown */}
          <div>
            <label className="block text-black/85 text-sm mb-1 tracking-tight">
              I&apos;m interested in... <span className="text-red-500">*</span>
            </label>
            <select
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              className="w-full px-3 py-2 text-base border border-black/10 rounded-xl focus:border-black/80 focus:outline-none focus:ring-2 focus:ring-black/5 transition-all appearance-none bg-white cursor-pointer"
              required
            >
              <option value="">Please select an option</option>
              <option value="crm">CRM Solutions</option>
              <option value="website">Website Development</option>
              <option value="3d-rendering">3D Rendering Tools</option>
              <option value="ai-designer">AI Designer</option>
              <option value="full-package">Complete Package</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Region and Source Row */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-black/85 text-sm mb-1 tracking-tight">
                Region <span className="text-red-500">*</span>
              </label>
              <select
                name="region"
                value={formData.region}
                onChange={handleChange}
                className="w-full px-3 py-2 text-base border border-black/10 rounded-xl focus:border-black/80 focus:outline-none focus:ring-2 focus:ring-black/5 transition-all appearance-none bg-white cursor-pointer"
                required
              >
                <option value="">Please select an option</option>
                <option value="north-america">North America</option>
                <option value="europe">Europe</option>
                <option value="asia">Asia</option>
                <option value="south-america">South America</option>
                <option value="africa">Africa</option>
                <option value="oceania">Oceania</option>
              </select>
            </div>
            <div>
              <label className="block text-black/85 text-sm mb-1 tracking-tight">
                Where did you hear about us? <span className="text-red-500">*</span>
              </label>
              <select
                name="source"
                value={formData.source}
                onChange={handleChange}
                className="w-full px-3 py-2 text-base border border-black/10 rounded-xl focus:border-black/80 focus:outline-none focus:ring-2 focus:ring-black/5 transition-all appearance-none bg-white cursor-pointer"
                required
              >
                <option value="">Please select an option</option>
                <option value="google">Google Search</option>
                <option value="social-media">Social Media</option>
                <option value="referral">Referral</option>
                <option value="advertisement">Advertisement</option>
                <option value="event">Trade Show/Event</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-black/85 text-sm mb-1 tracking-tight">
              How can we help you? <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Start typing here..."
              rows={5}
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
              Submit Form
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" transform="rotate(45 12 12)" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Form
