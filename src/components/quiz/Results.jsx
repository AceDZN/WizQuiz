import React, {Component} from 'react';
class Results extends Component{

  render(){
    var percent = (this.props.score / this.props.questions.length * 100);
    var message;
    if(percent > 80){
      message = "Awesome Job"
    } else if (percent<80 && percent>60){
      message = "You did OK"
    } else {
      message = "You Suck"
    }
    return (
      <div className="well">
        <h4>You got {this.props.score} out of {this.props.questions.length} corrent</h4>
        <h1>
          {percent}% - {message}
        </h1>
        <hr />
        <a href="/app">Take the quiz again</a>
      </div>
    )
  }
}

export default Results
