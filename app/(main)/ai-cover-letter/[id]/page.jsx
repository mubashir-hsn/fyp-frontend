import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import React from 'react'
import CoverLetterPreview from '../_components/cover-letter-preview';
import coverLetters from '@/data/database/CoverLetter.json'

const CoverLetterPage = async ({ params }) => {
  const {id} = await params;
  const coverLetter = coverLetters.filter((cl)=> cl.id === id);
  return (
    <div className='py-5 container mx-auto px-4'>
      <div className='flex flex-col space-y-4'>
        <Link href={'/ai-cover-letter'}>
          <Button variant={'link'} className={'gap-2 pl-0'}>
            <ArrowLeft className='w-4 h-4' />
            Back to Cover Letters
          </Button>
        </Link>

        <h1 className='font-bold text-4xl gradient-subtitle'>{coverLetter[0]?.jobTitle} at {coverLetter[0]?.companyName}</h1>
      </div>

      <CoverLetterPreview content={coverLetter[0]?.content}/>
    </div>
  )
}

export default CoverLetterPage