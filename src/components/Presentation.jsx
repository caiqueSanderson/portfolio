import "./Presentation.css";

export default function Presentation(){
    return(
        <>
            <div className="container_initial">
                <nav>
                    <p>sanderson.dev</p>
                    <div className="links">
                        <a href="#">projetos</a>
                        <a href="#">cv</a>
                        <a href="www.linkedin.com/in/caique-sanderson-de-sá-borges-262545237"><img className="icons_contact" src="public/linkedin.svg" alt="Logo Linkedin" /></a>
                        <a href="https://github.com/caiqueSanderson"><img className="icons_contact" src="public/github.svg" alt="Logo Github" /></a>
                    </div>
                </nav>
                <div className="text">
                    <h2 className="text_item">Hello world!</h2>
                    <h1 className="text_item">Meu nome é <span className="bold">Caique Sanderson</span></h1>
                    <p className="text_item">Sou um &lt; desenvolvedor / &gt;</p>
                </div>
            </div>
        </>
    )
}