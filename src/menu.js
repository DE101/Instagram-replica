import './App.css';
export default function Menu(props) {
    return (
        <div class="nav-item">
            <span className="material-symbols-outlined icon">{props.icon}</span>
            <span className="nav-text">{props.text}</span>
        </div>
    )
}