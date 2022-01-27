import "./Button.css";

const Button = ({ className, value, onClick }) => {
    return (
        <button className={className} onClick={onclick}>
            {value}
        </button>
    );
};

export default Button;