// src/components/landing/FAQ.tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { HelpCircle, MessageSquare, Mail, FileText } from 'lucide-react';
import { faqItems } from '@/data/landingData';
import { Link } from 'react-router-dom';

export default function FAQ() {
  return (
    <section id="faq" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left column - FAQ */}
          <div>
            <div className="inline-flex items-center rounded-full bg-green-100 px-4 py-1.5 mb-4">
              <HelpCircle className="h-4 w-4 text-green-600 mr-2" />
              <span className="text-sm font-medium text-green-800">
                Common questions
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              Frequently asked{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                questions
              </span>
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              Can't find the answer you're looking for? Reach out to our support team.
            </p>

            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={`item-${item.id}`}
                  className="border border-gray-200 rounded-xl px-6 data-[state=open]:border-blue-300 data-[state=open]:shadow-sm"
                >
                  <AccordionTrigger className="text-left py-6 hover:no-underline">
                    <span className="text-lg font-semibold text-gray-900">
                      {item.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <p className="text-gray-600">{item.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Right column - Contact & Resources */}
          <div className="lg:sticky lg:top-24">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Still have questions?
              </h3>
              <p className="text-gray-600 mb-8">
                Our support team is here to help you get started and answer any questions.
              </p>

              {/* Contact options */}
              <div className="space-y-6 mb-10">
                {[
                  {
                    icon: MessageSquare,
                    title: 'Chat support',
                    description: 'Talk to our team in real-time',
                    action: 'Start chat',
                    color: 'text-blue-600 bg-blue-100'
                  },
                  {
                    icon: Mail,
                    title: 'Email us',
                    description: 'Get a response within 2 hours',
                    action: 'Send email',
                    color: 'text-purple-600 bg-purple-100'
                  },
                  {
                    icon: FileText,
                    title: 'Documentation',
                    description: 'Browse guides & tutorials',
                    action: 'View docs',
                    color: 'text-green-600 bg-green-100'
                  },
                ].map((option, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200"
                  >
                    <div className={`h-12 w-12 rounded-xl ${option.color} flex items-center justify-center flex-shrink-0`}>
                      <option.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {option.title}
                      </h4>
                      <p className="text-sm text-gray-600 mb-3">
                        {option.description}
                      </p>
                      <Button variant="ghost" size="sm" className="h-auto p-0">
                        {option.action} →
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Helpful resources */}
              <div className="border-t border-gray-200 pt-8">
                <h4 className="font-semibold text-gray-900 mb-4">
                  Helpful resources
                </h4>
                <div className="space-y-3">
                  {[
                    'Getting started guide',
                    'API documentation',
                    'Security & compliance',
                    'Pricing calculator',
                    'Migration guide',
                  ].map((resource, index) => (
                    <a
                      key={index}
                      href="#"
                      className="flex items-center justify-between py-2 text-gray-600 hover:text-blue-600 group"
                    >
                      <span>{resource}</span>
                      <span className="text-gray-400 group-hover:text-blue-600">→</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <Button className="w-full" size="lg" asChild>
                  <Link to="/demo">
                    Try it free for 14 days
                  </Link>
                </Button>
                <p className="text-center text-sm text-gray-500 mt-4">
                  No credit card required · Cancel anytime
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}