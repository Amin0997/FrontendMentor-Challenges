import React from 'react'
import './Main.scss'
import DesignedSection from './DesignedSection/DesignedSection'
import ArtInfrastructureSection from './ArtInfrastructureSection/ArtInfrastructureSection'
import ThirdSection from './ThirdSection/ThirdSection'

function Main() {
  return (
    <main className="main">

      <DesignedSection/>

      <ArtInfrastructureSection/>

      <ThirdSection/>

    </main>
  )
}

export default Main