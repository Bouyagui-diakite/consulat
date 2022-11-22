import React from "react";
import { MDBFooter } from "mdb-react-ui-kit";

const Footer = () => {
  return (
    <MDBFooter bgColor="gray" className="text-center text-lg-left  ">
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)", color: "black", fontWeight: "bold", fontSize: "15px" }}
      >
        &copy; {new Date().getFullYear()} Copyright:{"  "}
        <a className="text-dark" href="https://mdbootstrap.com/">
          WWW.PGC.COM
        </a>
      </div>
    </MDBFooter>
  );
};

export default Footer;
