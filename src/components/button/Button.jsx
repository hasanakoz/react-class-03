import ButonStyle from "./button.module.css";

const Button = ({ btn }) => {
  return (
    <div className={ButonStyle.title}>
      <button className={ButonStyle["btn-blue"]}>{btn}</button>
    </div>
  );
};

export default Button;
