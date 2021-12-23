import { useRef, useState } from 'react';

const ImageReader = (props) => {
  const [fileSize, setFileSize] = useState(0);
  const [fileType, setFileType] = useState('desconocida');
  const fileElement = useRef(); // referencia al input file
  const fileReader = new FileReader(); // Creamos un lector de ficheros con FileReader: funcionalidad nativa de JS

  // Cuando la usuaria selecciona una imagen se ejecuta esta función
  const handleFile = () => {
    const selectedFile = fileElement.current.files[0]; // fileElement.current.files es un array con todas las imagenes seleccionadas
    // Si la usuaria ha seleccionado al menos una imagen selectedFile es diferente de undefined
    if (selectedFile) {
      // Por curiosidad mira lo que contiene la constante selectedFile
      setFileSize(selectedFile.size);
      setFileType(selectedFile.type);
      // Le decimos al lector de ficheros que lea el fichero seleccionado por la usuaria
      fileReader.readAsDataURL(selectedFile);
      // Cuando esta acción termine fileReader lanzará el evento 'load'
    }
  };

  // Esta función se ejecuta cuando fileReader lanza el evento 'load'
  const getImage = () => {
    // Cuando la imagen ya está lista en fileReader.result tenemos su contenido
    props.handleImage(fileReader.result);
    // Hacemos lifting
  };

  // Escuchamos el evento load de fileReader y cuando se lance lo manejamos con la función getImage
  fileReader.addEventListener('load', getImage);

  return (
    <>
      <label>
        Selecciona una imagen por favor:
        {/* Usamos fileElement como referencia de este input */}
        <input
          ref={fileElement}
          type="file"
          name="image-reader"
          onChange={handleFile}
        />
      </label>

      <p>El tamaño de la imagen es: {fileSize} bytes.</p>
      <p>El tipo de la imagen es: {fileType}.</p>
    </>
  );
};

export default ImageReader;
