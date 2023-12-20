const Book = ({ id, img, title, author, getBook }) => {
  // console.log(image);

  return (
    <article className="book">
      <img src={img} alt={title} className="img" />
      <p>{title}</p>
      <button>click</button>
      <p>{author}</p>
      <p className="id">#{id}</p>
    </article>
  );
};

export default Book;
