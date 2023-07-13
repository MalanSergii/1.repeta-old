import PropTypes from "prop-types";
import { Title } from "./PageTitle.styled";

// import css from "./PageTitle.module.css";

const PageTitle = ({ text }) => {
    return (
        <Title
        // className={css.title}
        >
            {text}
        </Title>
    );
};

export default PageTitle;

PageTitle.propTypes = {
    text: PropTypes.string.isRequired,
};
