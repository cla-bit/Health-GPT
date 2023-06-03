import "../styles/disease.css";

const Disease = () => {
  return (
    <>
      <main className="disease">
        <h2>Ask your question</h2>
        <textarea
          name=""
          id=""
          cols="30"
          rows="12"
          placeholder="Type here"
        ></textarea>
        <div>
          <button className="disease-btn">Submit</button>
        </div>
      </main>
    </>
  );
};

export default Disease;
