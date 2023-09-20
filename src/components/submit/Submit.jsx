import React, { useState, useEffect, useContext } from 'react';
import { db } from '@/config/firebase';
import { message } from 'antd';
import { set } from 'firebase/database';
import { auth } from '@/config/firebase';
import cookie from "js-cookie"
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { addDoc, collection } from 'firebase/firestore';
import AppContext from '../appContext';
import { storage } from '@/config/firebase';
import { getStorage } from "firebase/storage";



import { serverTimestamp } from 'firebase/firestore'; // Added this import

// import { setDoc, doc , collection,set } from 'firebase/firestore';
const Submit = () => {
  const storage = getStorage();

  const context = useContext(AppContext)
  console.log(context.userObject.displayName, " and ", context.userObject.email)
  const [image, setImage] = useState('');
  const [previewImage, setPreviewImage] = useState(null); // Added state for preview
  const[user,setUser]=useState({})
  const [userObject, setUserObject] = useState(null)
  const [ email,setEmail]=useState('')
console.log("email:",userObject?.email ,);

  const [toolData, setToolData] = useState({
    title: "",
    detail: "",
    link: "",
    category: "",
    email:"",
    
  });
  console.log(toolData)
  var userCookie = cookie.get('user');

  useEffect(() => {
    if (userCookie) {
      setUserObject(JSON.parse(userCookie))

    } 
  }, [userCookie]);

  const handleImagePreview = (e) => {

    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
        setImage(file);
      };
      reader.readAsDataURL(file);
      
    }
  };
  const handleSubmitTool = async () => {
    if((toolData.title && toolData.detail && toolData.category && toolData.link  && image) ===""){
      message.error("Error, Feiled or Feilds are empty")
      return;
    }

    try{
      const imageRef = ref(storage, `/images/ ${image.name}`)

      await uploadBytes(imageRef, image);
      const imageUrl = await getDownloadURL(imageRef);
      addDoc(collection(db, 'tools'), {
        detail: toolData.detail,
        link: toolData.link,
        category: toolData.category,
        email: userObject?.email,
        title: toolData.title,
        imageUrl:imageUrl,
        user:userObject?.displayName,
        joiningDate: serverTimestamp(),
      })
      message.success('Tool successfully Registered');

    }
    catch(err){
      console.log("error:",err)
      message.error("Failed to register tool")
    }
  
  };

  return (
    <div>
      <div className="absolute md:block hidden left-0 bg-[#2CD7834F]/10 w-[338px] h-[338px] rounded-full blur-3xl"></div>
      <div className="absolute md:block hidden r bg-[#2CD7834F]/10 w-[338px] h-[338px] right-0 rounded-full blur-3xl"></div>
      <div className=" flex flex-col text-center justify-center items-center">
        <h1 className="text-[32px] md:text-[40px] font-[800] bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">
          Submit AI Tool
        </h1>
        <p className="text-[18px] font-[500] text-black dark:text-[#FFF] md:px-[15rem] pt-5">
          These are the tools and posts you have favourited. You can remove them from your favourites by clicking the bookmark icon.
        </p>

        <div className='flex flex-col gap-5 px-3 py-5   md:p-10  my-10 w-full md:w-[80%] bg-custom-blue md:h-[105%] border border-primary-border rounded-md'>


          <input
            value={toolData.title}
            onChange={(e) => setToolData({ ...toolData, title: e.target.value })}
            placeholder='Title of your tool' type="text" className='dark:placeholder-white focus:outline-none text-[13px] md:text-[16px] pl-3 md:pl-5 w-full pt-5 pb-[25px] bg-custom-blue border rounded-md dark:border-primary-border border-primary-dark' />
          <input
            value={toolData.detail}
            onChange={(e) => setToolData({ ...toolData, detail: e.target.value })}
            placeholder='In Short, please share what the AI tool can do' type="text" className='dark:placeholder-white focus:outline-none text-[13px] md:text-[16px] pl-3 md:pl-5 w-full pt-5 pb-[170px] bg-custom-blue border rounded-md dark:border-primary-border border-primary-dark' />

          <input
            value={toolData.link}
            onChange={(e) => setToolData({ ...toolData, link: e.target.value })}
            placeholder='Link to the AI tool' type="text" className='dark:placeholder-white focus:outline-none text-[13px] md:text-[16px] pl-3 md:pl-5 w-full py-3 md:py-5  bg-custom-blue border rounded-md dark:border-primary-border border-primary-dark' />
          <input
            value={toolData.category}
            onChange={(e) => setToolData({ ...toolData, category: e.target.value })}
            placeholder='Tool Category' type="text" className='dark:placeholder-white focus:outline-none text-[13px] md:text-[16px] pl-3 md:pl-5 w-full md:py-5 py-3 bg-custom-blue border rounded-md dark:border-primary-border border-primary-dark' />

          <input
          disabled
            value={userObject?.email}
            placeholder='Your Email Address' type="email" className='dark:placeholder-white  text-gray-600 focus:outline-none text-[13px] md:text-[16px] pl-3 md:pl-5 w-full md:py-5 py-3  bg-custom-blue border rounded-md dark:border-primary-border border-primary-dark' />
          {previewImage && <img src={previewImage} alt="Preview" className="my-4 max-w-[200px]" />}

          <div className='my-6 flex flex-col justify-center items-center'>
            <input type='file' onChange={handleImagePreview} className='hidden ' accept="image/*" id="image-upload" />
            <label htmlFor="image-upload" className='cursor-pointer bg-blue-500 px-4 py-2 rounded-lg text-white font-semibold'>
              Select Image
            </label>


              <button onClick={handleSubmitTool} className='mt-3 font-[500] md:text-[18px] w-[130px] h-[40px] md:h-[50px] text-white dark:text-white rounded-md bg-gradient-to-r from-blue-400 via-green-500 to-blue-500'>
                Submit
              </button>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Submit