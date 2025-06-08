

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from 'lucide-react';

const CourseWeOfferSection = () => {
  const courses = [
    {
      name: "Computer Office Application",
      price: "3500 BDT",
      description: "Subject Code: 75. A comprehensive course covering essential office productivity tools.",
      features: [
        "MS Word",
        "MS Access",
        "MS Excel",
        "MS Power point",
        "Bangla & English Typing"
      ],
      buttonText: "Enroll Now"
    },
    {
      name: "Graphics Design & Multimedia",
      price: "3500 BDT",
      description: "Subject Code: 81. Master the industry-standard tools for creative design.",
      features: [
        "Adobe Photoshop",
        "Adobe Illustrator"
      ],
      buttonText: "Enroll Now"
    }
  ];

  return (
    <section id="courses" className="bg-muted/40 py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Our Featured Courses
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Choose the perfect course to build your skills. We offer 3 and 6-month programs with two sessions per year: <strong>January - June</strong> and <strong>July - December</strong>.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {courses.map((course) => (
            <Card
              key={course.name}
              className="flex flex-col border-border"
            >
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold">{course.name}</CardTitle>
                <p className="text-4xl font-bold pt-4">{course.price}<span className="text-sm font-normal text-muted-foreground">/course</span></p>
                <CardDescription className="pt-2">{course.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-4">
                  {course.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">
                  {course.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseWeOfferSection;
