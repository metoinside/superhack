'use client'
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Card from "./components/card";
import List from "./components/list";


export default function Home() {
  

  return (
    <div className="bg-sky-950">

      <hr />
      <div className="flex justify-center flex space-x-20 bg-slate-50 py-5">

        <Card title="See Event List" image="https://img.icons8.com/?size=512&id=113580&format=png" description="Do you want to change something for others today?" nav="/list-detail-page" reqWID={false} button="Buy your ticket" />
        <Card title="Create Events for Charities" image="https://img.icons8.com/?size=512&id=113852&format=png" description="Create your campaign to help more!" nav="/event-create" reqWID={true} button="Create new event" /> 
      </div>
      <hr className="py-5" />
      <List />
    </div>
  )
}