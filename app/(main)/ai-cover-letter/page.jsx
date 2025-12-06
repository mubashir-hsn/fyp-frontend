import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import coverLetters from '@/data/database/CoverLetter.json'
import CoverLetterList from './_components/cover-leter-list'

const AICoverLetterPage = async() => {

  // const coverLetters = CoverLetterList;

  return (
    <div className='space-y-4 p-4 container mx-auto'>
      <div className='flex justify-between items-center gap-2'>
        <h1 className='gradient-subtitle text-3xl font-bold'>My Cover Letter</h1>
        <Link href={'/ai-cover-letter/new'}>
          <Button>Create New</Button>
        </Link>
      </div>

      <CoverLetterList coverLetters={coverLetters}/>
    </div>
  )
}

export default AICoverLetterPage