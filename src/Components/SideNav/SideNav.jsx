import React from 'react'
import { BarChart, Users2, Trophy, Award } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'

export default function SideNav() {
  const {tournamentId}=useParams()
  return (
    <aside className="flex  w-64 flex-col md:overflow-y-auto border-b md:border-r bg-white md:px-5 md:py-8 -mt-8 mb-12 md:mt-0 md:mb-0">
      {/* h-screen */}
      <div className="mt-6 flex flex-1 flex-col justify-between">
        <nav className="mx-3 space-y-6 ">
          <div className="space-y-8 flex justify-between md:block">
            <Link to={`/hostdashboard/manage/${tournamentId}`}
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
            >
              <BarChart className="h-5 w-5 mt-8 md:mt-0" aria-hidden="true" />
              <span className="mx-2 text-base font-medium hidden md:block">General</span>
            </Link>
            <Link to={`/hostdashboard/manage/${tournamentId}/participants`}
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
            >
              <Users2 className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-base  font-medium hidden md:block">Team Members</span>
            </Link>

            {/* <Link to=""
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
            >
              <Trophy className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-base  font-medium">Prize Rule</span>
            </Link> */}
            <Link to={`/hostdashboard/manage/${tournamentId}/result`}
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
            >
              <Award className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-base  font-medium hidden md:block">Result</span>
            </Link>
            {/* <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              href="#"
            >
              <Paperclip className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Checklists</span>
            </a> */}
          </div>
        </nav>
      </div>
    </aside>
  )
}
