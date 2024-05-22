


const NavBar = () =>{
    return(
        <div className="row">
            <nav className="navbar navbar-dark bg-dark fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand fs-3" href="#">Vishnu Upadya</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Contents</h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item" data-bs-dismiss="offcanvas">
                                    <a className="nav-link" href="#about">About Me</a>
                                    <a className="nav-link" href="#education">Education</a>
                                    <a className="nav-link" href="#academic-projects">Academic Projects</a>
                                    <a className="nav-link" href="#personal-projects">Personal Projects</a>
                                    <a className="nav-link" href="#skills">Skills</a>
                                    <a className="nav-link" href="#internship">Internship Experience</a>
                                    <a className="nav-link" href="#courses">Courses / Certifications</a>
                                    <a className="nav-link" href="#contact">Contact</a>

                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default NavBar;