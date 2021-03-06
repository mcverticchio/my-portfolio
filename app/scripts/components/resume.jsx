var React = require('react');
var Backbone = require('backbone');
var Template = require('./template.jsx').TemplateContainer;

var ResumeContainer = React.createClass({
  render: function(){
    return (
      <Template>
        <div className="container resumeSection">
          <div className="resumeTitle">Resume</div>
          <div className="borderBottom col-md-12 col-sm-12 col-xs-12"></div>
          <div className="row">
            <div className="col-md-12 educationSection">
              <h3>Education</h3>
              <div>
                <h4>The Iron Yard Academy<span className="year">2016</span></h4>
                <h5>Greenville, SC</h5>
                <ul>
                  <li><span>Front-End Development/JavaScript</span></li>
                </ul>
              </div>
              <div>
                <h4>University of South Carolina<span className="year">2010-2014</span></h4>
                <h5>Columbia, SC</h5>
                <ul>
                  <li><span>Bachelor of Science in Biology, cum laude</span></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12 skillSection">
              <h3>Dev. Skills & Experience</h3>
              <h4>The Iron Yard-- Greenville, SC</h4>
              <h5>Front End Engineering Student: Fall 2016</h5>
              <p>The Iron Yard is a 12-week front-end development program that teaches the latest technologies and best practices.
                Students complete daily assignments that test their knowledge and allow for development and refining of programming skills. </p>

              <div className="col-md-4 skill">
                <h4>Languages</h4>
                  <span><i className="devicon-html5-plain-wordmark colored"></i></span>
                  <span><i className="devicon-css3-plain-wordmark colored"></i></span>
                  <span><i className="devicon-javascript-plain colored"></i></span>
                  <br></br>
                  <span><i className="devicon-jquery-plain-wordmark colored"></i></span>
                  <span><i className="devicon-python-plain-wordmark colored"></i></span>
              </div>

              <div className="col-md-4 skill">
                <h4>Frameworks</h4>
                  <span><i className="devicon-backbonejs-plain-wordmark colored"></i></span>
                  <span><i className="devicon-react-original-wordmark colored"></i></span>
                  <span><i className="devicon-django-plain colored"></i></span>
              </div>

              <div className="col-md-4 skill">
                <h4>Tools</h4>
                      <i className="devicon-github-plain colored"></i>
                      <i className="devicon-git-plain-wordmark colored"></i>
                      <i className="devicon-bootstrap-plain-wordmark colored"></i>
                      <i className="devicon-sass-original colored"></i>
                        <br></br>
                      <i className="devicon-heroku-original-wordmark colored"></i>
                      <i className="devicon-trello-plain-wordmark colored"></i>
                      <i className="devicon-atom-original-wordmark colored"></i>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12 workSection">
              <h3>Work Experience</h3>
              <div>
                <h4>Medical Scribe <span className="year">01.2016 - 09.2016</span></h4>
                  <h5>Scribe America</h5>
                  <ul>
                    <li><span>Chart documentation (HPI, ROS, Physical Examination)</span></li>
                    <li><span>Operated and navigated the Athena software system extensively</span></li>
                    <li><span>Located and reviewed tests/labwork</span></li>
                    <li><span>Observed and fostered relationships with doctors in different specialties (GI, Internal Medicine, Family Practice)</span></li>
                  </ul>
              </div>
              <div>
                <h4>Patient Care Associate <span className="year">11.2014 - 12.2015</span></h4>
                  <h5>Spartanburg Regional Hospital</h5>
                    <ul>
                      <li><span>Recorded vital signs, EKG and heart monitor operation</span></li>
                      <li><span>Ambulated patients and assisted them with hygienic needs</span></li>
                      <li><span>Assisted staff during assessments, wound care, medicating, transport, catheterization, and other patient needs as requested</span></li>
                    </ul>
              </div>
              <div>
                <h4>Administrative Assistant <span className="year">09.2014 - 04.2015</span></h4>
                  <h5>Magnolia Counseling Associates</h5>
                    <ul>
                      <li><span>Filed paperwork and kept track of office inventory</span></li>
                      <li><span>Adhered to confidentiality protocols</span></li>
                      <li><span>Assisted therapists with any other duties or errands</span></li>
                    </ul>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12 honorSection">
              <h3>Honors/Awards</h3>
              <ul>
                <li><span>Palmetto Fellows Scholarship Recipient</span></li>
                <li><span>Dean’s Scholarship Recipient</span></li>
                <li><span>USC Dean’s List Recipient</span></li>
                <li><span>USC President’s List Recipient</span></li>
              </ul>
            </div>
          </div>

        </div>

        <div className="container resumePDF">
          <div className="row resumeHolder">
            <div>
              <a href="documents/Resume2016.pdf" target="_blank">
                <div className="col-sm-12 col-xs-12 contact">
                  <i className="fa fa-file pdfFile" aria-hidden="true"></i>
                  <span>Download PDF</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </Template>
    )
  }
});

module.exports = {
  ResumeContainer: ResumeContainer
}
