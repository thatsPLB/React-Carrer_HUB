import Banner from "../Banner/Banner";
import CategoryList from "../CategoryList/CategoryList";
import FeaturredJobs from "../FeaturedJobs/FeaturedJobs";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CategoryList></CategoryList>
            <FeaturredJobs></FeaturredJobs>
        </div>
    );
};

export default Home;