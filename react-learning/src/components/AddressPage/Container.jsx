const Container = () => {
  return (
    <div className="flex flex-col m-4 md:w-5/12 ">
      <div className="flex justify-between">
        <div className="flex flex-row">
          <h2 className="text-med p-1 ">Huzefa Bagwala</h2>

          <button className="border border-green-200 text-xs p-2 text-green-500">
            <a href="#"> HOME</a>
          </button>
        </div>

        <div className="flex flex-row ">
          <a href="#" className="text-black-500 text-xs text-end p-1 m-1">
            EDIT
          </a>
          <a href="#" className="text-red-500 text-xs text-end p-1 m-1">
            Remove
          </a>
        </div>
      </div>

      <p className="text-xs p-1">1131 Dusty Townline,Jacksonville,TX 40322</p>

      <p className="text-xs p-1">Contact : (936)361-0310</p>

      <div>
        <div className="flex flex-col m-4 md:w-5/12">
          <div className="flex justify-between">
            <div className="flex flex-row">
              <h3 className="text-xl p-1 ">IndiaTech</h3>

              <button className="border border-green-200 text-xs p-2 text-green-500">
                <a href="#"> HOME</a>
              </button>
            </div>
            <div className="flex flex-row">
              <a href="#" className="text-black-300 text-xs text-end px-2 m-2">
                EDIT
              </a>
              <a href="#" className="text-red-500 text-xs text-end px-2 m-2">
                Remove
              </a>
            </div>
          </div>

          <p className="text-xs p-1">1219 Harvest Path,Jacksonville,TX 40322</p>

          <p className="text-xs p-1">Contact : (936)361-0310</p>
        </div>
      </div>
    </div>
  );
};
export default Container;
