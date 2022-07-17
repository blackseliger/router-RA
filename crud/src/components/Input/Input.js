import React from 'react'

function Input({handleChange, children, value}) {

    const onInput = ({target}) => {
        const {name, value} = target;
        handleChange(name, value);
    }

    return (
        <>
            {children && children.length ?
                <label for="edit">
                    {children}
                </label> : null
            }
            <div className="form-group__input ">
                <input  onChange={onInput} className="form-group__control crud__createForm-input" name="content" type="text" required
                    placeholder="Что происходит?" value={value} />
            </div>
        </>
    )
}

export default Input