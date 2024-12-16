'use client'

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Check, ChevronRight, BarChart2, Users, Bell, Gift, Target, LineChart, CircleDot, MessageSquare, Trophy, PieChart, Send, Heart, Share2, MessageCircle, Bookmark, Home, TrendingUp, Rss, Search, MoreHorizontal, UserPlus, ShieldCheck, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function LandingPage() {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    }

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show')
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)
    const elements = document.querySelectorAll('.reveal')
    elements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <style jsx global>{`
        :root {
          --slate-dark: #334155;
          --slate-light: #F8FAFC;
          --teal-accent: #14B8A6;
        }
        
        .reveal {
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .reveal.show {
          opacity: 1;
          transform: translateY(0);
        }
        
        .reveal-delay-1 {
          transition-delay: 0.1s;
        }
        
        .reveal-delay-2 {
          transition-delay: 0.2s;
        }
        
        .reveal-delay-3 {
          transition-delay: 0.3s;
        }
        
        .slide-in-left {
          transform: translateX(-50px);
        }
        
        .slide-in-right {
          transform: translateX(50px);
        }
        
        .slide-in-left.show,
        .slide-in-right.show {
          transform: translateX(0);
        }
        
        @media (prefers-reduced-motion: reduce) {
          .reveal {
            transition: none;
            opacity: 1;
            transform: none;
          }
        }

        .bg-gradient-slate-teal {
          background: linear-gradient(135deg, var(--slate-dark) 0%, var(--teal-accent) 100%);
        }

        .text-gradient-slate-teal {
          background: linear-gradient(135deg, var(--slate-dark) 0%, var(--teal-accent) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .border-gradient-slate-teal {
          border-image: linear-gradient(135deg, var(--slate-dark) 0%, var(--teal-accent) 100%) 1;
        }

        .bg-slate-light {
          background-color: var(--slate-light);
        }

        .bg-slate-dark {
          background-color: var(--slate-dark);
        }

        .text-slate-dark {
          color: var(--slate-dark);
        }

        .text-teal-accent {
          color: var(--teal-accent);
        }

        .border-slate-dark {
          border-color: var(--slate-dark);
        }

        .hover\:bg-teal-accent:hover {
          background-color: var(--teal-accent);
        }

        .hover\:text-slate-dark:hover {
          color: var(--slate-dark);
        }
      `}</style>

      <div className="flex flex-col min-h-screen bg-slate-light">
        <header className="px-4 lg:px-6 h-14 flex items-center border-b bg-white shadow-sm">
          <Link className="flex items-center justify-center" href="#">
            <BarChart2 className="h-6 w-6 text-teal-accent" />
            <span className="ml-2 text-lg font-bold text-slate-dark">FinanceGrow</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link className="text-sm font-medium hover:text-teal-accent" href="#">
              Features
            </Link>
            <Link className="text-sm font-medium hover:text-teal-accent" href="#">
              Pricing
            </Link>
            <Link className="text-sm font-medium hover:text-teal-accent" href="#">
              About
            </Link>
            <Link className="text-sm font-medium hover:text-teal-accent" href="#">
              Contact
            </Link>
          </nav>
        </header>

        <main className="flex-1">
          {/* Hero Section */}
          <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-slate-teal text-white">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="reveal">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Empower Your Financial Influence
                  </h1>
                  <p className="mx-auto max-w-[700px] text-slate-light md:text-xl mt-4">
                    Streamline your financial advisory business with our all-in-one platform. Manage subscribers, send signals,
                    and grow your community effortlessly.
                  </p>
                </div>
                <div className="reveal reveal-delay-1">
                  <div className="space-x-4">
                    <Button className="bg-teal-accent text-slate-dark hover:bg-white hover:text-teal-accent">
                      Get Started
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button variant="outline" className="text-white border-white hover:bg-white hover:text-slate-dark">Learn More</Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Features Overview */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 reveal text-gradient-slate-teal">Key Features</h2>
              <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
                <div className="flex flex-col items-center space-y-4 text-center reveal slide-in-left">
                  <BarChart2 className="h-12 w-12 text-teal-accent" />
                  <h3 className="text-xl font-bold text-slate-dark">Revenue Management</h3>
                  <p className="text-slate-dark">
                    Effortlessly manage and track your revenue streams with our intuitive dashboard.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-4 text-center reveal">
                  <Users className="h-12 w-12 text-teal-accent" />
                  <h3 className="text-xl font-bold text-slate-dark">Subscriber Management</h3>
                  <p className="text-slate-dark">
                    Easily manage your subscribers, their plans, and engagement levels all in one place.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-4 text-center reveal slide-in-right">
                  <Bell className="h-12 w-12 text-teal-accent" />
                  <h3 className="text-xl font-bold text-slate-dark">Signal Management</h3>
                  <p className="text-slate-dark">
                    Create and send trading signals to your subscribers with just a few clicks.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Subscription Management Section */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-light">
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="reveal slide-in-left">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-slate-teal rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative">
                      <div className="bg-slate-dark rounded-xl shadow-2xl overflow-hidden transition-transform duration-500 ease-out group-hover:translate-y-[-4px] group-hover:shadow-teal-accent/25">
                        <div className="flex items-center gap-2 px-4 py-3 bg-slate-dark">
                          <div className="flex gap-2">
                            <CircleDot className="w-3 h-3 text-red-500" />
                            <CircleDot className="w-3 h-3 text-yellow-500" />
                            <CircleDot className="w-3 h-3 text-green-500" />
                          </div>
                        </div>
                        <div className="relative aspect-[16/10] overflow-hidden">
                          <Image
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-10-30%20at%204.43.45%20PM-sOd6Tvl5kjtSwlg4osV5soT9yVBuXj.png"
                            alt="Subscription Management Dashboard"
                            fill
                            className="object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="reveal slide-in-right">
                    <div className="inline-flex items-center rounded-lg bg-teal-accent px-3 py-1 text-sm text-slate-dark">
                      Subscription Management
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mt-2 text-slate-dark">
                      Powerful Subscription Controls
                    </h2>
                  </div>
                  <ul className="space-y-6 mt-8">
                    {[
                      {
                        title: "Flexible Subscription Plans",
                        description: "Create customized plans across asset classes, derivatives and trading styles."
                      },
                      {
                        title: "Bundled Subscriptions",
                        description: "Combine multiple services into attractive package deals."
                      },
                      {
                        title: "Automatic Upgrades",
                        description: "Seamless subscription upgrade path for your growing customer base."
                      }
                    ].map((feature, index) => (
                      <li key={index} className={`reveal slide-in-right reveal-delay-${index + 1}`}>
                        <div className="flex items-start space-x-4">
                          <div className="rounded-full bg-teal-accent p-1.5">
                            <Check className="h-5 w-5 text-slate-dark" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg text-slate-dark">{feature.title}</h3>
                            <p className="text-slate-dark mt-1">{feature.description}</p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Signal Management Section */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="space-y-4 order-2 lg:order-1">
                  <div className="reveal slide-in-left">
                    <div className="inline-flex items-center rounded-lg bg-teal-accent px-3 py-1 text-sm text-slate-dark">
                      Signal Management
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mt-2 text-slate-dark">
                      Streamlined Signal Management
                    </h2>
                  </div>
                  <ul className="space-y-6 mt-8">
                    {[
                      {
                        title: "Complete Signal Lifecycle",
                        description: "Manage the entire signal lifecycle from creation to closing, with dynamic stoploss and target updates."
                      },
                      {
                        title: "Broker Integration",
                        description: "Seamlessly integrate with top brokers for smooth operations and efficient trade execution."
                      },
                      {
                        title: "Team Management",
                        description: "Assign asset classes to dedicated analysts in your team for specialized focus and expertise."
                      }
                    ].map((feature, index) => (
                      <li key={index} className={`reveal slide-in-left reveal-delay-${index + 1}`}>
                        <div className="flex items-start space-x-4">
                          <div className="rounded-full bg-teal-accent p-1.5">
                            <Check className="h-5 w-5 text-slate-dark" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg text-slate-dark">{feature.title}</h3>
                            <p className="text-slate-dark mt-1">{feature.description}</p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="reveal slide-in-right order-1 lg:order-2">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-slate-teal rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                    <div  className="relative">
                      <div className="bg-slate-dark rounded-xl shadow-2xl overflow-hidden transition-transform duration-500 ease-out group-hover:translate-y-[-4px] group-hover:shadow-teal-accent/25">
                        <div className="flex items-center gap-2 px-4 py-3 bg-slate-dark">
                          <div className="flex gap-2">
                            <CircleDot className="w-3 h-3 text-red-500" />
                            <CircleDot className="w-3 h-3 text-yellow-500" />
                            <CircleDot className="w-3 h-3 text-green-500" />
                          </div>
                        </div>
                        <div className="relative aspect-[16/10] overflow-hidden">
                          <Image
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-10-30%20at%206.48.12%20PM-BnaWumHCdGdfjDiSYNjqkckD8gn8Cm.png"
                            alt="Signal Management Dashboard"
                            fill
                            className="object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Referral Program Section */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-light">
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="reveal slide-in-left">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-slate-teal rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative">
                      <div className="bg-slate-dark rounded-xl shadow-2xl overflow-hidden transition-transform duration-500 ease-out group-hover:translate-y-[-4px] group-hover:shadow-teal-accent/25">
                        <div className="flex items-center gap-2 px-4 py-3 bg-slate-dark">
                          <div className="flex gap-2">
                            <CircleDot className="w-3 h-3 text-red-500" />
                            <CircleDot className="w-3 h-3 text-yellow-500" />
                            <CircleDot className="w-3 h-3 text-green-500" />
                          </div>
                        </div>
                        <div className="relative aspect-[16/10] overflow-hidden">
                          <Image
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-10-30%20at%206.59.19%20PM-RO0qSxGH8cUrCxYXCNbc282SQtsAcY.png"
                            alt="Referral Program Dashboard"
                            fill
                            className="object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="reveal slide-in-right">
                    <div className="inline-flex items-center rounded-lg bg-teal-accent px-3 py-1 text-sm text-slate-dark">
                      Referral Program
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mt-2 text-slate-dark">
                      Boost Your Subscriber Base
                    </h2>
                  </div>
                  <ul className="space-y-6 mt-8">
                    {[
                      {
                        title: "Encourage Referrals",
                        description: "Motivate your users to refer friends with clear messaging and easy-to-follow instructions."
                      },
                      {
                        title: "Attractive Rewards",
                        description: "Choose the right rewards for both referrers and referees, such as discounts and cashback."
                      },
                      {
                        title: "Test and Optimize",
                        description: "Run A/B tests on different rewards and processes to identify what resonates best with your audience."
                      }
                    ].map((feature, index) => (
                      <li key={index} className={`reveal slide-in-right reveal-delay-${index + 1}`}>
                        <div className="flex items-start space-x-4">
                          <div className="rounded-full bg-teal-accent p-1.5">
                            <Check className="h-5 w-5 text-slate-dark" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg text-slate-dark">{feature.title}</h3>
                            <p className="text-slate-dark mt-1">{feature.description}</p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Community Management Section */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2 reveal slide-in-left">
                    <div className="inline-flex items-center rounded-lg bg-teal-accent px-3 py-1 text-sm text-slate-dark">
                      Community Management
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-slate-dark">
                      Build Dynamic Communities to Drive Engagement
                    </h2>
                    <p className="text-slate-dark md:text-lg">
                      Create an engaging environment where your community can thrive and interact meaningfully.
                    </p>
                  </div>
                  <ul className="space-y-6 mt-8">
                    {[
                      {
                        icon: MessageSquare,
                        title: "Separate Channels",
                        description: "Create an announcement channel for one-way updates and a peer-to-peer forum with topic-based discussions for active, two-way engagement."
                      },
                      {
                        icon: Trophy,
                        title: "Social and Gamification Layers",
                        description: "Enable features like following users, earning badges, and leveling up to motivate users and build a thriving, interactive community."
                      },
                      {
                        icon: PieChart,
                        title: "Interactive Features",
                        description: "Engage your community with polls, Q&A sessions, and predictions to gather feedback, spark discussions, and keep users actively involved."
                      }
                    ].map((feature, index) => (
                      <li key={index} className={`reveal slide-in-left reveal-delay-${index + 1}`}>
                        <div className="flex items-start space-x-4">
                          <div className="rounded-full bg-teal-accent p-1.5">
                            <feature.icon className="h-5 w-5 text-slate-dark" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg text-slate-dark">{feature.title}</h3>
                            <p className="text-slate-dark mt-1">{feature.description}</p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative group reveal slide-in-right">
                  <div className="absolute -inset-1 bg-gradient-slate-teal rounded-[40px] blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative py-10">
                    <div className="relative transform perspective-1200 rotate-y-[-20deg] rotate-x-[10deg] transition-all duration-500 group-hover:rotate-y-[-15deg] group-hover:rotate-x-[5deg] group-hover:scale-105">
                      <div className="w-[300px] h-[600px] mx-auto bg-slate-dark rounded-[40px] overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.3)] border-[14px] border-slate-dark relative">
                        <div className="absolute inset-[-1px] bg-slate-dark rounded-[30px]"></div>
                        <div className="absolute inset-0 bg-white overflow-hidden rounded-[25px]">
                          <div className="h-[calc(100%-90px)] overflow-y-auto">
                            <div className="p-4 border-b">
                              <div className="flex items-center space-x-3 mb-3">
                                <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                                <div>
                                  <div className="font-medium text-slate-dark">johndoe</div>
                                  <div className="text-xs text-gray-500">25/10/2024, 16:00:00</div>
                                </div>
                                <button className="ml-auto">
                                  <MoreHorizontal className="w-6 h-6 text-gray-400" />
                                </button>
                              </div>
                              <div className="mb-3">
                                <p className="text-sm mb-2 text-slate-dark">Just bought some Apple stocks! Here's my analysis...</p>
                                <span className="text-sm text-teal-accent font-medium">#AAPL</span>
                              </div>
                              <div className="rounded-lg overflow-hidden mb-3 aspect-w-16 aspect-h-9">
                                <Image
                                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-10-31%20at%2010.06.54%20AM-cANTUiFEhZkQQNm1qKlUoBHpXgjZ6o.png"
                                  alt="Trading Chart"
                                  layout="fill"
                                  objectFit="cover"
                                />
                              </div>
                              <div className="flex items-center justify-between text-gray-500 text-sm">
                                <button className="flex items-center space-x-2">
                                  <Heart className="w-4 h-4" />
                                  <span>348k</span>
                                </button>
                                <button className="flex items-center space-x-2">
                                  <Share2 className="w-4 h-4" />
                                  <span>348k</span>
                                </button>
                                <button className="flex items-center space-x-2">
                                  <MessageCircle className="w-4 h-4" />
                                  <span>348k</span>
                                </button>
                                <button>
                                  <Bookmark className="w-4 h-4" />
                                </button>
                              </div>
                            </div>
                            <div className="absolute bottom-0 inset-x-0 flex items-center justify-around py-3 bg-white border-t rounded-b-[25px]">
                              <button className="flex flex-col items-center text-teal-accent">
                                <Home className="w-6 h-6" />
                                <span className="text-xs mt-1">Home</span>
                              </button>
                              <button className="flex flex-col items-center text-gray-400">
                                <TrendingUp className="w-6 h-6" />
                                <span className="text-xs mt-1">Trades</span>
                              </button>
                              <button className="flex flex-col items-center text-gray-400">
                                <Rss className="w-6 h-6" />
                                <span className="text-xs mt-1">Feed</span>
                              </button>
                              <button className="flex flex-col items-center text-gray-400">
                                <Gift className="w-6 h-6" />
                                <span className="text-xs mt-1">Referrals</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button className="absolute bottom-20 right-4 w-12 h-12 bg-teal-accent rounded-full flex items-center justify-center text-slate-dark shadow-lg">
                        <Send className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Role Management Section */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-light">
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="space-y-4">
                  <div className="reveal slide-in-left">
                    <div className="inline-flex items-center rounded-lg bg-teal-accent px-3 py-1 text-sm text-slate-dark">
                      Role Management
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mt-2 text-slate-dark">
                      Role Management for Enhanced Team Efficiency
                    </h2>
                  </div>
                  <ul className="space-y-6 mt-8">
                    {[
                      {
                        icon: UserPlus,
                        title: "Assign Analysts by Expertise",
                        description: "Designate specific analysts to manage various asset classes or trading strategies, allowing your team to leverage specialized expertise."
                      },
                      {
                        icon: ShieldCheck,
                        title: "Custom Role-Based Access",
                        description: "Create tailored roles for analysts and admins with defined access levels, ensuring secure, role-appropriate access to features and data."
                      }
                    ].map((feature, index) => (
                      <li key={index} className={`reveal slide-in-left reveal-delay-${index + 1}`}>
                        <div className="flex items-start space-x-4">
                          <div className="rounded-full bg-teal-accent p-1.5">
                            <feature.icon className="h-5 w-5 text-slate-dark" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg text-slate-dark">{feature.title}</h3>
                            <p className="text-slate-dark mt-1">{feature.description}</p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="reveal slide-in-right">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-slate-teal rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative">
                      <div className="bg-slate-dark rounded-xl shadow-2xl overflow-hidden transition-transform duration-500 ease-out group-hover:translate-y-[-4px] group-hover:shadow-teal-accent/25">
                        <div className="flex items-center gap-2 px-4 py-3 bg-slate-dark">
                          <div className="flex gap-2">
                            <CircleDot className="w-3 h-3 text-red-500" />
                            <CircleDot className="w-3 h-3 text-yellow-500" />
                            <CircleDot className="w-3 h-3 text-green-500" />
                          </div>
                        </div>
                        <div className="relative aspect-[16/10] overflow-hidden">
                          <div className="bg-white p-6">
                            <h3 className="text-2xl font-bold mb-4 text-slate-dark">Role management</h3>
                            <div className="mb-4">
                              <Input type="text" placeholder="Search user name/ email" className="w-full" />
                            </div>
                            <Table>
                              <TableHeader>
                                <TableRow>
                                  <TableHead className="w-[50px]"></TableHead>
                                  <TableHead>Name</TableHead>
                                  <TableHead>Email</TableHead>
                                  <TableHead>User role</TableHead>
                                  <TableHead>Status</TableHead>
                                  <TableHead>Start Date</TableHead>
                                  <TableHead className="text-right">Action</TableHead>
                                </TableRow>
                              </TableHeader>
                              <TableBody>
                                {[
                                  { name: "abceddssf", email: "abcde232@gmail.com", role: "Superadmin", status: "Active", startDate: "01/01/2024" },
                                  { name: "abceddssf", email: "abcde232@gmail.com", role: "Admin", status: "Active", startDate: "01/01/2024" },
                                  { name: "abceddssf", email: "abcde232@gmail.com", role: "Analyst", status: "Active", startDate: "01/01/2024" },
                                ].map((user, index) => (
                                  <TableRow key={index}>
                                    <TableCell>
                                      <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                                    </TableCell>
                                    <TableCell>{user.name}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell>{user.role}</TableCell>
                                    <TableCell>{user.status}</TableCell>
                                    <TableCell>{user.startDate}</TableCell>
                                    <TableCell className="text-right">
                                      <Button variant="ghost" size="icon">
                                        <MoreHorizontal className="h-4 w-4" />
                                      </Button>
                                    </TableCell>
                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="bg-slate-dark text-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-12 md:py-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="space-y-4">
                <Link href="/" className="flex items-center space-x-2">
                  <BarChart2 className="h-6 w-6 text-teal-accent" />
                  <span className="text-xl font-bold">FinanceGrow</span>
                </Link>
                <p className="text-sm text-gray-400">
                  Empowering financial influencers with cutting-edge tools and insights.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-4">Product</h3>
                <ul className="space-y-2">
                  <li><Link href="#" className="text-sm text-gray-400 hover:text-teal-accent">Features</Link></li>
                  <li><Link href="#" className="text-sm text-gray-400 hover:text-teal-accent">Pricing</Link></li>
                  <li><Link href="#" className="text-sm text-gray-400 hover:text-teal-accent">Integrations</Link></li>
                  <li><Link href="#" className="text-sm text-gray-400 hover:text-teal-accent">API</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-4">Company</h3>
                <ul className="space-y-2">
                  <li><Link href="#" className="text-sm text-gray-400 hover:text-teal-accent">About Us</Link></li>
                  <li><Link href="#" className="text-sm text-gray-400 hover:text-teal-accent">Careers</Link></li>
                  <li><Link href="#" className="text-sm text-gray-400 hover:text-teal-accent">Press</Link></li>
                  <li><Link href="#" className="text-sm text-gray-400 hover:text-teal-accent">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-4">Stay Updated</h3>
                <p className="text-sm text-gray-400 mb-4">Subscribe to our newsletter for the latest updates and features.</p>
                <form className="space-y-2">
                  <Input type="email" placeholder="Enter your email" className="bg-gray-700 border-gray-600 text-white" />
                  <Button type="submit" className="w-full bg-teal-accent text-slate-dark hover:bg-white">Subscribe</Button>
                </form>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-700">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-sm text-gray-400">&copy; 2024 FinanceGrow. All rights reserved.</p>
                <div className="flex space-x-4 mt-4 md:mt-0">
                  <Link href="#" className="text-gray-400 hover:text-teal-accent">
                    <span className="sr-only">Facebook</span>
                    <Facebook className="h-6 w-6" />
                  </Link>
                  <Link href="#" className="text-gray-400 hover:text-teal-accent">
                    <span className="sr-only">Twitter</span>
                    <Twitter className="h-6 w-6" />
                  </Link>
                  <Link href="#" className="text-gray-400 hover:text-teal-accent">
                    <span className="sr-only">LinkedIn</span>
                    <Linkedin className="h-6 w-6" />
                  </Link>
                  <Link href="#" className="text-gray-400 hover:text-teal-accent">
                    <span className="sr-only">Instagram</span>
                    <Instagram className="h-6 w-6" />
                  </Link>
                </div>
              </div>
              <div className="mt-4 text-center text-sm text-gray-400">
                <Link href="#" className="hover:text-teal-accent">Privacy Policy</Link>
                <span className="mx-2">|</span>
                <Link href="#" className="hover:text-teal-accent">Terms of Service</Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
