import "./Presentation.css";

export default function Presentation(){
    return(
        <>
            <div className="container_initial">
                <header>
                    <p>sanderson.dev</p>
                    <div className="links">
                        <a href="#">projetos</a>
                        <a href="#">cv</a>
                        <a href="#"><img src="public/github.svg" alt="Logo Github" /></a>
                        <a href="#"><img src="public/linkedin.svg" alt="Logo Linkedin" /></a>
                    </div>
                </header>
                <div>
                    <h2>&lt;h2&gt;Hello world&lt;/h2&gt;</h2>
                    <h1>Meu nome é <span className="bold">Caique Sanderson</span></h1>
                    <p>Sou um &lt;p&gt;desenvolvedor&lt;/p&gt;</p>
                </div>
            </div>
        </>
    )
}