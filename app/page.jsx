import HeroSection from "@/components/Hero.jsx";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { faqs } from "@/data/faqs";
import { features } from "@/data/features";
import { howItWorks } from "@/data/howItWorks";
import { testimonial } from "@/data/testimonials";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@radix-ui/react-accordion";
import { ArrowRight, User } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="grid-background"></div>

      {/* Hero Section */}
      <HeroSection />

      {/*Features section  */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl font-bold tracking-tighter text-center mb-12">Powerful Features for Your Career Growth</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {
              features.map((feature, index) => {
                return (
                  <Card key={index} className="border-2 border-slate-300 shadow-xl hover:border-primary transition-colors duration-300">
                    <CardContent className="pt-4 text-center flex flex-col items-center">
                      <Link href={`${feature.link}`}>
                      <div className="flex flex-col items-center justify-center ">
                        <p className="px-3 pt-3 rounded-full bg-slate-200 text-sm flex justify-center items-center">{feature.icon}</p>
                        <h3 className="text-xl font-bold my-2">{feature.title}</h3>
                        <p className=" text-muted-foreground">{feature.description}</p>
                      </div>
                      </Link>
                    </CardContent>

                  </Card>
                )
              })
            }
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-12 md:py-24 bg-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            <div className="flex flex-col items-center justify-center space-y-2">
              <h3 className="text-4xl font-bold">50+</h3>
              <p className="text-muted-foreground">Industries Covered</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <h3 className="text-4xl font-bold">1000+</h3>
              <p className="text-muted-foreground">Interview Questions</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <h3 className="text-4xl font-bold">95%</h3>
              <p className="text-muted-foreground">Success Rate</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <h3 className="text-4xl font-bold">24/7</h3>
              <p className="text-muted-foreground">AI Support</p>
            </div>
          </div>
        </div>
      </section>


      {/*How its work section  */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center mb-10">
            <h1 className="text-3xl font-bold text-center mb-4">How Its Work</h1>
            <p className=" text-muted-foreground">Four simple steps to accelerate your growth</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">

            {
              howItWorks.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center bg-slate-200 p-2 pt-4 rounded-lg text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-xl">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))
            }

          </div>
        </div>
      </section>

      {/* testimonial section */}
      <section className="w-full py-12 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonial.map((testimonial, index) => (
              <Card key={index} className="bg-background border-0 shadow-xl">
                <CardContent className="pt-6">
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="relative h-12 w-12 flex justify-center items-center flex-shrink-0 rounded-full border-2 border-gray-800">
                        <User className="w-6 h-6"/>
                      </div>
                      <div>
                        <p className="font-semibold">{testimonial.author}</p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </p>
                        <p className="text-sm text-primary">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                    <blockquote>
                      <p className="text-muted-foreground italic relative">
                        <span className="text-3xl text-primary absolute -top-4 -left-2">
                          &quot;
                        </span>
                        {testimonial.quote}
                        <span className="text-3xl text-primary absolute -bottom-4">
                          &quot;
                        </span>
                      </p>
                    </blockquote>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Find answers to common questions about our platform
            </p>
          </div>

          <div className="max-w-3xl mx-auto p-4">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="mt-2 border rounded-sm border-gray-400">
                  <AccordionTrigger className="text-left p-4 cursor-pointer">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 p-4 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full">
        <div className="mx-auto py-24 bg-slate-50 rounded-lg">
          <div className="flex flex-col items-center justify-center space-y-4 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter bg-gradient-to-tl from-rose-600 via-violet-500 to-blue-700 text-transparent bg-clip-text sm:text-4xl md:text-5xl">
              Ready to Accelerate Your Career?
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-600 md:text-xl">
              Join thousands of professionals who are advancing their careers
              with AI-powered guidance.
            </p>
            <Link href="/dashboard" passHref>
              <Button
                size="lg"
                
                className="h-11 mt-5 animate-bounce"
              >
                Start Your Journey Today <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </>
  );
}
