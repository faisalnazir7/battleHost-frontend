import React from "react";
import Popup from "./Popup";
import Navbar from "../../Components/Navbar/Navbar";
import Prizes from "./Prizes";
import { useNavigate } from "react-router-dom";

function RegisterTournament() {
  const [open, setOpen] = React.useState(false);
  const navigator=useNavigate()
  return (
    <>
      <Navbar />
      <div className="RegisterTournament">
        <div className="tournament p-5">
          <img
            src={
              "https://d8it4huxumps7.cloudfront.net/uploads/images/6481ae7a08a26_flipkart-grid-50-software-development-track.png?d=1280x371"
            }
            alt=""
            className="w-full rounded-lg"
          />
          <div className="tournament_header flex mt-4">
            <h1 className="mt-10 font-bold text-4xl">Tournament Name</h1>
            <button
              className="rounded-md ml-auto p-5 bg-teal-400 text-white text-xl tracking-wide"
              onClick={() => setOpen(true)}
            >
              RegisterTournament
            </button>
          </div>
          <p className="font-bold flex mt-4 text-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
              />
            </svg>
           {' '}&nbsp; Company Name
          </p>
          <p className="font-bold flex text-lg mt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
           {' '}&nbsp;Online
          </p>
          <p className="font-bold flex text-lg mt-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
</svg>
{' '}&nbsp;Upto 4 Members
          </p>
          <p className="font-bold flex text-lg mt-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
</svg>

{' '}&nbsp;From 19th Aug 2023
          </p>
          <p className="font-bold flex text-lg mt-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
        </svg>
        
{' '}&nbsp;Till 24th Aug 2023
          </p>
          <p className="font-bold text-lg mt-4 italic">Already 1k Participants have registered for the tournament.</p>
          <div className="description mt-6">
            <h1 className="text-2xl font-semibold">Tournament Description</h1>
            <p className="text-base font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              distinctio, officiis culpa velit natus suscipit eligendi dolorem
              laborum nulla aperiam neque autem molestias. Ipsa esse accusamus
              suscipit reiciendis magnam unde soluta voluptas quo. Quisquam hic
              necessitatibus molestiae animi ad totam cupiditate inventore amet
              ratione, sed laborum reiciendis ut architecto provident doloremque
              maiores rerum aperiam minus, maxime, blanditiis quam deleniti
              autem. Id repellendus laboriosam ut, ratione mollitia ipsam atque
              similique autem explicabo reiciendis aliquam. Aut doloribus
              dolorem eos molestiae sint cumque saepe quaerat at dolore nulla
              alias recusandae molestias culpa, ullam nesciunt soluta est
              similique mollitia ea voluptate, aliquid reiciendis. Vel
              perferendis, amet velit aspernatur eaque quae neque a eius non hic
              placeat cumque et consectetur natus? Possimus tempora quisquam
              suscipit facilis repellat recusandae corrupti fuga maxime odio
              atque veritatis, deserunt numquam debitis alias amet mollitia
              illo, sint nulla voluptatem aliquid reiciendis sequi quae saepe
              ipsa. Tempora ex, est suscipit et iste doloribus earum magni saepe
              dolorem repudiandae tenetur dolores architecto aliquid temporibus!
              Explicabo nostrum enim quidem repellendus? Veritatis corporis,
              ducimus voluptatibus placeat cumque eveniet quasi doloribus
              recusandae aliquid similique voluptatum. Est nesciunt nostrum, id
              corrupti ipsa excepturi rerum quos? Debitis doloribus soluta ipsa!
              Aliquid perferendis accusamus doloribus sed. Veritatis
              voluptatibus doloremque numquam eligendi ducimus quisquam
              quibusdam tenetur quos itaque optio aperiam autem dolore corporis
              temporibus praesentium in sapiente, sequi delectus animi nostrum.
              Tempora quas dolores dolorem eius, perspiciatis, suscipit vitae,
              inventore quasi illum aperiam sequi! Unde error labore
              consequuntur eligendi, dicta, deleniti repellendus, aspernatur
              sunt facilis aliquid accusamus necessitatibus quis? Cumque saepe
              sunt maiores quas nemo quod cupiditate nulla, hic unde harum
              laboriosam perspiciatis accusamus voluptatem ea aspernatur
              voluptatibus! Fugiat sunt quasi distinctio unde hic dolorum
              deserunt vitae iusto. Neque porro ad facere sapiente fugit dolorem
              ex ducimus tempora obcaecati sit error tenetur velit illum soluta
              sunt, illo laborum ratione.
            </p>
          </div>
          <div className="rules mt-6">
          <h1 className="text-2xl font-semibold">Rules</h1>
          <ul className="list-disc p-4">
          <li className="text-base">No Plagiarism Allowed</li>
          <li className="text-base">No Plagiarism Allowed</li>
          <li className="text-base">No Plagiarism Allowed</li>
          <li className="text-base">No Plagiarism Allowed</li>
          <li className="text-base">No Plagiarism Allowed</li>
          <li className="text-base">No Plagiarism Allowed</li>
          </ul>
          </div>
          <div className="positions mt-6">
          <h1 className="text-2xl font-semibold">Rewards & Prizes</h1>
          <div className="prizes_display flex flex-wrap">
          <Prizes pos={"Winner"} cash={"5,000"}/>
          <Prizes pos={"1st Runner Up"} cash={"2,500"}/>
          <Prizes pos={"2nd Runner Up"} cash={"1,000"}/>
          </div>
          </div>
        </div>
       <div className="py-6">
        <button
        className="rounded-md p-5 bg-teal-400 text-white text-xl flex m-auto"
        onClick={()=>navigator('/result')}
      >
       <span className="mr-2">Get Results</span> 

       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
</svg>

      </button>
      </div>
        <Popup open={open} setOpen={setOpen} />
      </div>
    </>
  );
}

export default RegisterTournament;
