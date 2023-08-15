
type Props = {
    text: string
}

const Tag = ({text} : Props) => {
    return (
        <div className='tag'>
            <p className='tag_text'>{text}</p>
            
        </div>
    );
};

export default Tag;