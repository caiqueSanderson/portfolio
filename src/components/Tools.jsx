import Cards from "./cards/Cards";
import "./Tools.css";

export default function Tools(){
    return(
        <>
        <div className="container_tools">
            <header className="header_tools">
                <span className="text_line">Hard Skills</span>
                <span className="bold">Ferramentas</span>
            </header>
            <div className="cards_tools">
                <Cards image="public/javascript.svg" title="JavaScript"/>
                <Cards image="public/react.svg" title="React"/>
                <Cards image="public/python.svg" title="Python"/>
                <Cards image="public/sql.svg" title="SQL"/>
                <Cards image="public/html.svg" title="HTML5"/>
                <Cards image="public/css.svg" title="CSS3"/>
                <Cards image="public/git.svg" title="Git"/>
            </div>
        </div>
        </>
    )
}