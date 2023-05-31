const SectionTitle = ({ title, subTitle }) => {
  return (
    <div className="text-center space-y-2 max-w-md mx-auto py-5">
      <h3 className="primary-text">{subTitle}</h3>
      <h1 className="text-3xl font-bold ">{title}</h1>
    </div>
  );
};

export default SectionTitle;
