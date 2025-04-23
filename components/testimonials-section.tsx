"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface Testimonial {
  id: number
  logo: string
  quote: string
  author: string
  title: string
}

// Add keyframes for text animation
const textAnimationKeyframes = `
@keyframes textClipReveal {
  0% {
    clip-path: inset(0 100% 0 0);
  }
  100% {
    clip-path: inset(0 0 0 0);
  }
}

@keyframes fadeSlideIn {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
`

export function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      logo: "/placeholder.svg?height=50&width=120",
      quote:
        "Apex has revolutionized how we handle cross-border payments. The speed and security of their stablecoin infrastructure is unmatched in the industry.",
      author: "Sarah Johnson",
      title: "CTO, Global Commerce Partners",
    },
    {
      id: 2,
      logo: "/placeholder.svg?height=50&width=120",
      quote:
        "As a digital-first marketplace, we needed a payment solution that matched our innovation goals. Apex's platform not only met but exceeded our expectations.",
      author: "Michael Chen",
      title: "CEO, NexTrade Exchange",
    },
    {
      id: 3,
      logo: "/placeholder.svg?height=50&width=120",
      quote:
        "The integration with Apex was seamless. Our transaction settlement times went from days to seconds, and our customers couldn't be happier.",
      author: "Elena Rodriguez",
      title: "Head of Payments, Solana Ventures",
    },
    {
      id: 4,
      logo: "/placeholder.svg?height=50&width=120",
      quote:
        "Apex's stablecoin infrastructure has been a game-changer for our DeFi platform. The reliability and speed are exactly what we needed to scale globally.",
      author: "David Kim",
      title: "Founder, DeFi Protocol",
    },
    {
      id: 5,
      logo: "/placeholder.svg?height=50&width=120",
      quote:
        "We've reduced payment processing costs by 80% since implementing Apex. The ROI has been incredible, and our finance team is thrilled.",
      author: "Jessica Williams",
      title: "CFO, Tech Innovations Inc.",
    },
    {
      id: 6,
      logo: "/placeholder.svg?height=50&width=120",
      quote:
        "Security was our primary concern when looking for a payment solution. Apex's decentralized infrastructure provides the peace of mind we needed.",
      author: "Robert Taylor",
      title: "CISO, Secure Payments Ltd",
    },
    {
      id: 7,
      logo: "/placeholder.svg?height=50&width=120",
      quote:
        "The ability to settle in multiple stablecoins has opened new markets for our business. Apex made global expansion simple and cost-effective.",
      author: "Sophia Martinez",
      title: "COO, Global Retail Chain",
    },
  ]

  const [activeIndex, setActiveIndex] = useState(1)
  const [isPaused, setIsPaused] = useState(false)
  const pauseTimeout = useRef<NodeJS.Timeout | null>(null)

  // Highlighted text rotation
  const [highlightedWordIndex, setHighlightedWordIndex] = useState(0)
  const highlightedWords = ["Partners", "Investors", "Users", "Businesses"]

  const [direction, setDirection] = useState(1) // 1 for next, -1 for prev
  const [isTransitioning, setIsTransitioning] = useState(false)

  const handleManualNavigation = useCallback(() => {
    // Pause auto-scrolling for 10 seconds after manual navigation
    setIsPaused(true)

    if (pauseTimeout.current) {
      clearTimeout(pauseTimeout.current)
    }

    pauseTimeout.current = setTimeout(() => {
      setIsPaused(false)
    }, 10000)
  }, [])

  const handleNext = useCallback(() => {
    if (isTransitioning) return
    setDirection(1)
    setIsTransitioning(true)
    setTimeout(() => {
      setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
      setTimeout(() => {
        setIsTransitioning(false)
      }, 50)
    }, 300)
    handleManualNavigation()
  }, [isTransitioning, testimonials.length, handleManualNavigation])

  // Auto-scroll effect
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        handleNext()
      }, 5000)

      return () => clearInterval(interval)
    }
  }, [isPaused, handleNext])

  // Highlighted text rotation effect
  useEffect(() => {
    const wordInterval = setInterval(() => {
      setHighlightedWordIndex((prev) => (prev === highlightedWords.length - 1 ? 0 : prev + 1))
    }, 3000)

    return () => clearInterval(wordInterval)
  }, [])

  const handlePrev = useCallback(() => {
    if (isTransitioning) return
    setDirection(-1)
    setIsTransitioning(true)
    setTimeout(() => {
      setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
      setTimeout(() => {
        setIsTransitioning(false)
      }, 50)
    }, 300)
    handleManualNavigation()
  }, [isTransitioning, testimonials.length, handleManualNavigation])

  const handleDotClick = useCallback(
    (index: number) => {
      if (isTransitioning) return
      setDirection(index > activeIndex ? 1 : -1)
      setIsTransitioning(true)
      setTimeout(() => {
        setActiveIndex(index)
        setTimeout(() => {
          setIsTransitioning(false)
        }, 50)
      }, 300)
      handleManualNavigation()
    },
    [activeIndex, isTransitioning, handleManualNavigation],
  )

  const handleMouseEnter = useCallback(() => {
    setIsPaused(true)
  }, [])

  const handleMouseLeave = useCallback(() => {
    if (pauseTimeout.current) {
      clearTimeout(pauseTimeout.current)
    }
    setIsPaused(false)
  }, [])

  const CircularProgressIndicator = ({ isPaused }: { isPaused: boolean }) => {
    const [progress, setProgress] = useState(0)
    const intervalTime = 5000 // Same as the auto-scroll interval
    const circumference = 2 * Math.PI * 18 // 2πr where r=18 (radius of circle)

    useEffect(() => {
      if (isPaused) {
        return
      }

      const startTime = Date.now()

      const updateProgress = () => {
        const elapsed = Date.now() - startTime
        const newProgress = Math.min(elapsed / intervalTime, 1)
        setProgress(newProgress)
      }

      // Update more frequently for smoother animation
      const progressInterval = setInterval(updateProgress, 16)

      const resetInterval = setTimeout(() => {
        setProgress(0)
      }, intervalTime)

      return () => {
        clearInterval(progressInterval)
        clearTimeout(resetInterval)
      }
    }, [isPaused, activeIndex])

    return (
      <div className="absolute top-2 right-2 h-10 w-10 flex items-center justify-center">
        <svg width="40" height="40" viewBox="0 0 40 40" className="transform -rotate-90">
          {/* Background circle */}
          <circle cx="20" cy="20" r="18" fill="none" stroke="#e5e5e5" strokeWidth="2" />
          {/* Progress circle */}
          <circle
            cx="20"
            cy="20"
            r="18"
            fill="none"
            stroke="#f97316"
            strokeWidth="2"
            strokeDasharray={circumference}
            strokeDashoffset={circumference * (1 - progress)}
            strokeLinecap="round"
            className="transition-all duration-100 ease-linear"
          />
          {isPaused && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-2 h-6 bg-orange-500 mx-0.5"></div>
              <div className="w-2 h-6 bg-orange-500 mx-0.5"></div>
            </div>
          )}
        </svg>
      </div>
    )
  }

  return (
    <>
      <style>{textAnimationKeyframes}</style>
      <section className="w-full py-16 md:py-24 bg-black">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <p className="text-orange-500 text-sm font-medium uppercase tracking-wider mb-4">TESTIMONIALS</p>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-white">
              Don't just take our word for it,{" "}
              <span className="block md:inline">
                hear from our{" "}
                <span className="relative inline-block">
                  <span
                    key={highlightedWordIndex}
                    className="absolute inset-0 text-orange-500 overflow-hidden transition-all duration-700 ease-in-out"
                    style={{
                      clipPath: `inset(0 ${100 - ((highlightedWordIndex + 1) % highlightedWords.length) * 33.33}% 0 0)`,
                      opacity: 1,
                    }}
                  >
                    {highlightedWords[(highlightedWordIndex + 1) % highlightedWords.length]}
                  </span>
                  <span
                    key={`current-${highlightedWordIndex}`}
                    className="text-orange-500 transition-all duration-700 ease-in-out"
                  >
                    {highlightedWords[highlightedWordIndex]}
                  </span>
                </span>
              </span>
            </h2>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="flex justify-center gap-4 md:gap-6">
              {/* Previous Testimonial (Left) */}
              <div
                className={`hidden md:block w-full max-w-sm rounded-xl bg-zinc-900/80 p-6 opacity-70 transition-all duration-500 transform ${
                  isTransitioning && direction < 0 ? "scale-105 opacity-0" : "scale-100"
                }`}
              >
                {testimonials[activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1] && (
                  <div className="h-full flex flex-col">
                    <div className="mb-6 h-12 flex items-center">
                      <div className="w-24 h-10 bg-zinc-800 rounded flex items-center justify-center">
                        <Image
                          src={testimonials[activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1].logo}
                          alt="Company logo"
                          width={80}
                          height={30}
                          className="max-h-8"
                        />
                      </div>
                    </div>
                    <div className="flex-grow"></div>
                    <div className="mt-auto border-l-2 border-zinc-700 pl-4">
                      <p className="text-white font-medium">
                        {testimonials[activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1].author}
                      </p>
                      <p className="text-zinc-400 text-sm">
                        {testimonials[activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1].title}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Active Testimonial (Center) */}
              <div
                className={`relative w-full max-w-sm md:max-w-md rounded-xl bg-white p-6 shadow-lg transition-all duration-500 transform ${
                  isTransitioning
                    ? direction > 0
                      ? "translate-x-4 opacity-0 scale-95"
                      : "-translate-x-4 opacity-0 scale-95"
                    : "translate-x-0 opacity-100 scale-100"
                }`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <CircularProgressIndicator isPaused={isPaused} />
                <div className="mb-6 h-12 flex items-center">
                  <div className="w-24 h-10 bg-gray-100 rounded flex items-center justify-center">
                    <Image
                      src={testimonials[activeIndex].logo || "/placeholder.svg"}
                      alt="Company logo"
                      width={80}
                      height={30}
                      className="max-h-8"
                    />
                  </div>
                </div>
                <p className="text-zinc-800 mb-8">"{testimonials[activeIndex].quote}"</p>
                <div className="border-l-2 border-orange-500 pl-4">
                  <p className="text-zinc-900 font-medium">{testimonials[activeIndex].author}</p>
                  <p className="text-zinc-600">{testimonials[activeIndex].title}</p>
                </div>
                <div className="mt-6 w-full">
                  <div className="h-1 bg-gray-200 rounded-full w-full">
                    <div
                      className="h-1 bg-orange-500 rounded-full transition-all duration-500"
                      style={{ width: `${((activeIndex + 1) / testimonials.length) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Next Testimonial (Right) */}
              <div
                className={`hidden md:block w-full max-w-sm rounded-xl bg-zinc-900/80 p-6 opacity-70 transition-all duration-500 transform ${
                  isTransitioning && direction > 0 ? "scale-105 opacity-0" : "scale-100"
                }`}
              >
                {testimonials[activeIndex === testimonials.length - 1 ? 0 : activeIndex + 1] && (
                  <div className="h-full flex flex-col">
                    <div className="mb-6 h-12 flex items-center">
                      <div className="w-24 h-10 bg-zinc-800 rounded flex items-center justify-center">
                        <Image
                          src={testimonials[activeIndex === testimonials.length - 1 ? 0 : activeIndex + 1].logo}
                          alt="Company logo"
                          width={80}
                          height={30}
                          className="max-h-8"
                        />
                      </div>
                    </div>
                    <div className="flex-grow"></div>
                    <div className="mt-auto border-l-2 border-zinc-700 pl-4">
                      <p className="text-white font-medium">
                        {testimonials[activeIndex === testimonials.length - 1 ? 0 : activeIndex + 1].author}
                      </p>
                      <p className="text-zinc-400 text-sm">
                        {testimonials[activeIndex === testimonials.length - 1 ? 0 : activeIndex + 1].title}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all",
                    activeIndex === index ? "bg-orange-500 w-4" : "bg-zinc-700 hover:bg-zinc-500",
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-end mt-4 gap-2">
              <button
                onClick={handlePrev}
                className="p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 text-white"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={handleNext}
                className="p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 text-white"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
