import PropTypes from "prop-types";

const Button = (props) => {
  let button = (
    <a className="btn-primary" href={props.link}>
      {props.title}
    </a>
  );

  if (props.type == "second") {
    button = (
      <a className="btn-second" href={props.link}>
        {props.title}
      </a>
    );
  }

  return <div>{button}</div>;
};

export default Button;
