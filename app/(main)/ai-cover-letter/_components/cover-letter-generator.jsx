"use client"
import React from 'react'

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';


const CoverLetterGenerator = () => {
   
    return (
        <div className='space-y-5'>

            <Card>
                <CardHeader>
                    <CardTitle>Job Details</CardTitle>
                    <CardDescription>Provide information about the position you're applying for</CardDescription>
                </CardHeader>
                <CardContent>
                    <form className='space-y-4'>
                        <div className='grid grid-cols-2 gap-4'>
                            <div className='space-y-2'>
                                <label htmlFor="CompanyName">Company Name</label>
                                <Input
                                    id="CompanyName"
                                    placeholder="Enter company name"
                                    
                                />

                            </div>

                            <div className='space-y-2'>
                                <label htmlFor="jobtitle">Job Title</label>
                                <Input
                                    id="jobtitle"
                                    placeholder="Enter job title"
                                    
                                />

                                
                            </div>

                        </div>

                        <div className='space-y-2'>
                            <label htmlFor="jobdesc">Job Description</label>
                            <Textarea
                                id="jobdesc"
                                placeholder="Paste the job description here"
                                className={'h-32'}
                                
                            />

                           
                        </div>

                        <div className="flex justify-end">
                            <Button type="submit"> Generate Cover Letter </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>

        </div>
    )
}

export default CoverLetterGenerator