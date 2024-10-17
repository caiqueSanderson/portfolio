import styles from "./AboutMe.module.css";
import Cards from "../cards/Cards";

export default function AboutMe(){
    return(
        <>
            <div className={styles.container_about}>
                <header className={styles.header_about}>
                    <span className={styles.text_line}>Soft Skills</span>
                    <span className={styles.bold}>Sobre mim</span>
                </header>
                <div className={styles.description}>
                    <p>Sou estudante do 3° semestre de Engenharia de Software no Instituto Infnet, se você quiser saber mais sobre minha grade, <a className="description_link" href="https://faculdadeinfnet.com.br/faculdade/engenharia-de-software/">clique aqui</a>.<br></br> 
                    Nestes semestres além de aprender hard skills tenho desenvolvido minhas soft skills. Das quais valem ressaltar:</p>
                    <div className={styles.softSkills}>
                        <Cards image="/networking.svg" title="Networking"/>
                        <Cards image="/teamWork.svg" title="TeamWork"/>
                        <Cards image="/timeManagement.svg" title="Time Management"/>
                    </div>
                </div>
            </div>
        </>
    )
}