export default function DarkButton(props) {
    return (
        <>
            <button type="button" className="btn btn-dark btn--dark my-2 mx-2">
                {props.content}
            </button>
            <style jsx>{`
                .btn--dark {
                    background-color: var(--dark);
                    font-weight: 200;
                }
            `}</style>
        </>
    );
}
