const { saveAs } = require('file-saver');

export const SaveFile = (props: any) => {

  console.log(props)

  function handleSaveFile() {
    const fileName = "dados.json";
    let file = new Blob([JSON.stringify(props)], { type: "application/json" });
    let fileHref = URL.createObjectURL(file);
    saveAs(file, fileName);
    URL.revokeObjectURL(fileHref);
  }

  return (
    <div className="w-[100%] flex justify-center items-center p-5">
      <button className="w-[200px] bg-white h-[40px] rounded text-xl hover:bg-[#3581e4] hover:text-[white]" onClick={handleSaveFile}>Baixar dados</button>
    </div>
  );
};