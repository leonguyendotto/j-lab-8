import React from 'react';
import axios from 'axios';

class Question extends React.Component {
    //Initialize 
    constructor(props){
        super(props);
        this.state = {
            category: null,
            question: null,
            answer: null,
            revealed: false
        };
    }
    //Render - Retrive Data that we want - here is the API Fetch
    componentDidMount(){
        axios({
            url:"https://jservice.io/api/random",
            method: "GET",
            count : 1
        })
        .then ((result) => {
            //After store the retrived data to by setState
            this.setState({
                category: result.data[0].category.title,
                question: result.data[0].question,
                answer: result.data[0].answer
            });
            console.log(result)
        });
    }

    handleClickOn(){
        this.setState({
            revealed: true
        });
    }


    render (){
        const{category, question, answer,revealed} = this.state;
        let showAnswer;
        if (revealed){
            showAnswer= <div>Answer: {answer}</div>
        } else {
            showAnswer=<div></div>
        }
        return (
            <div>
                <div>
                  Category: {category}
                </div>
                <h2> 
                  Question: {question}
                </h2>
                <div>
                  {showAnswer}
                </div>
                <button type="button"  onClick={() => this.handleClickOn()} >Reveal Answer</button>
            </div>
      ); 
    }
}



export default Question;