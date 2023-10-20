import { Link } from "react-router-dom";

const Landing = () => {
    return (
        <div>
            <h1>Welcome to my individual project</h1>
            <button>
                {/* //!<Link to='/login'>LOGEA</Link> */}
                <Link to='/home'>HOME</Link>
            </button>

        </div>
    )
}
export default Landing;