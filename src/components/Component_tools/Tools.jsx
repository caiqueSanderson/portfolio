import Cards from "../cards/Cards";
import "./Tools.css";
import { FaPython } from "react-icons/fa6";

export default function Tools(){
    return(
        <>
        <div className="container_tools">
            <header className="header_tools">
                <span className="text_line">Hard Skills</span>
                <span className="bold">Ferramentas</span>
            </header>
            <div className="cards_tools">
                <Cards image="./javascript.svg" title="JavaScript"/>
                <Cards image="./react.svg" title="React"/>
                <Cards image="./python.svg" title="Python"/>
                <Cards image="./sql.svg" title="SQL"/>
                <Cards image="./html.svg" title="HTML5"/>
                <Cards image="./css.svg" title="CSS3"/>
                <Cards image="./git.svg" title="Git"/>
            </div>
        </div>
        </>
    )
}