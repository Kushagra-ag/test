export default function SectionHeading({subHeadAbove='', content='', light=false}) {
    return (
        <>
            {subHeadAbove && <div>{subHeadAbove}</div>}
            <h1 className="heading font--medium">
                {content}
            </h1>
            <style jsx>{`
                    .heading {
                        color: ${light ? '#fff' : 'inherit'}                    }
                `}</style>
        </>
    );
}
