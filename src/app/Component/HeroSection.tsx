// "use client";
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const HeroSection = () => {
  // Array of images for the carousel
  const carouselImages = [
    {
      src: "https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-6/494750790_1251392976987682_2840569525170940382_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGtAw4e_isluIy-ThpnU-E0XDnRtoJySSBcOdG2gnJJIO8UQXbX4qvtTM7oS-v_J0To0LPA52FquQn6WU0yEmfr&_nc_ohc=AhuyYYmNivcQ7kNvwFAWdTu&_nc_oc=AdkwHuK57FGeKprLEu6dFT-9idNR7IsXUHs915d2YCGkMhRcKQgtuzym2l67sJ44pbQ&_nc_zt=23&_nc_ht=scontent.fdac5-2.fna&_nc_gid=jRaMo46f0vcSkkwHN78MAw&oh=00_AfOiCY-1v-ywG7Dg8kTT7Mw212ZoPhgikIC6QWGlvELhKw&oe=684BB67B",
      alt: "Modern classrooms with latest technology"
    },
    {
      src: "https://scontent.fdac5-1.fna.fbcdn.net/v/t39.30808-6/490174389_1232165858910394_3890679899034222046_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFvTO9zqCiD7pNBVmQX8IuGebUiazaxW8x5tSJrNrFbzP5tyRGNnP1dcF_7uqwewSFtZqhQV5usStQ_9ooLZBnS&_nc_ohc=8BQXXrmVKY0Q7kNvwHYOnTq&_nc_oc=AdlY0jJpcdjMrOhL5FFGJeyjGCFtWDIwdLrMRre1p3sQkupOqzg3RNqvBtE76VnnTz8&_nc_zt=23&_nc_ht=scontent.fdac5-1.fna&_nc_gid=4fXFbvnqkr1Sc1ZjZQ3KLw&oh=00_AfMFXmcEwFQod9cPr1gpwXoIgbRasxayDPYvQ6zJVXSFxw&oe=684BB88B",
      alt: "Expert instructors teaching students"
    },
    {
      src: "https://scontent.fdac5-1.fna.fbcdn.net/v/t39.30808-6/493853714_1251393020321011_3656392723610053400_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFwbfdGUM9NsW9VYi1M3_yezAVWIdnqmdHMBVYh2eqZ0TyN2SGVOiNTU7-kx01ZelNJ779uprp22orgY6q5-GjE&_nc_ohc=o3MRcxspeHEQ7kNvwFRguwI&_nc_oc=AdlGqlttmhzUqxtrb2ctoa9IJ_cib5CA_649W4r74BKTfEnio5s3kQdyVT4l07OloDk&_nc_zt=23&_nc_ht=scontent.fdac5-1.fna&_nc_gid=wNhHh2LPQO5JsUaxroBiOQ&oh=00_AfMXkLhS1Pyux9YQvUdvEqWhBGPXIkgUoTcxnFCz-7atdQ&oe=684BAF92",
      alt: "Students working on hands-on projects"
    },
    {
      src: "https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-6/493934079_1247077990752514_7878314356312251893_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFu2Gj0Kjbu-6Q4aXTD5Azbmyy3XFTKRGibLLdcVMpEaMrbJD5NWpTbTpP9VL3Dy8HdVlc7CQJ70Ydo1eHx88eR&_nc_ohc=w-k1WGdd-kIQ7kNvwEd0OZN&_nc_oc=AdmJ0x-vMuhbaFVJ6fZuVqQbuG4u29mt4-w2lNiIZKu32EXh8h52mgw5nxMAt2U-XtA&_nc_zt=23&_nc_ht=scontent.fdac5-2.fna&_nc_gid=TiXs3vRsUfTrh9wKuk4WJg&oh=00_AfM26kqaR7PVkqh8jE_bxpoXa3AQkITY2si02t3I4u4cHQ&oe=684BA674",
      alt: "Graduates celebrating their career success"
    }
  ];

  return (
    <section className="bg-background text-foreground pt-32 pb-20 md:pt-48 md:pb-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Text Content & CTAs */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4">
              Unlock Your Potential with
              <span className="block text-primary mt-2">Rongon Technical Computer Training Center</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto md:mx-0 mb-8">
              Join us to master the latest in computer technology. We offer expert-led courses designed to launch and advance your career in the IT industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg">
                Explore Courses
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                Contact Us
              </Button>
            </div>
          </div>

          {/* Right Column: Image Carousel */}
          <div className="flex justify-center items-center">
            <Carousel className="w-full max-w-2xl" opts={{ loop: true }}>
              <CarouselContent>
                {carouselImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-[4/3] items-center justify-center p-0 rounded-lg overflow-hidden">
                           <Image
                              src={image.src}
                              alt={image.alt}
                              className="w-full h-full object-cover"
                              width={650}
                              height={450}
                            />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex" />
              <CarouselNext className="hidden sm:flex"/>
            </Carousel>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;