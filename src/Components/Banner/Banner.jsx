import BannerImg from '../../assets/books.jpg'
const Banner = () => {
    return (
<div className="hero bg-base-200 py-40 rounded-xl">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={BannerImg}
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Books to freshen up <br /> your bookshelf</h1>
      <button className="btn bg-[#23BE0A] my-5 px-10 text-white">View The List</button>
    </div>
  </div>
</div>    );
};

export default Banner;