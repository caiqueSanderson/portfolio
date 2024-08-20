import "./AboutMe.css";
import Cards from "../cards/Cards";

export default function AboutMe(){
    return(
        <>
            <div className="container_about">
                <header className="header_about">
                    <span className="text_line">Soft Skills</span>
                    <span className="bold">Sobre mim</span>
                </header>
                <div className="description">
                    <p>Sou estudante do 3° semestre de Engenharia de Software no Instituto Infnet, se você quiser saber mais sobre minha grade, <a className="description_link" href="https://faculdadeinfnet.com.br/faculdade/engenharia-de-software/">clique aqui</a>.<br></br> 
                    Nestes semestres além de aprender hard skills tenho desenvolvido minhas soft skills. Das quais valem ressaltar:</p>
                    <div className="softSkills">
                        <Cards image="public/networking.svg" title="Networking"/>
                        <Cards image="public/teamWork.svg" title="TeamWork"/>
                        <Cards image="public/timeManagement.svg" title="Time Management"/>
                    </div>
                </div>
            </div>
        </>
    )
}