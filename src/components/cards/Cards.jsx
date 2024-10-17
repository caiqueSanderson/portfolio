import styles from "./Cards.module.css";

export default function Cards(props){
    return(
        <div className={styles.skills}>
            <img className={styles.card_image} src={props.image} alt="" />
            <p className={styles.card_title}>{props.title}</p>
        </div>
    )
}