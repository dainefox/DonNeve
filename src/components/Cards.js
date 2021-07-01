import React from "react";
import Card from "./Card";

import image1 from "../assets/image1.jpg";

const TagsInput = (props) => {
  const [tags, setTags] = React.useState(props.tags);
  const removeTags = (index) => {
    setTags((prevState) => prevState.filter((tag, i) => i !== index));
  };
  const addTags = (event) => {
    if (event.target.value !== "") {
      setTags([...tags, event.target.value]);
      props.selectedTags([...tags, event.target.value]);
      event.target.value = "";
    }
  };
  return (
    <div className="tags-input">
      <ul id="tags">
        {tags.map((tag, index) => (
          <div className="tag">
            <span>{tag}</span>
            <button onClick={() => removeTags(index)}>x</button>
          </div>
        ))}
      </ul>
      <input
        type="text"
        onKeyUp={(event) => (event.key === "Enter" ? addTags(event) : null)}
        placeholder="nueva tag"
      />
    </div>
  );
};

const selectedTags = (tags) => {
  console.log(tags);
};

const cards = [
  {
    id: 1,
    title: "Jacobo",
    image: image1,
    lectura: <TagsInput selectedTags={selectedTags} tags={[]} />,
  },
  {
    id: 2,
    title: "Jacobo",
    image: image1,
    lectura: <TagsInput selectedTags={selectedTags} tags={[]} />,
  },

  {
    id: 3,
    title: "Jacobo",
    image: image1,
    lectura: <TagsInput selectedTags={selectedTags} tags={[]} />,
  },
];

function Cards() {
  return (
    <div className="container d-flex justify-content-center aling-items-center h-100">
      <div className="row">
        {cards.map((card) => (
          <div className="col-md-4" key={card.id}>
            <Card
              title={card.title}
              imageSource={card.image}
              lectura={card.lectura}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
