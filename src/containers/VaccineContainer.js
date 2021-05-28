import React, { useState, useEffect } from "react";
import CasesList from "../components/CasesList";
import { connect, useDispatch } from "react-redux";
import { getCases } from "../actions";

const Vaccines = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatchGetCases();
  }, []);

  const dispatchGetCases = () => {
    dispatch(getCases());
  };

  if (props.cases.length === 0) {
    return <div>Loading</div>;
  }

  return (
    <div>
      <CasesList cases={props.cases} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cases: state.cases,
  };
};

export default connect(mapStateToProps, null)(Vaccines);


