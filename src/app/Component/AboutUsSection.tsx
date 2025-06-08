import React from 'react';
import { Briefcase, Users, Award } from 'lucide-react';
import Image from 'next/image';

const AboutUsSection = () => {
  return (
    <section id="about" className="bg-background py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image */}
          <div className="flex justify-center">
            <Image
              src="https://scontent.fdac5-1.fna.fbcdn.net/v/t39.30808-6/493476771_1249405017186478_89661293595214396_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGIy7rfES5IbfkdZoWnWn_H615U1G-5ujrrXlTUb7m6OjBcCoi1OpcL-omOzVErvtIXlfsuw43Q07mCJD8u8Epq&_nc_ohc=9zxebgCWPScQ7kNvwE4xQkf&_nc_oc=AdlisJaLygAkg5VbPDlfVUtHsUu0NrkydIpRC8vlaGydKcNIyGZ90h8hkTgtL2F3Mis&_nc_zt=23&_nc_ht=scontent.fdac5-1.fna&_nc_gid=TZbZD7vrvNhZyhSYUaCvIA&oh=00_AfP_4ewv1lIKx0JITWhLw1q6W5inR-wWAXqnOA65neRWow&oe=684BD7DB"
              alt="Rangon Computer Training Institute, Barisal"
              className="rounded-lg shadow-2xl w-full max-w-md aspect-square object-cover"
              width={500}
              height={500}
            
            />
          </div>

          {/* Right Column: Text Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              About <span className="text-primary">Rangon Computer Training Institute</span>
            </h2>
            
            <p className="mt-4 text-lg text-muted-foreground">
              We are a leading training center in Barisal, dedicated to providing National Skill Standard Basic Certificate courses to empower our students for a brighter future in technology.
            </p>

            <blockquote className="mt-6 p-4 bg-muted border-l-4 border-primary text-left">
              <p className="font-semibold text-lg">
                এখানে ৩/৬ মাস মেয়াদী কম্পিউটার অফিস এপ্লিকেশন কোর্সে করানো হয়।
              </p>
            </blockquote>

            {/* Statistics Section */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex flex-col items-center lg:items-start p-4 bg-muted/40 rounded-lg">
                <Users className="h-10 w-10 text-primary mb-2" />
                <p className="text-3xl font-bold">1500+</p>
                <p className="text-muted-foreground">Students Passed</p>
              </div>
              <div className="flex flex-col items-center lg:items-start p-4 bg-muted/40 rounded-lg">
                <Award className="h-10 w-10 text-primary mb-2" />
                <p className="text-3xl font-bold">National</p>
                <p className="text-muted-foreground">Skill Standard</p>
              </div>
              <div className="flex flex-col items-center lg:items-start p-4 bg-muted/40 rounded-lg">
                <Briefcase className="h-10 w-10 text-primary mb-2" />
                <p className="text-3xl font-bold">Expert</p>
                <p className="text-muted-foreground">Instructors</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
