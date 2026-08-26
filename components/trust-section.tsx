const steps = [
  {
    number: "01",
    title: "요청 확인",
    description: "목적, 대상 행동, 기간과 예산을 확인합니다.",
  },
  {
    number: "02",
    title: "가능 범위 안내",
    description: "매체와 운영 조건을 검토해 진행 가능 여부를 안내합니다.",
  },
  {
    number: "03",
    title: "집행과 확인",
    description: "합의된 기준에 따라 캠페인을 진행하고 결과를 확인합니다.",
  },
]

export function TrustSection() {
  return (
    <section id="process" className="py-12 md:py-24 bg-gray-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <p className="text-sm font-semibold text-indigo-600 mb-3">진행 방식</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
            확인되지 않은 약속보다 조건을 먼저 안내합니다
          </h2>
          <p className="mt-4 text-sm md:text-base text-gray-600">
            채널별 정책과 캠페인 조건에 따라 진행 가능 범위와 측정 기준은 달라질 수 있습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {steps.map((step) => (
            <article key={step.number} className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
              <span className="text-sm font-bold text-indigo-600">{step.number}</span>
              <h3 className="mt-5 text-lg md:text-xl font-bold text-gray-900">{step.title}</h3>
              <p className="mt-3 text-sm md:text-base leading-relaxed text-gray-600">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
