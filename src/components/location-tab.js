function LocationTab(props) {
    return (
    <button
    className="inline-block text-sm font-bold mb-4 mr-4 mt-6 rounded-full border border-blue-700 text-blue-700 py-2 px-4 hover:bg-blue-700 hover:text-white transition-colors duration-200"
    style={{ padding: '10px' }}
    type="button"
    >
    {props.title}
    </button>
    );
    }
    
    export default LocationTab;