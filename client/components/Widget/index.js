import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Panel } from 'react-bootstrap';
import Link from '../Link';

class StatWidget extends Component{ // eslint-disable-line
  static propTypes = {
    style: PropTypes.string,
    count: PropTypes.string,
    headerText: PropTypes.string,
    icon: PropTypes.string,
    footerText: PropTypes.string,
  }
  render() {
    return (
      <Panel
        className="stat"
        className={this.props.style}

        header={<div className="row">
          <div className="col-xs-3">
            <i
              className={this.props.icon}
            />
          </div>
          <div className="col-xs-9 text-right">
            <div className="huge">
              {
                this.props.count
              }
            </div>
            <div>
              {
                this.props.headerText
              }
            </div>
          </div>
        </div>}

        footer={
          <Link
            to={
              this.props.linkTo // eslint-disable-line
            }
          >
            <span className="pull-left">
              {
                this.props.footerText
              }
            </span>
            <span className="pull-right"><i className="fa fa-arrow-circle-right" /></span>
            <div className="clearfix" />
          </Link>}
      />

    );
  }
}

export default StatWidget;
