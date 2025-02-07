import React from 'react';
import './pattern.css';

const PatternTop = () => {
    return(
        <div className="pattern_wrapper">
          <div className="pattern">
            <div className="pattern_inner_wrapper">
              <div className="pattern-inner"></div>
            </div>
            <div className="pattern_inner_wrapper_secondary">
              <div className="pattern-inner"></div>
            </div>
            <div className="pattern_inner_wrapper_initial">
              <div className="pattern-inner"></div>
            </div>
          </div>
        </div>
    );
}


const PatternBottom = () => {
    return(
        <div className="pattern_wrapper pattern_bottom">
          <div className="pattern">
            <div className="pattern_inner_wrapper">
              <div className="pattern-inner"></div>
            </div>
            <div className="pattern_inner_wrapper_secondary">
              <div className="pattern-inner"></div>
            </div>
            <div className="pattern_inner_wrapper_initial">
              <div className="pattern-inner"></div>
            </div>
          </div>
        </div>
    );
}

export {
    PatternTop,
    PatternBottom,
}