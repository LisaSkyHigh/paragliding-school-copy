'use client'

import { useState } from 'react'
import JsonLd from '@/components/seo/JsonLd'

type FAQItem = {
  question: string
  answer: string
}

type FAQAccordionProps = {
  items: FAQItem[]
  generateSchema?: boolean
  pageUrl?: string
}

export default function FAQAccordion({ items, generateSchema = false, pageUrl }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const schema = generateSchema
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: items.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
            ...(pageUrl ? { url: pageUrl } : {}),
          },
        })),
      }
    : null

  return (
    <>
      {schema && <JsonLd data={schema} />}
      <div className="divide-y divide-cloud">
        {items.map((item, index) => (
          <div key={index}>
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-start justify-between py-5 text-left gap-4"
              aria-expanded={openIndex === index}
            >
              <h3
                className="text-base font-medium text-soft-black leading-snug"
                style={{ fontFamily: 'var(--font-inter)' }}
              >
                {item.question}
              </h3>
              <svg
                className={`w-5 h-5 flex-shrink-0 text-slate transition-transform mt-0.5 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {openIndex === index && (
              <div className="pb-5">
                <p
                  className="text-base text-slate leading-relaxed"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  )
}
