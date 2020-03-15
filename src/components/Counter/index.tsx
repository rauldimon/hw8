import React from "react";
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import style from "./style.module.css"
import { IRootState, IRootAction } from "../../reducers/rootReducer";
import * as actions from "../../reducers/counter/actions";

const mapStateToProps = (state: IRootState) => ({
  counter: state.counter
});

const mapDispatchToProps = (dispatch: Dispatch<IRootAction>) =>
  bindActionCreators(
    {
      increaseCounter: actions.increaseCounter,
      decreaseCounter: actions.decreaseCounter
    },
    dispatch
  );

type CounterProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const Counter: React.FC<CounterProps> = props => {
  const increaseCounter = () => {
    console.log("increaseCounter");
    props.increaseCounter();
  };

  const decreaseCounter = () => {
    console.log("decreaseCounter");
    props.decreaseCounter();
  };

  return (<div className={style.buttonBlock}>
      <h1>Counter: {props.counter.value}</h1>
      <button onClick={increaseCounter}>+</button>
      <button onClick={decreaseCounter}>-</button>
  </div>)
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(Counter));
