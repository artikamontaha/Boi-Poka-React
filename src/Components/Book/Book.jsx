import { Link } from "react-router-dom";

const Book = ({book}) => {
    const {bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing, bookId} = book
    return (
      <Link to={`/books/${bookId}`}>
      <div className="card bg-base-100 w-96 shadow-xl ">
  <figure>
    <div className="bg-[#F3F3F3] w-full m-3 rounded-xl">
    <img className="w-[250px] h-[250px] mx-auto m-3 rounded-xl"
      src={image}
      alt="Shoes" />

    </div>
  </figure>
  <div className="card-body">
    <div className="flex justify-center gap-4 ">
    {
        tags.map((tag, index) =><button key={index} className="bg-[#23BE0A0D]  text-green-600 font-bold py-1 px-6 rounded-full ">{tag}</button>)
    }

    </div>
    <h2 className="card-title">
     {bookName}
    </h2>
    <p>By: {author}</p>
    <div class="border-t-2 border-dashed"></div>
    <div className="card-actions justify-between">
      <div className="">{category}</div>
      <div className="">{rating}    <div className="rating mt-2">
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
</div>

      </div>
    </div>
  </div>
</div>   

      </Link>
 );
};

export default Book;