import { getData } from "../apis";

const Home = () => {
    return <>Home
        <button onClick={getData}>提交</button>
    </>
}

export default Home;