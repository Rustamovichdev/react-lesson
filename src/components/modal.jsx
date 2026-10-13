import { useLocation } from "react-router-dom"

const InfoCard = () => {

    const location = useLocation()
    let cPath =location.pathname.slice(1)
 
    const dir = {
        frontend:{
            skills:["HTML","CSS","JS"],
            davom:"6 oy",
            vaqti:"juft kunlari 14:00-16:00"
        },
        backend:{
            skills:["JS","Py","SQL"],
            davom:"6 oy",
            vaqti:"toq kunlari 14:00-16:00"
        },
        tester:{
            skills:["JS","TS","Algaritms"],
            davom:"4 oy",
            vaqti:"juft kunlari 16:00-18:00"
        },
        meneger:{
            skills:["JS","TS","Algaritms"],
            davom:"4 oy",
            vaqti:"juft kunlari 16:00-18:00"
        },
    }

    console.log(dir[cPath])
    return <div>
        <p>Skills: {dir[cPath].skills.join(",")}</p>
        <p>Davomiyligi: {dir[cPath].davom}</p>
        <p>Vaqti: {dir[cPath].vaqti}</p>
    </div>
}

export default InfoCard