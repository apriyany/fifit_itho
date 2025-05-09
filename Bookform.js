import {useState, useEffect} from "react";
import Link from "next/link";   
import Navbar from "./navbar"; // Import Navbar component
import Image from "next/image";

export default function BookForm({onSubmit, initialData}) {
    const [title, setTitle] = useState(initialData?.title || '');
    const [author, setAuthor] = useState(initialData?.author || '');
    const [category, setCategory] = useState(initialData?.category || '');

    useEffect(() => {
        setTitle(initialData?.title);
        setAuthor(initialData?.author);
        setCategory(initialData?.category);
    }, [initialData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({
            title,
            author,
            category,
        });
    };

    const styles = {
        page: {
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundImage: 'url("/img/1.png")', // Correctly set background image with url()
            backgroundSize: 'cover', // Ensure the image covers the entire page
            backgroundPosition: 'center', // Center the image
            backgroundRepeat: 'no-repeat', // Prevent the image from repeating
            padding: '20px',
        },
        form: {
            maxWidth: '400px',
            margin: '0 auto',
            padding: '20px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            background: 'linear-gradient(135deg, #ff9a9e, #fad0c4)', // Gradient background
            boxShadow: '0 4px 6px rgba(229, 139, 139, 0.1)',
        },
        formGroup: {
            marginBottom: '15px',
        },
        label: {
            display: 'block',
            fontWeight: 'bold',
            marginBottom: '5px',
            color: '#333',
        },
        input: {
            width: '100%',
            padding: '8px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            fontSize: '14px',
        },
        select: {
            width: '100%',
            padding: '8px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            fontSize: '14px',
            color: 'black', // Set text color to black
        },
        submitButton: {
            width: '100%',
            padding: '10px',
            backgroundColor: '#0070f3',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            fontSize: '16px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
        },
        submitButtonHover: {
            backgroundColor: '#005bb5',
        },
        submitButton1: {
            width: '100%',
            padding: '10px',
            backgroundColor: '#0070f3',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            fontSize: '16px',
            cursor: 'pointer',
            marginTop: '10px',
            transition: 'background-color 0.3s ease',
        },
        submitButton1Hover: {
            backgroundColor: '#005bb5',
        },
    };

    return (
        <>
            <Navbar /> {/* Add Navbar component */}
            <div style={styles.page}> {/* Add page background */}
                <form onSubmit={handleSubmit} style={styles.form}>
                    <div style={styles.formGroup}>
                        <label htmlFor="title" style={styles.label}>Judul</label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            style={styles.input}
                        />
                    </div>
                    <div style={styles.formGroup}>
                        <label htmlFor="author" style={styles.label}>Penulis</label>
                        <input
                            type="text"
                            id="author"
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                            style={styles.input}
                        />
                    </div>
                    <div style={styles.formGroup}>
                        <label htmlFor="category" style={styles.label}>Category</label>
                        <select
                            id="category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            style={styles.select}
                        >
                            <option value="">Select category</option>
                            <option value="fiction">Fiction</option>
                            <option value="non-fiction">Non-Fiction</option>
                            <option value="science">Science</option>
                            <option value="history">History</option>
                            <option value="romance">Romance</option>
                        </select>
                    </div>
                    <button
                        type="submit"
                        style={styles.submitButton}
                        onMouseOver={(e) => e.target.style.backgroundColor = styles.submitButtonHover.backgroundColor}
                        onMouseOut={(e) => e.target.style.backgroundColor = styles.submitButton.backgroundColor}
                    >
                        Submit
                    </button>
                    <button type="button" style={styles.submitButton1} onClick={() => window.history.back()}>
                Kembali
            </button>
                </form>
            </div>
        </>
    );
}
