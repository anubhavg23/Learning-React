// Card.jsx
function Card({ image, title, id, price }) {
  return (
    <div className="w-full max-w-xs flex flex-col rounded-xl bg-black text-white min-h-[19rem] shadow-md">
      <div>
        <img
          src={image}
          alt={title}
          className="w-full h-60 object-cover object-center rounded-t-xl"
        />
      </div>
      <div className="flex flex-col py-3 px-3 pb-6">
        <div className="flex justify-between">
          <h1 className="font-bold">{title}</h1>
          <h1 className="text-gray-300">Price</h1>
        </div>
        <div className="flex justify-between">
          <p>#{id}</p>
          <p>{price} ETH</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
