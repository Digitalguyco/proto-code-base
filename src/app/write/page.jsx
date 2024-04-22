"use client";
import React, { useState, useRef, useCallback } from 'react';
import Image from "next/image";
import Logo from '../../../public/logo.svg';
import { createEditor } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';
import { Transforms } from 'slate';
import { useRouter } from "next/router";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from '../../../firebase/config'
import Link from 'next/link';

// Define a custom element for images
const ImageElement = ({ attributes, children, element }) => {
    return (
      <div {...attributes}>
        <div contentEditable={false}>
          <Image
            src={element.url}
            alt={element.alt}
            style={{ display: 'block', maxWidth: '100%', maxHeight: '20em' }}
          />
        </div>
        {children}
      </div>
    );
  };

  // Function to insert an image with file upload
const insertImage = async (editor, file) => {
    // Assuming you have a function to handle image uploads
    const url = await uploadImage(file);
    if (url) {
      const text = { text: '' };
      const image = { type: 'image', url, children: [text] };
      Transforms.insertNodes(editor, image);
    }
  };
  
  // Function to handle image uploads
  const uploadImage = async (file) => {
    // Assuming you have a function to upload the file to your server or cloud storage
    try {
      // Example: Upload file to Firebase Storage
      const storageRef = ref(storage, `images/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);
  
      await uploadTask;
      const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
      return downloadURL;
    } catch (error) {
      console.error('Error uploading image:', error);
      return null;
    }
  };

  // Example toolbar component
const Toolbar = ({ editor }) => {
    // Function to insert an image
    const insertImage = (url) => {
      const text = { text: '' };
      const image = { type: 'image', url, children: [text] };
      Transforms.insertNodes(editor, image);
    };
    const inputRef = useRef(null);
  
    // Function to toggle text formatting
    const toggleFormat = (format) => {
      const isActive = CustomEditor.isFormatActive(editor, format);
      SlateTransforms.setNodes(
        editor,
        { [format]: isActive ? null : true },
        { match: n => Text.isText(n), split: true }
      );
    };
  
    return (
      <div>
        <button onMouseDown={(event) => {
          event.preventDefault(); // Prevent losing focus
          toggleFormat('bold');
        }}>Bold</button>
        {/* Additional buttons for italic, underline, etc. */}
        <button onMouseDown={(event) => {
                event.preventDefault();
                // Trigger file input click
                inputRef.current.click();
                }}>Insert Image</button>
                <input
                type="file"
                accept="image/*"
                ref={inputRef}
                style={{ display: 'none' }}
                onChange={(event) => {
                    const file = event.target.files[0];
                    if (file) insertImage(editor, file);
                    // Clear the file input
                    event.target.value = null;
                }}
                />
      </div>
    );
  };

const WritePage = () => {
    // const router = useRouter();
    const [editor] = useState(() => withReact(createEditor()))
  const [title, setTitle] = useState("");
  const [content, setContent] = useState([
    {
      type: 'paragraph',
      children: [{ text: 'Tell your story...' }],
    },
  ]);
  const [addButton, setAddButton] = useState(false);


  // Function to render elements
  const renderElement = useCallback(props => {
    switch (props.element.type) {
      case 'image':
        return <ImageElement {...props} />;
      default:
        return <p {...props.attributes}>{props.children}</p>;
    }
  }, []);

  const generateSlug = (title) => title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

  const extractHeaderImage = (htmlContent) => {
    const matches = htmlContent.match(/<img.*?src="([^"]*)"/);
    return matches?.[1] || "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const slug = generateSlug(title);
    const headerImage = extractHeaderImage(content);

    try {
      await addDoc(collection(db, "posts"), {
        title,
        content,
        slug,
        headerImage,
        createdAt: new Date(),
        status: "draft"
      });
      alert("Post added successfully");
      setTitle("");
      setContent("");
    } catch (error) {
      console.error("Error adding document: ", error);
      alert(`Failed to add the post because of ${error}`);
    }
  };

  return (
    <>
    
    <div className=" px-[89px] py-[30px] w-full">
    <Link href="/">
      <img width={70} height={60} src='/bestofus.png' className="" alt="The Best Of Us" />
    </Link>
  </div>
    {/* Large Screens */}
    <div className="13inch:flex 3xxS:hidden flex justify-center items-center w-full">
        <div className="p-[50px] flex flex-col w-[85%] mt-[10px] ">
          <input
            type="text"
            className=" outline-sky-950 bg-transparent placeholder:text-neutral-400 placeholder:text-[30px] text-[32px] text-[#001F3F] font-medium font-montserrat tracking-tight w-full h-[100px]  px-[38px]    py-[33px] rounded-[20px] border border-neutral-400 justify-start items-center flex"
            placeholder="Title"
          />

          <div className="w-full outline-sky-950 flex h-[428px] mt-6 p-[40px]  rounded-[20px] border gap-[10px] border-neutral-400 justify-start">
            {addButton ? (
              <svg onClick={() => setAddButton(false)} width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.0491 21.2L13.6499 12.8M13.6508 21.2L22.0499 12.8" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M31.8501 17C31.8501 9.26801 25.582 3 17.8501 3C10.1181 3 3.8501 9.26801 3.8501 17C3.8501 24.7319 10.1181 31 17.8501 31C25.582 31 31.8501 24.7319 31.8501 17Z" stroke="#333333" stroke-width="1.5" />
              </svg>
            ) : (
              <svg onClick={() => setAddButton(true)} width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.5 11.6667V23.3333M23.3334 17.5H11.6667" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path
                  d="M17.5 32.0833C25.5542 32.0833 32.0834 25.5542 32.0834 17.5C32.0834 9.44585 25.5542 2.91667 17.5 2.91667C9.44587 2.91667 2.91669 9.44585 2.91669 17.5C2.91669 25.5542 9.44587 32.0833 17.5 32.0833Z"
                  stroke="#333333"
                  strokeWidth="1.5"
                />
              </svg>
            )}
            {addButton ? (
              <div className="flex gap-[25px] ml-[10px] h-[36px] justify-between items-center">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.5" width="35" height="35" rx="17.5" stroke="#2ECC71" />
                  <path d="M15 16C15.5523 16 16 15.5523 16 15C16 14.4477 15.5523 14 15 14C14.4477 14 14 14.4477 14 15C14 15.5523 14.4477 16 15 16Z" stroke="#2ECC71" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M11.6667 18C11.6667 15.0144 11.6667 13.5217 12.5942 12.5942C13.5217 11.6667 15.0145 11.6667 18.0001 11.6667C20.9856 11.6667 22.4784 11.6667 23.4059 12.5942C24.3334 13.5217 24.3334 15.0144 24.3334 18C24.3334 20.9855 24.3334 22.4783 23.4059 23.4059C22.4784 24.3333 20.9856 24.3333 18.0001 24.3333C15.0145 24.3333 13.5217 24.3333 12.5942 23.4059C11.6667 22.4783 11.6667 20.9855 11.6667 18Z"
                    stroke="#2ECC71"
                    stroke-width="1.5"
                  />
                  <path d="M13.3333 23.9999C16.2482 20.5167 19.516 15.9227 24.3316 19.0283" stroke="#2ECC71" stroke-width="1.5" />
                </svg>
                <svg className=" cursor-pointer" onClick={() => setAddButton(false)} width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.5" width="35" height="35" rx="17.5" stroke="#2ECC71" />
                  <path d="M20 24.0007H16" stroke="#2ECC71" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M17.9999 12V24.0005M17.9999 12C18.9249 12 20.1129 12.0204 21.0589 12.1177C21.4589 12.1588 21.659 12.1794 21.836 12.2519C22.2043 12.4029 22.5011 12.7338 22.6129 13.1179C22.6666 13.3026 22.6666 13.5133 22.6666 13.9348M17.9999 12C17.075 12 15.8869 12.0204 14.941 12.1177C14.5409 12.1588 14.3409 12.1794 14.1638 12.2519C13.7955 12.4029 13.4987 12.7338 13.387 13.1179C13.3333 13.3026 13.3333 13.5133 13.3333 13.9348"
                    stroke="#2ECC71"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
            ) : (
              <textarea className=" bg-transparent w-full h-full outline-none text-[24px] placeholder:text-[24px] font-montserrat font-normal  " placeholder="Tell your story........"></textarea>
            )}
          </div>

          <div className=" flex justify-end">
            <div className="text-neutral-100 text-xl font-medium font-montserrat leading-[25px] w-[229px] mt-4 h-[45px] px-[30px] py-2.5 bg-green-500 bg-opacity-30 rounded-[20px]  gap-2.5 self-center tracking-tight">Share Your Story</div>
          </div>
        </div>
      </div>
       {/* Small Screens */}
       <div className="xl:hidden  flex justify-center items-center w-full">
        <div className="p-[50px] flex flex-col w-[90%] mt-[10px] ">
          <input
            type="text"
            className=" outline-sky-950 bg-transparent placeholder:text-neutral-400 placeholder:text-[30px] text-[32px] text-[#001F3F] font-medium font-montserrat tracking-tight w-full h-[100px]  px-[38px]    py-[33px] rounded-[20px] border border-neutral-400 justify-start items-center flex"
            placeholder="Title"
          />

          <div className="w-full outline-sky-950 flex h-[428px] mt-6 p-[20px]  rounded-[20px] border gap-[10px] border-neutral-400 justify-start">
            {addButton ? (
              <svg onClick={() => setAddButton(false)} width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.0491 21.2L13.6499 12.8M13.6508 21.2L22.0499 12.8" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M31.8501 17C31.8501 9.26801 25.582 3 17.8501 3C10.1181 3 3.8501 9.26801 3.8501 17C3.8501 24.7319 10.1181 31 17.8501 31C25.582 31 31.8501 24.7319 31.8501 17Z" stroke="#333333" stroke-width="1.5" />
              </svg>
            ) : (
              <svg onClick={() => setAddButton(true)} width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.5 11.6667V23.3333M23.3334 17.5H11.6667" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path
                  d="M17.5 32.0833C25.5542 32.0833 32.0834 25.5542 32.0834 17.5C32.0834 9.44585 25.5542 2.91667 17.5 2.91667C9.44587 2.91667 2.91669 9.44585 2.91669 17.5C2.91669 25.5542 9.44587 32.0833 17.5 32.0833Z"
                  stroke="#333333"
                  strokeWidth="1.5"
                />
              </svg>
            )}
            {addButton ? (
              <div className="flex gap-[25px] ml-[10px] h-[36px] justify-between items-center">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.5" width="35" height="35" rx="17.5" stroke="#2ECC71" />
                  <path d="M15 16C15.5523 16 16 15.5523 16 15C16 14.4477 15.5523 14 15 14C14.4477 14 14 14.4477 14 15C14 15.5523 14.4477 16 15 16Z" stroke="#2ECC71" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M11.6667 18C11.6667 15.0144 11.6667 13.5217 12.5942 12.5942C13.5217 11.6667 15.0145 11.6667 18.0001 11.6667C20.9856 11.6667 22.4784 11.6667 23.4059 12.5942C24.3334 13.5217 24.3334 15.0144 24.3334 18C24.3334 20.9855 24.3334 22.4783 23.4059 23.4059C22.4784 24.3333 20.9856 24.3333 18.0001 24.3333C15.0145 24.3333 13.5217 24.3333 12.5942 23.4059C11.6667 22.4783 11.6667 20.9855 11.6667 18Z"
                    stroke="#2ECC71"
                    stroke-width="1.5"
                  />
                  <path d="M13.3333 23.9999C16.2482 20.5167 19.516 15.9227 24.3316 19.0283" stroke="#2ECC71" stroke-width="1.5" />
                </svg>
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.5" width="35" height="35" rx="17.5" stroke="#2ECC71" />
                  <path d="M20 24.0007H16" stroke="#2ECC71" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M17.9999 12V24.0005M17.9999 12C18.9249 12 20.1129 12.0204 21.0589 12.1177C21.4589 12.1588 21.659 12.1794 21.836 12.2519C22.2043 12.4029 22.5011 12.7338 22.6129 13.1179C22.6666 13.3026 22.6666 13.5133 22.6666 13.9348M17.9999 12C17.075 12 15.8869 12.0204 14.941 12.1177C14.5409 12.1588 14.3409 12.1794 14.1638 12.2519C13.7955 12.4029 13.4987 12.7338 13.387 13.1179C13.3333 13.3026 13.3333 13.5133 13.3333 13.9348"
                    stroke="#2ECC71"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
            ) : (
              <textarea className=" bg-transparent w-full h-full outline-none text-[24px] placeholder:text-[24px] font-montserrat font-normal  " placeholder="Tell your story........"></textarea>
            )}
          </div>
          <div className=" flex justify-end">
            <div className="text-neutral-100 text-xl font-medium font-montserrat leading-[25px] w-[229px] mt-4 h-[45px] px-[30px] py-2.5 bg-green-500 bg-opacity-30 rounded-[20px]  gap-2.5 self-center tracking-tight">Share Your Story</div>
          </div>
        </div>
      </div>
    
    </>
  );
};

export default WritePage;