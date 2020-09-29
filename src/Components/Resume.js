import React, { Component } from 'react';

class Resume extends Component {

  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {

    if (this.props.data) {
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function (education) {
        return <div key={education.school}><h3>{education.school}</h3>
          <p>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function (work) {
        return <div key={work.company}><h3>{work.company}</h3>
          <p>{work.description}</p>
        </div>
      })

      var loiich = this.props.data.loiich.map(function (loiich,key) {
        return <div key={key}><h3>{loiich.company}</h3>
          <p>{loiich.description}</p>
        </div>
      })

      var skills = this.props.data.skills.map((skills) => {
        var className = 'bar-expand ' + skills.name.toLowerCase();
        return (
          <li key={skills.name}>
            <span style={{ width: skills.level, backgroundColor: this.getRandomColor() }} className={className}></span><em>{skills.name}</em>
          </li>
        )
      })
    }

    return (
      <section id="resume">

        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Tại sao lại có những website giá 1-2 triệu hoặc thấp hơn?</span></h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                {education}
              </div>
            </div>
          </div>
        </div>

        <div className="row work">

          <div className="three columns header-col">
            <h1><span>Công nghệ mà chúng tôi sử dụng.</span></h1>
          </div>

          <div className="nine columns main-col">
            {work}
          </div>
        </div>

        <div className="row work">

          <div className="three columns header-col">
            <h1><span>Lợi ích mà Webhiendai.net mang lại.</span></h1>
          </div>
          <div className="nine columns main-col">
            {loiich}
          </div>
        </div>


        <div className="row skill">

          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>

          <div className="nine columns main-col">

            <p>{skillmessage}
            </p>

            <div className="bars">
              <ul className="skills">
                {skills}
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
