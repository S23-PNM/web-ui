function TimeTab(props) {
    return (
      <button
        className="inline-block text-sm font-serif font-bold mb-4 mr-4 rounded-full border border-black text-black py-2 px-4 hover:bg-black hover:text-white transition-colors duration-200"
        style={{ padding: '10px' }}
        type="button"
      >
        {props.title}
      </button>
    );
  }
  
  export default TimeTab;