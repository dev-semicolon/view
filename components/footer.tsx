import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Mail, Phone } from "lucide-react"

const officialLinks = [
  {
    name: "인포플래닛",
    description: "오퍼월·리워드 광고 운영사",
    href: "https://www.info-planet.co.kr/",
  },
  {
    name: "셀프 | Selling Planet",
    description: "광고 상품 비교와 직접 주문",
    href: "https://www.selling-planet.com/?utm_source=viewcommunication&utm_medium=owned_referral&utm_campaign=official_site&utm_content=footer",
  },
]

export function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr_1fr] gap-10 lg:gap-16">
          <div>
            <Image
              src="/logos/long_white_nb.png"
              alt="인포플래닛"
              width={180}
              height={40}
              className="h-9 w-auto mb-5"
            />
            <p className="max-w-md text-sm md:text-base text-gray-400 leading-relaxed">
              뷰 커뮤니케이션은 주식회사 인포플래닛이 운영하는 리워드 광고 브랜드입니다.
              캠페인 목적과 조건을 확인한 뒤 진행 가능한 범위를 안내합니다.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-white mb-4">공식 서비스</h2>
            <div className="space-y-3">
              {officialLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-start justify-between gap-4 rounded-xl border border-gray-800 bg-gray-900/70 p-4 transition-colors hover:border-indigo-500/60"
                >
                  <span>
                    <span className="block text-sm font-semibold text-white">{item.name}</span>
                    <span className="block mt-1 text-xs text-gray-400">{item.description}</span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-gray-500 transition-colors group-hover:text-indigo-400" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-white mb-4">문의</h2>
            <div className="space-y-3 text-sm text-gray-300">
              <a className="flex items-center gap-3 hover:text-white" href="mailto:contact@info-planet.co.kr">
                <Mail className="h-4 w-4 text-indigo-400" />
                contact@info-planet.co.kr
              </a>
              <a className="flex items-center gap-3 hover:text-white" href="tel:01077467314">
                <Phone className="h-4 w-4 text-indigo-400" />
                010-7746-7314
              </a>
              <p className="pt-2 text-xs leading-relaxed text-gray-500">
                문의 내용을 확인한 뒤 가능한 운영 범위와 절차를 안내합니다.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-800 text-xs leading-relaxed text-gray-500">
          <p>브랜드 뷰 커뮤니케이션 · 운영사 주식회사 인포플래닛 · 대표자 정덕근</p>
          <p className="mt-1">사업자등록번호 235-81-03562 · 경기도 광주시 태전중앙1길 5, 1동 613호(태전동)</p>
          <p className="mt-4">© 주식회사 인포플래닛. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
