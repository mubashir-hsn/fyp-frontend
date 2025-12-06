// import { getIndustryInsight } from '@/actions/dashboard.js';
// import { userOnboardingStatus } from '@/actions/user.js';
// import { redirect } from 'next/navigation';
import React from 'react'
import DashboardView from './_components/DashboardView';
import data from '@/data/database/IndustryInsight.json'

const IndustryInsightsPage = async() => {
  // const { isOnboarded } = await userOnboardingStatus();
  // const insights = await getIndustryInsight();
  
  // if (!isOnboarded) {
  //   redirect('/onboarding')
  // }
  return (
    <div className='container mx-auto'>
      <DashboardView data={data}/>
    </div>
  )
}

export default IndustryInsightsPage