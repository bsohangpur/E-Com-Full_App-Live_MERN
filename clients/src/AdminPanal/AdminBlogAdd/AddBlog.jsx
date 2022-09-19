import React, { useState, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { ContextWrap } from '../../container/contexApi/States';
import { blogButton, BlogUpdate } from '../../container/Redux/Reducers/blogSlice';

const AddBlog = () => {
    const dispatch = useDispatch();
    const BlogAdd = useContext(ContextWrap);
    
    const [title, SetTitle] = useState("");
    const [creater, SetCreater] = useState("");
    const [content, SetContent] = useState("");
    const [tags, SetTags] = useState("");
    const [categories, SetCategories] = useState("");
    const [image, SetImage] = useState("");

    const submitData = async () => {
        const tagsValue = tags.split(",");
        const categoriesValue = categories.split(",");

        const formData = new FormData();
        formData.append('title', title);
        formData.append('creater', creater);
        formData.append('content', content);

        for (let i = 0; i < image.length; i++) {
            formData.append('image', image[i]);
        }

        for (let i = 0; i < tagsValue.length; i++) {
            formData.append('tags', tagsValue[i]);
        }

        for (let i = 0; i < categoriesValue.length; i++) {
            formData.append('categories', categoriesValue[i]);
        }
        dispatch(BlogUpdate(formData, "Add"));
        dispatch(blogButton({Add:true}))
        BlogAdd.setAdminActive('Blog')
        // BlogAdd.Mode('addblogalert', 'blog')
    }

    //count the word of textarea content.
    function countWords(str) {
        const arr = str.split(' ');
        return arr.filter(word => word !== '').length;
    }

    return (
        <div className="mt-4 relative w-full flex justify-center">
            <div className="py-6 shadow-lg w-2/3">
                <div className="text-xl text-semibold text-center">
                    <h2>Add Blog Here</h2>
                </div>
                <div className="">
                    <form method='post' encType='multipart/form-data'>
                        <div className="grid gap-2 mx-4">
                            <label>Blog Title</label>
                            <input onChange={(e) => SetTitle(e.target.value)} type="text" className="bg-slate-50 outline-none border-none rounded-sm py-2" id="" placeholder="Enter Blog Title" />
                        </div>
                        <div className="grid gap-2 mx-4">
                            <label>Blog Creater</label>
                            <input onChange={(e) => SetCreater(e.target.value)} type="text" className="bg-slate-50 outline-none border-none rounded-sm py-2" id="" placeholder="Enter Creater Name" />
                        </div>
                        <div className="grid gap-2 mx-4">
                            <label>Content</label>
                            <div className="relative flex flex-col mb-6">
                                <textarea onChange={(e) => SetContent(e.target.value)} className="resize-none  h-36 bg-slate-50 outline-none border-none rounded-sm py-2" id="" rows={countWords(content) / 10 <= 15 ? 15 : countWords(content) / 10} placeholder='Write Blog Content'></textarea>
                                <div className="absolute right-0 -bottom-6">{countWords(content)} out of 500</div>
                            </div>

                        </div>
                        <div className="grid gap-2 mx-4">
                            <label>Blog Tags</label>
                            <input onChange={(e) => SetTags(e.target.value)} type="text" className="bg-slate-50 outline-none border-none rounded-sm py-2" id="" placeholder="Enter Blog Tags with saprated with ," />
                        </div>
                        <div className="grid gap-2 mx-4">
                            <label>Blog Categories</label>
                            <input onChange={(e) => SetCategories(e.target.value)} type="text" className="bg-slate-50 outline-none border-none rounded-sm py-2" id="" placeholder="Enter Blog Categories with saprated with ," />
                        </div>
                        <div className="grid gap-2 mx-4">
                            <label>Blog Image</label>
                            <div className="relative my-4">
                                <input onChange={(e) => {
                                    SetImage(e.target.files)
                                }}
                                    type="file" accept="image/png, image/jpeg" className="outline-none border-none rounded-sm py-2" multiple />
                                <div className="absolute right-0"></div>
                            </div>
                        </div>
                        <div className="mx-4 my-4 flex justify-between">
                            <button onClick={(e) => submitData(e.preventDefault())} className='w-32 h-10 bg-blue-500 rounded-sm cursor-pointer' type="submit">Submit</button>
                            <button type="reset" className="w-32 h-10 bg-gray-300 rounded-sm">Reset</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddBlog