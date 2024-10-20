import styles from "./Presentation.module.css";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Presentation(){
    return(
        <>
            <div className={styles.container_initial}>
                <nav>
                    <p>sanderson.dev</p>
                    <div className={styles.links}>
                        <a href="#">projetos</a>
                        <a href="#">cv</a>
                        <a href="www.linkedin.com/in/caique-sanderson-de-sá-borges-262545237"><FaLinkedinIn className="icons_contact" /></a>
                        <a href="https://github.com/caiqueSanderson"><FaGithub className="icons_contact" /></a>
                    </div>
                </nav>
                <div className={styles.text}>
                    <h2 className={styles.text_item}>Hello world!</h2>
                    <h1 className={styles.text_item}>Meu nome é <span className={styles.bold}>Caique Sanderson</span></h1>
                    <p className={styles.text_item}>Sou um &lt; desenvolvedor / &gt;</p>
                </div>
            </div>
        </>
    )
}