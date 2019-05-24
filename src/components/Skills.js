import React from 'react';

class Skill {
    constructor(skillName, skillLevel, skillClass){
        this.name = skillName;
        this.level = skillLevel;
        this.class = skillClass;
    }
}

class Skills extends  React.Component {
    render(){
        const skillArray = [
            new Skill('Bootstrap', 10, 'devicon-bootstrap-plain'), 
            new Skill('C Sharp', 7, 'devicon-csharp-plain-wordmark'),
            new Skill('CSS', 9, 'devicon-css3-plain'),
            new Skill('Dot Net', 7, 'devicon-dot-net-plain'),
            new Skill('HTML', 10, 'devicon-html5-plain'),
            new Skill('Javascript', 8, 'devicon-javascript-plain'),
            new Skill('JQuery', 7, 'devicon-jquery-plain'),
            new Skill('MySQL', 7, 'devicon-mysql-plain'),
            new Skill('PHP', 8, 'devicon-php-plain'),
            new Skill('React', 5, 'devicon-react-original'),
            new Skill('Ruby', 4, 'devicon-ruby-plain'),
            new Skill('Wordpress', 8, 'devicon-wordpress-plain')
        ];
        const skillsSpan = [];
        skillArray.forEach(skill => {
            skillsSpan.push(
            <span>
                <i className={skill.class}></i>
                <br/>
                <p className="skill__grid__name">{skill.name}</p>
                <div className="skill__level">
                    <div className={"skill__level__bar flex--"+ skill.level} >
                    </div>
                    <div className={"skill__level__negativebar flex--"+ (10 - skill.level)} >
                    </div>
                </div>
            </span>
            );
        });
        return(
        <div id='skills'>
        <h2>
            My Skills
        </h2>
        <div className="skill__grid">
        {skillsSpan}
        </div>
        </div>
        );
    }
}

export default Skills;