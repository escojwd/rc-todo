import './Button.css';

function Button({ btnName, action, btnStyle }) {
    return <button onClick={action} className={btnStyle}>{btnName}</button>
}

export default Button;