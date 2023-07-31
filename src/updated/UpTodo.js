import React, { useState } from "react";
// import {DeleteOutlineIcon }from '@mui/icons-material/DeleteOutline';

const UpTodo = () => {

    const [Input, setInput] = useState();
    const [Sinput, Uinput] = useState([]);
    const [togglebtn, settogglebtn] = useState(true)
    const [EditItmes, setEdititems] = useState(null)


    const ChangeEvent = (e) => {

        setInput(e.target.value)

    }

    const clickEvent = () => {
        if (!Input) {
        } else if (Input && !togglebtn) {
            Uinput(
                Sinput.map((elm) => {
                    if (elm.id === EditItmes) {
                        return { ...elm, name: Input }
                    }
                    return elm;
                })
            )
            settogglebtn(true)
            setInput("")
            setEdititems(null)

        } else {
            const allInputdata = { id: new Date().getTime().toString(), name: Input }
            Uinput([...Sinput, allInputdata]);

            setInput('')
        }

    }
    const Deleteitems = (index) => {
        const updateditem = Sinput.filter((elm) => {
            return index !== elm.id;

        })
        Uinput(updateditem)

    }
    const edititems = (id) => {
        const editItem = Sinput.find((elm) => {
            return elm.id === id
        })
        settogglebtn(false)
        setInput(editItem.name)
        setEdititems(id)

    }
    const removeAll = () => {
        Uinput([])
    }

    return (
        <>
        <div className="h1">
                    <h1> ToDo List</h1>
                </div>
            <div className="containor">
                
                <div className="Input_style">
                    <input type='text' placeholder=" ✏️Add items..." value={Input} className="field" onChange={ChangeEvent} />
                    {togglebtn ? <button className="bttn" onClick={clickEvent}>➕</button> : <button className="btn btn1" onClick={clickEvent}>📝</button>}

                </div>
                {
                    Sinput.map((elm) => {
                        return (<div className="Li_style" keys={elm.id}>
                            <h3>{elm.name}</h3>
                            <div className="icons">
                                <button className="btn btn1" onClick={() => edititems(elm.id)}>  📝</button>
                                <button className="btn btn2" onClick={() => Deleteitems(elm.id)}>  ➖</button>
                            </div>
                        </div>)
                    })
                }
                <button className="remove" onClick={removeAll}>Remove All</button>
            </div>
        </>
    )
}

export default UpTodo;