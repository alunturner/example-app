const Footer = (props) => {
  return (
    <ul>
      {props.address.map((line, index) => (
        <li key={index}>{line}</li>
      ))}
    </ul>
  );
};

export default Footer;
