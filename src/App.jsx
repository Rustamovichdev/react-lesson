import { Route, Routes } from "react-router-dom";
import Menubar from "./components/menubar";
import InfoCard from "./components/modal";

function App(){

   const router = [
        {
            id:1,
            element:"Dashboard",
            path:"/frontend"
        },
        {
            id:2,
            element:"Users",
            path:"/backend"
        },
        {
            id:3,
            element:"Products",
            path:"/tester"
        },
        {
            id:4,
            element:"Posts",
            path:"/meneger"
        },
    ]

  return <>
     <section className="wrap">
      <div>
        <Menubar/>
      </div>
      <div>
        header

        <section style={{color:"red"}}>
            {/* <Routes>
              {
                router.map(item => (
                   <Route path={item.path} element={item.element} key={item.id}/>
                ))
              }
            </Routes> */}

            <InfoCard/>
        </section>
      </div>
     </section>
  </>
}

export default App;