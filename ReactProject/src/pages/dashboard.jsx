import { Outlet,Link } from "react-router-dom";

function Dashboard () {
    return (
        <>
        <nav>
            <ul>
                <li>
                    <Link to = "/">Home</Link>
                </li>
                <li>
                    <Link to = "/blogs">Blogs</Link>
                </li>
                <li>
                    <Link to = "/contact">Contact</Link>
                </li>
                <li>
                    <Link to = "*">No Page</Link>
                </li>
            </ul>
        </nav>
        <Outlet/>
        </>
    )
}

export default Dashboard;