import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  .navbar {\n    background: #FFF;\n    padding: 12px 60px 12px 30px;\n    box-shadow: 0 1px 3px rgba(0,0,0,0.05);\n    z-index: 100;\n  }\n  .navbar-nav .nav-item {\n    margin-left: 10px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-weight: 600;\n    font-size: 0.9em;\n    .nav-link {\n      height: 36px;\n    }\n  }\n  .sg-notification{\n    img{\n      width:20px; \n    }\n  }\n  .sg-logout{\n    \n    img{\n      margin-left:6px;\n        width:40px; \n    }\n  }\n  .nav-item{\n    width:40px;\n    .sg-avatar-user{\n      img{\n        margin-top:-3px;\n        margin-right:6px;\n        width:30px!important; \n      }\n    }\n    .sg-notification{\n      img{\n        width:20px; \n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import styled from "react-emotion";
export default styled('div')(_templateObject());