import "./styles.css";

const itemList = ({title, description}) => {
  return (
    <div className="item-list">
      <strong>{title}</strong>
      <p>{description}</p>
      <hr />
    </div>
  )
}
export default itemList;