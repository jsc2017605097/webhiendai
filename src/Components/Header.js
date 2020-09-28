import React, { Component } from 'react';
import ParticlesBg  from "particles-bg";

class Header extends Component {
  render() {

    if(this.props.data){
       var project = this.props.data.project;
       var github = this.props.data.github;
      var name = this.props.data.name;
      var description= this.props.data.description;
      // var networks= this.props.data.social.map(function(network){
      //   return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      // })
    }

    return (
      <header id="home">
      <ParticlesBg type="circle" bg={true} />
      <nav id="nav-wrap">
         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Trang chủ</a></li>
            <li><a className="smoothscroll" href="#about">Về tôi</a></li>
	         <li><a className="smoothscroll" href="#resume">Công nghệ sử dụng</a></li>
            <li><a className="smoothscroll" href="#portfolio">Một số mẫu website</a></li>
            <li><a className="smoothscroll" href="#contact">Liên hệ</a></li>
         </ul>
      </nav>

      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">{name}</h1>
            <h3>{description}.</h3>
            <hr />
            <ul className="social">
               <a  href="#portfolio" className="button smoothscroll btn project-btn"><i className="fa fa-book"></i>Mẫu website</a>
               <a href="#contact" className="button smoothscroll btn github-btn"><i className="fa fa-phone"></i>Liên hệ ngay</a>
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
