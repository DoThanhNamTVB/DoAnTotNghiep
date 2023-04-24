import './Button.scss';
import { Link } from 'react-router-dom';

function Button({ to, primary, rectangle, circle, defaultbtn, children, onClick }) {
    let Comp = 'button';

    const props = {
        onClick,
    };
    if (to) {
        props.to = to;
        Comp = Link;
    }

    let classes = 'btn-button';

    if (primary) {
        classes += ' primary';
    }
    if (circle) {
        classes += ' circle';
    }
    if (rectangle) {
        classes += ' rectangle';
    }
    if (defaultbtn) {
        classes += ' defaultbtn';
    }

    return (
        <Comp className={classes} {...props}>
            {children}
        </Comp>
    );
}

export default Button;
