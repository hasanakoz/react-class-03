import Button from "../button/Button";
import CardStyle from "./card.module.css";

const Card = ({ language, btn, img }) => {
  //   const {language, btn, img} = props;
  return (
    <div>
      <h1 className={CardStyle.title}>{language} </h1>
      <img className={CardStyle["images"]} src={img} alt="img" />
      <Button btn={btn} />
    </div>
  );
};

export default Card;
