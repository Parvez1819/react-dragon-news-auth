import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import RightNav from "../../components/layout-component/RightNav";
import Navbar from "../../components/Navbar";


const News = () => {
    const { id } = useParams();
    console.log(id)
    return (
        <div className="w-11/12 mx-auto py-2">
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4">
                <div className="col-span-3">
                    <h2 className="text-xl font-poppins">News Details</h2>

                </div>
                <div className="col-span-1">
                    <RightNav></RightNav>
                </div>
            </div>
        </div>
    );
};

export default News;