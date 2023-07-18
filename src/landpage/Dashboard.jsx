import { Navbar , Welcome , ImageGrid }from "../components/index"

export default function Dashboard() {
  return (
   <>
   <div className="bg-[#faf6]">
      <Navbar/>
      <Welcome/>
      <ImageGrid/>
  </div>
   </>
  )
}
