export function setBgColor(props) {
    switch (props.type) {
        case "free":
            return "var(--free)";
        case "paid":
            return "var(--paid)";
        case "vip":
            return "var(--vip)";
        default:
            return "#000";
    }
}
