import React from "react";

const Title = (props) => {
   console.log(props);

   return <p className="text-danger fs-1">{props.title}</p>;
};

export default Title;
