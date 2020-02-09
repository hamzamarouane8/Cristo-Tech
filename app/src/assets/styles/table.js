import styled from "styled-components";

export const TableStyle = styled('div')`
.sg-table {
	margin-top: 40px;
	.ui.pagination.menu {
		float: right;
	}
	.table-content {
		box-shadow: 0 2px 20px rgba(0, 0, 0, 0.025);
	}
}
.positive{
    color: #4ad991
  }
  .negative{
    color: #e9041e
  }
  .status-progress{
    font-size:12px;
    color: #fff;
    width:80px;
    padding:8px 10px 8px 10px;
    background:#f5930d;
    border-radius : 6px;
  }
  .status-done{
    font-size:12px;
    color: #fff;
    width:80px;
    padding:8px 10px 8px 10px;
    background:#0fbe74;
    border-radius : 6px;
  }
.action.link{
.ui.button{
 background:none;
 }
}
.widget-title{
  margin-bottom:16px;
  color:#010035;
  font-size:18px;
  font-weight:700;
}
.table-container{
  background: #FFF;
	border-radius: 6px;
	box-shadow: 0 2px 20px rgba(0, 0, 0, 0.025);
  padding-bottom:30px;
}
.ui.text{
  display:block;
  text-align:center;
  
  
  }
.ui.table{
  box-shadow:none;
  border-bottom:1px solid #ececee;
  
}

.ui.table thead th {
	background: #ececee;
	color: #6d6d80;
	border: 0;
		font-weight:600;
	font-size: 14px!important;
}

.ui.table tr:last-child {
 border-bottom:1px solid red!important; 
 
 }
.ui.table tr{
	border: 0;
	font-size: 15px;
	font-weight: 600;
	color: #000000;
}

.actions{
  margin-left:30px;
  margin-right:30px;
}

.ui.button {
	color: #FFF;
	background: #e9041e;
	font-weight: 600;
	padding: 16px 25px 16px 25px;
	text-transform: uppercase;
	letter-spacing: 1px;
	font-size: 12px;
	box-shadow: 0 10px 30px 0 rgba(233, 4, 30, 0.2);
	&:hover,
	&:active,
	&:focus {
		background: #e9041e;
	}
}
.ui.button{
border-radius:0px!important;
border-bottom: 1px solid #2676E3;
color:#2676E3;
background:none;
box-shadow:none;
margin-top:-10px;
letter-spacing: 0px;
text-transform: lowercase;
::first-letter{
text-transform: uppercase;
}
float:right;
padding:0px;
&:hover, &:active, &:focus{
        font-weight:700;
        background:none!important;
      } 
}
@media(max-width: 425px){
  .ui.table thead th {
    background: #ececee;
    color: #6d6d80;
    border: 0;
    font-weight:700;
    font-size: 0.55em!important;
  }
  
  .ui.table tr:last-child {
   border-bottom:1px solid red!important; 
   }
   
  .ui.table td {
    font-size: 0.6em!important;
    border-bottom: 0;
    padding: 10px 10px !important;
}
}
`

