"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { CheckCircle, Clipboard, MessageCircle, ChevronDown, ChevronUp, Phone } from "lucide-react"

// Função única para todos os CTAs - Detecção real de dispositivo móvel
const getCTALink = () => {
  if (typeof window === "undefined") {
    // SSR fallback - desktop Gmail no navegador
    const subject = encodeURIComponent("Cleaning Service Request")
    const body = encodeURIComponent(
      "Hi, I would like to schedule a cleaning service. Please contact me with more information.",
    )
    return `https://mail.google.com/mail/?view=cm&to=purahousecleaning@gmail.com&su=${subject}&body=${body}`
  }

  // Detecção real de dispositivo móvel usando userAgent
  const isMobile = /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

  if (isMobile) {
    // Mobile: SMS
    return "sms:+19414026077?&body=Hi,%20I%20would%20like%20a%20cleaning%20quote."
  }

  // Desktop: Gmail no navegador
  const subject = encodeURIComponent("Cleaning Service Request")
  const body = encodeURIComponent(
    "Hi, I would like to schedule a cleaning service. Please contact me with more information.",
  )
  return `https://mail.google.com/mail/?view=cm&to=purahousecleaning@gmail.com&su=${subject}&body=${body}`
}

const getPhoneLink = () => "tel:+19414026077"

export default function ResponsiveLandingPage() {
  const [expandedCards, setExpandedCards] = useState<{ [key: string]: boolean }>({
    living: false,
    kitchen: false,
    bathroom: false,
    bedroom: false,
  })

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      const isMobile = /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      setIsMobile(isMobile)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const toggleCard = (cardId: string) => {
    setExpandedCards((prev) => ({
      ...prev,
      [cardId]: !prev[cardId],
    }))
  }

  return (
    <div className="bg-white">
      {/* Mobile Navigation Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-blue-600 backdrop-blur-sm border-b border-blue-700 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image
              src="/images/pura-house-cleaning-logo.png"
              alt="PURA House Cleaning Logo"
              width={40}
              height={40}
              className="rounded"
            />
            <div>
              <h3 className="text-sm font-bold text-white">PURA House Cleaning</h3>
              <a
                href="tel:+19414026077"
                className="text-xs text-blue-200 hover:text-white transition-colors duration-200 font-medium"
              >
                (941) 402-6077
              </a>
            </div>
          </div>
          <Button
            size="sm"
            className="bg-yellow-500 hover:bg-yellow-600 text-blue-600 px-4 py-2 rounded-full text-xs font-bold border-2 border-yellow-500"
            asChild
          >
            <a href={getCTALink()}>SCHEDULE NOW</a>
          </Button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-16 lg:pt-20 pb-8 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Mobile Background */}
          <div className="lg:hidden">
            <Image
              src="/images/new-mobile-hero-bg.png"
              alt="PURA Team - Professional cleaners in blue uniforms"
              fill
              className="object-cover object-right-top"
              priority
              quality={100}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-800/30 to-slate-900/60"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
          </div>

          {/* Desktop Background */}
          <div className="hidden lg:block">
            <Image
              src="/images/hero-team-new-brand.png"
              alt="PURA Team - Smiling professionals in blue brand uniforms with cleaning gloves"
              fill
              className="object-cover object-top"
              priority
              quality={100}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-white/20 to-white/5"></div>
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl pt-28 lg:pt-0">
            <div className="space-y-6 lg:space-y-10">
              {/* Main Headline */}
              <div className="space-y-4 lg:space-y-6">
                <div className="space-y-2 lg:space-y-4">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-7xl 2xl:text-8xl font-black leading-[1.05] lg:leading-[0.9] tracking-tight text-center lg:text-left">
                    <span className="block text-white lg:text-slate-900 drop-shadow-[0_3px_12px_rgba(0,0,0,0.9)] lg:drop-shadow-none mb-1">
                      EVERYONE
                    </span>
                    <span className="block text-white lg:text-slate-900 drop-shadow-[0_3px_12px_rgba(0,0,0,0.9)] lg:drop-shadow-none mb-1">
                      SAYS THEY DO
                    </span>
                    <span className="block text-yellow-300 lg:text-blue-600 drop-shadow-[0_3px_15px_rgba(0,0,0,0.95)] lg:drop-shadow-none">
                      GREAT WORK
                    </span>
                  </h1>
                </div>

                {/* Secondary Headline */}
                <div className="lg:pl-2 lg:border-l-4 border-yellow-500 pt-3 lg:pt-0">
                  <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-4xl 2xl:text-5xl font-bold leading-[1.2] tracking-wide text-center lg:text-left">
                    <span className="block text-white lg:text-blue-600 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] lg:drop-shadow-none mb-1">
                      WE SHOW YOU
                    </span>
                    <span className="block font-black text-yellow-300 lg:text-yellow-500 text-3xl sm:text-4xl lg:text-4xl xl:text-6xl drop-shadow-[0_3px_15px_rgba(0,0,0,0.95)] lg:drop-shadow-none my-2 lg:my-1">
                      37 STEPS
                    </span>
                    <span className="block text-white lg:text-blue-600 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] lg:drop-shadow-none">
                      THAT PROVE IT
                    </span>
                  </h2>
                </div>
              </div>

              {/* Description */}
              <div className="max-w-3xl pt-2 lg:pt-0">
                <div className="bg-black/20 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-none rounded-2xl lg:rounded-none p-4 lg:p-0 mx-2 lg:mx-0">
                  <p className="text-base sm:text-lg lg:text-xl xl:text-2xl leading-[1.4] lg:leading-relaxed font-medium lg:font-light tracking-wide text-center lg:text-left text-white lg:text-slate-700 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] lg:drop-shadow-none">
                    <span className="font-bold text-yellow-200 lg:text-blue-600">
                      Professional residential cleaning
                    </span>{" "}
                    with a <span className="font-black text-yellow-300 lg:text-yellow-500">37-step protocol</span>,
                    <br className="hidden sm:block lg:hidden" />
                    validated checklist, rigorous standards and a{" "}
                    <span className="font-bold text-yellow-200 lg:text-blue-500">true satisfaction guarantee</span>.
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4 lg:pt-6 px-2 lg:px-0">
                <div className="flex flex-col items-center lg:items-start space-y-3 lg:space-y-0">
                  <Button
                    size="lg"
                    className="w-full lg:w-auto bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-slate-900 font-black text-base sm:text-lg lg:text-xl px-8 py-4 lg:px-14 lg:py-7 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-yellow-300"
                    asChild
                  >
                    <a href={getCTALink()}>
                      <MessageCircle className="w-5 h-5 lg:w-6 lg:h-6 mr-3" />
                      SCHEDULE MY CLEANING NOW
                    </a>
                  </Button>

                  {/* Mobile Trust Indicator */}
                  <div className="lg:hidden flex flex-col items-center space-y-1 text-white/80 text-xs font-medium">
                    <span className="flex items-center">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-1.5"></span>
                      700+ cleanings in 2025
                    </span>
                    <span className="flex items-center">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full mr-1.5"></span>
                      37-step protocol
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cities Marquee Section */}
      <section className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 py-6 lg:py-12 overflow-hidden">
        <div className="flex animate-marquee-infinite whitespace-nowrap">
          <div className="flex items-center">
            {[
              "SARASOTA",
              "SIESTA KEY",
              "BRADENTON",
              "LAKEWOOD RANCH",
              "VENICE",
              "LONGBOAT KEY",
              "OSPREY",
              "NOKOMIS",
              "PALMETTO",
              "ELLENTON",
            ].map((city, index) => (
              <div key={index} className="flex items-center">
                <span className="text-white text-xs sm:text-sm lg:text-xl font-bold mx-3 lg:mx-8 hover:text-yellow-400 transition-colors duration-300 tracking-wider">
                  {city}
                </span>
                <span className="text-yellow-400 text-xs lg:text-xl font-bold mx-1 lg:mx-4">•</span>
              </div>
            ))}
          </div>
          <div className="flex items-center">
            {[
              "SARASOTA",
              "SIESTA KEY",
              "BRADENTON",
              "LAKEWOOD RANCH",
              "VENICE",
              "LONGBOAT KEY",
              "OSPREY",
              "NOKOMIS",
              "PALMETTO",
              "ELLENTON",
            ].map((city, index) => (
              <div key={index} className="flex items-center">
                <span className="text-white text-xs sm:text-sm lg:text-xl font-bold mx-3 lg:mx-8 hover:text-yellow-400 transition-colors duration-300 tracking-wider">
                  {city}
                </span>
                <span className="text-yellow-400 text-xs lg:text-xl font-bold mx-1 lg:mx-4">•</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-32 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-48 h-48 lg:w-96 lg:h-96 bg-gradient-to-br from-blue-100/60 to-purple-100/60 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-32 h-32 lg:w-80 lg:h-80 bg-gradient-to-tl from-cyan-100/50 to-blue-100/50 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-8 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-gray-900 mb-6 lg:mb-16 leading-tight tracking-tight px-2">
              We've completed over
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                700 cleanings
              </span>
              <br />
              <span className="text-lg sm:text-xl lg:text-4xl xl:text-5xl 2xl:text-6xl">in 2025 alone</span>
            </h2>
          </div>

          {/* Reviews Carousel */}
          <div className="mb-8 lg:mb-16 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden">
            <div className="flex animate-marquee-reviews whitespace-nowrap">
              <div className="flex gap-3 lg:gap-6 flex-shrink-0 pl-3 lg:pl-6">
                {[
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-XZF7SXHxnrJlAZuPsaCehd9ZS4EwVf.png",
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-GlZJ9Hqx7Aw45Eyap8hguTAQ83wR9o.png",
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-TA61fNh499gjOGfLYN8uPra30O4N9e.png",
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-w5VTYbs3KefUTPDxLGrpwC7LNQSBk6.png",
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-QcZYVU9LoauhhdAciPNB1t3nSpnBZs.png",
                ].map((src, index) => (
                  <img
                    key={index}
                    src={src || "/placeholder.svg"}
                    alt={`Customer testimonial ${index + 1}`}
                    className="h-auto max-w-[160px] sm:max-w-[200px] lg:max-w-[280px] rounded-xl lg:rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
                  />
                ))}
              </div>

              <div className="flex gap-3 lg:gap-6 flex-shrink-0 ml-3 lg:ml-6">
                {[
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-XZF7SXHxnrJlAZuPsaCehd9ZS4EwVf.png",
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-GlZJ9Hqx7Aw45Eyap8hguTAQ83wR9o.png",
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-TA61fNh499gjOGfLYN8uPra30O4N9e.png",
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-w5VTYbs3KefUTPDxLGrpwC7LNQSBk6.png",
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-QcZYVU9LoauhhdAciPNB1t3nSpnBZs.png",
                ].map((src, index) => (
                  <img
                    key={`dup-${index}`}
                    src={src || "/placeholder.svg"}
                    alt={`Customer testimonial ${index + 1}`}
                    className="h-auto max-w-[160px] sm:max-w-[200px] lg:max-w-[280px] rounded-xl lg:rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mb-8 lg:mb-16 px-4">
            <p className="text-base lg:text-xl xl:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              In Sarasota and surrounding areas. Each client is a transformation story with our professional protocol.
            </p>
          </div>

          <div className="flex flex-col gap-2 justify-center mb-8 lg:mb-20 px-4">
            <Button
              size="lg"
              className="w-full sm:w-auto sm:mx-auto bg-gray-900 text-white hover:bg-gray-800 font-semibold px-6 py-3 lg:px-8 lg:py-4 rounded-full text-base lg:text-lg transition-all duration-300"
              asChild
            >
              <a href={getCTALink()}>Schedule Cleaning</a>
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid gap-4 lg:grid-cols-3 lg:gap-8 max-w-5xl mx-auto">
            <div className="text-center group bg-white rounded-xl lg:rounded-2xl p-4 lg:p-6 shadow-lg">
              <div className="flex justify-center mb-3 lg:mb-6">
                <Image
                  src="/images/verified-badge.png"
                  alt="Verified Team"
                  width={80}
                  height={80}
                  className="lg:w-[120px] lg:h-[120px] xl:w-[270px] xl:h-[270px] object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-2xl"
                />
              </div>
              <h3 className="text-base lg:text-xl font-bold text-gray-900 mb-2 lg:mb-3">Certified Team</h3>
              <p className="text-xs lg:text-base text-gray-600 leading-relaxed">
                Complete background check, professional certification and continuous excellence training
              </p>
            </div>

            <div className="text-center group bg-white rounded-xl lg:rounded-2xl p-4 lg:p-6 shadow-lg">
              <div className="flex justify-center mb-3 lg:mb-6">
                <Image
                  src="/images/guarantee-shield.png"
                  alt="Total Guarantee"
                  width={80}
                  height={80}
                  className="lg:w-[120px] lg:h-[120px] xl:w-[270px] xl:h-[270px] object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-2xl"
                />
              </div>
              <h3 className="text-base lg:text-xl font-bold text-gray-900 mb-2 lg:mb-3">Total Guarantee</h3>
              <p className="text-xs lg:text-base text-gray-600 leading-relaxed">100% satisfaction guaranteed</p>
            </div>

            <div className="text-center group bg-white rounded-xl lg:rounded-2xl p-4 lg:p-6 shadow-lg">
              <div className="flex justify-center mb-3 lg:mb-6">
                <Image
                  src="/images/protocol-badge.png"
                  alt="Digital Protocol"
                  width={80}
                  height={80}
                  className="lg:w-[120px] lg:h-[120px] xl:w-[270px] xl:h-[270px] object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-2xl"
                />
              </div>
              <h3 className="text-base lg:text-xl font-bold text-gray-900 mb-2 lg:mb-3">Digital Protocol</h3>
              <p className="text-xs lg:text-base text-gray-600 leading-relaxed">
                37 documented and auditable steps in real-time through proprietary system
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 37-Step Protocol */}
      <section className="py-12 lg:py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-3 lg:opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              radial-gradient(circle at 25% 25%, #3b82f6 1px, transparent 1px),
              radial-gradient(circle at 75% 75%, #06b6d4 1px, transparent 1px)
            `,
              backgroundSize: "30px 30px",
            }}
          ></div>
        </div>

        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 lg:w-[500px] lg:h-[500px] bg-gradient-to-br from-blue-100/20 to-cyan-100/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 lg:w-[600px] lg:h-[600px] bg-gradient-to-tl from-yellow-100/15 to-orange-100/15 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-8 lg:mb-16">
            <div className="inline-flex items-center bg-white/90 backdrop-blur-sm border-2 border-blue-200 text-blue-800 px-3 py-2 lg:px-8 lg:py-4 rounded-full text-xs lg:text-lg font-bold tracking-wider uppercase shadow-lg mb-4 lg:mb-8">
              <Clipboard className="w-3 h-3 lg:w-6 lg:h-6 mr-1 lg:mr-3" />
              37-Step Protocol
              <CheckCircle className="w-3 h-3 lg:w-6 lg:h-6 ml-1 lg:ml-3" />
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-gray-900 mb-4 lg:mb-8 leading-tight px-2">
              Every room in your home
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-500">
                cleaned with excellence
              </span>
            </h2>
            <h3 className="text-lg sm:text-xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 mb-6 lg:mb-12">
              37 steps of quality
            </h3>
            <p className="text-sm lg:text-xl xl:text-2xl text-gray-600 max-w-5xl mx-auto leading-relaxed font-light px-2">
              Each room receives special attention with our detailed protocol. We follow a rigorous checklist to ensure
              your home is spotless.
            </p>
          </div>

          <div className="relative max-w-7xl mx-auto">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-cyan-400 via-orange-400 via-purple-400 to-green-400 transform -translate-x-1/2 opacity-30 hidden xl:block"></div>

            <div className="space-y-6 lg:space-y-8">
              {/* Living Room */}
              <div className="relative">
                <div className="absolute left-1/2 top-1/2 w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 transform -translate-y-1/2 -translate-x-10 hidden xl:block"></div>

                <div className="grid xl:grid-cols-2 gap-4 lg:gap-8 items-center">
                  <div className="xl:order-1 relative">
                    <div className="bg-white/95 backdrop-blur-sm border-2 border-blue-200 rounded-xl lg:rounded-3xl p-3 lg:p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden mx-2 lg:mx-0">
                      <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                        <div
                          className="w-full h-full"
                          style={{
                            backgroundImage:
                              "linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)",
                            backgroundSize: "20px 20px",
                          }}
                        ></div>
                      </div>

                      <div className="flex items-center justify-between mb-3 lg:mb-4 relative z-10">
                        <div className="flex items-center space-x-2 lg:space-x-4">
                          <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl lg:rounded-2xl flex items-center justify-center shadow-lg">
                            <Image
                              src="/images/icon-living-room.png"
                              alt="3D Living Room Icon"
                              width={24}
                              height={24}
                              className="lg:w-10 lg:h-10 object-contain"
                            />
                          </div>
                          <div>
                            <h3 className="text-base lg:text-2xl font-bold text-gray-900">Living Room & Entry</h3>
                            <p className="text-blue-600 font-semibold text-xs lg:text-base">9 steps</p>
                          </div>
                        </div>
                        <div className="xl:hidden">
                          <Image
                            src="/images/icon-living-room.png"
                            alt="Living Room"
                            width={40}
                            height={40}
                            className="object-contain opacity-20"
                          />
                        </div>
                      </div>

                      <div className="space-y-2 mb-4 lg:mb-6 relative z-10">
                        {[
                          "Complete vacuuming of all rugs and carpets",
                          "Dust cleaning on all furniture and surfaces",
                          "Disinfection of door handles, switches and remote controls",
                          "Cleaning and organizing upholstery and cushions",
                          "Glass and mirror cleaning until crystal clear",
                        ].map((step, index) => (
                          <div key={index} className="flex items-start bg-blue-50/50 rounded-lg p-2 lg:p-3">
                            <div className="w-6 h-6 lg:w-8 lg:h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xs lg:text-sm mr-2 lg:mr-3 mt-0.5 shadow-lg flex-shrink-0">
                              {index + 1}
                            </div>
                            <span className="text-gray-700 leading-relaxed text-xs lg:text-base">{step}</span>
                          </div>
                        ))}

                        {expandedCards.living && (
                          <div className="space-y-2 lg:space-y-4 border-t-2 border-dashed border-blue-200 pt-4 lg:pt-6 mt-4 lg:mt-6">
                            <div className="flex items-center text-blue-600 font-semibold mb-2 lg:mb-4 text-xs lg:text-base">
                              Additional Steps
                            </div>
                            {[
                              "Sweeping and damp mopping of floors",
                              "Cleaning baseboards and corners with special attention",
                              "Gentle final room aromatherapy",
                              "Final organization of decorative objects",
                            ].map((step, index) => (
                              <div key={index} className="flex items-start bg-cyan-50/50 rounded-lg p-2 lg:p-3">
                                <div className="w-6 h-6 lg:w-8 lg:h-8 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xs lg:text-sm mr-2 lg:mr-3 mt-0.5 shadow-lg flex-shrink-0">
                                  {index + 6}
                                </div>
                                <span className="text-gray-700 leading-relaxed text-xs lg:text-base">{step}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      <button
                        onClick={() => toggleCard("living")}
                        className="w-full bg-gradient-to-r from-blue-100 to-cyan-100 hover:from-blue-200 hover:to-cyan-200 text-blue-700 font-semibold py-2 lg:py-3 px-4 lg:px-6 rounded-lg lg:rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 relative z-10 text-xs lg:text-base"
                      >
                        {expandedCards.living ? (
                          <>
                            <span>Hide complete</span>
                            <ChevronUp className="w-3 h-3 lg:w-5 lg:h-5" />
                          </>
                        ) : (
                          <>
                            <span>View complete</span>
                            <ChevronDown className="w-3 h-3 lg:w-5 lg:h-5" />
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="xl:order-2 justify-center hidden xl:flex">
                    <div className="relative">
                      <Image
                        src="/images/icon-living-room.png"
                        alt="Clean Living Room"
                        width={400}
                        height={400}
                        className="object-contain drop-shadow-2xl"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Final Protocol Complete */}
              <div className="relative">
                <div className="flex justify-center">
                  <div className="w-full max-w-4xl relative">
                    <div className="bg-gradient-to-br from-white via-green-50/30 to-white backdrop-blur-sm border-4 border-green-300 rounded-xl lg:rounded-3xl p-4 lg:p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden mx-2 lg:mx-0">
                      <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                        <div
                          className="w-full h-full"
                          style={{
                            backgroundImage:
                              "radial-gradient(circle at 50% 50%, rgba(34, 197, 94, 0.2) 2px, transparent 2px)",
                            backgroundSize: "30px 30px",
                          }}
                        ></div>
                      </div>

                      <div className="text-center mb-3 lg:mb-4 relative z-10">
                        <div className="inline-flex items-center bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 lg:px-8 lg:py-3 rounded-full text-xs lg:text-lg font-bold mb-3 lg:mb-6 shadow-xl">
                          FINAL STEPS
                        </div>
                        <h3 className="text-lg lg:text-4xl font-bold text-gray-900 mb-1 lg:mb-4">Other Areas</h3>
                        <p className="text-green-600 font-bold text-sm lg:text-xl">4 final steps</p>
                      </div>

                      <div className="flex justify-center mb-3 lg:mb-4 relative z-10">
                        <div className="relative">
                          <Image
                            src="/images/icon-outdoor.png"
                            alt="Clean Outdoor Area"
                            width={200}
                            height={200}
                            className="lg:w-[400px] lg:h-[400px] object-contain drop-shadow-2xl"
                          />
                        </div>
                      </div>

                      <div className="space-y-2 mb-4 lg:mb-8 relative z-10">
                        {[
                          "Complete spider web removal",
                          "Complete floor washing and drying",
                          "Internal glass and surface cleaning",
                          "Final organization and complete inspection",
                        ].map((step, index) => (
                          <div
                            key={index}
                            className="flex items-start bg-green-50/70 rounded-lg p-2 lg:p-4 border border-green-200"
                          >
                            <div className="w-6 h-6 lg:w-10 lg:h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-xs lg:text-lg mr-2 lg:mr-4 mt-0.5 shadow-lg flex-shrink-0">
                              {index + 34}
                            </div>
                            <span className="text-gray-800 leading-relaxed font-medium text-xs lg:text-base">
                              {step}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="text-center bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg lg:rounded-2xl p-4 lg:p-8 relative z-10">
                        <h4 className="text-base lg:text-2xl font-bold text-green-800 mb-3 lg:mb-4">
                          🏆 Protocol Complete!
                        </h4>
                        <p className="text-green-700 text-xs lg:text-lg leading-relaxed mb-4 lg:mb-6">
                          Your home has gone through all 37 steps of our professional protocol. Every detail has been
                          cared for with excellence. Welcome to your new spotless home!
                        </p>
                        <Button
                          size="lg"
                          className="w-full sm:w-auto bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold px-4 lg:px-8 py-2 lg:py-4 rounded-full text-sm lg:text-lg transition-all duration-300 shadow-lg"
                          asChild
                        >
                          <a href={getCTALink()}>
                            <MessageCircle className="w-3 h-3 lg:w-5 lg:h-5 mr-1 lg:mr-2" />I WANT THIS PROTOCOL NOW
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-32 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-48 h-48 lg:w-80 lg:h-80 bg-gradient-to-br from-yellow-100/50 to-orange-100/50 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 lg:w-96 lg:h-96 bg-gradient-to-tl from-blue-100/40 to-purple-100/40 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 lg:mb-8 leading-tight px-2">
              Cleaning services for
            </h2>
          </div>
          <div className="grid gap-4 lg:grid-cols-3 lg:gap-8 max-w-6xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl lg:rounded-2xl p-4 lg:p-8 text-center group hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="flex justify-center mb-3 lg:mb-6">
                <Image
                  src="/images/service-residential.png"
                  alt="3D Residential House"
                  width={60}
                  height={60}
                  className="lg:w-[120px] lg:h-[120px] object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-lg"
                />
              </div>
              <h3 className="text-base lg:text-xl font-bold text-gray-900 mb-2 lg:mb-4">Residential</h3>
              <p className="text-gray-600 text-xs lg:text-base mb-3 lg:mb-6 leading-relaxed">
                Complete cleaning for your home with the highest quality standards and attention to detail.
              </p>
              <div className="text-xs lg:text-sm text-blue-600 font-semibold">COMPLETE PROTOCOL</div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl lg:rounded-2xl p-4 lg:p-8 text-center group hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="flex justify-center mb-3 lg:mb-6">
                <Image
                  src="/images/service-airbnb.png"
                  alt="3D Airbnb Icon"
                  width={60}
                  height={60}
                  className="lg:w-[120px] lg:h-[120px] object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-lg"
                />
              </div>
              <h3 className="text-base lg:text-xl font-bold text-gray-900 mb-2 lg:mb-4">Short-Term Rentals</h3>
              <p className="text-gray-600 text-xs lg:text-base mb-3 lg:mb-6 leading-relaxed">
                Airbnb & Vacation Rentals with specific protocol for turnover and hotel standards.
              </p>
              <div className="text-xs lg:text-sm text-yellow-600 font-semibold">FAST TURNAROUND</div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl lg:rounded-2xl p-4 lg:p-8 text-center group hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="flex justify-center mb-3 lg:mb-6">
                <Image
                  src="/images/service-office.png"
                  alt="3D Office"
                  width={60}
                  height={60}
                  className="lg:w-[120px] lg:h-[120px] object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-lg"
                />
              </div>
              <h3 className="text-base lg:text-xl font-bold text-gray-900 mb-2 lg:mb-4">Commercial</h3>
              <p className="text-gray-600 text-xs lg:text-base mb-3 lg:mb-6 leading-relaxed">
                Offices, Salons, Medical Offices with adapted professional protocol.
              </p>
              <div className="text-xs lg:text-sm text-purple-600 font-semibold">PROFESSIONAL ENVIRONMENT</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-32 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/4 w-48 h-48 lg:w-72 lg:h-72 bg-gradient-to-br from-blue-100/40 to-cyan-100/40 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 left-1/4 w-56 h-56 lg:w-80 lg:h-80 bg-gradient-to-tl from-blue-100/30 to-cyan-100/30 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid xl:grid-cols-2 gap-8 lg:gap-16 max-w-7xl mx-auto items-center">
            <div className="px-2 lg:px-0">
              <h2 className="text-2xl sm:text-3xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 lg:mb-8 leading-tight">
                You're not paying
                <br />
                for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-500">
                  cleaning
                </span>
                .
                <br />
                You're buying
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                  peace of mind
                </span>
                .
              </h2>
              <p className="text-sm lg:text-xl text-gray-600 mb-4 lg:mb-8 leading-relaxed">
                When the client is right, the day doesn't matter. Here, you don't need to compete for a spot. You just
                need to decide you deserve the standard.
              </p>
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gray-900 text-white hover:bg-gray-800 font-semibold px-4 lg:px-8 py-3 lg:py-4 rounded-full text-sm lg:text-lg transition-all duration-300"
                asChild
              >
                <a href={getCTALink()}>I'm That Type of Client</a>
              </Button>
            </div>
            <div className="space-y-4 lg:space-y-8">
              <div className="flex items-start space-x-3 lg:space-x-6 bg-white rounded-xl p-3 lg:p-4 shadow-lg">
                <div className="flex justify-center mb-2 lg:mb-4 flex-shrink-0">
                  <Image
                    src="/images/check-icon-3d.png"
                    alt="3D Check Icon"
                    width={40}
                    height={40}
                    className="lg:w-[80px] lg:h-[80px] object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-sm lg:text-xl font-bold text-gray-900 mb-1 lg:mb-3">Tactical 37-step protocol</h3>
                  <p className="text-gray-600 leading-relaxed text-xs lg:text-base">
                    Each step documented and verified in real-time.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3 lg:space-x-6 bg-white rounded-xl p-3 lg:p-4 shadow-lg">
                <div className="flex justify-center mb-2 lg:mb-4 flex-shrink-0">
                  <Image
                    src="/images/check-icon-3d.png"
                    alt="3D Check Icon"
                    width={40}
                    height={40}
                    className="lg:w-[80px] lg:h-[80px] object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-sm lg:text-xl font-bold text-gray-900 mb-1 lg:mb-3">
                    Real human service, no bots
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-xs lg:text-base">
                    Immediate response with real people who understand your needs.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3 lg:space-x-6 bg-white rounded-xl p-3 lg:p-4 shadow-lg">
                <div className="flex justify-center mb-2 lg:mb-4 flex-shrink-0">
                  <Image
                    src="/images/check-icon-3d.png"
                    alt="3D Check Icon"
                    width={40}
                    height={40}
                    className="lg:w-[80px] lg:h-[80px] object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-sm lg:text-xl font-bold text-gray-900 mb-1 lg:mb-3">Signed guarantee</h3>
                  <p className="text-gray-600 leading-relaxed text-xs lg:text-base">
                    Not satisfied? We'll come back and redo it at no extra cost.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-32 bg-gradient-to-br from-slate-100 via-gray-100 to-slate-100 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-3 lg:opacity-5">
          <Image
            src="/images/logo-watermark.png"
            alt="PURA Logo Watermark"
            width={400}
            height={400}
            className="lg:w-[800px] lg:h-[800px] object-contain"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-8 lg:space-y-12 mb-12 lg:mb-20">
              <div className="space-y-4 lg:space-y-8 px-2">
                <h2 className="text-xl sm:text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-black text-gray-900 leading-tight">
                  You can keep looking
                  <br />
                  for{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500">
                    cleaners
                  </span>
                  …
                </h2>

                <h3 className="text-base sm:text-lg lg:text-2xl xl:text-3xl 2xl:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                  or you can HIRE THE ONLY COMPANY
                  <br />
                  THAT FOLLOWS A PROFESSIONAL PROTOCOL.
                </h3>
              </div>

              <div className="text-center space-y-8 lg:space-y-12">
                <div className="bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-xl lg:rounded-2xl p-4 lg:p-8 max-w-4xl mx-auto mb-8 lg:mb-12 shadow-lg">
                  <div className="grid grid-cols-4 gap-2 lg:gap-8 mb-4 lg:mb-6">
                    <div className="text-center">
                      <div className="text-lg lg:text-3xl font-bold text-yellow-500">700+</div>
                      <div className="text-gray-600 text-xs lg:text-sm">Cleanings 2025</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg lg:text-3xl font-bold text-green-500">100%</div>
                      <div className="text-gray-600 text-xs lg:text-sm">Satisfaction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg lg:text-3xl font-bold text-blue-500">37</div>
                      <div className="text-gray-600 text-xs lg:text-sm">Steps</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg lg:text-3xl font-bold text-purple-500">2h</div>
                      <div className="text-gray-600 text-xs lg:text-sm">Response</div>
                    </div>
                  </div>

                  <h3 className="text-base lg:text-2xl xl:text-3xl font-bold text-gray-900 mb-3 lg:mb-6">
                    Ready for transformation?
                  </h3>
                  <p className="text-sm lg:text-xl text-gray-700 mb-4 lg:mb-8 leading-relaxed">
                    Your first cleaning operation with professional 37-step protocol.
                  </p>

                  <div className="space-y-2 lg:space-y-0">
                    <Button
                      size="lg"
                      className="w-full lg:w-auto bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-black text-sm lg:text-xl px-6 lg:px-12 py-3 lg:py-6 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-yellow-400 group"
                      asChild
                    >
                      <a href={getCTALink()}>
                        <MessageCircle className="w-4 h-4 lg:w-7 lg:h-7 mr-2 lg:mr-4 group-hover:rotate-12 transition-transform duration-300" />
                        I WANT MY TRANSFORMATION NOW
                        <span className="ml-2 lg:ml-4 text-lg lg:text-2xl">→</span>
                      </a>
                    </Button>

                    <div className="lg:hidden">
                      <Button
                        size="lg"
                        variant="outline"
                        className="w-full border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-bold text-sm px-6 py-3 rounded-full transition-all duration-300 bg-transparent"
                        asChild
                      >
                        <a href={getPhoneLink()}>
                          <Phone className="w-4 h-4 mr-2" />
                          CALL NOW: (941) 402-6077
                        </a>
                      </Button>
                    </div>
                  </div>

                  <p className="text-gray-600 text-xs lg:text-sm mt-2 lg:mt-4">
                    ⚡ Response in under 2 hours • 📱 Real human service • 🏆 Satisfaction guaranteed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 py-12 lg:py-20 border-t border-gray-200 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/4 w-32 h-32 lg:w-64 lg:h-64 bg-gradient-to-br from-white/10 to-cyan-100/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-40 h-40 lg:w-72 lg:h-72 bg-gradient-to-tl from-white/10 to-blue-100/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
            <div>
              <div className="flex items-center space-x-2 lg:space-x-3 mb-3 lg:mb-6">
                <Image
                  src="/images/new-pura-logo.png"
                  alt="PURA House Cleaning"
                  width={32}
                  height={32}
                  className="lg:w-10 lg:h-10 rounded"
                />
                <div>
                  <h3 className="text-base lg:text-xl font-bold text-white">PURA House Cleaning</h3>
                  <p className="text-xs lg:text-sm text-blue-100">Professional Protocol</p>
                </div>
              </div>
              <p className="text-blue-100 leading-relaxed text-xs lg:text-base">
                Professional 37-step protocol for residential and commercial cleaning.
              </p>
            </div>

            <div>
              <h4 className="text-sm lg:text-lg font-bold text-white mb-3 lg:mb-6">Service Areas</h4>
              <div className="space-y-2 lg:space-y-4">
                <div className="grid grid-cols-2 gap-1 lg:gap-3 text-blue-100 text-xs lg:text-sm">
                  <span className="hover:text-white transition-colors duration-300">Sarasota</span>
                  <span className="hover:text-white transition-colors duration-300">Siesta Key</span>
                  <span className="hover:text-white transition-colors duration-300">Bradenton</span>
                  <span className="hover:text-white transition-colors duration-300">Lakewood Ranch</span>
                  <span className="hover:text-white transition-colors duration-300">Venice</span>
                  <span className="hover:text-white transition-colors duration-300">Longboat Key</span>
                  <span className="hover:text-white transition-colors duration-300">Osprey</span>
                  <span className="hover:text-white transition-colors duration-300">Nokomis</span>
                  <span className="hover:text-white transition-colors duration-300">Palmetto</span>
                  <span className="hover:text-white transition-colors duration-300">Ellenton</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-sm lg:text-lg font-bold text-white mb-3 lg:mb-6">Services</h4>
              <ul className="space-y-1 lg:space-y-3 text-blue-100 text-xs lg:text-base">
                <li className="hover:text-white transition-colors duration-300">Residential Cleaning</li>
                <li className="hover:text-white transition-colors duration-300">Commercial Cleaning</li>
                <li className="hover:text-white transition-colors duration-300">Vacation Rentals</li>
                <li className="hover:text-white transition-colors duration-300">Post-Construction Cleaning</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-blue-400 mt-8 lg:mt-16 pt-4 lg:pt-8 text-center">
            <p className="text-blue-100 text-xs lg:text-base">© 2025 PURA House Cleaning. All rights reserved.</p>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes marquee-infinite {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee-infinite {
          animation: marquee-infinite 40s linear infinite;
        }
        @keyframes marquee-reviews {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee-reviews {
          animation: marquee-reviews 25s linear infinite;
        }
      `}</style>
    </div>
  )
}
