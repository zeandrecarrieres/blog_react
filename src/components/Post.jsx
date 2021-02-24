const Post = ({ messages }) => {
    return (
        <>
            {messages.map((post) => {
                const { id, title, content, tags } = post
                console.log({ id, title, content, tags })

                return (
                    <div className="post-container" key={id}>
                        <h2>{title}</h2>
                        <div className="text">
                            <p>{content}</p>
        
                        </div>
                        <p>{tags}</p>
                    </div>
         )
            })}

            
        </>


    )

}

export default Post


