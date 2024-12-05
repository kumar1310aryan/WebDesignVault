function Nav() {
  return (
    <div className="w-full h-[10vh] bg-transparent mt-[2vw] pl-[5vw] pr-[5vw] text-white flex align-bottom justify-between">
      <h1 className="text-blue-400 font-extrabold scale-y-150 text-[1.6vw]">
        KANGAROO
      </h1>
      <div className="flex align-middle justify-evenly w-1/2 h-full text-[1.1vw] font-semibold scale-y-125 mt-[0.5vw]">
        <h2>Products</h2>
        <h2>User Guide</h2>
        <h2>Cart</h2>
        <h2>Order</h2>
      </div>
    </div>
  );
}

export default Nav;
