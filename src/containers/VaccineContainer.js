import React, { useState, useEffect } from "react";
import VaccineList from "../components/VaccineList";
import { connect, useDispatch } from "react-redux";
import { getCases, getVaccines } from "../actions";

const Vaccines = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatchGetCases();
    dispatchGetVaccines();
  }, []);

  const dispatchGetCases = () => {
    dispatch(getCases());
  };
  
  const dispatchGetVaccines = () => {
    dispatch(getVaccines());
  };

  if (props.cases.length === 0) {
    return <div>Loading</div>;
  }

  return (
    <div>
      <VaccineList cases={props.cases} vaccines={props.vaccines} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cases: state.cases,
    vaccines: state.vaccines
  };
};

export default connect(mapStateToProps, null)(Vaccines);


