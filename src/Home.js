import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary bg-dark">
                <div class="container-fluid">
                    <NavLink to='/'>
                    <a class="navbar-brand" href="#">Navbar</a>
                    </NavLink>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                               <NavLink to="/about">
                               <a class="nav-link active" aria-current="page" href="#">About</a>
                               </NavLink>
                            </li>
                            <li class="nav-item">
                               <NavLink to='/contact'>
                               <a class="nav-link active" aria-current="page" href="#">Contact</a>
                               </NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink to="/profile">
                                    <a class="nav-link active" aria-current="page" href="#">Profile</a>
                                </NavLink>
                            </li>

                        </ul>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>

        </div>
        <Outlet />
        </>
    )
}

export default Home
