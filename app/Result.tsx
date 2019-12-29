import React from 'react'
import { Row, Col } from 'react-bootstrap'
import styled from 'styled-components'

interface IProps {
  visible?: boolean,
  raised: number,
  goal?: number
}

const Goal = styled.div`
  font-size: 3rem;
  text-align: right;
  color: #000;
  @media only screen and (max-width: 640px) {
    text-align: center;
  }
`

const ProgressBar = styled.div`
  width: 100%;
  height: 20px;
  background: #c7c7c7;
  border-radius: 10px;
  float: left;
  overflow: hidden;
`

const ProgressBarDisplay = styled.div`
  float: left;
  transition: width 6s;
  width: 0%;
  height: 20px;
  background: #FF5D50;
  z-index: 10;
`

const GoalStat = styled.div`
  width: 25%;
  padding: 10px;
  float: left;
  margin: 0;
  color: #000;
  @media only screen and (max-width: 640px) {
    width: 50%;
    text-align: center;
  }
`
const GoalNumber = styled.span`
  font-weight: bold;
  display: block;
`

const GoalLabel = styled.span`
  display: block;
`

const Result = (props: IProps) => {
  let percent = ((props.raised/(props.goal || 500)) * 100).toFixed(2) + '%';
  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  const firstDate = new Date().getTime();
  // months start at 0...
  const secondDate = new Date(2020,4,16).getTime();
  const diffDays = Math.ceil(Math.abs((firstDate - secondDate) / oneDay));


  return props.visible ? (
  <Row>
    <Col lg='12' className="text-center">
      <Goal>Goal: ${props.goal}.00</Goal>
      <ProgressBar> 
        <ProgressBarDisplay style={{width: percent}} />
      </ProgressBar>
      <GoalStat>
        <GoalNumber>${props.raised}</GoalNumber>
        <GoalLabel>Raised</GoalLabel>
      </GoalStat>
      <GoalStat>
        <GoalNumber>{percent}</GoalNumber>
        <GoalLabel>Percent Of Goal</GoalLabel>
      </GoalStat>
      <GoalStat>
        <GoalNumber>{diffDays}</GoalNumber>
        <GoalLabel>Days to go</GoalLabel>
      </GoalStat>
      
      

    </Col>
  </Row>
  ) : null;
}

export default Result;