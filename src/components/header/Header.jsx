import { Link } from "react-router-dom";
import Logo_1 from "../../assets/images/logo/logo-2.png"
import Logo_3 from "../../assets/images/logo/logo-3.png"

const Header = () => {
    return (
        <>
            <header className="pt-3">
                <div className="container">
                    <div className="flex items-center justify-between p-3">
                        <div className="w-3/12">
                            <div className="logo">
                                <a href="#">
                                    <img src={Logo_1} alt="" className="w-3/12 inline-block" />
                                </a>
                            </div>
                        </div>
                        <div className="w-6/12 flex items-center justify-center">
                            <div className="heading text-center flex items-center justify-center">
                                <h1 className="h1">Employee Form</h1>
                            </div>
                        </div>
                        <div className="w-3/12 flex items-center justify-end">
                            <div className="heading text-center flex items-center justify-center">
                                <Link to="/employeeform" className="px-3 py-2 bg-[blue] rounded-lg text-white me-2"><i className="fa-solid fa-user-plus"></i></Link>
                                <Link to="/Datashow" className="px-3 py-2 bg-[blue] rounded-lg text-white me-2"><i className="fa-solid fa-users"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;