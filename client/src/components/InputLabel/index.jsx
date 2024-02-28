function InputLabel({
    textarea,
    // select,
    row,
    label,
    readonly = false,
    type,
    id,
    placeholder,
    className,
    value,
    onChange,
    error,
}) {
    return (
        <div className={className}>
            <label htmlFor={id} className="form-label">
                {label}
            </label>
            {textarea ? (
                <>
                    <textarea
                        type={type}
                        className="form-control fs-4"
                        id={id}
                        aria-describedby="emailHelp"
                        placeholder={placeholder}
                        readOnly={readonly}
                        value={value}
                        onChange={onChange}
                        rows={row}
                    >
                        {value}
                    </textarea>
                    <span>{error}</span>
                </>
            ) : (
                <>
                    <input
                        type={type}
                        className="form-control"
                        id={id}
                        aria-describedby="emailHelp"
                        placeholder={placeholder}
                        readOnly={readonly}
                        value={value}
                        onChange={onChange}
                    />
                    <span>{error}</span>
                </>
            )}
        </div>
    );
}

export default InputLabel;
