import React from 'react'
import { useDispatch } from 'react-redux';
import { productButton } from '../../container/Redux/Reducers/productSlice';

const AdminShortAlert = (props) => {
    const dispatch = useDispatch();
    const {page, functions} = props.data

    setTimeout(() => {
        if(page=== 'Product'){
            if(functions === 'Added'){dispatch(productButton({ Add: false }))}
            else{dispatch(productButton({ Edit: false }))}
        }else{
            if(functions === 'Added'){dispatch(productButton({ Add: false }))}
            else{dispatch(productButton({ Edit: false }))}
        }
        
    }, 2000);

    return (
        <div style={{ top: "80vh" }} className="absolute flex justify-center left-1/2 right-1/2 z-10">
            <div className=" fixed">
                <p style={{ width: "22rem" }} className="bg-green-300 flex justify-center py-2">Your {page} Is {functions} sucessfully. 👍</p>
            </div>
        </div>
    )
}

export default AdminShortAlert