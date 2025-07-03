"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import {
  ListOrdered,
  BoldIcon,
  LucideUnderline,
  ItalicIcon,
  List,
} from "lucide-react";
import { Heading as HeadingIcon } from "lucide-react";
import { useState } from "react";
import Underline from "@tiptap/extension-underline";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
import ListItem from "@tiptap/extension-list-item";
import Heading from "@tiptap/extension-heading";


interface TiptapProps {
  onChange:(html:string) => void;
}

const Tiptap = ({onChange}:TiptapProps) => {
  const [headingLevel, setHeadingLevel] = useState(1);
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading:false,
        bulletList: false,
        orderedList: false,
        listItem: false,
      }),
      Underline,
      Heading,
      BulletList,
      OrderedList,
      ListItem,
    ],
    content: "",
    editorProps: {
      attributes: {
        class:
          "prose prose-sm sm:prose-base lg:prose-lg xl:prose-2xl focus:outline-none h-[250px]",
      },
    },
    onUpdate: ({editor}) => {
      const html = editor.getHTML();
      onChange(html);
    }
  });
  if (!editor) {
    return null;
  }

  return (
    <>
      <div className="flex flex-col">
        <div className="w-full p-2">
          <div className="flex space-x-2 mb-2">
            <div className="relative">
              <button className={`p-2`}>
                <HeadingIcon size={15} className=""></HeadingIcon>
              </button>
              <select
                value={headingLevel}
                onChange={(e) => {
                  const level = Number(e.target.value) as 1 | 2 | 3 | 4 | 5 | 6;
                  setHeadingLevel(level);
                  editor.chain().focus().toggleHeading({ level }).run();
                }}
                className="absolute top-0 left-0 opacity-0 w-full h-full cursor-pointer "
              >
                {[1, 2, 3, 4, 5, 6].map((level) => (
                  <option key={level} value={level}>
                    H{level}
                  </option>
                ))}
              </select>
            </div>
            <button
              onClick={() => editor.chain().focus().toggleBold().run()}
              className={`p-2 ${editor.isActive("bold") ? "bg-gray-300 rounded-lg text-white font-bold" : ""}`}
            >
              <BoldIcon size={15} className="cursor-pointer"></BoldIcon>
            </button>
            <button
              onClick={() => editor.chain().focus().toggleItalic().run()}
              className={`p-2 ${
                editor.isActive("italic") ? "bg-gray-300 rounded-lg text-white font-bold" : ""
              }`}
            >
              <ItalicIcon size={15}></ItalicIcon>
            </button>
            <button
              onClick={() => editor.chain().focus().toggleUnderline().run()}
              className={`p-2 ${
                editor.isActive("underline") ? "bg-gray-300 rounded-lg text-white font-bold" : ""
              }`}
            >
              <LucideUnderline size={15}></LucideUnderline>
            </button>
            <button
              onClick={() => editor.chain().focus().toggleBulletList().run()}
              className={`p-2 ${
                editor.isActive("bulletList") ? "bg-gray-300 rounded-lg text-white font-bold" : ""
              }`}
            >
              <List size={15}></List>
            </button>
            <button
              onClick={() => editor.chain().focus().toggleOrderedList().run()}
              className={`p-2 ${
                editor.isActive("orderedList") ? "bg-gray-300 rounded-lg text-white font-bold" : ""
              }`}
            >
              <ListOrdered size={15}></ListOrdered>
            </button>
          </div>
          <EditorContent editor={editor} className="border rounded-lg p-2" />
        </div>
      </div>
    </>
  );
};

export default Tiptap;
