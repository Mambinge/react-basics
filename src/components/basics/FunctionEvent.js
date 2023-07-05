//Event handling in functional components

function FunctionEvent() {

    // function handleEvent() {
    //     console.log('Button clicked')
    // }

    //Arrow function
    const handleEvent = () => {
        console.log('Button clicked')
    }

    return(
        <div>
            Function Event
            <button onClick={handleEvent}>Click here</button>
        </div>
    )
}

export default FunctionEvent;