import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { collection, getDocs } from 'firebase/firestore';
import ReactMarkdown from "react-markdown";

const Blog = () => {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "blog"));
        let fetchedMarkdown = "";
        querySnapshot.forEach((doc) => {
          fetchedMarkdown = doc.data().markdown;
        });
        setMarkdown(fetchedMarkdown);
      } catch (error) {
        console.error("Error fetching markdown:", error);
      }
    };

    fetchMarkdown();                     

    return () => {
      // Cleanup function
    };
  }, []);

  return (
    <div>
      <h2>Blogs Content:-</h2>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
};

export default Blog;
