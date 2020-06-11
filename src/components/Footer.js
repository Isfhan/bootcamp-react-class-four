import React from 'react';

function Footer(props) {
    return (

        <div className="footer bg-dark">
            Copyright © {props.copyright} All Rights Reserved by {props.founder}.
        </div>


    )
}

export default Footer;