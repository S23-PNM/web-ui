function StatusTab(props) {
    return (
      <button
        className="text-left inline-block w-60 h-24 mr-4 border-purple-200 border shadow-xl rounded-lg bg-purple-50  hover:bg-purple-700 text-purple-700 hover:text-purple-100 font-bold"
        style={{ padding: '10px' }}
        type="button"
      >
        <div className="text-base">{props.title}</div>
        <div className="text-2xl">{props.value}</div>
      </button>
    );
  }
  
  export default StatusTab;
