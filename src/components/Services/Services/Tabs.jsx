const Tabs = () => {
  return (
    <div>
      <div>
        <div className="tabs flex justify-around p-5">
          <button className="tab tab-bordered">Cavity Protection</button>
          <button className="tab tab-bordered tab-active">
            Cosmetic Dentisty
          </button>
          <button className="tab tab-bordered">Oral Surgery</button>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
