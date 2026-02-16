import colors from "./color";
//import "./header.css";

export default function Header(){
    return (
        <div id="headerContainer" style={{ backgroundColor: `${colors.primary}`, color: `${colors.background}` }}>
            <span>瑪英資訊統整網</span>
        </div>
    )
}