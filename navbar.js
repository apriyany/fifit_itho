export default function Navbar() {
    const styles = {
        navbar: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '10px 20px',
            backgroundColor: '#0070f3',
            color: 'white',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        },
        logo: {
            fontSize: '20px',
            fontWeight: 'bold',
        },
        navLinks: {
            display: 'flex',
            gap: '15px',
        },
        link: {
            color: 'white',
            textDecoration: 'none',
            fontSize: '16px',
            transition: 'color 0.3s ease',
        },
        linkHover: {
            color: '#ffd700',
        },
    };

    return (
        <div style={styles.navbar}>
            <div style={styles.logo}>aprny</div>
            <div style={styles.navLinks}>
                <a
                    href="#"
                    style={styles.link}
                    onMouseOver={(e) => (e.target.style.color = styles.linkHover.color)}
                    onMouseOut={(e) => (e.target.style.color = styles.link.color)}
                >
                    Home
                </a>
                <a
                    href="#"
                    style={styles.link}
                    onMouseOver={(e) => (e.target.style.color = styles.linkHover.color)}
                    onMouseOut={(e) => (e.target.style.color = styles.link.color)}
                >
                    About
                </a>
                <a
                    href="/books/add"
                    style={styles.link}
                    onMouseOver={(e) => (e.target.style.color = styles.linkHover.color)}
                    onMouseOut={(e) => (e.target.style.color = styles.link.color)}
                >
                    Add Book
                </a>
            </div>
        </div>
    );
}