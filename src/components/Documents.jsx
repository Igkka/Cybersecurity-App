const docs = [
    "Privacy Policy",
    "Terms of Service",
    "API",
    "User Guide",
    "FAQ",
    "Support"
];

export default function DocumentsPage() {
    return (
        <section
            
            className="documents"
        >
            <h2>
                Documents
            </h2>

            <div className="docs">

                {docs.map((doc) => (
                    <div
                        className="doc"
                        key={doc}
                    >
                        {doc}
                    </div>
                ))}

            </div>
        </section>
    );
}
