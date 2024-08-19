import "./Cards.css";

export default function Cards(props){
    return(
        <div className="skills">
            <img className="card_image" src={props.image} alt="" />
            <p className="card_title">{props.title}</p>
        </div>
    )
}