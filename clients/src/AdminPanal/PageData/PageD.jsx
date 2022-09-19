import { AiOutlineShop, AiOutlineFileAdd, AiFillShopping, AiOutlineFolderAdd, AiOutlineEdit } from 'react-icons/ai';
import { FaBlogger } from 'react-icons/fa';

//page destination.
export const PageD = [{
    pageIcon: <AiOutlineShop className="text-xl text-gray-700" />,
    link: '',
    pageName: 'Dashboard'
},
{
    pageIcon: <AiFillShopping className="text-xl text-gray-700" />,
    link: 'product',
    pageName: 'All Product'
},
{
    pageIcon: <AiOutlineFolderAdd className="text-xl text-gray-700" />,
    link: 'addproduct',
    pageName: 'Add Product'
},
{
    pageIcon: <AiOutlineEdit className="text-xl text-gray-700" />,
    link: 'mainproductedit',
    pageName: 'Edit Product'
},
{
    pageIcon: <FaBlogger className="text-xl text-gray-700" />,
    link: 'blog',
    pageName: 'All Blog'
},
{
    pageIcon: <AiOutlineFileAdd className="text-xl text-gray-700" />,
    link: 'addblog',
    pageName: 'Add Blog'
},
{
    pageIcon: <AiOutlineEdit className="text-xl text-gray-700" />,
    link: 'mainblogedit',
    pageName: 'Edit Blog'
}];