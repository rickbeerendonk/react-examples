/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { change } from '../actions/index';

import EditBox from '../components/EditBox';
import Greeting from '../components/Greeting';

function NameEditor({ name, changeName }) {
  return (
    <>
      <EditBox onChange={changeName} name={name} />
      <Greeting name={name} />
    </>
  );
}

function mapStateToProps(state) {
  return {
    name: state.name
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      changeName: change
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(NameEditor);
