function StatusTab(props) {
    return (
        <div className="inline-block bg-purple-500 bg-opacity-75 rounded-md text-white font-bold" style={{padding: '10px'}}>
            {props.title}
        </div>
    )
}

export default StatusTab;