
import {Container,Row,Col} from 'react-bootstrap';
import React, { Component } from 'react'
import styled from 'styled-components';
import {close} from 'react-icons-kit/ikons/close'
import { Icon } from 'react-icons-kit';


const Styles = styled.div`
.tc-notes-wrapper {
    .new-note-btn {
      width: 200px;
      display: block;
      margin: 0 auto 20px;
      background-color: #FFF;
      padding: 10px 32px;
      border: 1px solid #e0e0e0;
      font-size: 26px;
      outline: 0;
      transition: all 0.3s;
      cursor: pointer;
      font-family: 'Caveat', cursive;
  
      &:hover {
        box-shadow: 0 5px 7px rgba(0, 0, 0, 0.1);
      }
  
      &:active {
        position: relative;
        top: 1px;
      }
    }
  
    .tc-notes {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      margin: 0 auto;
  
      .tc-note {
        background-color: #f0c806;
        border-radius: 8px;
        width: 280px;
        margin: 0 10px 20px;
        box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.2);
        transition: all 0.5s;
        cursor: pointer;
        font-family: 'Caveat', cursive;
  
        .tc-note-header {
          padding: 10px 16px 0;
  
          .tc-note-close {
            display: inline-block;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            line-height: 24px;
            text-align: center;
            transition: all 0.3s;
  
            &:hover {
              background-color: rgba(0, 0, 0, 0.1);
            }
  
            &:focus {
              box-shadow: inset 2px 3px 0px rgba(0, 0, 0, 0.8);
            }
          }
  
          .tc-note-close {
            float: right;
          }
        }
  
        .tc-note-title,
        .tc-note-body {
          outline: 0;
        }
  
        .tc-note-title {
          font-size: 18px;
          padding: 10px 16px;
          font-weight: bold;
        }
  
        .tc-note-body {
          font-size: 15px;
          padding: 10px 16px 16px;
        }
  
        &:hover {
          box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.3);
        }
      }
    }
  }
`;


export default class StickyNotes extends Component {
    render() {
        return (
            <div>
            <Styles>
            <div className="tc-notes-wrapper">
                <div className="tc-notes">
                    <div className="tc-note">
                        	<div className="tc-note-header">
                           <span className="tc-note-close">
                                <Icon size={20} icon={close} />   
                           </span>
                       </div>
                        <div className="tc-note-title">
                            title goes here
                        </div>
                        <div className="tc-note-body">
                            body goes here
                        </div>
                    </div>
                </div>
            </div>
            </Styles>
            </div>
        )
    }
}
