import React, {Component} from 'react';
class Question extends Component{
  onChange(e){
    e.preventDefault();
    const {setCurrent, setScore, question} = this.props;
    let selected = e.target.value;

    if(selected == question.correct){
      setScore(this.props.score+1);
    }
    setCurrent(this.props.current+1);
  }
  render(){
    const {question} = this.props;

    return (
      <div className="well">
        <h3>{question.text}</h3>
        <hr />
        <ul className="list-group">
          {
            question.choices.map(choice=>{
              return (
                <li className="list-group-item"  key={choice.id}>
                  {choice.id}
                   <input type="radio" onChange={this.onChange.bind(this)} id={question.id+"_"+choice.id} name={question.id} value={choice.id} />
                   <label htmlFor={question.id+"_"+choice.id}> {choice.text}</label>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }

}

export default Question
