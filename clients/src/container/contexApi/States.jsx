import { createContext, useState, useEffect } from "react";
import axios from "axios";

const ContextWrap = createContext();

const State = (props) => {
    /* ********************-------------------******************** */
    //btn state for all button.
    const [btn, SetBtn] = useState(false);
    const [button, SetButton] = useState({
        EditProduct: false,
        DeleteProduct: false,
        EditBlog: false,
        DeleteBlog: false,
        AddBlogAlert: false
    });

    /* ********************-------------------******************** */
    //admin panel login auth.
    const [adminAuth, setadminAuth] = useState(false);
    const [adminActive, setAdminActive] = useState('Dashboard');

    /* ********************-------------------******************** */
    //set id while edit and delete product on Admin page
    const [id, setId] = useState();

    /* ********************-------------------******************** */
    //search data usestate.
    const [searchData, setSearchData] = useState([]);

    /* ********************-------------------******************** */
    //product id when click on know more btn on product page.
    const [clickData, setClickData] = useState()


    /* ********************-------------------******************** */
    // search product by Name

    // const SearchData = (value) => {
    //     const data = apiData.filter((search) => {
    //         return search.productName.slice(0, 5).toLowerCase() == value.slice(0, 5).toLowerCase()
    //     })
    //     setSearchData(data);
    // }

    /* ********************-------------------******************** */
    //button Mode function.
    const Mode = (pageId, page) => {
        if (page === 'product') {
            if (pageId === 'editproduct') {
                SetButton({ EditProduct: !button.EditProduct })
            }
            else if (pageId === 'deleteproduct') {
                SetButton({ DeleteProduct: !button.DeleteProduct })
            }
        }
        else if(page==='blog'){
            if (pageId === 'editblog') {
                SetButton({ EditBlog: !button.EditBlog })
            }
            else if (pageId === 'deleteblog') {
                SetButton({ DeleteBlog: !button.DeleteBlog })
            }
            else if (pageId === 'addblogalert') {
                SetButton({ AddBlogAlert: !button.AddBlogAlert })
            }
        }

    }
    // SetBtn(!btn)
    /* ********************-------------------******************** */

    //get count of product when add to chart and function.

    // const [cartCount, setCartCount] = useState(0);
    // const [productId, setProductId] = useState();
    // const [cartProduct, setCartProduct] = useState([]);

    // //Add and remove product on cart

    // const AddRemoveProduct = (ids, page) => {
    //     if (page === 'product') {
    //         const ProductData = apiData.filter((pdata) => {
    //             return pdata._id === ids
    //         })
    //         setCartProduct([...new Set([...cartProduct, ProductData[0]])])
    //     }
    //     else {
    //         setCartProduct(cartProduct.filter(items => items._id !== ids))
    //     }


    // }
    /* ********************-------------------******************** */
    //update total count of product from cart page.
    // const [cartTotalAmount, setcartTotalAmount] = useState()

    //total amount for cart and checkout
    // let totalCartAmount = 0;

    // cartProduct.map((total) => {
    //     totalCartAmount = totalCartAmount + parseInt(total.productPriceSell)
    // })



    /* ********************-------------------******************** */
    //***********-----------**********/
// SearchData
    return (
        <ContextWrap.Provider value={{
            Mode, button, searchData,
            adminActive, setAdminActive
        }}>
            {props.children}
        </ContextWrap.Provider>
    )
}

export default State;
export { ContextWrap };