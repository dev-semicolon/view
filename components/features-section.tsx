"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { MarketingIntegrationHub } from "./marketing-integration-hub"

export function FeaturesSection() {
  const [isServicesVisible, setIsServicesVisible] = useState(false)
  const [isWhyInfoplanetVisible, setIsWhyInfoplanetVisible] = useState(false)
  const servicesRef = useRef<HTMLDivElement>(null)
  const whyInfoplanetRef = useRef<HTMLDivElement>(null)

  // 서비스 카드 Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isServicesVisible) {
          setIsServicesVisible(true)
        }
      },
      { threshold: 0.2 }
    )
    
    if (servicesRef.current) {
      observer.observe(servicesRef.current)
    }
    
    return () => {
      if (servicesRef.current) {
        observer.unobserve(servicesRef.current)
      }
    }
  }, [isServicesVisible])

  // 왜 뷰 커뮤니케이션인가 Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isWhyInfoplanetVisible) {
          setIsWhyInfoplanetVisible(true)
        }
      },
      { threshold: 0.2 }
    )
    
    if (whyInfoplanetRef.current) {
      observer.observe(whyInfoplanetRef.current)
    }
    
    return () => {
      if (whyInfoplanetRef.current) {
        observer.unobserve(whyInfoplanetRef.current)
      }
    }
  }, [isWhyInfoplanetVisible])

  return (
    <section id="services" className="py-12 md:py-24 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 숫자 카운터 섹션 */}
        <div id="about" className="mb-12 md:mb-24 scroll-mt-20">
          <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-12 border border-gray-200 shadow-xl text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
              리워드 광고, 새로운 기준을 만드는 <span className="text-indigo-600">뷰 커뮤니케이션</span>
            </h2>
            <p className="text-sm md:text-base text-gray-600 mb-6 md:mb-8 leading-relaxed max-w-3xl mx-auto">
              브랜드와 유저를 연결하는 더 나은 방식을 만듭니다.<br className="hidden sm:block" />
              1세대 리워드 광고를 넘어, 기술과 데이터로 만드는 2세대 솔루션입니다.
            </p>
            
            <div className="flex items-center justify-center gap-2 md:gap-4 mb-3 md:mb-4">
              <span className="text-sm md:text-base text-gray-500">사업자와 매체사를 연결하는</span>
            </div>
            <div className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              리워드 광고 운영 파트너
            </div>
            
            <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-gray-200">
              <p className="text-gray-900 text-sm md:text-base lg:text-lg">
                캠페인 설계부터 미션 운영, 성과 분석까지<br className="hidden sm:block" />
                원스톱으로 제공합니다.
              </p>
            </div>
          </div>
        </div>

        {/* 마케팅 플랫폼 통합 Hub */}
        <div className="mb-24">
          <MarketingIntegrationHub />
        </div>

        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-gray-900">
            필요한 범위부터 <span className="text-indigo-600">확인합니다</span>
          </h2>
          <p className="text-sm md:text-base text-gray-600 mb-8 md:mb-10 max-w-3xl mx-auto px-4">
            캠페인 목적, 대상 행동, 운영 기간과 예산을 확인한 뒤<br className="hidden sm:block" />
            진행 가능한 리워드 광고 방식과 조건을 안내합니다.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 max-w-4xl mx-auto text-left">
            {[
              ["01", "목적 확인", "유입, 참여, 전환 등 필요한 행동을 정리합니다."],
              ["02", "운영 조건", "대상, 기간, 예산과 집행 가능 범위를 확인합니다."],
              ["03", "진행 안내", "확인된 조건과 측정 기준을 바탕으로 진행합니다."],
            ].map(([number, title, description]) => (
              <div key={number} className="rounded-2xl border border-gray-200 bg-white p-5 md:p-6 shadow-sm">
                <div className="text-sm font-bold text-indigo-600 mb-3">{number}</div>
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 믿고 맡기는 다양한 마케팅 - 아이앤뷰 스타일 */}
        <div className="mb-12 md:mb-20">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center mb-8 md:mb-16 text-gray-900 px-4">
            믿고 맡기는 <span className="text-indigo-600">다양한 마케팅</span>
          </h2>

          <div ref={servicesRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                title: "리워드 서베이",
                subtitle: "Survey Marketing",
                description: "사용자 참여를 통해 가치 있는 인사이트를 수집하고 의미 있는 보상을 제공합니다.",
                gradient: "from-indigo-500/20 to-purple-500/20"
              },
              {
                title: "인앱 리워드",
                subtitle: "In-App Rewards",
                description: "모바일 애플리케이션에 리워드 캠페인을 원활하게 통합하여 사용자 참여를 극대화합니다.",
                gradient: "from-purple-500/20 to-pink-500/20"
              },
              {
                title: "SNS 마케팅",
                subtitle: "SNS Marketing",
                description: "소셜미디어를 활용한 바이럴 마케팅으로 브랜드 인지도를 높이고 고객과 소통합니다.",
                gradient: "from-pink-500/20 to-rose-500/20"
              },
              {
                title: "바이럴 마케팅",
                subtitle: "Viral Marketing",
                description: "채널과 캠페인 목적에 맞는 콘텐츠 참여 방식을 검토하고 운영 범위를 안내합니다.",
                gradient: "from-cyan-500/20 to-blue-500/20"
              },
              {
                title: "로열티 프로그램",
                subtitle: "Loyalty Program",
                description: "포괄적인 로열티 및 유지 프로그램을 통해 장기적인 고객 관계를 구축합니다.",
                gradient: "from-green-500/20 to-emerald-500/20"
              },
              {
                title: "성과 분석",
                subtitle: "Analytics",
                description: "캠페인별 집행 결과를 협의된 측정 기준에 따라 정리하고 안내합니다.",
                gradient: "from-amber-500/20 to-orange-500/20"
              }
            ].map((service, index) => (
              <Card
                key={index}
                className={`group relative bg-white border-gray-200 hover:border-indigo-300 hover:shadow-xl transition-all duration-700 overflow-hidden ${
                  isServicesVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-12'
                }`}
                style={{
                  transitionDelay: isServicesVisible ? `${index * 150}ms` : '0ms'
                }}
              >
                <CardContent className="p-6 md:p-8 relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />
                  <div className="relative z-10">
                    <div className="text-xs font-semibold text-indigo-600 uppercase tracking-wider mb-2">
                      {service.subtitle}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-gray-900">{service.title}</h3>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Pain Points Section - 아이앤뷰 스타일 */}
        <div className="mb-12 md:mb-20 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl md:rounded-3xl p-6 md:p-12 lg:p-16 border border-indigo-100">
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-6 text-gray-900 leading-tight px-4">
              온라인 마케팅이 <span className="text-indigo-600">어려우셨던 분들,</span><br className="hidden sm:block" />
              뷰 커뮤니케이션과 함께 <span className="text-indigo-600">해결해보세요.</span>
            </h3>
            <p className="text-sm md:text-base lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              수많은 마케팅 고민에 머리 아프실 필요 없습니다.<br className="hidden sm:block" />
              무작정 다 들어가는 마케팅이 아닌, <span className="text-gray-900 font-semibold">필요한 솔루션만을 제안</span>합니다!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
            {[
              { 
                text: "리워드 마케팅을 시작하고 싶은데 어디서부터 해야 할지 모르겠어요",
                icon: (
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-500">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                    <line x1="12" y1="17" x2="12.01" y2="17"/>
                  </svg>
                )
              },
              { 
                text: "광고비는 많이 쓰는데 정작 수익은 적게 나와요",
                icon: (
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500">
                    <line x1="12" y1="2" x2="12" y2="6"/>
                    <line x1="12" y1="18" x2="12" y2="22"/>
                    <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/>
                    <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/>
                    <line x1="2" y1="12" x2="6" y2="12"/>
                    <line x1="18" y1="12" x2="22" y2="12"/>
                    <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"/>
                    <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"/>
                    <path d="M12 8v8m-4-4h8"/>
                  </svg>
                )
              },
              { 
                text: "기존 광고 플랫폼의 불투명한 수익 구조가 불만스러워요",
                icon: (
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-pink-500">
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                    <line x1="12" y1="9" x2="12" y2="13"/>
                    <line x1="12" y1="17" x2="12.01" y2="17"/>
                  </svg>
                )
              },
              { 
                text: "우리 브랜드에 맞는 맞춤형 솔루션이 필요해요",
                icon: (
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-500">
                    <circle cx="12" cy="12" r="3"/>
                    <path d="M12 1v6m0 6v6"/>
                    <path d="m4.2 4.2 4.2 4.2m5.6 5.6 4.2 4.2"/>
                    <path d="M1 12h6m6 0h6"/>
                    <path d="m4.2 19.8 4.2-4.2m5.6-5.6 4.2-4.2"/>
                  </svg>
                )
              },
              { 
                text: "실시간으로 캠페인 성과를 확인하고 싶어요",
                icon: (
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                  </svg>
                )
              },
              { 
                text: "전문적인 기술 지원과 컨설팅이 필요해요",
                icon: (
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-amber-500">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                )
              }
            ].map((pain, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-xl md:rounded-2xl p-6 md:p-8 border border-gray-200 hover:border-indigo-300 hover:shadow-lg transition-all duration-300 group"
              >
                {/* 심플한 아이콘 */}
                <div className="mb-4 md:mb-6 flex justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                  <div className="scale-75 md:scale-100">
                    {pain.icon}
                  </div>
                </div>
                
                <p className="text-sm md:text-base text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors text-center">
                  {pain.text}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center pt-6 md:pt-8 border-t border-indigo-200">
            <h4 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4 text-gray-900 px-4">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                필요한 방식부터 함께 설계합니다
              </span>
            </h4>
            <p className="text-sm md:text-base lg:text-lg text-gray-600 mb-6 md:mb-8 px-4">
              업종과 캠페인 목적을 확인해 불필요한 집행을 줄이고<br className="hidden sm:block" />
              <span className="text-gray-900 font-semibold">진행 가능한 범위와 조건</span>을 분명하게 안내합니다.
            </p>
            <Button asChild
              size="lg"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white border-0 px-8 py-5 md:px-12 md:py-6 text-sm md:text-base font-semibold shadow-2xl shadow-indigo-500/30 transition-all duration-300 hover:scale-105"
            >
              <a href="#contact">
                상담 문의하기
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </a>
            </Button>
          </div>
        </div>

        {/* 왜 뷰 커뮤니케이션인가 */}
        <div 
          id="solutions"
          ref={whyInfoplanetRef}
          className={`bg-white rounded-2xl md:rounded-3xl p-6 md:p-12 lg:p-16 mb-12 md:mb-20 border border-gray-200 shadow-lg transition-all duration-1000 ${
            isWhyInfoplanetVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-6 text-gray-900 px-4">
              왜 <span className="text-indigo-600">뷰 커뮤니케이션</span>을 선택해야 할까요?
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                title: "투명한 수익 구조",
                desc: "정산 기준과 수익 구조를 계약 단계에서 명확하게 안내합니다",
                icon: "💰"
              },
              {
                title: "연동 범위 협의",
                desc: "API나 운영 시스템 연동이 필요하면 범위와 일정을 먼저 검토합니다",
                icon: "🚀"
              },
              {
                title: "전담 지원팀",
                desc: "기술 문의와 운영 지원을 담당자가 함께 조율합니다",
                icon: "👥"
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className={`bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl md:rounded-2xl p-6 md:p-8 border border-gray-200 text-center hover:shadow-lg transition-all duration-700 group ${
                  isWhyInfoplanetVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-12'
                }`}
                style={{
                  transitionDelay: isWhyInfoplanetVisible ? `${(index + 1) * 150}ms` : '0ms'
                }}
              >
                <div className="text-4xl md:text-5xl mb-3 md:mb-4">{item.icon}</div>
                <h4 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-gray-900">{item.title}</h4>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA Section - 아이앤뷰 스타일 */}
        <div className="text-center bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl md:rounded-3xl p-8 md:p-16 lg:p-20 border border-indigo-500 shadow-2xl">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 text-white leading-tight px-4">
            리워드 광고가 필요하다면<br />
            <span className="text-indigo-100">
              진행 조건부터 확인하세요.
            </span>
          </h3>
          <p className="text-sm md:text-base lg:text-lg text-indigo-100 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed px-4">
            목적과 예산을 알려주시면 가능한 방식과 확인할 사항을 안내합니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
            <Button asChild
              size="lg"
              className="bg-white text-indigo-600 hover:bg-gray-50 border-0 px-8 py-5 md:px-12 md:py-7 text-base md:text-lg font-semibold shadow-2xl hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <a href="#contact">
                상담 문의하기
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
