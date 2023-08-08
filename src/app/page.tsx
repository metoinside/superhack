
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Card from "./components/card";
import List from "./components/list";

export default function Home() {
  return (

    <div className="bg-sky-950">
      <hr />
      <div className="flex justify-center flex space-x-20 bg-slate-50 py-5">
      
      <Card title="Volunteer" image="https://img.icons8.com/?size=512&id=sx7S5ISNrUV7&format=png" description="Do you want to change something for others today?" button="Change now!"/>
      <Card title="Charity" image="https://img.icons8.com/?size=512&id=113852&format=png" description="Create your campaign to help more!" button="Create new campaign now!"/>
            </div>
            <hr className="py-5" />
<List/>
    </div>
  )
}