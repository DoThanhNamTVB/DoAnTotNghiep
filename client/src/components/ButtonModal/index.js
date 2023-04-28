function ButtonModal({ id, nameButtonAll, className, title, modalBody, nameButtonClose, nameButtonSubmit, onclick }) {
    return (
        <>
            <button type="button" className={`btn ${className}`} data-bs-toggle="modal" data-bs-target={`#${id}`}>
                {nameButtonAll}
            </button>
            <div className="modal fade" id={id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">
                                {title}
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">{modalBody}</div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                {nameButtonClose}
                            </button>
                            <button type="button" onClick={onclick} data-bs-dismiss="modal" className="btn btn-primary">
                                {nameButtonSubmit}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ButtonModal;
