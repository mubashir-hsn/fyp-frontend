"use client"

import React, { useState } from 'react';
import {
  Card, CardContent, CardDescription,
  CardHeader, CardTitle
} from "@/components/ui/card";

import {
  Select, SelectContent,
  SelectItem, SelectTrigger, SelectValue
} from "@/components/ui/select";

import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

import { industries } from '@/data/industries.js';

const OnBoardingForm = () => {

  const [industry, setIndustry] = useState(null);
  const [subIndustry, setSubIndustry] = useState("");

  const handleIndustryChange = (value) => {
    const selected = industries.find(ind => ind.id === value);
    setIndustry(selected);
    setSubIndustry(""); 
  };

  return (
    <div className="flex items-center justify-center bg-background">

      <Card className="w-full max-w-3xl mt-10 mx-2">
        <CardHeader>
          <CardTitle className="pb-1 text-3xl">Complete Your Profile</CardTitle>
          <CardDescription className="border-b pb-3 pl-2">
            Select your industry to get personalized career insights.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form className="space-y-6">

            {/* Industry */}
            <div className="space-y-2">
              <Label>Industry</Label>
              <Select onValueChange={handleIndustryChange}>
                <SelectTrigger className="w-[300px]">
                  <SelectValue placeholder="Select an industry" />
                </SelectTrigger>
                <SelectContent>
                  {industries.map((ind) => (
                    <SelectItem value={ind.id} key={ind.id}>
                      {ind.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Sub Industry */}
            {industry && (
              <div className="space-y-2">
                <Label>Sub Industry</Label>
                <Select onValueChange={(value) => setSubIndustry(value)}>
                  <SelectTrigger className="w-[300px]">
                    <SelectValue placeholder="Specialization" />
                  </SelectTrigger>
                  <SelectContent>
                    {industry.subIndustries.map((sub) => (
                      <SelectItem key={sub} value={sub}>
                        {sub}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}

            {/* Experience */}
            <div className="space-y-2">
              <Label>Years Of Experience</Label>
              <Input type="number" min={0} max={50} placeholder="Enter years of experience" />
            </div>

            {/* Skills */}
            <div className="space-y-2">
              <Label>Skills</Label>
              <Input placeholder="e.g Python, JavaScript, C++" />
              <p className="text-sm text-muted-foreground ps-2">
                Separate multiple skills with commas
              </p>
            </div>

            {/* Bio */}
            <div className="space-y-2">
              <Label>Professional Bio</Label>
              <Textarea
                placeholder="Tell us about your professional background"
                className="h-32"
              />
            </div>

            <Button type="submit" className="w-full">
              Complete Profile
            </Button>
          </form>
        </CardContent>
      </Card>

    </div>
  );
};

export default OnBoardingForm;
