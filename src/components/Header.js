import React from 'react';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/" style={{ textDecoration: "none", color: "#f2ff00", fontSize: "30px" }}>Employee Data</a>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="./Employee.js" style={{border: '2px dashed white', marginLeft: '100px', fontSize: "21px"}}>Create/Update Employee <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="./EmployeeList.js" style={{border: '2px dashed white', marginLeft: '100px', fontSize: "21px"}}>List Employee <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="./FindEmployee.js" style={{border: '2px dashed white', marginLeft: '100px', fontSize: "21px"}}> Find Employee <span className="sr-only">(current)</span></a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;
