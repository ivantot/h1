import ShowMeanings from "./ShowMeanings";
import "./ShowPrettyWord.css";

const ShowPrettyWord = (props) => {
  const prettyWord = props.data;
  return (
    <div>
      <span className="word">{prettyWord.word}</span> —{" "}
      <span className="word_phonetic">/{prettyWord.phonetic}/</span>
      <br />
      <span>
        <u>Origin:</u> {prettyWord.origin}
      </span>
      <ol>
        <ShowMeanings meanings={prettyWord} />
      </ol>
    </div>
  );
};

export default ShowPrettyWord;
