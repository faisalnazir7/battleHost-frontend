import React from 'react'
import { BarChart, Users2, Trophy, Award } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function SideNav() {
  return (
    <aside className="flex  w-64 flex-col overflow-y-auto border-r bg-white px-5 py-8">
      {/* h-screen */}
      <div className="mt-6 flex flex-1 flex-col justify-between">
        <nav className="mx-3 space-y-6 ">
          <div className="space-y-8 ">
            <Link to=""
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
            >
              <BarChart className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-base font-medium">General</span>
            </Link>
            <Link to=""
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
            >
              <Users2 className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-base  font-medium">Team Members</span>
            </Link>

            <Link to=""
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
            >
              <Trophy className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-base  font-medium">Prize Rule</span>
            </Link>
            <Link to=""
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
            >
              <Award className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-base  font-medium">Result</span>
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
