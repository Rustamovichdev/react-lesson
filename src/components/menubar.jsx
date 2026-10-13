import { Link } from "react-router-dom";

const Menubar = () => {

    const menulist = [
        {
            id:1,
            title:"Frontend",
            path:"/frontend"
        },
        {
            id:2,
            title:"Backend",
            path:"/backend"
        },
        {
            id:3,
            title:"Tester",
            path:"/tester"
        },
        {
            id:4,
            title:"Menejer",
            path:"/meneger"
        },
    ]

    return <aside>

      {
        menulist.map(item => (
            <div key={item.id}>
                <Link to={item.path}>{item.title}</Link>
            </div>
        ))
      }

    </aside>
}
export default Menubar;