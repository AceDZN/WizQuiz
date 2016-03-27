import React, {Component} from 'react';
import ScoreBox from './quiz/ScoreBox.jsx';
import Results from './quiz/Results.jsx';
import QuestionList from './quiz/QuestionList.jsx';
import AceLogo from './AceLogo.jsx';
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      questions:[
        {
          id:1,
          text: "What kind of animal is the largest living creature on Earth",
          choices:[
            {id: 'a', text:"Elephant"},
            {id: 'b', text:"Siberian tiger"},
            {id: 'c', text:"Whale"}
          ],
          correct: 'c'
        },
        {
          id:2,
          text: "What is the national animal of Albania?",
          choices:[
            {id: 'a', text:"Eel fish"},
            {id: 'b', text:"Golden eagle"},
            {id: 'c', text:"Whale"}
          ],
          correct: 'b'
        },
        {
          id:3,
          text: "Which animal is on the golden Flemish flag?",
          choices:[
            {id: 'a', text:"Lion"},
            {id: 'b', text:"Dog"},
            {id: 'c', text:"Eagle"}
          ],
          correct: 'a'
        },
        {
          id:4,
          text: "From which cactus is tequila made?",
          choices:[
            {id: 'a', text:"Aloe-Vera"},
            {id: 'b', text:"San Pedro"},
            {id: 'c', text:"Agave"}
          ],
          correct: 'c'
        }
      ],
      score: 0,
      current: 1
    }
  }
  setCurrent(current){
    this.setState({current});
  }
  setScore(score){
    this.setState({score});
  }
  render(){
    var results, scorebox;
    if(this.state.current > this.state.questions.length){
      scorebox = '';
      results = <Results {...this.state} />;
    } else {
      scorebox = <ScoreBox {...this.state} />;
      results = '';
    }
    return (<div>
      {scorebox}
      {results}
      <QuestionList {...this.state} setCurrent={this.setCurrent.bind(this)} setScore={this.setScore.bind(this)} />
      <AceLogo />
    </div>);
  }
}

export default App
