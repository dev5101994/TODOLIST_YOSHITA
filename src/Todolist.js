import React, { useState } from 'react'

function Todolist() {

    const [activity, setActivity] = useState("")
    const [listData, setListData] = useState([])
    function addActivity() {
        setListData([...listData, activity])
        console.log(listData)
        setActivity('')
        // setListData((listData) => {
        //     const upDatelist = [...listData, activity]
        //     console.log(upDatelist)
        //     setActivity('')
        //     return upDatelist
        // })
    }
    function removeActivity(i) {
        const updatedListData = listData.filter((elem, id) => {
            return i != id
        })
        setListData(updatedListData);
    }

    function removeAll() {

        setListData([])

    }
    return (
        <div className='container'>
            <div className='header'>Todo List</div>
            <input type='text' placeholder='Add Activity'
                value={activity} onChange={(e) => setActivity(e.target.value)} />

            <button className='Btn-activity' onClick={addActivity}>
                Add</button>
            <p className='List-heading'>Here is your list :{")"}</p>

            {listData != [] && listData.map((data, i) => {
                return (
                    <>
                        <p key={i}>
                            <div className='listData'>{data}</div>

                            <div>  <button className='btn-position'
                                onClick={() => removeActivity(i)}>remove(-)</button></div>

                        </p>
                    </>
                )
            })}
            {listData.length >= 1 && <button onClick={removeAll}>REMOVE ALL</button>}
        </div>
        //sbsepele check krega list data empty hai hai bhara then agar ali hai to list show ega

    )
}

export default Todolist