var React = require('react');
var Backbone = require('backbone');
var Template = require('./template.jsx').TemplateContainer;

var HomeContainer = React.createClass({
  render: function(){
    return (
      <Template>
        <div className="row">
          <div className="col-md-12 imageContentDiv">
            <div className="imageOfMeContainer">
              <h1>Hello</h1>

              </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-12 myWorkSection">
              <div className="col-md-2 myWorkTitle">My Work</div>
              <div className="col-md-10">

                <div className="col-xs-6 col-md-4 thumb">
                    <a href="https://mcverticchio.github.io/1.2-octocats/" className="thumbnail">
                      <img src="images/octocat.png" alt="..." />
                    </a>
                </div>

                <div className="col-xs-6 col-md-4 thumb">
                    <a href="https://mcverticchio.github.io/1.4-pixel-perfect/" className="thumbnail">
                      <img src="images/surf.png" alt="..." />
                    </a>
                </div>

                <div className="col-xs-6 col-md-4 thumb">
                    <a href="https://mcverticchio.github.io/2.2-sass-bootstrap/" className="thumbnail">
                      <img src="images/skatebrd.png" alt="..." />
                    </a>
                </div>

                <div className="col-xs-6 col-md-4 thumb">
                    <a href="https://mcverticchio.github.io/4.4-Github-Recreation/" className="thumbnail">
                      <img src="images/octocat.png" alt="..." />
                    </a>
                </div>

                <div className="col-xs-6 col-md-4 thumb">
                    <a href="#" className="thumbnail">
                      <img src="images/octocat.png" alt="..." />
                    </a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </Template>
    )
  }
});

module.exports = {
  HomeContainer: HomeContainer
}

// <a href="https://mcverticchio.github.io/1.2-octocats/" className="col-md-5 project"><img src="images/octocat.png"></img></a>
// <div className="col-md-5 project"></div>
// <div className="col-md-5 project"></div>
// <div className="col-md-5 project"></div>