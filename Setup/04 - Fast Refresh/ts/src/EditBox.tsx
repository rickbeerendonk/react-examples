/*! European Union Public License version 1.2 !*/
/*! Copyright © 2017 Rick Beerendonk          !*/

interface IEditBoxProps {
  onChange: (value: string) => void;
  name: string;
}

const EditBox: React.FC<IEditBoxProps> = ({ onChange, name }) => (
  <input onChange={e => onChange(e.target.value)} value={name} />
);

export default EditBox;
