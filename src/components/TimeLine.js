import React from 'react';

/*class spanTech extends React.Component{
    constructor(props){
        super();
    }
    render(){
        return(
            <span>{this.props.arrayTech}a</span>
        );
    }
}*/

class project {
        constructor(id,name,description, pageLink, snippet, startDate, duration, tech){
        this.id = id;
        this.name = name;
        this.desc = description;
        this.link = pageLink;
        this.snip = snippet;
        this.startDate = startDate;
        // this.endDate = duration;
        this.duration = duration;
        this.tech = tech;

    }
    duration() {
        return Math.floor((this.endDate - this.startDate)/ (3600*24*1000)) ;
    }
};

let projectData = [
    new project(1,'Anoki Store','An online jewlery store concept.',null,require('../image/AnokiProject.png'),'12th March','80 hrs', ['c#','sql','html', 'css', 'php', 'javaScript', 'bootstrap']),
    new project(2,'Chalets and Caviar','Created a Custom Theme using WordPress, to facilitate all the needs of a Chalet\'s Online Store', 'https://github.com/amouxkin/Projects/tree/master/OpenClassrooms/Chalets-Caviar',require('../image/ChaletsProject.png'),'2nd September','100 hrs', ['html', 'css', 'php', 'javaScript', 'wordpress']),
    new project(3,'Brooklyn Film Festival','Designed a website for a client\'s film festival', null, require('../image/FilmFestivalProject.png'),'11th October','80 hrs', ['html', 'css', 'javaScript']),
    new project(4, 'Portfolio', 'The webpage you\'re looking at now',null ,require('../image/ProfolioProject.png'),'2nd December', '100 hrs', ['html','css', 'javascript', 'react'] ),
    new project(6, 'Fitness Habit Tracker', 'A fitness tracker site called Move and Groove that allows users to sign up and log activities of different kinds.', null,require('../image/Coming-Soon.jpg'),'10th December', '100 hrs', ['html','css', 'javascript', 'react', 'ruby', 'rails'] ),

];

class TimeLineElement extends React.Component{
    render(){
        let techArray = [];
        this.props.project.tech.forEach((x)=>{techArray.push(<span className="timeLine__item__tech--item">{x}</span>)});
        
        return(
            <div id={this.props.project.id} className="timeLine__grid">
                 <div className="timeLine__item__line"></div>
                 <div className="timeLine__item">
                    <img className="timeLine__item__image" alt='' src={this.props.project.snip}></img>
                    <div className="timeLine__item__heading">
                        {this.props.project.link ? (<a className="timeLine__item__heading--link" href={this.props.project.link} target="_blank" rel="noopener noreferrer">
                        <h3> {this.props.project.name}</h3></a>) : (<h3> {this.props.project.name} </h3>) }

                     
                    </div>
                    <div className="timeLine__item__tech"> {techArray}</div>
                    <div className="timeLine__item__description"> {this.props.project.desc}</div>
                 </div>
                 <div className="timeLine__item__details">
                     <span className="timeLine__item__details--date">
                     <i className="material-icons">calendar_today</i><h4>{this.props.project.startDate}</h4>
                     </span> <br/>
                     <span className="timeLine__item__details--duration">
                     <i className="material-icons">schedule</i> 
                     <h5>{ this.props.project.duration }</h5>
                     </span>
                </div>
            </div>
        );
    }
}

let timeLineElements = [];
//let dateFormat = {year: 'numeric', month: 'long', day: 'numeric' };

projectData.forEach((x) => {
    timeLineElements.push(<TimeLineElement project={x} key={x.id}></TimeLineElement>)
});

class TimeLine extends React.Component{
render(){
    return (
         <div id='project'>   
          <div className="timeLine__grid">
            <div className='timeLine__header'><h3>My Projects</h3><h3>2018</h3></div>
          </div>
         {timeLineElements}
         </div>
    );
}

}

export default TimeLine;
