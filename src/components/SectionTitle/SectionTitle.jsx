const SectionTitle = ({ subHeading, heading }) => {
  return (
    <div className="mx-auto text-center my-9 md:w-4/12">
      <p className="text-yellow-400 mb-2">--- {subHeading} ---</p>
      <h3 className="text-4xl uppercase border-y-4 py-4">{heading}</h3>
    </div>
  );
};

export default SectionTitle;
