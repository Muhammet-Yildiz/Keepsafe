import Header from "./components/Header";
import UploadForm from "./components/UploadForm";
import ImageGrid from "./components/ImageGrid";
import Modal from "./components/Modal";
import { useState } from "react";

function App() {

  const [selectedImage , setSelectedImage] = useState(null)


  return (
    <div className="App">
      <Header/>
      <UploadForm/>
      <ImageGrid  setSelectedImage = {setSelectedImage}/>
      {selectedImage && 
      <Modal selectedImage = {selectedImage}  setSelectedImage = {setSelectedImage} />
      }
    </div>
  );
}

export default App;
