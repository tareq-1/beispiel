const MyComments = (props) => {
    return (
        <>
            {props.items.map(comment => {
                return (
                    <div>
                        <p>{comment.firstName}</p>
                        <p>{comment.lastName}</p>
                        <p>{comment.email}</p>
                        <p>{comment.password1}</p>
                    </div>
                )
            })}

        </>



    )
}

export default MyComments;
