export default function OutlineButton(props) {
    return (
        <>
            <button
                type="button"
                className="btn btn-outline-dark btn--outline-dark my-2 mx-2"
            >
                {props.content}
            </button>
            <style jsx>{`
                .btn--outline-dark {
                    color: var(--dark);
                    font-weight: 300;
                }
                .btn--outline-dark:hover {
                    color: white;
                    background-color: var(--dark);
                }
            `}</style>
        </>
    );
}
