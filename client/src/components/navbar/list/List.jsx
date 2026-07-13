import "./list.scss"
import Card from "../card/Card.jsx"


function List({ posts }) {
    return (
        <div className='list'>
            {posts.map(item => (
                <Card key={item.id} item={item} />
            ))}
        </div>
    )
}

export default List;