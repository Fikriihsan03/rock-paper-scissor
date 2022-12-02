import { ReactNode } from "react";
// import Navbar from "./Navbar";

interface IProps{
    children? : ReactNode
}

const Layout = ({children}:IProps) => {
    return (
    <div>
        {/* <nav><Navbar/></nav> */}
        <section>
            {children}
        </section>
    </div> );
}
 
export default Layout;<div>
</div>