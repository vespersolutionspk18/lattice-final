'use client'

import React, { useState } from 'react'
import Button from '@/app/components/Button'

const PartnerApplicationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    companyName: '',
    companyWebsite: '',
    industry: '',
    companySize: '',
    location: '',
    annualRevenue: '',
    partnershipType: '',
    expectedVolume: '',
    referral: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Partnership application submitted:', formData)
  }

  const partnershipTypes = [
    'Reseller Partner',
    'Technology Partner',
    'Service Provider',
    'Distribution Partner',
    'Strategic Alliance',
    'Other'
  ]

  const companySizes = [
    '1-10 employees',
    '11-50 employees',
    '51-200 employees',
    '201-500 employees',
    '500+ employees'
  ]

  const revenueRanges = [
    'Under $1M',
    '$1M - $5M',
    '$5M - $10M',
    '$10M - $50M',
    '$50M+'
  ]

  return (
    <div className="px-5 pt-5 pb-5">
      <div className="w-full rounded-2xl p-12" style={{ backgroundColor: '#1b2e9e' }}>
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-12 shadow-lg">
          <div className="mb-8 text-center">
            <h2 className="text-5xl text-gray-900 tracking-tighter mb-4">
              Partner Application
            </h2>
            <p className="text-lg text-gray-600">
              Join our network of trusted partners and grow your business with us
            </p>
          </div>

        <form onSubmit={handleSubmit} className="space-y-4">
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
                className="w-full px-3 py-2 text-base border border-black/10 rounded-xl focus:border-[#1b2e9e] focus:outline-none focus:ring-2 focus:ring-[#1b2e9e]/20 transition-all placeholder:text-black/30"
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
                className="w-full px-3 py-2 text-base border border-black/10 rounded-xl focus:border-[#1b2e9e] focus:outline-none focus:ring-2 focus:ring-[#1b2e9e]/20 transition-all placeholder:text-black/30"
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
                placeholder="john@company.com"
                className="w-full px-3 py-2 text-base border border-black/10 rounded-xl focus:border-[#1b2e9e] focus:outline-none focus:ring-2 focus:ring-[#1b2e9e]/20 transition-all placeholder:text-black/30"
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
                className="w-full px-3 py-2 text-base border border-black/10 rounded-xl focus:border-[#1b2e9e] focus:outline-none focus:ring-2 focus:ring-[#1b2e9e]/20 transition-all placeholder:text-black/30"
                required
              />
            </div>
          </div>

          {/* Company Name and Website */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-black/85 text-sm mb-1 tracking-tight">
                Company Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Acme Corp"
                className="w-full px-3 py-2 text-base border border-black/10 rounded-xl focus:border-[#1b2e9e] focus:outline-none focus:ring-2 focus:ring-[#1b2e9e]/20 transition-all placeholder:text-black/30"
                required
              />
            </div>
            <div>
              <label className="block text-black/85 text-sm mb-1 tracking-tight">
                Company Website <span className="text-red-500">*</span>
              </label>
              <input
                type="url"
                name="companyWebsite"
                value={formData.companyWebsite}
                onChange={handleChange}
                placeholder="https://company.com"
                className="w-full px-3 py-2 text-base border border-black/10 rounded-xl focus:border-[#1b2e9e] focus:outline-none focus:ring-2 focus:ring-[#1b2e9e]/20 transition-all placeholder:text-black/30"
                required
              />
            </div>
          </div>

          {/* Industry and Company Size */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-black/85 text-sm mb-1 tracking-tight">
                Industry <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                placeholder="e.g., Home Remodeling, Construction"
                className="w-full px-3 py-2 text-base border border-black/10 rounded-xl focus:border-[#1b2e9e] focus:outline-none focus:ring-2 focus:ring-[#1b2e9e]/20 transition-all placeholder:text-black/30"
                required
              />
            </div>
            <div>
              <label className="block text-black/85 text-sm mb-1 tracking-tight">
                Company Size <span className="text-red-500">*</span>
              </label>
              <select
                name="companySize"
                value={formData.companySize}
                onChange={handleChange}
                className="w-full px-3 py-2 text-base border border-black/10 rounded-xl focus:border-[#1b2e9e] focus:outline-none focus:ring-2 focus:ring-[#1b2e9e]/20 transition-all appearance-none bg-white cursor-pointer"
                required
              >
                <option value="">Select company size</option>
                {companySizes.map(size => (
                  <option key={size} value={size}>{size}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Location and Annual Revenue */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-black/85 text-sm mb-1 tracking-tight">
                Company Location <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="City, State"
                className="w-full px-3 py-2 text-base border border-black/10 rounded-xl focus:border-[#1b2e9e] focus:outline-none focus:ring-2 focus:ring-[#1b2e9e]/20 transition-all placeholder:text-black/30"
                required
              />
            </div>
            <div>
              <label className="block text-black/85 text-sm mb-1 tracking-tight">
                Annual Revenue <span className="text-red-500">*</span>
              </label>
              <select
                name="annualRevenue"
                value={formData.annualRevenue}
                onChange={handleChange}
                className="w-full px-3 py-2 text-base border border-black/10 rounded-xl focus:border-[#1b2e9e] focus:outline-none focus:ring-2 focus:ring-[#1b2e9e]/20 transition-all appearance-none bg-white cursor-pointer"
                required
              >
                <option value="">Select revenue range</option>
                {revenueRanges.map(range => (
                  <option key={range} value={range}>{range}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Partnership Type */}
          <div>
            <label className="block text-black/85 text-sm mb-1 tracking-tight">
              Partnership Type <span className="text-red-500">*</span>
            </label>
            <select
              name="partnershipType"
              value={formData.partnershipType}
              onChange={handleChange}
              className="w-full px-3 py-2 text-base border border-black/10 rounded-xl focus:border-[#1b2e9e] focus:outline-none focus:ring-2 focus:ring-[#1b2e9e]/20 transition-all appearance-none bg-white cursor-pointer"
              required
            >
              <option value="">Select partnership type</option>
              {partnershipTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          {/* Expected Volume */}
          <div>
            <label className="block text-black/85 text-sm mb-1 tracking-tight">
              Expected Monthly Volume <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="expectedVolume"
              value={formData.expectedVolume}
              onChange={handleChange}
              placeholder="e.g., 10-20 projects per month"
              className="w-full px-3 py-2 text-base border border-black/10 rounded-xl focus:border-[#1b2e9e] focus:outline-none focus:ring-2 focus:ring-[#1b2e9e]/20 transition-all placeholder:text-black/30"
              required
            />
          </div>

          {/* How did you hear about us */}
          <div>
            <label className="block text-black/85 text-sm mb-1 tracking-tight">
              How did you hear about our partnership program?
            </label>
            <input
              type="text"
              name="referral"
              value={formData.referral}
              onChange={handleChange}
              placeholder="LinkedIn, Website, Referral, Conference, etc."
              className="w-full px-3 py-2 text-base border border-black/10 rounded-xl focus:border-[#1b2e9e] focus:outline-none focus:ring-2 focus:ring-[#1b2e9e]/20 transition-all placeholder:text-black/30"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-black/85 text-sm mb-1 tracking-tight">
              Tell us about your partnership goals <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Describe your business, what you're looking for in a partnership, and how we can grow together..."
              rows={4}
              className="w-full px-3 py-2 text-base border border-black/10 rounded-xl focus:border-[#1b2e9e] focus:outline-none focus:ring-2 focus:ring-[#1b2e9e]/20 transition-all placeholder:text-black/30 resize-none"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <Button
              type="submit"
              variant="blue"
              customBackgroundColor="#1b2e9e"
              className="w-full"
            >
              Submit Partnership Application
            </Button>
          </div>
        </form>
        </div>
      </div>
    </div>
  )
}

export default PartnerApplicationForm
