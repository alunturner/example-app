import React from "react";

function CustomerProfile(props) {
  const { id } = props;

  React.useEffect(() => {
    if (props.id !== "") {
      fetch(`https://cyf-react.glitch.me/customers/${props.id}`)
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((e) => console.error(e));
    }
  }, [props.id]);

  return id ? <h2>CUSTOMER {id} PROFILE</h2> : null;
}

export default CustomerProfile;
