import React, { useContext, useState } from 'react';
import { ContextWrap } from '../../container/contexApi/States';
import AdminAlert from '../AdminAlert/AdminAlert';

const BlogEdit = (props) => {
    const BlogData = useContext(ContextWrap)
    const [title, SetTitle] = useState(props.data.title);
    const [creater, SetCreater] = useState(props.data.creater);
    const [content, SetContent] = useState(props.data.content);
    const [tags, SetTags] = useState(props.data.tags);
    const [categories, SetCategories] = useState(props.data.categories);
    const [image, SetImage] = useState();
    const [btn, setbtn] = useState(false);
    const [data, setData] = useState();

    //submit the data to Api for update.
    const submitEditData = async () => {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('creater', creater);
        formData.append('content', content);

        if (tags !== props.data.tags) {
            const tagsValue = tags.split(",");
            for (let i = 0; i < tagsValue.length; i++) {
                formData.append('tags', tagsValue[i].toString());
            }
        }
        if (categories !== props.data.categories) {
            const categoriesValue = categories.split(",");
            for (let i = 0; i < categoriesValue.length; i++) {
                formData.append('categories', categoriesValue[i].toString());
            }
        }


        if (image !== undefined) { formData.append('image', image) }
        setData(formData);
        setbtn(!btn);
    }

    //count the word of textarea content.
    function countWords(str) {
        const arr = str.split(' ');
        return arr.filter(word => word !== '').length;
    }

    const comeBack = () => {
        BlogData.Mode('editblog', 'blog')
    }

    return (
        btn
            ?
            <AdminAlert id={props.data._id} data={data} page={"Blog"} function={"Edit"} />
            :
            <div className='mt-2 z-10 relative shadow-md w-full flex justify-center'>
                <div className="py-4 z-20 shadow-lg w-2/3">
                    <div className="text-xl text-semibold text-center">
                        <h2>Edit Your Product Here</h2>
                    </div>
                    <div className="card-body">
                        <form method='post' encType='multipart/form-data'>
                            <div className="grid gap-2 mx-4">
                                <label htmlFor="">Blog Title</label>
                                <input value={title} onChange={(e) => SetTitle(e.target.value)} type="text" className="bg-slate-100 outline-none border-none rounded-sm py-2" id="" placeholder="Enter Product Name" />
                            </div>
                            <div className="grid gap-2 mx-4">
                                <label htmlFor="">Blog Creater</label>
                                <input value={creater} onChange={(e) => SetCreater(e.target.value)} type="text" className="bg-slate-100 outline-none border-none rounded-sm py-2" id="" placeholder="Enter Product Name" />
                            </div>
                            <div className="grid gap-2 mx-4">
                                <label htmlFor="">Blog Content</label>
                                <div className="relative flex flex-col mb-6">
                                    <textarea value={content} onChange={(e) => SetContent(e.target.value)} className="resize-none  h-36 bg-slate-100 outline-none border-none rounded-sm py-2" id="" rows={countWords(content) / 10 <= 15 ? 15 : countWords(content) / 10} placeholder='Product Detail'></textarea>
                                    <div className="absolute right-0 -bottom-6">{countWords(content)} out of 500</div>
                                </div>
                            </div>
                            <div className="grid gap-2 mx-4">
                                <label>Blog Tags</label>
                                <input value={tags} onChange={(e) => SetTags(e.target.value)} type="text" className="bg-slate-50 outline-none border-none rounded-sm py-2" id="" placeholder="Enter Blog Tags with saprated with ," />
                            </div>
                            <div className="grid gap-2 mx-4">
                                <label>Blog Categories</label>
                                <input value={categories} onChange={(e) => SetCategories(e.target.value)} type="text" className="bg-slate-50 outline-none border-none rounded-sm py-2" id="" placeholder="Enter Blog Categories with saprated with ," />
                            </div>
                            <div className="grid gap-2 mx-4">
                                <label htmlFor="">Blog Image</label>
                                <img className='w-32' src={`http://localhost:3000/${props.data.image}`} alt="5000" />
                                <div className="relative my-4">
                                    <input onChange={(e) => SetImage(e.target.files[0])} type="file" accept="image/png, image/jpeg" className="outline-none border-none rounded-sm py-2" id="" />
                                    <div className="absolute right-0"></div>
                                </div>

                            </div>
                            <div className="mx-4 my-4 flex justify-between">
                                <button onClick={(e) => { submitEditData(e.preventDefault()) }} className='w-32 h-10 bg-blue-500 rounded-sm cursor-pointer' type="submit">Submit</button>
                                <button onClick={(e) => { comeBack(e.preventDefault()) }} type="submit" className="w-32 h-10 bg-gray-300 rounded-sm">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    )
}

export default BlogEdit