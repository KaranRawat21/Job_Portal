import React from 'react'
import TopSection from './TopSection'
import BrowseByCategory from './BrowseByCategory'
import GoForJobPage from './GoForJobPage'
import Achievement from './Achievement'
import TopRecruiters from './TopRecruiters'

function Home() {
  return (
    <>
      <TopSection />
      <BrowseByCategory />
      <GoForJobPage />
      <Achievement />
      <TopRecruiters />
    </>
  )
}

export default Home