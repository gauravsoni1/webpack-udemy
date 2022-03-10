import React from "react";
import "./Snow.scss";

function MovingButton(props) {
  return (
    <div class="btn">
      <div class="shop-now">{props.title}</div>
      <div class="snowflake-grid to-left">
        <div class="snowflake-item border-bottom border-right">
          <div class="sub-items border-right border-bottom pull-down">
            <div class="m-w-15 m-h-15 border-right border-bottom m-3"></div>
          </div>
        </div>
        <div class="snowflake-item border-bottom border-left">
          <div class="sub-items border-right border-bottom r-90 pull-down-right">
            <div class="m-w-15 m-h-15 border-right border-bottom m-3"></div>
          </div>
        </div>
        <div class="snowflake-item border-top border-right">
          <div class="sub-items border-right border-bottom r-270 pull-right">
            <div class="m-w-15 m-h-15 border-right border-bottom m-3"></div>
          </div>
        </div>
        <div class="snowflake-item border-top border-left">
          <div class="sub-items border-right border-bottom r-180 pull-left">
            <div class="m-w-15 m-h-15 border-right border-bottom m-3"></div>
          </div>
        </div>
      </div>
      <div class="snowflake-grid to-right">
        <div class="snowflake-item border-bottom border-right">
          <div class="sub-items border-right border-bottom pull-down">
            <div class="m-w-15 m-h-15 border-right border-bottom m-3"></div>
          </div>
        </div>
        <div class="snowflake-item border-bottom border-left">
          <div class="sub-items border-right border-bottom r-90 pull-down-right">
            <div class="m-w-15 m-h-15 border-right border-bottom m-3"></div>
          </div>
        </div>
        <div class="snowflake-item border-top border-right">
          <div class="sub-items border-right border-bottom r-270 pull-right">
            <div class="m-w-15 m-h-15 border-right border-bottom m-3"></div>
          </div>
        </div>
        <div class="snowflake-item border-top border-left">
          <div class="sub-items border-right border-bottom r-180 pull-left">
            <div class="m-w-15 m-h-15 border-right border-bottom m-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovingButton;
