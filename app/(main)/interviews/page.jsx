import React from 'react'
import StatsCards from './_components/StatsCards';
import PerformanceChart from './_components/PerformanceChart';
import QuizList from './_components/QuizList';
import assessments from '@/data/database/Assessment.json';

const InterviewPage = async() => {

  return (
    <div>

        <h1 className='text-5xl font-bold gradient-subtitle mb-5'>Interview Preparation</h1>
     
      <div className='space-y-4'>
          <StatsCards assessments={assessments}/>
          <PerformanceChart assessments={assessments}/>
          <QuizList assessments={assessments}/>
      </div>

    </div>
  )
}

export default InterviewPage