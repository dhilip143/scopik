import mark from "../assets/question mark.png";

function Faq() {
  return (
    <div className="ml-[80px]">
      <h1 className="text-[#FF8011]">#FAQs</h1>
      <h1>Frequently Asked Question &</h1>
      <h1>
        Find quick answers to the most common <br />
        questions. Browse below to get the information <br />
        you need fast.
      </h1>
      <img src={mark} alt="question" />
    </div>
  );
}

export default Faq;
