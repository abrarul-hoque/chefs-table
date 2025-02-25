import './Banner.css';
// import bannerImg from '../../assets/banner.png';
// import img from '../../assets/banner.png';

const Banner = () => {

    return (
        <div>
            <div className="text-white  text-center p-6 lg:p-[140px] w-full bg-no-repeat rounded-3xl" style={{ backgroundImage: 'url(https://i.ibb.co/Tgvy2Vf/banner.png' }}>
                <h1 className="mb-6 font-bold text-[26px] lg:text-[52px]">Discover an exceptional cooking class tailored for you!</h1>
                <p className="text-base mb-10">I am a self-taught home cook, honing my culinary skills through countless hours spent experimenting in my kitchen, meticulously studying recipe books and mastering various techniques through trial and error.</p>
                <div className="flex justify-center gap-5">
                    <button className="btn btn-chef-primary rounded-full ">Explore Now</button>
                    <button className="btn rounded-full bg-transparent text-white hover:text-black border-2 hover:bg-white" >Our Feedback</button>
                </div>
            </div>
        </div >
    );
};

export default Banner;