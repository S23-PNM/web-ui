function TimeTab(props) {
    return (
        <div className="inline-block text-sm font-bold mb-4 rounded-full border border-black text-black py-2 px-4 hover:bg-black hover:text-white transition-colors duration-200" style={{padding: '10px'}}>
            {props.title}
            
        </div>
    )
}

export default TimeTab;