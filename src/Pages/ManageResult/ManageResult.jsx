import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import SideNav from '../../Components/SideNav/SideNav'
import ResultManageCard from '../../Components/ResultManageCard/ResultManageCard'

export default function ManageResult() {
    return (
        <>
            <Navbar />
            <div className='ManageResult flex'>
                <SideNav />
                <div className="ml-12 mt-14">
                <div className="ManageResultContent border-b">
                <h2 className="text-xl font-semibold">Results</h2>
                </div>
                <div>
              <ResultManageCard/>
              </div>
            </div>
            </div>
        </>

    )
}
