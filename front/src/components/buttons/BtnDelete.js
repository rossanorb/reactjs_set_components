import TrashIcon from '../contents/Icons/TrashIcon'

const BtnDelete = (props) => {

    return(
        <span className="btn-delete" onClick={() =>  props.confirmDelete(props._id)} > <TrashIcon /> </span>
    )
}

export default BtnDelete