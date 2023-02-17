import { forwardRef, useImperativeHandle, useState } from "react"

const Dialog = forwardRef((props, ref) => {
    
    let [visible, setVisible] = useState(false)
    let [title, setTitle] = useState(false)
    let [message, setMessage] = useState(false)    

    useImperativeHandle(ref, () => ({
        show(parameters) {
            setTitle(parameters.title)
            setMessage(parameters.message)            
            setVisible(true)
        }
    }));

    const cancel = (event) => {
        setVisible(false)
    }     

    const call = () => {
        props.method()
    }     

    return (
        <div onClick={cancel} style={{
            display:  visible ? "block" : "none"
        }} className="component-dialog modal">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <span type="button" onClick={cancel} className="close" aria-label="close">
                            <span aria-hidden="true">&times;</span>
                        </span>
                    </div>
                    <div className="modal-body">
                        <h2 className="title">{title ? title : "Delete Register" }</h2>
                        <p className="text">{message ? message : "Are you sure you want to delete it?"}</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" onClick={call} className="btn btn-danger btn-md btn-block">Confirmar</button>                        
                        <button type="button" onClick={cancel} className="btn btn-secondary btn-md btn-block">Cancelar</button>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default Dialog