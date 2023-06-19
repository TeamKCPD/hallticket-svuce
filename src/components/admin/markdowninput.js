import React, { useState, useRef } from "react";
import ReactMarkdown from "react-markdown";
import "./css/markdown.css";
import { db } from "../../firebase";
import { collection, addDoc, deleteDoc, doc } from 'firebase/firestore';

function Markdown() {
  const [markdown, setMarkdown] = useState("# Markdown Preview");
  const previousDocRef = useRef(null);

  const handlePost = async () => {
    try {
      if (previousDocRef.current) {
        await deleteDoc(previousDocRef.current);
        console.log("Previous document deleted from Firestore");
      }

      const docRef = await addDoc(collection(db, "blog"), {
        markdown,
      });
      console.log("Document written with ID: ", docRef.id);
      previousDocRef.current = docRef;

      // Clear the input field
      setMarkdown("");
    } catch (error) {
      console.error("Error posting markdown data:", error);
    }
  };

  const handleDelete = async () => {
    try {
      if (previousDocRef.current) {
        await deleteDoc(previousDocRef.current);
        console.log("Previous document deleted from Firestore");
        previousDocRef.current = null;
      }
    } catch (error) {
      console.error("Error deleting previous document:", error);
    }
  };

  return (
    <main>
      <section className="markdown">
        <textarea
          className="input"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        ></textarea>
        <article className="result">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </article>
      </section>

      <div>
        <button className="btn btn-primary mt-3" onClick={handlePost}>
          Post
        </button>
        <button className="btn btn-danger mt-3" onClick={handleDelete}>
          Delete Previous
        </button>
      </div>
    </main>
  );
}

export default Markdown;
