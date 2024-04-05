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
    <div className="mx-32 mt-8 flex flex-col items-end justify-end">
      <Image width={70} height={60} src={Logo} alt="logo" />
      <form onSubmit={handleSubmit} className="flex flex-col w-full">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="w-full h-[100px] mt-8 pl-[38px] pr-[1050px] pt-7 pb-[33px] rounded-[20px] border border-neutral-400"
          required
        />
        <Slate editor={editor} value={content} initialValue={content}  onChange={newValue => setContent(newValue)}>
            <Toolbar editor={editor}/>
          <Editable
            className="w-full h-[428px] mt-6 pl-[38px] pr-[855px] pt-7 pb-[365px] rounded-[20px] border border-neutral-400"
            renderElement={renderElement}
          />
        </Slate>
        <button type="submit" className="w-[229px] mt-4 h-[45px] px-[30px] py-2.5 bg-green-500 bg-opacity-30 rounded-[20px] self-center">
          Share Your Story
        </button>
      </form>
    </div>
  );
};

export default WritePage;