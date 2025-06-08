/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MapPin, User, Mail } from 'lucide-react';

const ContactUsSection = () => {
  return (
    <section id="contact" className="bg-muted/40 py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Get In Touch
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We'd love to hear from you! Reach out to us for course inquiries, admissions, or any other questions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column: Contact Details & Form */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Contact Details */}
              <div className="space-y-4 text-muted-foreground">
                <div className="flex items-center">
                  <User className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                  <span><strong>Proprietor:</strong> মোঃ মিজানুর রহমান শাহিন</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                  <span><strong>Phone:</strong> 01728-812091</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                   <a href="mailto:shahinrongon@yahoo.com" className="hover:text-primary transition-colors">
                    <strong>Email:</strong> shahinrongon@yahoo.com
                  </a>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                  <span><strong>Address:</strong> Fakir Bari Road, Barisal, Bangladesh</span>
                </div>
              </div>

              {/* Contact Form */}
              <form className="space-y-4 pt-6 border-t">
                 <div>
                    <label htmlFor="name" className="sr-only">Name</label>
                    <Input id="name" placeholder="Your Name" />
                 </div>
                 <div>
                    <label htmlFor="email" className="sr-only">Email</label>
                    <Input id="email" type="email" placeholder="Your Email" />
                 </div>
                 <div>
                    <label htmlFor="message" className="sr-only">Message</label>
                    <Textarea id="message" placeholder="Your Message" rows={4} />
                 </div>
                 <Button type="submit" className="w-full">
                    Send Message <Mail className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Right Column: Google Map */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d230.07336469987237!2d90.35585007479933!3d22.68457179999999!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375535cdcd534d07%3A0xd18d32efbb502713!2sRongon%20Computer%20Training%20Institute!5e0!3m2!1sen!2sbd!4v1749417888285!5m2!1sen!2sbd" 
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '450px' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
