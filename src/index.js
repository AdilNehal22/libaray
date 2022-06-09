import React from "react";
import ReactDom from "react-dom";
import './index.css'
import data from './data.json';

const Books = data;

export default function Greeting() {
  return (
    //you are passing the params as the func Book takes props
    //for this pass as a 'children' in prop pops-children
    <section className="bookLists">
      {Books.map((obj) => {
        return <Book Imag={obj.Img} titleBook={obj.titleBook} Author={obj.Author} />
      })}
    </section>
  );
}

const Book = (props) => {
  console.log('props>>>>>>', props);
  const { Imag, titleBook, Author } = props;
  return (
    <article className="book">
      <img src='https://encrypted-tbn1.gstatic.com/imagesq=tbn:ANd9GcRlGbd-cBXub95mkibUSCRoH8v6hw9VvGXVM8ads0R0kHccRs1t' />
      <img src=''/>
      <h1>{titleBook}</h1>
      <p>{Author}</p>
    </article>
  );
}



ReactDom.render(<Greeting />, document.getElementById('root'));