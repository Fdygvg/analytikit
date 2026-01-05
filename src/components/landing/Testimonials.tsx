// src/components/landing/Testimonials.tsx
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '@/data/landingData';
import { useState } from 'react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + itemsPerPage >= testimonials.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - itemsPerPage : prevIndex - 1
    );
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center rounded-full bg-amber-100 px-4 py-1.5 mb-4">
            <Star className="h-4 w-4 text-amber-600 mr-2" />
            <span className="text-sm font-medium text-amber-800">
              Loved by teams worldwide
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Don't just take{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              our word for it
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Join 2,500+ teams who transformed their analytics with AnalytiKit.
          </p>
        </div>

        {/* Testimonials carousel */}
        <div className="relative mb-12">
          {/* Navigation buttons */}
          <div className="hidden lg:flex items-center justify-between absolute -top-16 right-0">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full h-12 w-12 border-gray-300 hover:border-gray-400"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full h-12 w-12 border-gray-300 hover:border-gray-400 ml-4"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Testimonials grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleTestimonials.map((testimonial) => (
              <Card 
                key={testimonial.id}
                className="group border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-8">
                  {/* Quote icon */}
                  <div className="mb-6">
                    <Quote className="h-10 w-10 text-blue-100 group-hover:text-blue-200" />
                  </div>

                  {/* Rating */}
                  <div className="flex items-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < testimonial.rating
                            ? 'text-amber-400 fill-amber-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                    <span className="ml-2 text-sm text-gray-500">
                      ({testimonial.rating}/5)
                    </span>
                  </div>

                  {/* Testimonial text */}
                  <blockquote className="text-gray-700 mb-8 text-lg italic">
                    "{testimonial.content}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                    <Avatar>
                      <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${testimonial.name}`} />
                      <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        {testimonial.role} · {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Mobile navigation */}
          <div className="flex items-center justify-center gap-4 mt-8 lg:hidden">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full h-10 w-10"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="flex items-center gap-2">
              {[...Array(Math.ceil(testimonials.length / itemsPerPage))].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i * itemsPerPage)}
                  className={`h-2 rounded-full transition-all ${
                    Math.floor(currentIndex / itemsPerPage) === i
                      ? 'w-8 bg-blue-600'
                      : 'w-2 bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full h-10 w-10"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Trust badges */}
        <div className="bg-white rounded-2xl border border-gray-200 p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {[
              { label: '4.9/5', description: 'Average rating' },
              { label: '98%', description: 'Customer satisfaction' },
              { label: '24h', description: 'Avg. support response' },
              { label: '99.9%', description: 'Uptime SLA' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}