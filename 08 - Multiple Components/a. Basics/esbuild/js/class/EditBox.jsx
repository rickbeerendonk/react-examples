/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* Inline function */

function EditBox({ onChange, value }) {
  return <input onChange={e => onChange(e.target.value)} value={value} />;
}

/* method */

/*
class EditBox extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.props.onChange(e.target.value);
  }
  render() {
    return (
      <input onChange={this.handleChange} value={this.props.value} />
    );
  }
}
*/

export default EditBox;
